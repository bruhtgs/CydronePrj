import { REST, Routes } from "discord.js";
import { config } from "./config.js";
import { commands } from "./commands.js";

const rest = new REST({ version: "10" }).setToken(config.DISCORD_TOKEN);

try {
  const route = config.DISCORD_GUILD_ID
    ? Routes.applicationGuildCommands(config.DISCORD_CLIENT_ID, config.DISCORD_GUILD_ID)
    : Routes.applicationCommands(config.DISCORD_CLIENT_ID);

  await rest.put(route, { body: commands });
  console.log(
    config.DISCORD_GUILD_ID
      ? `Registered ${commands.length} guild commands.`
      : `Registered ${commands.length} global commands. Global command propagation can take time.`,
  );
} catch (error) {
  console.error("Failed to register Discord commands:", error);
  process.exitCode = 1;
}
