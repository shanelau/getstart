const Telegraf = require('telegraf')
const { reply } = Telegraf

const bot = new Telegraf(process.env.BOT_TOKEN)
bot.command('/oldschool', (ctx) => ctx.reply('Hello'))
bot.command('/modern', ({ reply }) => reply('Yo'))
bot.command('/hipster', reply('λ'))
bot.startPolling()