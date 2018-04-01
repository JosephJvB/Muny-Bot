const { google } = require('googleapis')
const youtube = google.youtube('v3')

const { yt_api_key } = require('../../no-secrets-dont-look-mum.json')
const message_filter = require('./filter-messages')
const { find_number_in_string } = require('./basic-tools')

/*
  THIS FUNCTIONS JOB:

    1: Engage youtube data API search.list with user input
    2: display top 3 results of search to user in channel
    3: match user choice to search results and return a promise to ytdl-stream

    CALLED BY: !play command -> ../commands/play-music.js
*/

module.exports = (message, args) => {
  const { channel } = message

  const asker_name = message.author.username

  return new Promise((resolve, reject) => {
    // perform youtube data API search on user ARGS
    youtube.search.list({

      key: yt_api_key,
      maxResults: 3,
      part: 'snippet',
      q: args.join(' ')

    }, (err, res) => {
      if (err) return reject(console.error(`YT_SEARCH_ERROR: ${err}`))

      // items returned from search
      const results = res.data.items

      // format a title for each item
      const choices = results.map((res, i) => `\n${i + 1}. ${res.snippet.title}`)

      // send choices of top 3 search results to channel
      channel.send(choices.join('\n'))
        .catch(err => reject(console.error(`SEND_ERROR: ${err}`)))
        .then(() => {
          // handle users song selection
          channel.awaitMessages(response => message_filter(response, asker_name), { max: 1, time: 6800, errors: ['time'] })
            .catch(err => reject(console.error(`AWAIT_MSG_ERROR: ${err}`)))
            .then(answer => {
              // match the first number between 1-3 in user response to search results
              const songIdx = find_number_in_string(answer.first().content)

              // send selected song ID back to player
              resolve(results[songIdx - 1].id.videoId)
            })
        })
    })
  })
}
