const Icons = {
  undo: 'M12.5459 24.5147C13.3428 24.5147 13.917 23.9287 13.917 23.1436V18.667H14.2569C18.8037 18.667 21.6631 19.8155 23.7139 23.6475C24.124 24.3975 24.6631 24.5147 25.1553 24.5147C25.7764 24.5147 26.3623 23.9522 26.3623 22.9444C26.3623 14.2842 22.6944 8.88184 14.2569 8.88184H13.917V4.45215C13.917 3.66699 13.3428 3.02246 12.5225 3.02246C11.9483 3.02246 11.5615 3.26855 10.9404 3.85449L1.69434 12.5029C1.2373 12.9365 1.09668 13.3702 1.09668 13.7686C1.09668 14.1553 1.24902 14.6006 1.69434 15.0225L10.9404 23.753C11.5029 24.2803 11.9717 24.5147 12.5459 24.5147Z',
  redo: 'M14.8205 24.516C15.3947 24.516 15.8636 24.2816 16.4261 23.7543L25.6721 15.0238C26.1174 14.6019 26.2698 14.1566 26.2698 13.7699C26.2698 13.3715 26.1292 12.9379 25.6721 12.5043L16.4261 3.85583C15.8049 3.2699 15.4183 3.0238 14.844 3.0238C14.0237 3.0238 13.4378 3.66833 13.4378 4.45349V8.88318H13.0979C4.67212 8.88318 1.00415 14.2855 1.00415 22.9457C1.00415 23.9535 1.57837 24.516 2.21118 24.516C2.70337 24.516 3.24243 24.3988 3.65259 23.6488C5.69165 19.8168 8.56274 18.6683 13.0979 18.6683H13.4378V23.1449C13.4378 23.93 14.0237 24.516 14.8205 24.516Z',
  trash: 'M10.8157 22.6797C10.3586 22.6797 10.0657 22.4101 10.0422 21.9648L9.69067 9.0625C9.67895 8.62891 9.97192 8.34765 10.4407 8.34765C10.8743 8.34765 11.179 8.61719 11.1907 9.05078L11.5657 21.9648C11.5774 22.3984 11.2727 22.6797 10.8157 22.6797ZM14.3899 22.6797C13.9328 22.6797 13.6164 22.3984 13.6164 21.9648V9.0625C13.6164 8.62891 13.9328 8.34765 14.3899 8.34765C14.8469 8.34765 15.175 8.62891 15.175 9.0625V21.9648C15.175 22.3984 14.8469 22.6797 14.3899 22.6797ZM17.9758 22.6797C17.5188 22.6797 17.2141 22.3984 17.2258 21.9648L17.5891 9.0625C17.6008 8.61719 17.9055 8.34765 18.3391 8.34765C18.8078 8.34765 19.1008 8.62891 19.0891 9.0625L18.7375 21.9648C18.7141 22.4101 18.4211 22.6797 17.9758 22.6797ZM9.24536 5.5H11.1086V2.99219C11.1086 2.32422 11.5774 1.89062 12.2805 1.89062H16.4758C17.1789 1.89062 17.6477 2.32422 17.6477 2.99219V5.5H19.5109V2.875C19.5109 1.17578 18.4094 0.144531 16.6047 0.144531H12.1516C10.3469 0.144531 9.24536 1.17578 9.24536 2.875V5.5ZM3.92505 6.4375H24.8664C25.3469 6.4375 25.7336 6.02734 25.7336 5.54687C25.7336 5.06641 25.3469 4.66797 24.8664 4.66797H3.92505C3.4563 4.66797 3.04614 5.06641 3.04614 5.54687C3.04614 6.03906 3.4563 6.4375 3.92505 6.4375ZM9.0227 26.2422H19.7688C21.4445 26.2422 22.5695 25.1523 22.6516 23.4765L23.4719 6.19141H5.30786L6.13989 23.4883C6.22192 25.164 7.32348 26.2422 9.0227 26.2422Z',
  pen: 'M7.9736 25.2417C8.52438 25.2417 8.79391 24.9488 8.88766 24.4683L11.208 12.6558L10.0361 13.605H18.7783L17.6064 12.6558L19.9267 24.4683C20.0205 24.9488 20.29 25.2417 20.8408 25.2417C21.6259 25.2417 21.8955 24.7027 21.7665 24.0698L19.5751 12.9136C19.4345 12.1753 18.8134 11.6362 18.0986 11.6362H10.7275C10.0127 11.6362 9.39157 12.1753 9.25094 12.9136L7.05954 24.0698C6.93063 24.7027 7.21188 25.2417 7.9736 25.2417ZM10.4697 12.5855H18.3564L15.4384 3.87842C15.2627 3.38623 14.9345 3.10498 14.4306 3.10498C13.9033 3.10498 13.54 3.38623 13.3759 3.87842L10.4697 12.5855Z',
  erase: 'M5.64222 11.7867L15.4508 21.5954L24.4039 12.6422C25.4469 11.5992 25.4234 10.1227 24.357 9.05625L18.1813 2.86875C17.1148 1.80234 15.6383 1.79062 14.5953 2.83359L5.64222 11.7867ZM3.45081 19.5446L7.68128 23.7868C9.45081 25.5329 11.4313 25.6032 13.0953 23.9391L14.3258 22.7204L4.5055 12.9118L3.28675 14.1188C1.62269 15.7946 1.68129 17.7868 3.45081 19.5446Z',
  pbrush: 'M3.39588 26.5357C5.224 28.3755 7.59119 28.399 9.39588 26.5943C10.8373 25.1529 12.2318 21.8951 13.2982 20.2662L16.1341 23.1138C17.0013 23.9927 18.0561 23.9927 18.8764 23.149L19.8841 22.1412C20.7396 21.274 20.728 20.2896 19.8491 19.4107L10.5326 10.0826C9.64197 9.20369 8.64588 9.19197 7.79041 10.0474L6.7826 11.0552C5.93885 11.899 5.93885 12.9185 6.81775 13.7974L9.65369 16.6334C8.0365 17.6998 4.79041 19.0943 3.33729 20.5357C1.54432 22.3404 1.55603 24.7193 3.39588 26.5357ZM6.52479 25.0123C5.71619 25.0123 5.07166 24.356 5.07166 23.5591C5.07166 22.7623 5.71619 22.1177 6.52479 22.1177C7.32166 22.1177 7.96619 22.7623 7.96619 23.5591C7.96619 24.356 7.32166 25.0123 6.52479 25.0123ZM21.2436 18.8716L25.7905 14.3248C27.0912 13.024 27.056 11.4771 25.7318 10.1294L25.1341 9.52009C23.9154 11.1021 20.4349 12.9537 19.767 12.2857C19.6616 12.1802 19.6498 11.9693 19.8022 11.8052C21.2201 10.3873 22.1458 9.00447 22.3568 6.75447L16.3333 0.719307C15.22 -0.393974 13.2865 -0.0306933 12.7591 2.07869C12.0208 5.07869 11.3529 6.82478 10.6263 8.26619L21.2436 18.8716Z',
  brush: 'M1.26659 23.1105C3.22362 25.923 7.54784 26.884 10.3135 24.9621C12.7041 23.298 13.2314 20.7199 11.6494 18.4699C10.2314 16.4308 7.66503 15.8566 5.97753 17.0637C4.03222 18.4465 4.81737 20.3449 3.62206 21.1887C2.62597 21.9035 1.93456 21.4582 1.36034 21.8449C0.985341 22.0793 0.844717 22.5246 1.26659 23.1105ZM12.0947 16.7355C12.9502 17.591 13.5947 18.7277 13.7471 19.6535C14.6963 19.5012 15.458 19.0558 16.2549 18.259C16.3838 18.1418 16.501 18.0129 16.6182 17.8722C16.1025 15.048 13.7471 12.7277 10.9697 12.2121C10.8291 12.3293 10.7002 12.4582 10.5713 12.5871C9.7744 13.384 9.34081 14.1691 9.18847 15.0949C10.1025 15.2472 11.251 15.8801 12.0947 16.7355ZM23.1455 2.80196C22.5478 3.23555 16.0322 7.70039 12.0361 11.2277C14.6846 12.0598 16.7588 14.1222 17.6025 16.8058C21.1533 12.8097 25.6064 6.30586 26.04 5.69649C27.4228 3.76289 25.0088 1.41914 23.1455 2.80196Z', 
};

const UserColors = ['#e17076', '#7bc862', '#65aadd', '#a695e7', '#ee7aae', '#6ec9cb', '#faa774'];

const lch2lab = (l, c, h) => {
  if (isNaN(h)) h = 0;
  h = h * Math.PI / 180;
  return [l, Math.cos(h) * c, Math.sin(h) * c]
}
const lab2lch = (l, a, b) => {
  const c = Math.sqrt(a * a + b * b);
  let h = (Math.atan2(b, a) * 180 / Math.PI + 360) % 360;
  if (Math.round(c*10000) === 0) h = Number.NaN;
  return [l, c, h];
}
const lrgb2rgb = (c) => {
  const abs = Math.abs(c);
  if (abs > 0.0031308) {
    return (Math.sign(c) || 1) * (1.055 * Math.pow(abs, 1 / 2.4) - 0.055);
  }
  return c * 12.92;
}
function rgb2lrgb(c) {
  const abs = Math.abs(c);
  if (abs < 0.04045) {
    return c / 12.92;
  }
  return (Math.sign(c) || 1) * Math.pow((abs + 0.055) / 1.055, 2.4);
}
const oklab2rgb = (L, a, b) => {
  const l = Math.pow(L + 0.3963377774 * a + 0.2158037573 * b, 3);
  const m = Math.pow(L - 0.1055613458 * a - 0.0638541728 * b, 3);
  const s = Math.pow(L - 0.0894841775 * a - 1.291485548 * b, 3);
  return [
    255 * lrgb2rgb(+4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s),
    255 * lrgb2rgb(-1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s),
    255 * lrgb2rgb(-0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s),
  ];
}
const rgb2oklab = (r, g, b) => {
  // OKLab color space implementation taken from
  // https://bottosson.github.io/posts/oklab/
  const [lr, lg, lb] = [rgb2lrgb(r / 255), rgb2lrgb(g / 255), rgb2lrgb(b / 255)];
  const l = Math.cbrt(0.4122214708 * lr + 0.5363325363 * lg + 0.0514459929 * lb);
  const m = Math.cbrt(0.2119034982 * lr + 0.6806995451 * lg + 0.1073969566 * lb);
  const s = Math.cbrt(0.0883024619 * lr + 0.2817188376 * lg + 0.6299787005 * lb);
  return [
    0.2104542553 * l + 0.793617785 * m - 0.0040720468 * s,
    1.9779984951 * l - 2.428592205 * m + 0.4505937099 * s,
    0.0259040371 * l + 0.7827717662 * m - 0.808675766 * s
  ];
}
const oklch2rgb = (l, c, h) => oklab2rgb(...lch2lab(l, c, h));
const rgb2oklch = (r, g, b) => lab2lch(...rgb2oklab(r, g, b));
const hex2oklch = (hex) => rgb2oklch(
  parseInt(hex.substring(1, 3), 16),
  parseInt(hex.substring(3, 5), 16),
  parseInt(hex.substring(5, 7), 16)
)

const title = document.getElementById('title');
const userlist = document.getElementById('userlist');
const board = document.getElementById('board');
const canvas = document.getElementById('canvas');
const scratch = document.getElementById('scratch');
const toolbar = document.getElementById('toolbar');
const palette = document.getElementById('palette');
const paletteExt = document.getElementById('extpalette');
const resizer = document.getElementById('resizer');
const resizerWrapper = document.getElementById('resizer-wrapper');
const picker = document.getElementById('picker');

const ctx = canvas.getContext('2d');
const ctxFg = scratch.getContext('2d');

const ENABLE_ANDROID_SCROLL_HACK = Telegram.WebApp.platform == 'android';
const DP = window.devicePixelRatio;
const W = Math.min(window.innerWidth, 360);
const H = 270;
const SMOOTH_THRESHOLD = 10 * 10 * DP * DP;
const LONGPRESS_DIST = 3 * DP;
const LONGPRESS_TIME = 1000;
//const MODE = Telegram.WebView.initParams.mode;
const initData = Telegram.WebApp.initData || (Telegram.WebView.initParams.initData || '').replace(/,/g, '&');
const MODE = Telegram.WebApp.initDataUnsafe.start_param ? 'collab' : null;

canvas.width = W * DP;
canvas.height = H * DP;
scratch.width = W * DP;
scratch.height = H * DP;
board.style.width = `${W}px`;
board.style.height = `${H}px`;

const colors = [];
const tools = {};

let strokes = [];
let remoteStrokes = [];
let historyPos = 0;
let activeColor = null;
let lightnessRange = [];
let activeTool = null;
const toolSizes = {
  brush: 20,
  pbrush: 32,
  pen: 3,
  erase: 16,
};
const toolOpacities = {
  brush: 0.66,
  pbrush: 0.33,
  pen: 1,
};
let lastCheckpoint = null;
let longPressCancelled = false;
let longPressTimeout = null;
let longPressDistance = 0;
let drawCancelled = false;
let touchOutside = false;
let extpaletteColors = null;
let ws;
let wsUsers = {};
const pendingStrokes = {};
let isOptionsVisible = false;
let optionsBtn = null;

function addTool(id, listener) {
  const el = document.createElement('div');
  el.className = 'button';
  el.addEventListener('click', () => {
    listener(id, el);
    Telegram.WebApp.HapticFeedback.selectionChanged();
  });
  el.innerHTML = `<svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="${Icons[id]}" fill="currentColor"/></svg>`;
  toolbar.appendChild(el);
  tools[id] = { el };
}
function addColorButton(parentEl, color) {
  const el = document.createElement('div');
  el.className = 'button is-color';
  el.style.backgroundColor = color;
  el.addEventListener('click', () =>{
    onSelectColor(color);
    Telegram.WebApp.HapticFeedback.selectionChanged();
  });
  parentEl.appendChild(el);
  colors.push({ el, color });
}

function updateActiveColor(color) {
  activeColor = color;
  document.getElementById('tool-opacity').style.setProperty('--color', color);

  const [l, c, h] = hex2oklch(color);
  let minL = 5;
  let maxL = 0;
  for (let i = 0; i < 1; i += 0.002) {
    const rgb = oklch2rgb(i, c, h);
    if (rgb[0] > 255 || rgb[1] > 255 || rgb[2] > 255) {
      break;
    }
    maxL = i;
    if (rgb[0] > 0 && rgb[1] > 0 && rgb[2] > 0) {
      minL = Math.min(minL, i);
    }
  }
  lightnessRange = [minL, maxL];
}

function sendWsMessage(type, data) {
  if (ws) {
    ws.send(JSON.stringify([type, data]));
  }
}

function displayUserTooltip(userId, pos, extraText = '') {
  if (!wsUsers[userId]) {
    return;
  }
  let tooltipEl = wsUsers[userId].tooltipEl;
  if (!tooltipEl) {
    tooltipEl = document.createElement('div');
    tooltipEl.className = 'tooltip';
    tooltipEl.style.backgroundColor = UserColors[userId % 8];
    board.appendChild(tooltipEl);
    wsUsers[userId].tooltipEl = tooltipEl;
  }
  tooltipEl.innerText = wsUsers[userId].name + extraText;
  tooltipEl.style.left = `${pos[0]}px`;
  tooltipEl.style.top = `${pos[1]}px`;
  tooltipEl.classList.remove('is-hidden');
  clearTimeout(wsUsers[userId].tooltipHideTimeout);

  wsUsers[userId].tooltipHideTimeout = setTimeout(() => {
    tooltipEl.classList.add('is-hidden');
  }, 2000);
}

function updateUserlist() {
  const userIds = Object.keys(wsUsers).filter(id => !wsUsers[id].left);
  userlist.innerHTML = userIds.map(id => `<div class="userpic" style="background-color: ${UserColors[id % 8]}">${wsUsers[id].name}</div>`).join('');
}

function clearCanvas() {
  strokes = [];
  remoteStrokes = [];
  ctx.clearRect(0, 0, W * DP, H * DP);
  ctxFg.clearRect(0, 0, W * DP, H * DP);
  historyPos = 0;
  updateUndoRedo();
}

function onWsMessage(msg) {
  const [type, data, userId, userName] = JSON.parse(msg.data);
  if (type == 'title') {
    title.value = data || '';
  } else
  if (type == 'join') {
    if (data) { // we joined
      title.value = data.title || '';
      for (let id in data.users) {
        wsUsers[id] = {
          left: false,
          name: data.users[id],
          tooltipEl: null,
        }
      }
      remoteStrokes = data.strokes;
      redraw();
    } else {
      wsUsers[userId] = {
        left: false,
        name: userName,
        tooltipEl: null,
      };
      displayUserTooltip(userId, [5, 5], ' joined');
    }
    updateUserlist();
  } else
  if (type == 'left') {
    if (userId in wsUsers) {
      wsUsers[userId].left = true;
    }
    displayUserTooltip(userId, [5, 5], ' left');
    updateUserlist();
  } else
  if (type == 'ns') { // new stroke
    data.userId = userId;
    remoteStrokes.push(data);
    redraw();
    displayUserTooltip(userId, data.points[data.points.length - 1]);
  } else
  if (type == 'us') { // update stroke (replace)
    data.userId = userId;
    for (let i = 0; i < remoteStrokes.length; i++) {
      if (remoteStrokes[i].id == data.id) {
        remoteStrokes[i] = data;
      }
    }
    if (data.tool == 'fill') {
      playFillAnimation(data);
      displayUserTooltip(userId, [5, 5], ' filled canvas');
    } else {
      displayUserTooltip(userId, data.points[data.points.length - 1]);
    }
    redraw();
  } else
  if (type == 'ds') { // delete stroke (undo)
    const id = data;
    for (let i = 0; i < remoteStrokes.length; i++) {
      const stroke = remoteStrokes[i];
      if (stroke.id == id) {
        if (stroke.tool == 'fill') {
          playFillAnimation(stroke, true);
        }
        displayUserTooltip(userId, stroke.points[stroke.points.length - 1]);
        remoteStrokes.splice(i, 1);
      }
    }
    redraw();
  } else
  if (type == 'pt') { // push point
    const [id, x, y] = data;
    for (let i = 0; i < remoteStrokes.length; i++) {
      if (remoteStrokes[i].id == id) {
        remoteStrokes[i].points.push([x, y]);
      }
    }
    displayUserTooltip(userId, [x, y]);
    redraw();
  } else
  if (type == 'clear') {
    clearCanvas();
    displayUserTooltip(userId, [5, 5], ' cleared canvas');
  }
}

function playFillAnimation(stroke, rev) {
  pendingStrokes[stroke.id] = true;

  const el = document.createElement('div');
  el.className = 'fill-anim';
  el.style.left = `${stroke.points[0][0]}px`;
  el.style.top = `${stroke.points[0][1]}px`;
  el.style.backgroundColor = stroke.color;
  el.classList.toggle('is-active', !!rev);
  board.appendChild(el);

  setTimeout(() => {
    el.classList.toggle('is-active', !rev);
    if (rev) {
      el.style.transform = 'scale(0)'; // Override so it completely disappears
    }
  }, 0);
  setTimeout(() => {
    el.remove();
    delete pendingStrokes[stroke.id];
    if (!rev) {
      drawStroke(ctx, stroke);
    }
  }, 400);
}

function onDrawStart(x, y) {
  drawCancelled = false;
  longPressCancelled = activeTool == 'erase';
  longPressDistance = 0;
  if (!longPressCancelled) {
    longPressTimeout = setTimeout(() => {
      if (!longPressCancelled) {
        drawCancelled = true;
        ctxFg.clearRect(0, 0, W * DP, H * DP);

        const oldStroke = strokes.pop();
        const stroke = {
          id: oldStroke.id,
          tool: 'fill',
          color: activeColor,
          points: [[x, y]],
        };
        strokes.push(stroke);
        playFillAnimation(stroke);
        sendWsMessage('us', stroke);
    
        // TODO: animate
    
        Telegram.WebApp.HapticFeedback.impactOccurred('medium');
      }
    }, LONGPRESS_TIME);
  }

  if (historyPos > 0) {
    strokes = strokes.slice(0, strokes.length - historyPos);
    historyPos = 0;
  }
  const stroke = {
    id: Date.now().toString(36) + Math.floor(Math.random() * 1e9).toString(36),
    tool: activeTool,
    size: toolSizes[activeTool],
    color: activeColor,
    opacity: toolOpacities[activeTool],
    points: [[x, y], [x + 0.01, y + 0.01]],
  };
  strokes.push(stroke);
  updateUndoRedo();

  if (stroke.tool == 'erase') {
    lastCheckpoint = ctx.getImageData(0, 0, W * DP, H * DP);
    drawStroke(ctx, stroke);
  } else {
    ctxFg.clearRect(0, 0, W * DP, H * DP);
    drawStroke(ctxFg, stroke);
  }

  sendWsMessage('ns', stroke);
}
function onDrawMove(x, y) {
  if (drawCancelled) {
    return;
  }

  const stroke = strokes[strokes.length - 1];
  if (stroke.points.length == 2 && stroke.points[0][0] + 1e-5 == stroke.points[1][0] && stroke.points[0][1] + 1e-5 == stroke.points[1][1]) {
    stroke.points[1] = [x, y];
    sendWsMessage('us', stroke);
  } else {
    stroke.points.push([x, y]);
    sendWsMessage('pt', [stroke.id, x, y]);
  }

  if (!longPressCancelled) {
    const dx = stroke.points[0][0] - x;
    const dy = stroke.points[0][1] - y;
    longPressDistance += Math.sqrt(dx * dx + dy * dy);
    if (longPressDistance > LONGPRESS_DIST) {
      longPressCancelled = true;
      clearTimeout(longPressTimeout);
    }
  }
  
  //redraw();
  //ctx.putImageData(lastCheckpoint, 0, 0);
  if (stroke.tool == 'erase') {
    ctx.putImageData(lastCheckpoint, 0, 0);
    drawStroke(ctx, stroke);
  } else {
    ctxFg.clearRect(0, 0, W * DP, H * DP);
    drawStroke(ctxFg, stroke);
  }
  //drawStroke(stroke, stroke.points.length - 2);
}
function onDrawEnd() {
  if (drawCancelled) {
    return;
  }

  clearTimeout(longPressTimeout);
  const stroke = strokes[strokes.length - 1];
  // Transfer stroke from scratchpad to canvas
  if (stroke.tool == 'erase') {
    lastCheckpoint = null;
  } else {
    ctx.drawImage(scratch, 0, 0);
    ctxFg.clearRect(0, 0, W * DP, H * DP);
  }
}
function getPaletteColor(x, y) {
  const i = (y * extpaletteColors.width + x) * 4;
  const r = extpaletteColors.data[i];
  const g = extpaletteColors.data[i + 1];
  const b = extpaletteColors.data[i + 2];
  return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
}
function onPickStart(x, y, { isTouch }) {
  if (!extpaletteColors) {
    return;
  }
  for (let { el } of colors) {
    el.classList.toggle('is-active', false);
  }
  picker.classList.remove('is-hidden');
  picker.classList.add('is-active');
  picker.classList.toggle('is-touch', isTouch);
  onPickMove(x, y);
  Telegram.WebApp.HapticFeedback.selectionChanged();
}
function onPickMove(x, y) {
  x = Math.max(0, Math.min(extpaletteColors.width - 1, x));
  y = Math.max(0, Math.min(extpaletteColors.height - 1, y));
  activeColor = getPaletteColor(x, y);
  picker.style.left = `${x}px`;
  picker.style.top = `${y}px`;
  picker.style.backgroundColor = activeColor;
  picker.style.color = y < extpaletteColors.height * 0.5 ? '#000' : '#fff';
}
function onPickEnd() {
  updateActiveColor(activeColor);
  picker.classList.remove('is-active');
  Telegram.WebApp.HapticFeedback.selectionChanged();
}

function onSelectColor(newColor) {
  updateActiveColor(newColor);
  for (let { el, color } of colors) {
    el.classList.toggle('is-active', color == newColor);
  }
  picker.classList.add('is-hidden');
}
function onSelectTool(newTool, el) {
  if (activeTool == newTool && newTool != 'erase') {
    isOptionsVisible = !isOptionsVisible;
    optionsBtn = el;
    document.getElementById('tool-resizer').value = toolSizes[activeTool];
    document.getElementById('tool-opacity').value = toolOpacities[activeTool] * 100;
    const left = el.offsetLeft + el.offsetWidth * 0.5;
    document.getElementById('options').style.setProperty('--arrow-pos', left + 'px');
    document.getElementById('options').classList.toggle('is-hidden', !isOptionsVisible);
    return;
  }
  activeTool = newTool;
  for (let tool of ['brush', 'pbrush', 'pen', 'erase']) {
    tools[tool].el.classList.toggle('is-active', tool == newTool);
  }
  palette.classList.toggle('is-hidden', newTool == 'erase');
  resizerWrapper.classList.toggle('is-hidden', newTool != 'erase');
  resizer.value = toolSizes[activeTool];
}
function onResize() {
  toolSizes[activeTool] = resizer.value;
}

function onTouchOutside(ev, force) {
  if (isOptionsVisible) {
    const optionsEl = document.getElementById('options');
    if (force || (!optionsEl.contains(ev.target) && ev.target !== optionsEl && (!optionsBtn || !optionsBtn.contains(ev.target)) && ev.target !== optionsBtn)) {
      isOptionsVisible = false;
      optionsEl.classList.add('is-hidden');
    }
  }
}

function cyrb128(str) {
  let h1 = 1779033703, h2 = 3144134277,
      h3 = 1013904242, h4 = 2773480762;
  for (let i = 0, k; i < str.length; i++) {
      k = str.charCodeAt(i);
      h1 = h2 ^ Math.imul(h1 ^ k, 597399067);
      h2 = h3 ^ Math.imul(h2 ^ k, 2869860233);
      h3 = h4 ^ Math.imul(h3 ^ k, 951274213);
      h4 = h1 ^ Math.imul(h4 ^ k, 2716044179);
  }
  h1 = Math.imul(h3 ^ (h1 >>> 18), 597399067);
  h2 = Math.imul(h4 ^ (h2 >>> 22), 2869860233);
  h3 = Math.imul(h1 ^ (h3 >>> 17), 951274213);
  h4 = Math.imul(h2 ^ (h4 >>> 19), 2716044179);
  h1 ^= (h2 ^ h3 ^ h4), h2 ^= h1, h3 ^= h1, h4 ^= h1;
  return [h1>>>0, h2>>>0, h3>>>0, h4>>>0];
}

function sfc32(a, b, c, d) {
  return function() {
    a >>>= 0; b >>>= 0; c >>>= 0; d >>>= 0; 
    var t = (a + b) | 0;
    a = b ^ b >>> 9;
    b = c + (c << 3) | 0;
    c = (c << 21 | c >>> 11);
    d = d + 1 | 0;
    t = t + d | 0;
    c = c + t | 0;
    return (t >>> 0) / 4294967296;
  }
}

function varyColor(rand, color) {
  let [l, c, h] = hex2oklch(color);
  l = Math.max(lightnessRange[0], Math.min(lightnessRange[1], l + rand() * 0.2 - 0.1));
  const [r, g, b] = oklch2rgb(l, c, h);
  return `#${Math.floor(r).toString(16).padStart(2, '0')}${Math.floor(g).toString(16).padStart(2, '0')}${Math.floor(b).toString(16).padStart(2, '0')}`;
}

const rotatePoint = (distance, angle, origin) => [
  origin[0] + distance * Math.cos(angle),
  origin[1] + distance * Math.sin(angle)
];

const normAngle = (angle) => {
  return angle;
  if (angle < -Math.PI) return angle + Math.PI * 2;
  if (angle > Math.PI) return angle - Math.PI * 2;
  return angle;
}
const getBearing = (vp, vn) => Math.atan2(vn[1] - vp[1], vn[0] - vp[0]) - Math.PI * 0.5;
const getNewAngle = (origin, destination, oldAngle) => {
  let bearing = getBearing(origin, destination);
  if (typeof oldAngle === 'undefined') {
    return bearing;
  }

  const an = bearing;
  const vxn = destination[0] - origin[0];
  const vyn = destination[1] - origin[1];
  const vxp = -Math.cos(oldAngle);
  const vyp = -Math.sin(oldAngle);

  const a = Math.atan2(vxn*vyp - vyn*vxp, vxn*vxp + vyn*vyp);
  let a0, a1, tg;
  if (a > 0) {
    a0 = an + a * 0.5;
    a1 = a0 - Math.PI;
    tg = a0 - Math.PI * 0.5;
  } else {
    a1 = an + a * 0.5;
    a0 = a1 + Math.PI;
    tg = a1 + Math.PI * 0.5;
  }

  /*let diff = bearing - oldAngle;
  if (diff > Math.PI) {
    diff = 2 * Math.PI - diff;
  } else
  if (diff < -Math.PI) {
    diff = 2 * Math.PI + diff;
  }*/
  /*if (diff > 2 * Math.PI - diff) {
    return normAngle(oldAngle + diff * (oldAngle > bearing ? 1 : -1) * 0.5);
  }*/
  //console.log(oldAngle, bearing, diff, normAngle(oldAngle + diff * (oldAngle > bearing ? -1 : 1) * 0.5));
  //return normAngle(oldAngle + diff * (oldAngle > bearing ? -1 : 1) * 0.5);// - angleDiff(oldAngle, bearing);
  //return oldAngle + diff;
  //console.log(oldAngle, bearing);
  /*if (Math.abs(bearing - oldAngle) > Math.abs(bearing + Math.PI - oldAngle)) {
    if (bearing > 0) {
      bearing -= Math.PI;
    } else {
      bearing += Math.PI;
    }
  }*/
  return oldAngle + (bearing - oldAngle) * 0.1;
};

const angleDiff = (angleA, angleB) => {
  const twoPi = Math.PI * 2;
  const diff =
      ((angleA - (angleB > 0 ? angleB : angleB + twoPi) + Math.PI) % twoPi) -
      Math.PI;
  return diff < -Math.PI ? diff + twoPi : diff;
};

function drawStroke(ctx, s) {
  if (pendingStrokes[s.id]) {
    return; // Still animating this stroke, skip
  }

  ctx.lineJoin = 'round';
  ctx.lineCap = 'round';
  ctx.lineWidth = s.size * DP;
  if (s.tool == 'brush') {
    const opacity = s.opacity || 0.62;
    ctx.fillStyle = s.color + Math.floor(opacity * 0xFF).toString(16).padStart('0');
  } else
  if (s.tool == 'pbrush') {
    const opacity = s.opacity || 0.31;
    ctx.strokeStyle = s.color + Math.floor(opacity * 0xFF).toString(16).padStart('0');
  } else
  if (s.tool == 'pen') {
    const opacity = s.opacity || 1;
    ctx.strokeStyle = s.color + Math.floor(opacity * 0xFF).toString(16).padStart('0');
  } else
  if (s.tool == 'erase') {
    ctx.strokeStyle = '#fff';
    ctx.globalCompositeOperation = 'destination-out';
  } else
  if (s.tool == 'fill') {
    ctx.fillStyle = s.color;
    ctx.fillRect(0, 0, W * DP, H * DP);
    return;
  }

  if (s.tool == 'pen' || s.tool == 'erase') { // Simple constant-width stroke
    ctx.beginPath();
    let ppx = null;
    let ppy = null;
    let pdsq = null;
    let px = s.points[0][0] * DP;
    let py = s.points[0][1] * DP;
    ctx.moveTo(px, py);
    for (let i = 1; i < s.points.length; i++) {
      const x = s.points[i][0] * DP;
      const y = s.points[i][1] * DP;
      const dsq = (x - px) * (x - px) + (y - py) * (y - py);
      if (ppx !== null && dsq > SMOOTH_THRESHOLD) {
        const pd = Math.sqrt(pdsq);
        const d = Math.sqrt(dsq);
        const dx = (px - ppx) / pd;
        const dy = (py - ppy) / pd;
        ctx.quadraticCurveTo(px + dx * d * 0.35, py + dy * d * 0.35, x, y);
      } else {
        ctx.lineTo(x, y);
      }
      ppx = px;
      ppy = py;
      px = x;
      py = y;
      pdsq = dsq;
    }
    ctx.stroke();
  } else
  if (s.tool == 'brush') { // Variable-size brush
    const filtered = [s.points[0]];
    let d = 0;
    for (let i = 1; i < s.points.length; i++) {
      d += Math.sqrt((s.points[i][0] - s.points[i - 1][0]) * (s.points[i][0] - s.points[i - 1][0]) +
        (s.points[i][1] - s.points[i - 1][1]) * (s.points[i][1] - s.points[i - 1][1]));
      if (d > 5 * DP || i == s.points.length - 1) {
        filtered.push(s.points[i]);
        d = 0;
      }
    }

    const path = new Array(filtered.length);
    let xp, yp, x, y, xn, yn, an, vxp, vyp, vxn, vyn, a0, a1, tg;
    [xn, yn] = [filtered[0][0] * DP, filtered[0][1] * DP];
    an = 0;

    // Generate points
    for (let i = 0; i < filtered.length; i++) {
      [xp, yp, x, y] = [x, y, xn, yn];
      if (i < filtered.length - 1) {
        xn = filtered[i + 1][0] * DP;
        yn = filtered[i + 1][1] * DP;
      } else {
        xn += x - xp;
        yn += y - yp;
      }
      if (i == 0) {
        xp = x - (xn - x);
        yp = y - (yn - y);
      }
      [vxp, vyp, vxn, vyn] = [xp - x, yp - y, xn - x, yn - y];
      an = Math.atan2(vyn, vxn);
      const a = Math.atan2(vxn*vyp - vyn*vxp, vxn*vxp + vyn*vyp);
      if (a > 0) {
        a0 = an + a * 0.5;
        a1 = a0 - Math.PI;
        tg = a0 - Math.PI * 0.5;
      } else {
        a1 = an + a * 0.5;
        a0 = a1 + Math.PI;
        tg = a1 + Math.PI * 0.5;
      }
      const sharpness = Math.min(Math.abs(a), Math.min(Math.PI - a, Math.PI + a));
      const cpDist = sharpness > 1.3 ? 0 : (sharpness > 1.0 ? 2 : 7);
      if (sharpness > 1.0) {
        console.log(sharpness);
      }
      
      let d = (i == 0 || i == filtered.length - 1 ? 1 : Math.min(5, Math.min(i, filtered.length - i - 1) * 0.5)) * DP;
      d *= s.size / 20;
      path[i] = [
        x + Math.cos(a0) * d, y + Math.sin(a0) * d,
        x + Math.cos(a1) * d, y + Math.sin(a1) * d,
        Math.cos(tg) * cpDist * DP, Math.sin(tg) * cpDist * DP,
      ];
    }

    /*ctx.lineWidth = 2;
    ctx.strokeStyle = '#000';
    ctx.beginPath();
    ctx.moveTo(filtered[0][0] * DP, filtered[0][1] * DP);
    for (let i = 0; i < filtered.length; i++) {
      ctx.lineTo(filtered[i][0] * DP, filtered[i][1] * DP);
    }
    ctx.stroke();
    for (let i = 0; i < path.length; i++) {
      ctx.strokeStyle = '#800';
      ctx.beginPath();
      ctx.moveTo(filtered[i][0] * DP, filtered[i][1] * DP);
      ctx.lineTo(path[i][0], path[i][1]);
      ctx.stroke();
      ctx.strokeStyle = '#080';
      ctx.beginPath();
      ctx.moveTo(filtered[i][0] * DP, filtered[i][1] * DP);
      ctx.lineTo(path[i][2], path[i][3]);
      ctx.stroke();
    }*/

    
    // Draw
    ctx.beginPath();
    ctx.moveTo(path[0][0], path[0][1]);
    for (let i = 1; i < path.length; i++) { // Forward pass
      //ctx.lineTo(path[i][0], path[i][1]);
      ctx.bezierCurveTo(
        path[i - 1][0] + path[i - 1][4], path[i - 1][1] + path[i - 1][5],
        path[i][0] - path[i][4], path[i][1] - path[i][5],
        path[i][0], path[i][1]);
    }
    ctx.lineTo(path[path.length - 1][2], path[path.length - 1][3]);
    for (let i = path.length - 2; i >= 0; i--) { // Backward pass
      //ctx.lineTo(path[i][2], path[i][3]);
      ctx.bezierCurveTo(
        path[i + 1][2] - path[i + 1][4], path[i + 1][3] - path[i + 1][5],
        path[i][2] + path[i][4], path[i][3] + path[i][5],
        path[i][2], path[i][3]);
    }
    ctx.closePath();
    ctx.fill();
  } else
  if (s.tool == 'pbrush') {
    const swidth = s.size * 0.7;
    const seed = cyrb128(s.id);
    const rand = sfc32(seed[0], seed[1], seed[2], seed[3]);
    const brush = [];
    let bristleCount = Math.round(swidth / 4);
    const gap = swidth / bristleCount;
    for (let i = 0; i < bristleCount; i++) {
      const distance = i === 0 ? 0 : gap * i + (rand() * gap) / 2 - gap / 2;
      brush.push({
        distance,
        thickness: rand() * 3 + 3,
        color: varyColor(rand, s.color),
      });
    }

    for (let bristle of brush) {
      ctx.beginPath();
      
      let angle = undefined;
      let last = s.points[0];
      for (let i = 1; i < s.points.length; i++) {
        const p = s.points[i];
        const newAngle = getNewAngle(last, p, angle);

        let bristleOrigin = rotatePoint(
          bristle.distance - swidth / 2,
          angle,
          last
        );

        let bristleDestination = rotatePoint(
          bristle.distance - swidth / 2,
          newAngle,
          p
        );
        const controlPoint = rotatePoint(
          bristle.distance - swidth / 2,
          newAngle,
          last
        );
        bristleDestination = rotatePoint(
          bristle.distance - swidth / 2,
          newAngle,
          p
        );

        if (i == 1) {
          ctx.moveTo(bristleOrigin[0] * DP, bristleOrigin[1] * DP);
        }
        const opacity = s.opacity || 0.31;
        ctx.strokeStyle = bristle.color + Math.floor(opacity * 0xFF).toString(16).padStart('0');
        ctx.lineWidth = bristle.thickness * DP;
        ctx.shadowColor = bristle.color + Math.floor(opacity * 0xFF).toString(16).padStart('0');
        ctx.shadowBlur = bristle.thickness * DP / 2;
        ctx.quadraticCurveTo(
          controlPoint[0] * DP,
          controlPoint[1] * DP,
          bristleDestination[0] * DP,
          bristleDestination[1] * DP
        );
        //ctx.lineTo(bristleDestination[0], bristleDestination[1]);
        angle = newAngle;// % (Math.PI * 2);
        last = p;
      }

      ctx.stroke();
    }

    ctx.shadowColor = '#00000000';
    ctx.shadowBlur = 0;
  }

  ctx.globalCompositeOperation = 'source-over';
}

function redraw() {
  ctx.clearRect(0, 0, W * DP, H * DP);

  // Merge local and remote strokes
  let i = 0;
  let j = 0;
  while (i < strokes.length - historyPos || j < remoteStrokes.length) {
    let loc = i < strokes.length - historyPos ? strokes[i] : null;
    let rem = j < remoteStrokes.length ? remoteStrokes[j] : null;
    if (!rem || (loc && (loc.id.length < rem.id.length || (loc.id.length == rem.id.length && loc.id < rem.id)))) {
      drawStroke(ctx, loc);
      i++;
    } else {
      drawStroke(ctx, rem);
      j++;
    }
  }
}

function updateUndoRedo() {
  if (historyPos < strokes.length) {
    tools.undo.el.removeAttribute('disabled');
    Telegram.WebApp.MainButton.enable();
  } else {
    tools.undo.el.setAttribute('disabled', true);
    
    if (MODE != 'collab') {
      Telegram.WebApp.MainButton.disable();
    }
  }
  if (historyPos > 0) {
    tools.redo.el.removeAttribute('disabled');
  } else {
    tools.redo.el.setAttribute('disabled', true);
  }
  Telegram.WebApp.isClosingConfirmationEnabled = MODE != 'collab' && historyPos < strokes.length;
}

function updatePaletteColors() {
  const canvas = document.createElement('canvas');
  canvas.width = paletteExt.clientWidth;
  canvas.height = paletteExt.clientHeight;
  const ctx = canvas.getContext('2d');
  ctx.drawImage(paletteImage, 0, 0, canvas.width, canvas.height);
  extpaletteColors = ctx.getImageData(0, 0, canvas.width, canvas.height);
}

function addPointerEvents(el, onStart, onMove, onEnd) {
  const onMouseDown = ev => {
    ev.preventDefault();
    onStart(ev.clientX - el.offsetLeft, ev.clientY - el.offsetTop, { isTouch: false });
    document.addEventListener('mousemove', onMouseMove, false);
    document.addEventListener('mouseup', onMouseUp, false);
  }
  const onMouseMove = ev => {
    ev.preventDefault();
    onMove(ev.clientX - el.offsetLeft, ev.clientY - el.offsetTop, { isTouch: false });
  }
  const onMouseUp = ev => {
    onMouseMove(ev);
    onEnd({ isTouch: false });
    document.removeEventListener('mousemove', onMouseMove, false);
    document.removeEventListener('mouseup', onMouseUp, false);
  }
  const onTouchDown = ev => {
    onTouchOutside(ev);
    if (touchOutside) {
      return;
    }
    ev.preventDefault();
    ev.stopPropagation();
    onStart(ev.touches[0].clientX - el.offsetLeft, ev.touches[0].clientY - el.offsetTop, { isTouch: true });
    document.addEventListener('touchmove', onTouchMove, { passive: false });
    document.addEventListener('touchend', onTouchEnd, { passive: false });
    //document.getElementById('debug').innerText += ev.target.id;
  }
  const onTouchMove = ev => {
    ev.preventDefault();
    ev.stopPropagation();
    onMove(ev.touches[0].clientX - el.offsetLeft, ev.touches[0].clientY - el.offsetTop, { isTouch: true });
  }
  const onTouchEnd = ev => {
    onEnd({ isTouch: true });
    document.removeEventListener('touchmove', onTouchMove, { passive: false });
    document.removeEventListener('touchend', onTouchEnd, { passive: false });
  }

  el.addEventListener('mousedown', onMouseDown, false);
  el.addEventListener('touchstart', onTouchDown, { passive: false });
}

addPointerEvents(board, onDrawStart, onDrawMove, onDrawEnd);
addPointerEvents(paletteExt, onPickStart, onPickMove, onPickEnd);

document.addEventListener('touchstart', ev => {
  touchOutside = true;
  onTouchOutside(ev);
});

document.addEventListener('mousedown', ev => {
  onTouchOutside(ev);
});

document.addEventListener('touchend', ev => {
  touchOutside = false;
});

resizer.addEventListener('input', onResize);

if (!Telegram.WebApp.isExpanded) {
  document.getElementById('main').style.height = `${Telegram.WebApp.viewportHeight - 58}px`; // Send button should eat away 58px
}

title.addEventListener('input', () => {
  if (MODE == 'collab') {
    sendWsMessage('title', title.value);
  }
});
document.getElementById('title-form').addEventListener('submit', (ev) => {
  document.activeElement.blur();
  ev.preventDefault();
});

document.getElementById('tool-resizer').addEventListener('input', (ev) => {
  toolSizes[activeTool] = document.getElementById('tool-resizer').value;
});

document.getElementById('tool-opacity').addEventListener('input', (ev) => {
  toolOpacities[activeTool] = document.getElementById('tool-opacity').value / 100;
});

Telegram.WebApp.MainButton.text = MODE == 'collab' ? 'Save Snapshot' : 'Save';
Telegram.WebApp.MainButton.onClick(() => {
  ctx.globalCompositeOperation = 'destination-atop';
  ctx.fillStyle = '#fff';
  ctx.fillRect(0, 0, W * DP, H * DP);

  canvas.toBlob(async blob => {
    const fd = new FormData();
    fd.append('file', blob);
    fd.append('title', title.value);
    fd.append('initData', initData);
    const result = await (await fetch('graffiti', {
      method: 'POST',
      body: fd
    })).json();
    
    if (result.error) {
      Telegram.WebApp.showAlert(`Something went wrong!\n(error: ${result.error})\n\nWe\'re unable to save your graffiti. Please try again later.`);
      return;
    }

    const isFromPrivate = Telegram.WebView.initParams.source == 'private';
    Telegram.WebApp.switchInlineQuery('', isFromPrivate ? ['users', 'groups', 'channels'] : null);
  }, 'image/jpeg', 0.90);
});
if (MODE != 'collab') {
  Telegram.WebApp.MainButton.disable();
}
Telegram.WebApp.MainButton.show();

if (!initData) {
  try {
    Telegram.WebApp.showAlert('Something went wrong!\n(error: initData is empty)\n\nYou won\'t be able to save your graffiti. Please try again later.');
  } catch (e) {}
}

addTool('undo', () => {
  if (historyPos >= strokes.length) {
    return;
  }
  historyPos++;
  const stroke = strokes[strokes.length - historyPos];
  if (stroke.tool == 'fill') {
    playFillAnimation(stroke, true);
  }
  if (MODE == 'collab') {
    sendWsMessage('ds', stroke.id);
  }
  redraw();
  updateUndoRedo();
});
addTool('redo', () => {
  if (historyPos <= 0) {
    return;
  }
  const stroke = strokes[strokes.length - historyPos];
  if (stroke.tool == 'fill') {
    playFillAnimation(stroke);
  }
  if (MODE == 'collab') {
    sendWsMessage('ns', stroke);
  }
  historyPos--;
  redraw();
  updateUndoRedo();
});
addTool('pen', onSelectTool);
addTool('brush', onSelectTool);
addTool('pbrush', onSelectTool);
addTool('erase', onSelectTool);
addTool('trash', () => {
  Telegram.WebApp.showConfirm('Are you sure you want to clear your graffiti?', (confirmed) => {
    if (confirmed) {
      clearCanvas();
      sendWsMessage('clear', null);
    }
  })
});

addColorButton(palette, '#EE1A17');
addColorButton(palette, '#FF8800');
addColorButton(palette, '#FFE014');
addColorButton(palette, '#1BA411');
addColorButton(palette, '#006FBB');
addColorButton(palette, '#843CBD');
addColorButton(palette, '#131717');

redraw();
updateUndoRedo();
onSelectTool('brush');
onSelectColor('#EE1A17');

const paletteImage = new Image();
paletteImage.onload = () => {
  updatePaletteColors();
  new ResizeObserver(updatePaletteColors).observe(paletteExt);
}
paletteImage.src = 'palette.png';

document.body.classList.add('is-' + Telegram.WebApp.platform);
if (ENABLE_ANDROID_SCROLL_HACK) {
  document.body.classList.add('is-scroll-hack-enabled');
  setInterval(() => {
    scrollTo(2500, 2500);
  }, 200);
}

title.value = Telegram.WebView.initParams.title || '';

// Test collab mode
if (MODE == 'collab') {
  title.placeholder = 'Untitled Board';

  ws = new WebSocket('wss://' + document.location.host + document.location.pathname + 'ws');
  ws.addEventListener('open', ev => {
    sendWsMessage('auth', initData);
  });
  ws.addEventListener('message', onWsMessage);
}