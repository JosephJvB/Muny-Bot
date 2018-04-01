const fs = require('mz/fs')

module.exports = ({ author: { username }, content, createdAt }) => {
  const time = createdAt.toString().split('T')[0].split(' ')

  const title = time.slice(0, 3).join('-')
  const nextMsg = `@[${time[4]}] ${username}: ${content}`

  fs.readFile(`${__dirname}/../../logs/${title}.txt`, 'utf8')
    // if readFile succeeds, add new message to file data
    .then(msgData =>
      fs.writeFile(`${__dirname}/../../logs/${title}.txt`, `${msgData}\n${nextMsg}`, 'utf8'))

    // if no file exists: catch error and create new file
    .catch(() => fs.writeFile(`${__dirname}/../../logs/${title}.txt`, `BIG SMILE NEW FILE\n\n${nextMsg}`, 'utf8'))
}
