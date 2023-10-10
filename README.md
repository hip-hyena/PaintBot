# @PaintBot

This is a sample bot for Telegram, made as an entry for [Telegram 2023 Mini App Contest](https://t.me/contest/327).

You can engage directly with the functioning bot [@PaintBot](https://t.me/PaintBot), or clone and modify this repository to fit your personal needs (see the [Deployment](#Deployment) section).

## Usage

This bot allows creating small hand-drawn images ("graffitis") directly in chats and groups. You can also create so-called "collaborative boards" which allow multiple people drawing on them at the same time.

To create a graffiti, simply start the bot and select any of your group chats or channels. Type "`@PaintBot <GRAFFITI TITLE>`" in the new message input (instead of title you can just type "-"). You should see an option to create new graffiti - tapping on it should open the editor. When you're done drawing, press "Save" button and select the graffiti you've just drawn to send it to the chat.

**Note**. Sometimes Telegram clients do not open the Mini App when it's selected from the inline menu (this is probably due to some bug, because there's no documented reason why that could happen). If that's the case, you can always open it by following [this link](https://t.me/PaintBot/draw).

To create a collaborative board, select the "**New board**" option after typing "`@PaintBot <BOARD TITLE>`" in any chat. It will publish a message with a link to a board in the chat, and any member of that chat will be able to join and see each others strokes in realtime. At any point you can save a snapshot of the current state of the board by pressing "Save snapshot".

## Known issues

Unfortunately, Telegram does not provide (yet) a reliable way to prevent vertical swipe gestures from "leaking" to the Telegram client. This means that some touch gestures can be interpreted incorrectly and lead to expanding/closing Mini App instead of interacting with its elements. This is especially noticable on Android devices.

To fix this issue (at least to some extent) I've tried to implement a somewhat hacky workaround (see `ENABLE_ANDROID_SCROLL_HACK` in `static/js/app.js`). Assign `false` to that constant if you wish to disable this workaround.

## Deployment

The process of cloning this bot/app is rather straightforward. It's written in Node.js using Express framework and all data is stored in SQLite. This means that deployment does not require installation and configuration of an external database (but the source code can be modified to use it, of course).

First, make sure you have the latest version of [Node](https://nodejs.org/en) installed. It's also recommended to have [Git](https://git-scm.com/downloads) installed (to clone this repository). To keep the server running you can install [PM2](https://pm2.keymetrics.io/), for example. You can also use [Nginx](https://nginx.org/en/download.html) as a reverse proxy in front of this app.

Clone this repository into any directory:
```
git clone https://github.com/hip-hyena/PaintBot.git
```
(or, if you don't use Git, just download this repo as a ZIP file and unpack it in any directory)

Go to directory where you cloned the repository and install dependencies:
```
cd ConveneBot
npm install
```

Now you need to configure your version of this app.

Visit [BotFather](https://t.me/BotFather) and create your bot. You can choose any name/username/description. Select "Inline Mode" in Bot Settings and turn it one (set the hint to something like "Enter name of new event..."). It's recommended to configure a custom menu button for your bot: select "`Bot Settings`" - "`Menu button`". For url, enter "`https://<YOUR_HOSTNAME>/#type=menu`". Also type `/newapp` and create a Mini App associated with the bot you've just created. Similarly, use "`https://<YOUR_HOSTNAME>/`" as an URL for your app. If you use Nginx, you can use the public path you've configured as `<YOUR_HOSTNAME>`.

Now create a text file named `.env` in the root directory of this repository. It should have the following contents:
```
TELEGRAM_USERNAME=<BOT_USERNAME>
TELEGRAM_TOKEN="<BOT_TOKEN>"
MINIAPP_HOST=<PUBLIC_URL>
MINIAPP_PORT=<INTERNAL_PORT>
```

Replace placeholders in angle brackets with the appropriate values and this file (enter `<BOT_USERNAME>` without an @-sign).

That's all for configuration. Now you can run the server:
```
node server.js
```

Or, if you're using `PM2`, you can add this app to the list of continuously running scripts:
```
pm2 start --name YourBotName server.js
pm2 save
```

If you're using `Nginx`, don't forget to make sure you've configured it to correctly proxy requests from `<PUBLIC_URL>` to `localhost:<INTERNAL_PORT>`. You also may need to configure [Certbot](https://certbot.eff.org/) to acquire HTTPS certificates (you can follow [this tutorial](https://www.digitalocean.com/community/tutorials/how-to-secure-nginx-with-let-s-encrypt-on-ubuntu-20-04) for details).