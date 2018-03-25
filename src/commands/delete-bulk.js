module.exports = (message, args) => {

  const { channel } = message
  const amount = args[0]
  
  // handle errors
  if(!amount) {
    return channel.send('I need more direction in my life,\nplease tell me how many messages to delete')
  }
  if(isNaN(Number(amount))) {
    return channel.send(`Mayonnaise is not an instrument, Patrick.\nAnd '${amount}' is not a number`)
  }

  if(amount < 1) return channel.send('I\'m only willing to delete messages if you give me a number greater than zero here.')

  // only delete 10 messages at a time
  const capped_amount = amount > 10 ? 10 : amount

  // 2nd arg "true" prevents error if user tries to delete messages older than 2 weeks
  channel.bulkDelete(capped_amount, true)
}