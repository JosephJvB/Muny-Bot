const Discord = require('discord.js')

const { bot_token } = require('./no-secrets-dont-look-mum')
const { handle_message } = require('./src/events')

const client = new Discord.Client()

// EVENT HANDLERS
client.on('ready', () => console.log('ßotti ßoi is ready: eeeYUP'))

client.on('message', message => handle_message(message))

client.login(bot_token)
