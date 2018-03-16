const Discord = require('discord.js')

const { bot_token, prefix } = require('../no-secrets-dont-look-mum')
const saveMessageData = require('./save-msg-data')

const {
  kick,
  list_args
} = require('./commands')

const Client = new Discord.Client()

Client.on('ready', () => console.log('ßotti ßoi is ready: eeeYUP'))

Client.on('message', message => {

  // save every message
  saveMessageData(message)

  const { channel, content, author, mentions, reply } = message

    // only respond to USER messages that start with '!'
  if(!content.startsWith(prefix) || message.author.bot) return

    // assigning command and args from message content.
    const args = message.content.slice(prefix.length).split(/ +/) 
    const command = args.shift().toLowerCase()

      // COMMANDS
   switch(command) {
      case 'list-args': return list_args(message, args)
      case 'kick': return kick(message)
      default: return
    }

  })

Client.login(bot_token)

// ßoii
