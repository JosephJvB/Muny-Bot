module.exports = (message) => {
  const {
    channel,
    mentions: { users }
  } = message

  if (!users.size) return message.reply('You must tag a user to kick them :)')
  return channel.send(`you wanna kick ${users.first().username}?`)
}
