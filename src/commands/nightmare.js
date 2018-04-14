const Nightmare = require('nightmare')

const bot = Nightmare({ show: true })
const rimraf = require('rimraf')
const fs = require('mz/fs')

const cheerio = require('cheerio')

const janitor = (err, res) => console.log(err || 'clean files, all smiles!')

/*
  STEPS: //
    - click Load More
    - scroll to bottom somehow...
    - get html of page
    - get all gfycat hrefs
  TODOS: //
    - get available gfycat urls
      -> Readfile -> parse html -> select hrefs
    - delete html file after too
    - THEN figure out scroll to get more.
*/

module.exports = (message, args) => {
  const { channel } = message
  const gfyUser = args.shift()

  bot.goto(`https://gfycat.com/@${gfyUser}`)
    .click('[ng-click="loadMoreInfinite()"]')
    .html(`./logs/nightmare/${gfyUser}-gifs.html`, 'HTMLComplete')
    .end()
    .catch(() => console.error('RUH ROH'))
    // from here down can be moved out into another file
    .then(() => rimraf(`./logs/nightmare/${gfyUser}-gifs_files`, janitor))
    .then(() => {
      console.log('bye')
      fs.readFile(`./logs/nightmare/${gfyUser}-gifs.html`, 'utf8')
        .then((res) => {
        // parse HTML here
        console.log('hi')
          const $ = cheerio.load(res)
          const result = $('div > a')
          console.log(result, '??')
        })
        .catch(err => console.error('not nice', err))
    })
}


// .evaluate((gfyUser,) => {
//   return document.body.querySelectorAll(`[href^="/%40${gfyUser}"]`)
// }, gfyUser)
// res = {
// '0': { '$$hashKey': 'object:144', jQuery11120002829523431058023: 400},
// '1': { jQuery11120002829523431058023: 405},
// '2': { '$$hashKey': 'object:133', jQuery11120002829523431058023: 388},
// '3': { jQuery11120002829523431058023: 392},
// '4': { jQuery11120002829523431058023: 440},
// '5': { jQuery11120002829523431058023: 455},
// '6': { jQuery11120002829523431058023: 470},
// '7': { jQuery11120002829523431058023: 485},
// '8': { jQuery11120002829523431058023: 445},
// '9': { jQuery11120002829523431058023: 460},
// '10': { jQuery11120002829523431058023: 475},
// '11': { jQuery11120002829523431058023: 490},
// '12': { jQuery11120002829523431058023: 450},
// '13': { jQuery11120002829523431058023: 465},
// '14': { jQuery11120002829523431058023: 480},
// '15': { jQuery11120002829523431058023: 495 }
// }
