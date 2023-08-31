const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('genshinstat')
		.setDescription('Gives stat of the genshin item requested'),
	async execute(interaction) {
		return interaction.reply('u are gay!');
	},
};