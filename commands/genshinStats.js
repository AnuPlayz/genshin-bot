const { SlashCommandBuilder } = require('discord.js');
const { request } = require('undici');


module.exports = {
	data: new SlashCommandBuilder()
		.setName('genshinstat')
		.setDescription('Gives stat of the genshin item requested')
		.addStringOption(option =>
			option
				.setName('item')
				.setDescription('Enter item you wanna search')
				.setRequired(true)),
	async execute(interaction) {
		const query = interaction.options.getString('item');
		const result = await request(`https://https://api.genshin.dev/characters/${query}`);
		const { list } = await result.body.json();
		
		console.log(list);
		return interaction.reply('u are gay!');
	},
};