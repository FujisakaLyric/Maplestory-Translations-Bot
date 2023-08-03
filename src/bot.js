require('dotenv').config();
const { Client, Collection, Events, GatewayIntentBits } = require('discord.js');
const commandHandler = require('./handlers/commandHandler.js');
const eventHandler = require('./handlers/eventHandler.js');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages] });
client.commands = new Collection();
client.commandData = [];

commandHandler(client);
eventHandler(client);

client.login(process.env.DISCORD_BOT_TOKEN);
