import { CacheType, ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";

const serverCommand = new SlashCommandBuilder().setName('server').setDescription('Replies with server info!')
const serverExecute = async (interaction: ChatInputCommandInteraction<CacheType>) => {
  await interaction.reply(`Server name: ${interaction.guild?.name}\nTotal members: ${interaction.guild?.memberCount}`)
}

export { serverCommand, serverExecute }
