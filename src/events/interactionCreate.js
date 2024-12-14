const kmsList = require('../util/kms.json');
const jmsList = require('../util/jms.json');
const tmsList = require('../util/tms.json');

let hashList = {
  "KMS": kmsList,
  "JMS": jmsList,
  "TMS": tmsList
};

module.exports = {
  name: 'interactionCreate',
  async execute(interaction, client) {
      if (interaction.isAutocomplete()) {
        const focusedOption = interaction.options.getFocused(true);
        const subCommandGroup = interaction.options.getSubcommandGroup().toUpperCase();
        const subCommand = focusedOption.name.toLowerCase();
        
        const filteredChoices = Object.keys(hashList[subCommandGroup][subCommand]).filter((name) => 
          name.toLowerCase().startsWith(focusedOption.value.toLowerCase())
        );

        const results = filteredChoices.map((choice) => {
          return {
            name: choice,
            value: choice,
          }
        });

        interaction.respond(results.slice(0, 25)).catch(() => {});
        return;
      }

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
