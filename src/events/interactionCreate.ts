import { CacheType, Client, Interaction } from "discord.js"
import commands from "../commands"

export type InteractionCreate = {
  tag: 'interactionCreate'
  name: string
  once: boolean
  execute: (interaction: Interaction<CacheType>) => Promise<void>
}

export const interactionCreate: InteractionCreate = {
  tag: 'interactionCreate',
  name: 'interactionCreate',
  once: false,
  execute: async (interaction) => {
    if (!interaction.isChatInputCommand()) return

    const command = commands.get(interaction.commandName)
    if (!command) return

    try {
      await command.execute(interaction)
    } catch (error) {
      console.log(error)
      await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true })
    }
  }
}
