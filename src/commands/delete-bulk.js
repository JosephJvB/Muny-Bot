module.exports = (message, args) => {

  const { channel } = message
  let amount = args[0]
  
  // handle errors
  if(!amount) {
    return channel.send('I need more direction in my life,\nplease tell me how many messages to delete')
  }
  if(isNaN(amount)) {
    return channel.send(`Mayonnaise is not an instrument, Patrick.\nAnd '${amount}' is not a number`)
  }

  // remove decimal values
  amount = Number(amount).toFixed(0)

  // max delete = 10
  // min delete = 1
  amount = amount > 10
    ? 10
    : amount < 1
      ? 1
      : amount

  // 2nd arg "true" prevents error if user tries to delete messages older than 2 weeks
  channel.bulkDelete(amount, true)
}