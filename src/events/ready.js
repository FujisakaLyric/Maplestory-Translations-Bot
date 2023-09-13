module.exports = {
  name: 'ready',
  once: true,
  async execute(client) {
    client.guilds.cache.forEach(async guild => {
      await guild.commands.set(client.commandData).then(console.log(`Added slash commands to ${guild.name} server`));
    });

    client.user.setActivity('With Lolis');

    console.log(`Ready! Logged in as ${client.user.tag}`);
  },
};
