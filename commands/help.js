module.exports = {
    name: 'help',
    description: "This command sends help to user member!",
    execute(clinet, message, args, Discord) {
        const newEmbeds = new Discord.MessageEmbed()
        .setColor('#fb8b00')
        .setTitle('Help')
        .setURL('https://trovo.live/Renci?adtag=user.Tetak22.clip')
        .setDescription('These are The server rules')
        .addFields(
            {name: 'Help 1', value: '``mod_help``'},
            {name: 'Help 2', value: '``rules``'},
            
        )
        .setImage('https://imgur.com/gallery/VWjRf')
        .setFooter('Make sure you read and follow the rules!');

        message.channel.send(newEmbeds);
    }

}  