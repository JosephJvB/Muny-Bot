module.exports = (message) => {
  const { channel } = message

  channel.send('Come on, you didn\'t really think it would be that easy did you?')

  setTimeout(() => channel.send('OK it totally was that easy. Give me a break, it\'s just a prototype.'), 3200)

  return setTimeout(() => channel.send('Here\'s your next clue ya animal: some_next_clue'), 6400)
}
