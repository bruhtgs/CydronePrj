import { SlashCommandBuilder } from "discord.js";

export const commands = [
  new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Check whether Cydrone is responding."),
  new SlashCommandBuilder()
    .setName("about")
    .setDescription("Learn what Cydrone is."),
].map((command) => command.toJSON());
