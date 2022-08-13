import * as dotenv from 'dotenv'
import { Client, GatewayIntentBits } from 'discord.js'

const client = new Client({ intents: [GatewayIntentBits.Guilds] })

client.once('ready', () => {
  console.log('Ready')
})

dotenv.config()
client.login(process.env.DISCORD_TOKEN)
