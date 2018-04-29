const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {
let serverembed = new Discord.RichEmbed()
.setFooter(`l!AFK **__DOESNT WORK AT THE MOMENT__**`)
.setColor("RANDOM")
.addField("Commands", "l!invite|l!lockdown|l!serverinfo|l!userinfo|l!bugreport|l!AFK|l!shorten (shortens links)|l!spotify|", true)
message.channel.send(serverembed);

}
