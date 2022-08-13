import { CacheType, ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";

const userCommand = new SlashCommandBuilder().setName('user').setDescription('Replies with user info!')
const userExecute = async (interaction: ChatInputCommandInteraction<CacheType>) => {
  await interaction.reply(`Your tag: ${interaction.user.tag}\nYour id: ${interaction.user.id}`)
}

export { userCommand, userExecute }
