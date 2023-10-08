const path = require('path'); 
require('dotenv').config({ path: path.join(__dirname, '.env') });

const fs = require('fs');
const crypto = require('crypto');
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./storage.sqlite3');
const TelegramBot = require('node-telegram-bot-api');
const express = require('express');
const multer  = require('multer');
const storage = multer.memoryStorage()
const upload = multer({ storage: storage });
const app = express();
const expressWs = require('express-ws')(app);
const boards = {};

db.exec(`
  CREATE TABLE IF NOT EXISTS graffitis (id TEXT PRIMARY KEY, title TEXT, created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, user_id INT NOT NULL);
  CREATE INDEX IF NOT EXISTS graffitis_created_at ON graffitis (created_at);
  CREATE INDEX IF NOT EXISTS graffitis_user_id ON graffitis (user_id);

  CREATE TABLE IF NOT EXISTS boards (id TEXT PRIMARY KEY, title TEXT, created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, owner_id INT NOT NULL, strokes TEXT NOT NULL DEFAULT '[]', users TEXT NOT NULL DEFAULT '{}');
`);

function randomId() {
  const bytes = crypto.randomBytes(12);
  return btoa(String.fromCharCode.apply(null, bytes)).replace(/\//g, '_').replace(/\+/g, '-');
}

function debounce(func, timeout = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => { func.apply(this, args); }, timeout);
  };
}

function loadBoard(id) {
  return new Promise((resolve, reject) => {
    db.get('SELECT * FROM boards WHERE id = ?', id, (err, row) => {
      if (err) {
        reject(err);
        return;
      }
      if (!row) {
        resolve(null);
        return;
      }
      const board = {
        id: row.id,
        title: row.title,
        ownerId: row.owner_id,
        strokes: JSON.parse(row.strokes),
        users: JSON.parse(row.users),
        clients: [],

        saveNow() {
          db.run('UPDATE boards SET title = ?, strokes = ?, users = ? WHERE id = ?', board.title, JSON.stringify(board.strokes), JSON.stringify(board.users), board.id);
        },
      }
      board.save = debounce(board.saveNow, 1000);
      resolve(board);
    });
  });
}

function generateInitData(data, joiner = '&') {
  const keys = Object.keys(data);
  keys.sort();
  const list = [];
  const raw = [];
  for (let key of keys) {
    const value = key == 'user' ? JSON.stringify(data[key]) : data[key];
    list.push(`${key}=${value}`);
    raw.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
  }
  const secretKey = crypto.createHmac('sha256', 'WebAppData').update(process.env.TELEGRAM_TOKEN).digest();
  const hash = crypto.createHmac('sha256', secretKey).update(list.join('\n')).digest('hex');
  raw.push(`hash=${hash}`);
  return raw.join(joiner);
}

function validateInitData(initData) {
  const data = {};
  const raw = {};
  let hash;
  for (let line of initData.split('&')) {
    const pair = line.split('=');
    if (pair.length == 2) {
      const key = decodeURIComponent(pair[0]);
      const value = decodeURIComponent(pair[1]);
      if (key == 'hash') {
        hash = value;
      } else {
        raw[key] = value;
        data[key] = (key == 'user') ? JSON.parse(value) : value;
      }
    }
  }
  const keys = Object.keys(data);
  keys.sort();

  const list = [];
  for (let key of keys) {
    list.push(`${key}=${raw[key]}`);
  }
  const secretKey = crypto.createHmac('sha256', 'WebAppData').update(process.env.TELEGRAM_TOKEN).digest();
  const correctHash = crypto.createHmac('sha256', secretKey).update(list.join('\n')).digest('hex');
  
  if (correctHash != hash) {
    return null;
  }
  return data;
}

function miniappUrl(args) {
  return process.env.MINIAPP_HOST + '/#' + Object.keys(args).map(key => `${key}=${encodeURIComponent(args[key])}`).join('&');
}

const bot = new TelegramBot(process.env.TELEGRAM_TOKEN, { polling: true });

bot.onText(/^\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, `Hello! You can draw graffitis using this bot and send them to any chat. You can also create collaborative boards which allow you to draw simultaneously with your friends.\n\nYou can use the bot in a few different ways:
1. By pressing "Select Group or Channel" below.
2. By manually typing <code>@${process.env.TELEGRAM_USERNAME}</code>, space and the title for the new graffiti/board in any chat. If you omit the title, it will give you the list of previously drawn graffitis.
3. By adding this bot to a group and sending command <code>/collab</code> to that group (this will create a new board). You can optionally follow that command by board title.`, {
    parse_mode: 'HTML',
    reply_markup: {
      inline_keyboard: [/*[{
        text: 'Create New Graffiti',
        web_app: {
          url: miniappUrl({
            source: msg.chat.type,
            initData: generateInitData({ user: { id: msg.from.id, first_name: msg.from.first_name } }, ','),
          }),
        }
      }], */[{
        text: 'Select Group or Channel...',
        switch_inline_query: '-',
      }]],
    }
  });
});

bot.onText(/^\/collab(.*)$/, (msg, match) => {
  const chatId = msg.chat.id;
  const title = match[1].trim();
  const id = randomId();
  db.run('INSERT INTO boards (id, title, owner_id, strokes) VALUES (?, ?, ?, ?)', id, title, msg.from.id, JSON.stringify([]));

  bot.sendMessage(chatId, title ?
    `Board "<a href="https://t.me/${process.env.TELEGRAM_USERNAME}/draw?startapp=${id}">${title}</a>"` :
    `<a href="https://t.me/${process.env.TELEGRAM_USERNAME}/draw?startapp=${id}">Collaborative Board</a>`, {
    parse_mode: 'HTML',
  });
});

bot.on('inline_query', query => {
  if (query.query.trim().length > 0) {
    const id = randomId();
    const title = query.query == '-' ? '' : query.query;
    db.run('INSERT INTO boards (id, title, owner_id, strokes) VALUES (?, ?, ?, ?)', id, title, query.from.id, JSON.stringify([]));
    bot.answerInlineQuery(query.id, [{
      type: 'article',
      id: randomId(),
      title: `New Board${title ? ' "' + title + '"' : ''}`,
      description: 'Collaborative mode allows everyone to draw simultaneously on the same board.',
      thumbnail_url: `${process.env.MINIAPP_HOST}/brushes.png`,
      thumbnail_width: 256,
      thumbnail_height: 256,
      input_message_content: {
        message_text: title ?
          `Board "<a href="https://t.me/${process.env.TELEGRAM_USERNAME}/draw?startapp=${id}">${title}</a>"` :
          `<a href="https://t.me/${process.env.TELEGRAM_USERNAME}/draw?startapp=${id}">Collaborative Board</a>`,
        parse_mode: 'HTML',
      },
    }], {
      is_personal: true,
      cache_time: 5,
      button: JSON.stringify({
        text: `New Graffiti${title ? ' "' + title + '"' : ''}...`,
        web_app: {
          url: miniappUrl({
            source: 'inline',
            title,
            initData: generateInitData({ user: { id: query.from.id, first_name: query.from.first_name } }, ','),
          }),
        },
      })
    });
    return;
  }

  // db.all('SELECT * FROM graffitis WHERE id = ? AND user_id = ?', query.query, query.from.id, handle);
  const offs = query.offset ? parseInt(query.offset) : 0;
  db.all('SELECT * FROM graffitis WHERE user_id = ? ORDER BY created_at DESC LIMIT ?, 21', query.from.id, offs, (err, rows) => {
    bot.answerInlineQuery(query.id, rows.slice(0, 20).map(row => ({
      type: 'photo',
      id: row.id,
      title: row.title || 'Graffiti',
      caption: row.title || '',
      photo_url: `${process.env.MINIAPP_HOST}/graffitis/${query.from.id}/${row.id}.jpg`,
      photo_width: 360,
      photo_height: 270,
      thumbnail_url: `${process.env.MINIAPP_HOST}/graffitis/${query.from.id}/${row.id}.jpg?thumb`,
    })), {
      is_personal: true,
      cache_time: 5,
      next_offset: rows.length == 21 ? offs + 20 : '',
      button: JSON.stringify({
        text: 'New Graffiti...',
        web_app: {
          url: miniappUrl({
            source: 'inline',
            initData: generateInitData({ user: { id: query.from.id, first_name: query.from.first_name } }, ','),
          }),
        },
      })
    });
  });
});

app.use(express.static('static'));

app.post('/graffiti', upload.single('file'), (req, res) => {
  const id = Math.floor(Math.random() * 1e14).toString(36) + Math.floor(Math.random() * 1e14).toString(36);
  const title = req.body.title || null;
  const initData = validateInitData(req.body.initData);
  if (!initData) {
    res.json({ error: 'Invalid initData' });
    return;
  }

  const userId = parseInt(initData.user.id);
  db.run('INSERT INTO graffitis (id, title, user_id) VALUES (?, ?, ?)', id, title, userId);
  fs.mkdir(`static/graffitis/${userId}`, () => {
    fs.writeFile(`static/graffitis/${userId}/${id}.jpg`, req.file.buffer, () => {
      res.json({ id });
    });
  });
});

app.ws('/ws', (ws, req) => {
  let isAuthorised = false;
  let board, user;
  ws.on('message', async msg => {
    const [type, data] = JSON.parse(msg);
    if (!isAuthorised) {
      if (type == 'auth') {
        const initData = validateInitData(data);
        if (initData && initData.start_param) {
          const boardId = initData.start_param;
          board = boards[boardId];
          if (!board) {
            board = await loadBoard(boardId);
            if (!board) {
              ws.send(JSON.stringify({ error: 'Board not found' }));
              return;
            }
            boards[boardId] = board;
          }
          board.clients.push(ws);
          user = initData.user;

          for (let client of board.clients) {
            client.send(JSON.stringify(['join', client == ws ? {
              title: board.title,
              users: board.users,
              strokes: board.strokes,
            } : null, user.id, user.first_name]));
          }
          board.users[user.id] = user.first_name;
          isAuthorised = true;
        } else {
          ws.send(JSON.stringify({ error: 'Invalid auth' }));
        }
      } else {
        ws.send(JSON.stringify({ error: 'Auth message expected' }));
      }
    } else {
      for (let client of board.clients) {
        if (client != ws) {
          client.send(JSON.stringify([type, data, user.id]));
        }
      }

      if (type == 'title') {
        board.title = data || null;
        board.save();
      } else
      if (type == 'ns') { // new stroke
        data.userId = user.id;
        board.strokes.push(data);
        board.save();
      } else
      if (type == 'us') { // update stroke (replace)
        data.userId = user.id;
        for (let i = 0; i < board.strokes.length; i++) {
          if (board.strokes[i].id == data.id) {
            board.strokes[i] = data;
          }
        }
        board.save();
      } else
      if (type == 'ds') { // delete stroke (undo)
        const id = data;
        for (let i = 0; i < board.strokes.length; i++) {
          if (board.strokes[i].id == id) {
            board.strokes.splice(i, 1);
          }
        }
        board.save();
      } else
      if (type == 'pt') { // push point
        const [id, x, y] = data;
        for (let i = 0; i < board.strokes.length; i++) {
          if (board.strokes[i].id == id) {
            board.strokes[i].points.push([x, y]);
          }
        }
        board.save();
      } else
      if (type == 'clear') {
        board.strokes = [];
        board.save();
      }
    }
  });
  ws.on('close', (code, reason) => {
    isAuthorised = false;
    if (board) {
      const idx = board.clients.indexOf(ws);
      if (idx > -1) {
        board.clients.splice(idx, 1);
      }

      for (let client of board.clients) {
        if (client != ws) {
          client.send(JSON.stringify(['left', null, user.id]));
        }
      }
      delete board.users[user.id];

      if (!board.clients.length) {
        board.saveNow();
        delete boards[board.id]; // We saved it to DB, no need to keep it in memory
      }
    }
  });
});

app.listen(process.env.MINIAPP_PORT, () => {
  console.log(`@${process.env.TELEGRAM_USERNAME} listening on port ${process.env.MINIAPP_PORT}`);
});