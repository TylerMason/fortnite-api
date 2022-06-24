require('dotenv').config()
const Discord = require('discord.js')
const axios = require('axios')
const chalk = require('chalk')
const fs = require('fs')

const client = new Discord.Client({
    intents : ['GUILDS', 'GUILD_MESSAGES', 'GUILD_MEMBERS']
})

client.on("ready", async() => {
    console.log(chalk.bold.green(`Discord Bot ${client.user.tag} is online!`))
    const commands = await client.application.commands.fetch()
    const mapslash = require('./slash-json/map.json')
    if (!commands.get("map")) {
        console.log(chalk.red("Map command isn't registered"))
        client.application.commands.create(mapslash)
        .catch(e => {
            console.error(e)
        })
        .then(slash => {
            console.log(`Slash command ${slash.name} is now being deployed.`)
        })
    }
})


client.login(process.env.TOKEN)