import * as dotenv from 'dotenv'
import { CacheType, Client, GatewayIntentBits, Interaction } from 'discord.js'
import commands from './commands'
import { events } from './events'

const client = new Client({ intents: [GatewayIntentBits.Guilds] })

// 良い感じに書けなかったので別途考える
events.forEach((event) => {
  if (event.tag === 'ready') {
    client.once(event.name, (client: Client<boolean>) => event.execute(client))
  }
  if (event.tag === 'interactionCreate') {
    client.on(event.name, (interaction: Interaction<CacheType>) => event.execute(interaction))
  }
})

dotenv.config()
client.login(process.env.DISCORD_TOKEN)
