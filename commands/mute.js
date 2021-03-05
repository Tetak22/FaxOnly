const ms = require('ms');
module.exports = {
    name: 'mute',
    description: "This command mute member",
    execute(client, message, args) {
        if(message.member.hasPermission("MUTE_MEMBERS")){

        const target = message.mentions.users.first();
        if (target) {
            let mainRole = message.guild.roles.cache.find(role => role.name === 'Community');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Mute');


            let memberTarget = message.guild.members.cache.get(target.id);

            if (!args[1]) {
                memberTarget.roles.remove(mainRole.id);
                memberTarget.roles.add(muteRole.id);
                message.channel.send(`<@${memberTarget.user.id}> je sada mjutan!`);
                return
            }
            memberTarget.roles.remove(mainRole.id);
            memberTarget.roles.add(muteRole.id);
            message.channel.send(`<@${memberTarget.user.id}> je sada mjutan na ${ms(ms(args[1]))}`);

            setTimeout(function () {
                memberTarget.roles.remove(muteRole.id);
                memberTarget.roles.add(mainRole.id);
            }, ms(args[1]));
        } else {
            message.channel.send('Ne mogu pronaci tog clana!');
        }

        } else {
            message.channel.send('Sta ti mislis ko si ti nemas dovoljno moci za to brapo!')
    
        }
    }
}