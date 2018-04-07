`message.channel.type` = text, dm or voice? but you cant enter text in a voice channel..

HOW TO HANDLE STOPPING A YT AUDIO STREAM
```
var connection, dispatcher;

if(message.content == "play") {
if(!message.guild.me.voiceChannel)
    message.member.voiceChannel.join().then((con) => connection = con);
dispatcher = connection.playFile(blah);
}

if(message.content == "end" && dispatcher) //checks if dispatcher has been defined 
        dispatcher.end();
        ```

"start": "pm2 start ./index.js --name 'Muny-bot' --watch",
"stop": "pm2 delete all"

```
<message>.channel.send('My message to react to.').then(sentMessage => {
    sentMessage.react('👍');
    sentMessage.react('<emoji id>');
});
```

`message.author.displayAvatarURL`
`message.mentions.users.map(user => user.displayAvatarURL)`
`message.reply`
`message.mentions.users.size`
`message.channel.bulkDelete(amount)`

make bot recognise emoji commands

I want to do a delete / bulkDelete command.
I wonder what happens to the logs when a delete command is sent? Will it delete the messages from the logs?

Im sure I could create a case where no delete occurs, or even cooler would be to not delete AND indicate messages that have been deleted from the server.

EVENTS TO HANDLE: //

```
Client.on('*')

channelCreate
channelDelete
channelPinsUpdate
channelUpdate
clientUserGuildSettingsUpdate
clientUserSettingsUpdate
debug
disconnect
emojiCreate
emojiDelete
emojiUpdate
error
guildBanAdd
guildBanRemove
guildCreate
guildDelete
guildMemberAdd
guildMemberAvailable
guildMemberRemove
guildMembersChunk
guildMemberSpeaking
guildMemberUpdate
guildUnavailable
guildUpdate
message
messageDelete
messageDeleteBulk
messageReactionAdd
messageReactionRemove
messageReactionRemoveAll
messageUpdate
presenceUpdate
ready
reconnecting
resume
roleCreate
roleDelete
roleUpdate
typingStart
typingStop
userNoteUpdate
userUpdate
voiceStateUpdate
warn

```