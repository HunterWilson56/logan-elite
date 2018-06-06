const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {


          
const embed = new Discord.MessageEmbed()
.setTitle('Server Information')
.setURL('https://discord.io/elxiedev')
.addField('•Source Code',':: http://bit.ly/elxiecode')
.addField('• Youtube ','::http://bit.ly/elxieyt')
.setFooter('Invite Elxie To You Server!')
          
  const let = message.guild.channels.get('442454078954668032')
  let.send(embed)
   message.channel.send("Message Has Been Updated!")




}

