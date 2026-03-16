const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: "ttuffsmp.falixsrv.me",
  port: 27615,
  username: "wallstdokicte8@hotmail.com",
  auth: "microsoft",
  version: "1.21.1"
})

let afk = false

bot.once("spawn", () => {
  console.log("BOT ONLINE")

  setTimeout(() => {
    bot.chat("/login 12345678")
  }, 5000)
})

bot.on("messagestr", (message) => {

  // attiva AFK
  if (message.includes("!afk on")) {
    afk = true
    bot.chat("AFK attivato")
  }

  // disattiva AFK
  if (message.includes("!afk off")) {
    afk = false
    bot.chat("AFK disattivato")
  }

})

setInterval(() => {

  if (!afk) return

  bot.setControlState("jump", true)

  setTimeout(() => {
    bot.setControlState("jump", false)
  }, 500)

}, 30000)

bot.on("kicked", console.log)
bot.on("error", console.log)
