import { Client } from "discord.js";

export type Ready = {
  tag: 'ready'
  name: string
  once: boolean
  execute: (interaction: Client<boolean>) => void
}

export const ready: Ready = {
  tag: 'ready',
  name: 'ready',
  once: true,
  execute: (client: Client<boolean>) => { console.log(`Ready! Logged in as ${client.user?.tag}`) }
}
