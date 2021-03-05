module.exports = {
    name: 'unmute',
    description: "This command unmute member",
    execute(clinet, message, args) {
        if (message.member.hasPermission("MUTE_MEMBERS")){

            const target = message.mentions.users.first();
        if (target) {
            let mainRole = message.guild.roles.cache.find(role => role.name === 'Community');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Mute');

            let memberTarget = message.guild.members.cache.get(target.id);

            memberTarget.roles.remove(muteRole.id);
            memberTarget.roles.add(mainRole.id);
            message.channel.send(`<@${memberTarget.user.id}> je sada unmjutan!`);
        } else {
            message.channel.send('Ne mogu pronaci tog clana!');
        }
        

    } else {
        message.channel.send('Sta ti mislis ko si ti nemas dovoljno moci za to brapo!')
    }    

    }
}