const Discord = require('discord.js')

const { bot_token, prefix } = require('../no-secrets-dont-look-mum')
const saveMessageData = require('./save-msg-data')

const Client = new Discord.Client()

Client.on('ready', () => console.log('ßotti ßoi is ready: eeeYUP'))

Client.on('message', message => {

  const { channel, content, author } = message

  if(!content.startsWith(prefix) || message.author.bot) return
      // create an array with prefix removed
    const args = message.content.slice(prefix.length).split(/ +/) 
      // regex = (split on space ' ')

     // removes first item(word) from args
    const command = args.shift().toLowerCase()

  if(command === 'list-args') {
    channel.send(args)
      .catch(err => message.reply('naughty! ' + err.toString().split(': ')[1]))
  }

  return saveMessageData(message)
})

Client.login(bot_token)

// ßoii
