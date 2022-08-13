import * as dotenv from 'dotenv'
import { REST, Routes, SlashCommandBuilder } from "discord.js";

dotenv.config()
const token = process.env.DISCORD_TOKEN ?? ''
const clientId = process.env.CLIENT_ID ?? ''
const guildId = process.env.GUILD_ID ?? ''

if (!token.length) { console.log('DISCORD_TOKEN が登録されてないよ') }
if (!clientId) { console.log('CLIENT_ID が登録されてないよ') }
if (!guildId) { console.log('GUILD_ID が登録されてないよ') }

const commands = [
  new SlashCommandBuilder().setName('ping').setDescription('Replies with pong!'),
  new SlashCommandBuilder().setName('server').setDescription('Replies with server info!'),
  new SlashCommandBuilder().setName('user').setDescription('Replies with user info!'),
].map((command) => command.toJSON())

const rest = new REST({ version: '10' }).setToken(token)

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
  .then(() => console.log('Successfully registered application commands.'))
  .catch(console.error)

// 削除したい command の id を指定する
rest.delete(Routes.applicationGuildCommand(clientId, guildId, 'commandId'))
  .then(() => console.log('Successfully deleted guild command'))
  .catch(console.error)
