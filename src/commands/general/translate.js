// const jobList = require('../util/jobList.json');
// const bossList = require('../util/bossList.json');
// const difficultyList = require('../util/difficultyList.json');
// const mapList = require('../util/mapList.json');

const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('translate')
		.setDescription('Test /translate!'),
	async execute(interaction) {
		await interaction.reply('Translating...');
	},
};
