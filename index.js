const watch = require('node-watch');
const { Client, GatewayIntentBits } = require('discord.js');
const { token, id_channel } = require('./config.json');

const bot = new Client({ intents: [GatewayIntentBits.Guilds] });

watch('./monitoredFolder', { recursive: true }, function(evt, name) {
	const fileName = name.split('/').at(-1);
	console.log(fileName);
	const channel = bot.channels.cache.get(id_channel);
	channel.send({
		files: ['https://cdn.discordapp.com/attachments/346310233322422300/1071172475741818900/image.png'],
	});
	// channel.send({
	// 	files: [{
	// 		attachment: '/home/srj/discord-bot/image/photo_2023-02-02_18-05-44.jpg',
	// 		name: 'photo_2023-02-02_18-05-44.jpg',
	// 		description: 'A description of the file',
	// 	}],
	// })
	// 	.then(console.log)
	// 	.catch(console.error);
});

bot.on('ready', function() {
	console.log(bot.user.username + ' запустился!');
});

bot.login(token);
