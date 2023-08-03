module.exports = {
  name: 'guildCreate',
  async execute(guild, client) {
    console.log(`Bot has joined ${guild.name} server`);
    await guild.commands.set(client.commandData).then(console.log(`Added slash commands to ${guild.name} server`));
  },
};
