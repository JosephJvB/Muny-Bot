const fs = require('mz/fs')

module.exports = ({ author: { username }, content, createdAt }) => {

  const time = createdAt.toString().split('T')[0].split(' ')

  const title = time.slice(0, 3).join('-')
  const nextMsg = `@[${time[4]}] ${username}: ${content}`

    fs.readFile(`${__dirname}/../logs/${title}.txt`, 'utf8')
    .catch(err => console.log(err))
    .then(msgData => {
      // if no msg data, it's the start of a new file
      // if data exists, then add the new message at the end
      !msgData
      ? fs.writeFile(`${__dirname}/../logs/${title}.txt`, 'BIG SMILE, NEW FILE' + '\n' + '\n' + nextMsg, 'utf8')
      : fs.writeFile(`${__dirname}/../logs/${title}.txt`, msgData + '\n' + nextMsg, 'utf8')
      // \n to create a new line between messages
    })

}

// i tried to do the writeFile for a new file in the .catch()
// but both .catch() && the .then() are being called?