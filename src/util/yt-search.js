const { google } = require('googleapis')

const { yt_api_key } = require('../../no-secrets-dont-look-mum.json')

const youtube = google.youtube('v3')

module.exports = (message, args) => {
  const { channel } = message

  return new Promise((resolve, reject) => {
    const request = youtube.search.list({
  
      key: yt_api_key,
      maxResults: 3,
      part: 'snippet',
      q: args.join(' ')
    }, (err, res) => {
  
      if(err) return reject(console.error(err))
  
      const result = res.data.items
    
      resolve(result[0].id.videoId)
    })
  })

}

  // maybe the search gives the user a chance to check if their selection was the right one
  // eg: 1 = first song
  //     2 = second song
  //     3 = 3rd song