import * as dotenv from 'dotenv'
import { Client, GatewayIntentBits } from 'discord.js'
import commands from './commands'

const client = new Client({ intents: [GatewayIntentBits.Guilds] })

client.once('ready', () => {
  console.log('Ready')
})

client.on('interactionCreate', async (interaction) => {
  if (!interaction.isChatInputCommand()) return

  const command = commands.get(interaction.commandName)
  if (!command) return

  try {
    await command.execute(interaction)
  } catch (error) {
    console.log(error)
    await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true })
  }
})

dotenv.config()
client.login(process.env.DISCORD_TOKEN)
