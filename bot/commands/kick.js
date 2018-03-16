module.exports = (message) => {
  const { users } = message.mentions
  if (!users.size) return message.reply('You must tag a user to kick them :)')
  return message.reply('you wanna kick ' + users.first().username + '?')
}
