const Gfycat = require('gfycat-sdk')

const {
  gfy_id,
  gfy_secret
} = require('../../no-secrets-dont-look-mum.json')

const gfycat = new Gfycat({
  gfy_id,
  gfy_secret
})

const first_upper = str => str[0].toUpperCase() + str.substring(1, str.length)

module.exports = (message, args) => {
  const { channel } = message
  const userId = args.shift()

  let amount = 10
  if(args.length) {
    amount = Number(args.shift())
    if (amount > 10) {
      amount = 10
      channel.send('I can only get you the last 10 gifs')
    }
    if(amount < 1) return channel.send('No can do, buckeroo.')
  }


  channel.send(`Fetching ${userId}'s latest ${amount} gifs...`)

  gfycat.userFeed({
    userId
  })
    .catch(err => {
      console.log('bad gfy get')
      channel.send(`No bueno hombre ${err}`)
    })
    .then(({gfycats}) => {
      const gifs = gfycats.slice(0, amount)
      gifs.forEach((gif) => {
        const { gfyName, title } = gif
        channel.send(`\n\n**${first_upper(title)}**: __gfycat.com/${gfyName}__\n`)
      })
    })
}

// res object has keys: { cursor, gfycats, statusCode }

// res.gfycats.length === 10

/*
Each gif has keys: {
  'gfyId',
  'gfyName',
  'gfyNumber',
  'webmUrl',
  'gifUrl',
  'miniUrl',
  'miniPosterUrl',
  'mobileUrl',
  'mobilePosterUrl',
  'posterUrl',
  'thumb360Url',
  'thumb360PosterUrl',
  'thumb100PosterUrl',
  'max5mbGif',
  'max2mbGif',
  'mjpgUrl',
  'width',
  'height',
  'avgColor',
  'frameRate',
  'numFrames',
  'mp4Size',
  'webmSize',
  'gifSize',
  'source',
  'createDate',
  'nsfw',
  'mp4Url',
  'likes',
  'published',
  'dislikes',
  'extraLemmas',
  'views',
  'tags',
  'userName',
  'title',
  'description',
  'languageCategories',
  'domainWhitelist'
}
*/

