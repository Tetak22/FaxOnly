module.exports = {
    name: 'kick',
    description: "This command kicks a member!",
    execute(client, message, args) {
        if (message.member.hasPermission("KICK_MEMBERS")) {

            const target = message.mentions.users.first();
            if (target) {
                const memberTarget = message.guild.members.cache.get(target.id);
                memberTarget.kick();
                message.channel.send("Clan je kickan!");
            } else {
                message.channel.send("Ne mozes kickati tog clana!");
            }

        } else {
            message.channel.send('Sta ti mislis ko si ti nemas dovoljno moci za to brapo!')
        }

    }
}