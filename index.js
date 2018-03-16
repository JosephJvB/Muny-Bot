const Discord = require('discord.js')

const { bot_token, invite_link } = require('./no-secrets-dont-look-mum')
const saveMessageData = require('./save-msg-data')

const Client = new Discord.Client()

Client.on('ready', () => console.log('bot is ready: eeeYUP'))

Client.on('message', (message) => {

  const { channel, content } = message

  if(content === 'woo') channel.send('lets amp it up a little')
  if(content === 'inv') channel.send(`COME ON DOWN: ${server_invite_link}`)

  return saveMessageData(message)
})

Client.login(bot_token)
