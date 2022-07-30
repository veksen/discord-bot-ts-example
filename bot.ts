import Discord, { GatewayIntentBits } from "discord.js";
import { config } from "dotenv";

config();

const client = new Discord.Client({ intents: [GatewayIntentBits.Guilds] });

client.once("ready", () => {
  console.log("Ready!");
});

client.login(process.env.BOT_TOKEN);
