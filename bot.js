const mineflayer = require('mineflayer')

let bot = null

function startBot() {

  if (bot) {
    console.log("Bot già acceso")
    return
  }

  bot = mineflayer.createBot({
    host: "ttuffsmp.falixsrv.me",
    port: 27615,
    username: "wallstdokicte8@hotmail.com",
    auth: "microsoft",
    version: "1.21.1"
  })

  bot.once("spawn", () => {
    console.log("BOT ONLINE SU TUFFSMP")

    setTimeout(() => {
      bot.chat("/login 12345678")
    }, 5000)
  })

  bot.on("chat", (username, message) => {

    if (username === bot.username) return

    // spegne il bot
    if (message === "!bot off") {
      bot.chat("Bot offline")
      bot.quit()
      bot = null
    }

  })

  bot.on("kicked", (reason) => {
    console.log("KICKATO:", reason)
  })

  bot.on("error", (err) => {
    console.log("ERRORE:", err)
  })

  bot.on("end", () => {
    console.log("Bot uscito dal server")
    bot = null
  })

}

// comando da minecraft per accendere
const mineflayerListener = mineflayer.createBot({
  host: "ttuffsmp.falixsrv.me",
  port: 27615,
  username: "controller_bot",
  version: "1.21.1"
})

mineflayerListener.on("chat", (username, message) => {

  if (username === mineflayerListener.username) return

  if (message === "!bot on") {
    startBot()
  }

})
