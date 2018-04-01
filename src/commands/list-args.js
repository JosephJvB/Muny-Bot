module.exports = (message, args) => {
  const seperate_args = args.join(', ')
  if (!args.length) return message.reply('Please give me some arguments to list!')
  return message.channel.send(`Your args, m\'lady: ${seperate_args}`)
}
