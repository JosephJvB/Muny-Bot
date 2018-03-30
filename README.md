# Muny-Bot


Hi this repo is where I'm going to be playing with discord.js to create a bot for the Discord client. This is the [guide](https://discordjs.guide/#/) I'm using to build my bot.

## Want to join?

Here is the [invitation](https://discord.gg/QBbjjF) link to join Joe's-Bot-Lab and play with the bot. Muny-bot is still young and impressionable, so I won't hesitate to ban you if I think you're going to lead Muny-bot astray.

---

### COMMANDS: //

  - !kick + (username@mention)
  - !cleanup + (number)
  - !args OR !list-args + (arguments)
  - !guide

---

### TODOS: //

* info/help command

* `https://discordjs.guide/#/popular-topics/miscellaneous-examples`
  -> keen-as on a youtube player in the bot
  -> seems like ytdl-core doesnt handle the youtube search so I might have to custom  that:       https://developers.google.com/youtube/v3/code_samples/javascript#search-by-keyword

* make a slide into DM's command that makes the bot DM you something saucy ;)

* emojies in bot replies, and bot reacting to messages with emojies 💯
  -> `https://emojipedia.org/search/?q=100`
  -> create a custom emoji library to export from? eg: `import { map, hunnid } from './emojies`

* cooldowns


---

### FILE STRUCTURE: //


  -> A top level index. Contains `Client.on(*event*)'s`

  -> imports bot modules (event handlers) to deal with the 'event' cases.
  - eg: { handle_message, handle_join ... } = require('./src/events')

    -> Right so their event/command structure is nice since all their commands are objects, it means when a user calls !help on a command, they can list the object to describe it to the user it seems.
    Just means my !help command is gonna be a bit beefy :)

---

### SYNTAX: //

I'm having a go at not using camelCase:
  - kebab case for file names. `kebab-case`
  - train case for variables. `train_case`
