import { CacheType, ChatInputCommandInteraction, Collection, SlashCommandBuilder } from 'discord.js'
import { pingCommand, pingExecute } from './ping'
import { serverCommand, serverExecute } from './server'
import { userCommand, userExecute } from './user'

type Command = {
  command: SlashCommandBuilder
  execute: (interaction: ChatInputCommandInteraction<CacheType>) => Promise<void>
}

const commands = new Collection<string, Command>()
commands.set(pingCommand.name, { command: pingCommand, execute: pingExecute })
commands.set(serverCommand.name, { command: serverCommand, execute: serverExecute })
commands.set(userCommand.name, { command: userCommand, execute: userExecute })

export default commands
