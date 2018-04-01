const ytdl = require('ytdl-core')

const yt_search = require('../util/yt-search')

/*
  THIS FUNCTIONS JOB:

    1: Call youtube search function with arguments after !play command.
    2: Take result_id from yt_search and create a stream of youtube video.

    CALLED BY: !play command -> ../events/message.js
*/

module.exports = (message, args) => {
  const { member: { voiceChannel }, channel, author } = message

  // exit if user is not in a voiceChannel
  if (!voiceChannel) return message.reply('pls join a voice channel first')

  // initiate youtube api search & handle selection.
  return yt_search(message, args)
    .catch(err => console.error(`SEARCH_ERROR: ${err}`))
    .then(result_id => {
      // join the users voice_channel
      voiceChannel.join()
        .catch(err => console.error(`JOIN_ERROR: ${err}`))
        .then(connection => {
          // stream audio using id from users selection
          const stream = ytdl(`https://www.youtube.com/watch?v=${result_id}`, { filter: 'audioonly', quality: 'highestaudio' })

          const dispatcher = connection.playStream(stream)

          dispatcher.on('end', () => {
            channel.send('cheers for the jams')

            voiceChannel.leave()
          })
        })
    })
}
