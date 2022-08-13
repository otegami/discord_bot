import { InteractionCreate, interactionCreate } from "./interactionCreate";
import { Ready, ready } from "./ready";

type Event = Ready | InteractionCreate

export const events: Event[] = [
  ready,
  interactionCreate
]
