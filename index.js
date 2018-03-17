const Discord = require('discord.js')

const { bot_token } = require('./no-secrets-dont-look-mum')
const { handle_message } = require('./src/events')

const Client = new Discord.Client()

// EVENT HANDLERS
Client.on('ready', () => console.log('ßotti ßoi is ready: eeeYUP'))
Client.on('message', message => handle_message(message))

Client.login(bot_token)
