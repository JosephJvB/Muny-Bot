const save_message_data = require('../save-msg-data')
const { prefix } = require('../../no-secrets-dont-look-mum')
const {
  kick,
  list_args
} = require('../commands')


module.exports = (message) => {
  // save every message
  save_message_data(message)

  const { content, author } = message

  // only respond to USER messages that start with '!'
  if (!content.startsWith(prefix) || author.bot) return

  // assigning command and args from message content.
  const args = content.slice(prefix.length).split(/ +/)
  const command = args.shift().toLowerCase()

  // COMMANDS
  switch (command) {
    case 'list-args': return list_args(message, args)
    case 'kick': return kick(message)
    default: return
  }
}