module.exports = (message) => {
  message.channel.send('https://discord.js.org/#/docs/main/stable/general/welcome 🤔')
    .then(docs => docs.react('🤔'))
}
