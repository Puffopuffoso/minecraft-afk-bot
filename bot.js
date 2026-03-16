const mineflayer = require('mineflayer')

function startBot(){

const bot = mineflayer.createBot({
  host: "TUOSERVER.falixsrv.me",
  port: 25565,
  username: "TUAEMAIL",
  auth: "microsoft"
})

bot.on('spawn', () => {

  console.log("Bot entrato")

  bot.chat("/vanish")

  antiAfk()

})

function antiAfk(){

  setInterval(() => {

    bot.setControlState('jump', true)

    setTimeout(() => {
      bot.setControlState('jump', false)
    }, 500)

  }, 30000)

}

bot.on('end', () => {

  console.log("Bot disconnesso, riconnessione")

  setTimeout(() => {
    startBot()
  }, 20000)

})

bot.on('error', console.log)

}

startBot()
