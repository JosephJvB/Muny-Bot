const save_message_data = require('../save-msg-data')
const { prefix } = require('../../no-secrets-dont-look-mum')
const {
  kick,
  list_args,
  clue
} = require('../commands')


module.exports = (message) => {
  // save every message
  save_message_data(message)

  const { content, author, channel } = message

  // could handle bot responses to bot messages here :)
  // get bot to sing a song, or rant, or tell a story, recite a copy-pasta

  // only respond to USER messages that start with '!'
  if (!content.startsWith(prefix) || author.bot) return

  // assigning command and arguments from message content.
  const args = content.slice(prefix.length).split(/ +/)
  const command = args.shift().toLowerCase()

  // handle command input
  switch (command) {
    // !args or !list-args have same result
    case 'args':
    case 'list-args': return list_args(message, args)
    case 'kick': return kick(message)
    case 'clue': return clue(message)
    default: return channel.send('Soz mate don\'t recognise that one, maybe it\'s your accent')
  }
}