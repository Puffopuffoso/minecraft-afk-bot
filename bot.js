const mineflayer = require('mineflayer')

function createBot() {

const bot = mineflayer.createBot({
  host: "ttuffsmp.falixsrv.me",
  port: 25565,
  username: "wallstdokicte8@hotmail.com",
  auth: "microsoft",
  version: false
})

bot.on('spawn', () => {
  console.log("BOT ONLINE SU TUFFSMP")

  // login automatico
  setTimeout(() => {
    bot.chat("/register 12345678 12345678")
  }, 4000)

  setTimeout(() => {
    bot.chat("/login 12345678")
  }, 7000)

  // messaggio server
  setInterval(() => {
    bot.chat("TuffSMP on top 🔥")
  }, 600000)

  // anti AFK movimento
  setInterval(() => {
    bot.setControlState('jump', true)

    setTimeout(() => {
      bot.setControlState('jump', false)
    }, 1000)

  }, 30000)

})

bot.on("chat", (username, message) => {

if (username === bot.username) return

if (message === "ping") {
bot.chat("pong")
}

})

bot.on("kicked", (reason) => {
console.log("KICKATO:", reason)
})

bot.on("error", (err) => {
console.log("ERRORE:", err)
})

bot.on("end", () => {
console.log("Bot disconnesso. Riconnessione tra 30 secondi")
setTimeout(createBot, 30000)
})

}

createBot()
