const ytdl = require('ytdl-core')
const yt_search = require('../util/yt-search')

module.exports = (message, args) => {
  const { member: { voiceChannel }, channel } = message

  if(!voiceChannel) return message.reply('pls join a voice channel first')

  // const ID = yt_search(args)
  // search here then pass ID into the ytdl bit
  return yt_search(message, args)
    .catch(err => console.error(err))
    .then(resultId => {
      voiceChannel.join()
        .then(connection => {
          const stream = ytdl(`https://www.youtube.com/watch?v=${resultId}`, { filter: 'audioonly' })
          const dispatcher = connection.playStream(stream)
          dispatcher.on('end', () => {
            channel.send('cheers for the jams')
            voiceChannel.leave()
          })
        })

    })

}