const Nightmare = require('nightmare')
const bot = Nightmare({show: true})

/*
  STEPS: //
    - click Load More
    - scroll to bottom somehow...
    - get html of page
    - get all gfycat hrefs
*/

module.exports = (message, args) => {
  const { channel } = message
  const gfyUser = args.shift()

  console.log('hit', gfyUser)

  bot.goto(`https://gfycat.com/@${gfyUser}`)
    .click('[ng-click="loadMoreInfinite()"]')
    .evaluate((gfyUser,) => {
      return document.querySelectorAll(`[href^="/%40${gfyUser}"]`)
    }, gfyUser)
    .end()
    .catch(err => console.log(err))
    .then(res => console.log(res, 'done'))
}