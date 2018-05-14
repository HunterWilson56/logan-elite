const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {
let serverembed = new Discord.RichEmbed()
.setFooter(`l!AFK **__DOESNT WORK AT THE MOMENT__**`)
.setColor("RANDOM")
.addField("Commands", "``l!invite``|``l!lockdown``|``l!serverinfo``|``l!userinfo``|``l!bugreport``|``l!AFK``|\n |``l!shorten (shortens links)`` |``l!spotify``|``l!dadjoke``|``l!trump``|``l!mute``|\n|``l!dmteacup``|``l!playdough``|``l!bunny``\n|``l!page``|``l!ship``|``l!pizza``|\n|``l!yesorno``|", true)
message.channel.send(serverembed);

}
