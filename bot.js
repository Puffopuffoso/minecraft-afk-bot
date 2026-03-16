const mineflayer = require('mineflayer')

function startBot(){

const bot = mineflayer.createBot({
  host: "ttuffsmp.falixsrv.me",
  port: 25565,
  username: "wallstdokicte8@hotmail.com",
  auth: "microsoft"
})

bot.on('spawn', () => {
  console.log("Bot entrato")

  setTimeout(() => {
    bot.chat("/vanish")
  }, 3000)

})

bot.on('playerJoined', (player) => {

  if(player.username !== bot.username){

    console.log("Player entrato → esco")
    bot.quit()

  }

})

bot.on('end', () => {

  console.log("Riconnessione tra 60 secondi")

  setTimeout(() => {
    startBot()
  }, 60000)

})

}

startBot()
