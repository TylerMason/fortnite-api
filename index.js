require('dotenv').config()
const Discord = require('discord.js')
const axios = require('axios')

const client = new Discord.Client({
    intents : ['GUILDS', 'GUILD_MESSAGES', 'GUILD_MEMBERS']
})

client.login()