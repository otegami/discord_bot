import { CacheType, ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";

const pingCommand = new SlashCommandBuilder().setName('ping').setDescription('Replies with Pong!')
const pingExecute = async (interaction: ChatInputCommandInteraction<CacheType>) => { await interaction.reply('Pong!') }

export { pingCommand, pingExecute }
