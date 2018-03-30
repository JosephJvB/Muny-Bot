const ytdl = require('ytdl-core')
const yt_search = require('../util/yt-search')

const messageFilter = (msg) => {
  const hasNumber = findNumberInString(msg.content)
  return hasNumber
}

const findNumberInString = (str) => {
  const arr = str.split('')
  return arr.find(char => Number(char) > 0 && Number(char < 4))
}

module.exports = (message, args) => {
  const { member: { voiceChannel }, channel } = message

  if(!voiceChannel) return message.reply('pls join a voice channel first')

  return yt_search(message, args)
    .catch(err => console.error(err))
    .then(searchResults => {

      const choices = searchResults.map((res, i) => `\n${i + 1}. ${res.snippet.title}`)

      channel.send(choices.join('\n'))
        .then(() =>{
          channel.awaitMessages(messageFilter, {  max: 1, time: 6000, errors: ['time']})
          .then(answer => {
            const yaNum = findNumberInString(answer.first().content)

            const videoId = searchResults[yaNum - 1].id.videoId

            voiceChannel.join()
              .then(connection => {
                const stream = ytdl(`https://www.youtube.com/watch?v=${videoId}`, { filter: 'audioonly' })
                const dispatcher = connection.playStream(stream)
                dispatcher.on('end', () => {
                  channel.send('cheers for the jams')
                  voiceChannel.leave()
                })
              })
          })
          .catch(err => console.log(err))
        })
      })

  }
