const mineflayer = require('mineflayer')

function createBot() {

  const bot = mineflayer.createBot({
    host: "ttuffsmp.falixsrv.me",
    port: 27615,
    username: "wallstdokicte8@hotmail.com",
    auth: "microsoft",
    version: "1.21.1"
  })

  bot.once("spawn", () => {
    console.log("BOT ONLINE SU TUFFSMP")

    // login automatico
    setTimeout(() => {
      bot.chat("/login 12345678")
    }, 5000)

    // messaggio ogni 10 minuti
    setInterval(() => {
      bot.chat("TuffSMP on top 🔥")
    }, 600000)

    // anti AFK (salta)
    setInterval(() => {
      bot.setControlState("jump", true)

      setTimeout(() => {
        bot.setControlState("jump", false)
      }, 500)

    }, 30000)
  })

  bot.on("chat", (username, message) => {
    if (username === bot.username) return

    if (message === "ping") {
      bot.chat("pong")
    }

    // comando per spegnere il bot
    if (message === "!botoff") {
      bot.quit("Bot spento")
      process.exit()
    }
  })

  bot.on("kicked", (reason) => {
    console.log("KICKATO:", reason)
  })

  bot.on("error", (err) => {
    console.log("ERRORE:", err)
  })

  bot.on("end", () => {
    console.log("Bot disconnesso. Riprovo tra 60 secondi...")
    setTimeout(createBot, 60000)
  })
}

// aspetta 1 minuto prima di partire (FalixNodes spesso è lento)
setTimeout(createBot, 60000)
