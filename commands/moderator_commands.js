module.exports = {
    name: 'mod_help',
    description: "This command sends help about moderator commands to user member!",
    execute(clinet, message, args, Discord) {
        const newEmbeds = new Discord.MessageEmbed()
        .setColor('#fb8b00')
        .setTitle('Help')
        .setURL('https://trovo.live/Renci?adtag=user.Tetak22.clip')
        .setDescription('These are ***The Moderation commands***')
        .addFields(
            {name: '***Ban***', value: '``Bans a member you tag``'},
            {name: '***Kick***', value: '``Kicks member you tag``!'},
            {name: '***Mute***', value: '``Mute member that you tag``!'},
            {name: '***Unmute***', value: '``Unmute member that you tag``!'},
            {name: '***Clear***', value: '``Clears messages``!'},
        )
        .setImage('https://imgur.com/gallery/VWjRf')
        .setFooter('Make sure you read and follow the rules!');

        message.channel.send(newEmbeds);
    }

} 