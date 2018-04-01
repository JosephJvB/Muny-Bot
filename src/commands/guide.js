module.exports = message => {
  message.channel.send('https://discordjs.guide/#/ 🗺')
    .then(guide => guide.react('🗺'))
}
