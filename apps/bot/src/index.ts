import {
  Client,
  Events,
  GatewayIntentBits,
  MessageFlags,
} from "discord.js";
import { config } from "./config.js";

const client = new Client({
  intents: [GatewayIntentBits.Guilds],
});

client.once(Events.ClientReady, (readyClient) => {
  console.log(`Cydrone is online as ${readyClient.user.tag}`);
});

client.on(Events.InteractionCreate, async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "ping") {
    await interaction.reply({
      content: "Pong. Cydrone is online.",
      flags: MessageFlags.Ephemeral,
    });
    return;
  }

  if (interaction.commandName === "about") {
    await interaction.reply({
      content:
        "I'm Cydrone — a community platform built around security, automation, community, management, entertainment, insight, and conversation.",
      flags: MessageFlags.Ephemeral,
    });
  }
});

client.on(Events.Error, (error) => {
  console.error("Discord client error:", error);
});

await client.login(config.DISCORD_TOKEN);
