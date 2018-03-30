const save_message_data = require('../util/save-msg-data')
const { prefix } = require('../../no-secrets-dont-look-mum')
const {
  clue,
  delete_bulk,
  guide,
  kick,
  list_args,
  play_music
} = require('../commands')

module.exports = (message) => {
  // save every message
  save_message_data(message)

  const { content, author, channel } = message

  // could handle bot responses to bot messages here :)
  // get bot to sing a song, or rant, or tell a story, recite a copy-pasta

  // respond only to USER messages that start with '!'
  if (!content.startsWith(prefix) || author.bot) return

  // exit if command origin is direct messages
  if(channel.type === 'dm') return

  // assigning command and arguments from message content.
  const args = content.slice(prefix.length).split(/\s+/g)
  const command = args.shift().toLowerCase()

  // handle command cases
  switch (command) {
    // !args or !list-args have same result
    case 'args':
    case 'list-args': return list_args(message, args)
    case 'clue': return clue(message)
    case 'cleanup': return delete_bulk(message, args)
    case 'guide': return guide(message)
    case 'kick': return kick(message)
    case 'play': return play_music(message, args)
    default: return channel.send('Soz mate don\'t recognise that one, maybe it\'s your accent')
  }
}
