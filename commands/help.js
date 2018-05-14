const Discord = require("discord.js");
exports.run = async (client, message, args) => {

    const embed = new Discord.RichEmbed()
		.setColor('RANDOM')
        .setTitle(`Help!`)
        .addField('do `l!commands` to see a list of commands','do `l!invite` to see how to get me')

     message.channel.send({embed});
    


}
