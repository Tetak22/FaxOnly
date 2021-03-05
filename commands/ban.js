module.exports = {
    name: 'ban',
    description: "This command bans a member!",
    execute(client, message, args){
        if(message.member.hasPermission("BAN_MEMBERS")){

            const target = message.mentions.users.first();
        if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.kick();
            message.channel.send("Clan je banan!");
        }else{
            message.channel.send("Ne mozes banati tog clana!");
        }

        } else{
            message.channel.send('Sta ti mislis ko si ti nemas dovoljno moci za to brapo!')
        }

    }
}