const ytdl = require('ytdl-core')

module.exports = (message, args) => {
  const { member: { voiceChannel }, channel } = message

  if(!voiceChannel) return message.reply('pls join a voice channel first')

  voiceChannel.join()
    .then(connection => {
      const stream = ytdl('https://www.youtube.com/watch?v=hG07PpuP16Q', { filter: 'audioonly' })
      const dispatcher = connection.playStream(stream)
      dispatcher.on('end', () => {
        channel.send('cheers for the jams')
        voiceChannel.leave()
      })
    })

}