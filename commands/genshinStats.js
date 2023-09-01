const { SlashCommandBuilder } = require('discord.js');

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
			const response = await fetch(`https://api.genshin.dev/characters/${query}`);
			var data = await response.json();
			console.log(data);
		return interaction.reply(`${data.name} is his name and ${data.title} is his title gay\nHis vision is ${data.vision} and he uses ${data.weapon}\nHe works with ${data.affiliation} in ${data.nation}`);
	},
};