module.exports = {
  name: 'interactionCreate',
  async execute(interaction, client) {
      if (!interaction.isChatInputCommand()) return;

      const command = client.commands.get(interaction.commandName);

      if (!command) return;

      try {
          await command.execute(interaction, client);
          return console.log(`${interaction.user.username} used ${interaction.commandName}.`);
      }
      catch (error) {
          console.error(error);
          return await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
      }
  },
};
