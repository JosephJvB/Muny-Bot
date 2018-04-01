const { find_number_in_string } = require('./basic-tools')

/*
  message_filter is tied into the channel.awaitMessages function
  it gets called with each message within a response time
  is called with askers name
  so only messages from the person who initiated the !play command return true
  this means awaitMessages will only listen to the initiator of the command
*/

module.exports = (msg, asker) => {
  if (msg.author.username !== asker) return false
  return find_number_in_string(msg.content)
}
