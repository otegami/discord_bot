declare global {
  namespace NodeJS {
    interface ProcessENV {
      DISCORD_TOKEN: string
    }
  }
}
