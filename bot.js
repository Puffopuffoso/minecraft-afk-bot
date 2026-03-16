const mineflayer = require('mineflayer')

let bot = null

function createBot() {

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

  bot.on("kicked", (reason) => {
    console.log("KICKATO:", reason)
  })

  bot.on("error", (err) => {
    console.log("ERRORE:", err)
  })

  bot.on("end", () => {
    console.log("Bot uscito dal server")
  })
}

// comandi da console
process.stdin.on("data", (data) => {

  const command = data.toString().trim()

  if (command === "start") {
    if (!bot) {
      console.log("Avvio bot...")
      createBot()
    } else {
      console.log("Bot già acceso")
    }
  }

  if (command === "stop") {
    if (bot) {
      console.log("Spengo bot...")
      bot.quit()
      bot = null
    }
  }

})
