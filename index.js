const watch = require('node-watch');
const { Client, GatewayIntentBits } = require('discord.js');
const { token, id_channel } = require('./config.json');

const bot = new Client({ intents: [GatewayIntentBits.Guilds] });

bot.on('ready', function() {
	console.log(`${bot.user.username} is working!`);
});

bot.login(token);

watch('./monitoredFolder', { recursive: true }, function(evt, name) {
	const channel = bot.channels.cache.get(id_channel);
	if (evt === 'update') {
		const fileName = name.split('/').at(-1);
		console.log(`send fies ${fileName}`);
		channel.send({ files: [{ attachment: `./monitoredFolder/${fileName}` }]	});
	}
});