module.exports = (message, args) => {
  if(!args.size) return message.reply('Please give me some arguments to list!')
 return message.channel.send('Your args, m\'lady: ', args)
}

