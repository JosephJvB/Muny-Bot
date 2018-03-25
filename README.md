# Muny-Bot


Hi this repo is where I'm going to be playing with discord.js to create a bot for the Discord client. This is the [guide](https://discordjs.guide/#/) I'm using to build my bot.

## Want to join?

Here is the [invitation](https://discord.gg/QBbjjF) link to join Joe's-Bot-Lab and play with the bot. Muny-bot is still young and impressionable, so I won't hesitate to ban you if I think you're going to lead Muny-bot astray.

## COMMANDS: //

  - !kick (username@mention)
  - !cleanup (number)
  - !args aka !list-args (arguments)
  - !guide

TODOS: //
* be able to restart my server from discord? console.log(rs)? would that work?
* make a check so users cant excecute commands in Direct Messages
* delete message feature
  -> got some basic deletes happening.
  -> Doesnt remove messages from my logs. of course it doesnt :)
* cooldowns
* command aliases
* info section that describes commands
  -> easy to handle with my structure it seems...

FILE STRUCTURE: //


  -> A top level index. Contains `Client.on(*event*)'s`

  -> imports bot modules (event handlers) to deal with the 'event' cases.
  - eg: { handle_message, handle_ready ... } = require('./bot')

  -> I have already made a command & event handling structure. I've only just read up to the part in the guide where they describe it, and as it stands I'm happy with my version. We'll see if there are issues down the track...
    -> Right so theirs is nice since all their commands are objects, it means when a user calls !help on a command, they can list the object to describe it to the user it seems.
    Just means my !help command is gonna be a bit beefy :)

SYNTAX: //

I'm having a go at not using camelCase:
  - kebab case for file names. `kebab-case`
  - train case for variables. `train_case`
