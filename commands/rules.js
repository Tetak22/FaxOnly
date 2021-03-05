module.exports = {
    name: 'rules',
    description: "This command sends rules to user member!",
    execute(clinet, message, args, Discord) {
        const newEmbeds = new Discord.MessageEmbed()
        .setColor('#fb8b00')
        .setTitle('Pravila')
        .setURL('https://trovo.live/Renci?adtag=user.Tetak22.clip')
        .setDescription('These are The server rules')
        .addFields(
            {name: 'Rule 1', value: 'Hate speech is not allowed!'},
            {name: 'Rule 2', value: 'Racism and any other type of discrimination towards other people is not allowed!'},
            {name: 'Rule 3', value: 'Toxicity is allowed only in NSFW channel!'},
            
        )
        .setImage('https://imgur.com/gallery/VWjRf')
        .setFooter('Make sure you read and follow the rules!');

        message.channel.send(newEmbeds);
    }

}  