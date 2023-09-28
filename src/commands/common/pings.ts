import {
  ActionRowBuilder,
  ApplicationCommandType,
  ButtonBuilder,
  ButtonStyle,
  Collection,
} from "discord.js";
import { Command } from "../../structs/types/Command";
import { Interaction } from "aoi.js";

export default new Command({
  name: "ping",
  description: "Reply with pong!",
  type: ApplicationCommandType.ChatInput,
  run({ interaction }) {
    const row = new ActionRowBuilder<ButtonBuilder>({
      components: [
        new ButtonBuilder({
          customId: "test-button",
          label: "Clique aqui",
          style: ButtonStyle.Success,
        }),
      ],
    });
    interaction.reply({
      ephemeral: false,
      content: "pong!",
      components: [row],
    });
  },

  buttons: new Collection([
    [
      "test-button",
      async (interaction) => {
        interaction.update({ components: [] });
      },
    ],
  ]),
});
