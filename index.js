const Discord = require('discord.js')

const { bot_token } = require('./no-secrets-dont-look-mum')
const {
  handle_member_add,
  handle_message
} = require('./src/events')

const client = new Discord.Client()

// EVENT HANDLERS
client.on('ready', () => console.log('ßotti ßoi is ready: eeeYUP'))

client.on('message', message => handle_message(message))

// client.on('guildMemberAdd', member => handle_member_add(member))

// ERROR HANDLER
process.on('unhandledRejection', error => console.error(`Uncaught Promise Rejection:\n${error}`))

client.login(bot_token)
