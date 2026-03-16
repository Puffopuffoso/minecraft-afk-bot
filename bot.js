const mineflayer = require('mineflayer')

const host = "ttuffsmp.falixsrv.me"
const port = 25565
const username = "wallstdokicte8@hotmail.com"

function startBot() {

  console.log("Controllo se il server è online...")

  const bot = mineflayer.createBot({
    host: host,
    port: port,
    username: username,
    auth: "microsoft",
    version: "1.21.11"
  })

  bot.on('spawn', () => {

    console.log("Bot entrato nel server")

    setTimeout(() => {
      bot.chat("/vanish")
    }, 3000)

    antiAfk(bot)

  })

  function antiAfk(bot){

    setInterval(() => {

      bot.setControlState('jump', true)

      setTimeout(() => {
        bot.setControlState('jump', false)
      }, 400)

    }, 30000)

  }

  bot.on('error', (err) => {

    console.log("Server offline o errore. Riprovo tra 60 secondi")

    bot.quit()

  })

  bot.on('end', () => {

    console.log("Bot disconnesso. Riconnessione tra 60 secondi")

    setTimeout(() => {
      startBot()
    }, 60000)

  })

}

startBot()
