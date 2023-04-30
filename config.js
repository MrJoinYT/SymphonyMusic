module.exports = {
	TOKEN: "MTA5OTI4NzIwODQwNzYxMzUzMA.GLF3PW.Abuf7HG_If7bYYUgM6JqYk02R5BAU4nAtjMKL0",
	ownerID: ["535451260183379988"], //write your discord user id. example: ["id"] or ["id1","id2"]
	botInvite: "https://discord.com/api/oauth2/authorize?client_id=1099287208407613530&permissions=277028603968&scope=bot%20applications.commands", //write your discord bot invite.
	supportServer: "https://discord.gg/xA9Y8AW", //write your discord bot support server invite.
	mongodbURL: "mongodb+srv://dev0:bd1kIqEPwGPR3daF@cluster0.gn7gz7i.mongodb.net/?retryWrites=true&w=majority", //write your mongodb url.
	status: 'Cool Music',
	commandsDir: './commands', //Please don't touch
	language: "en", //en, tr, nl, pt, fr, ar, zh_TW, it
	embedColor: "05BFDB", //hex color code
	errorLog: "", //write your discord error log channel id.


	sponsor: {
		status: true, //true or false
		url: "https://discord.gg/xA9Y8AW", //write your discord sponsor url.
	},

	voteManager: { //optional
		status: true, //true or false
		api_key: "", //write your top.gg api key. 
		vote_commands: ["back", "channel", "clear", "dj", "filter", "loop", "nowplaying", "pause", "playlist", "queue", "resume", "save", "search",  "time", "volume"], //write your use by vote commands.
		vote_url: "", //write your top.gg vote url.
	},

	shardManager: {
		shardStatus: false //If your bot exists on more than 1000 servers, change this part to true.
	},

	playlistSettings: {
		maxPlaylist: 20, //max playlist count
		maxMusic: 75, //max music count
	},

	opt: {
		DJ: {
			commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'skip', 'stop', 'volume', 'shuffle'] //Please don't touch
		},

		voiceConfig: {
			leaveOnFinish: false, //If this variable is "true", the bot will leave the channel the music ends.
			leaveOnStop: false, //If this variable is "true", the bot will leave the channel when the music is stopped.

			leaveOnEmpty: { //The leaveOnEnd variable must be "false" to use this system.
				status: true, //If this variable is "true", the bot will leave the channel when the bot is offline.
				cooldown: 10000000, //1000 = 1 second
			},

		},

		maxVol: 150, //You can specify the maximum volume level.

	}
}
