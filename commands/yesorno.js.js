const superagent = require('superagent');
const Discord = require('discord.js');

exports.run = async (client, message, args, tools) => {
    let color = ''
      const { body } = await superagent
    .get('https://yesno.wtf/api/');
    if(body.answer === 'yes') color = '0x01DF01';
    if(body.answer === 'no') color = '0xFF0000';
    const embed = new Discord.RichEmbed()
    .setColor(color)
    .setImage(`${body.image}`)
    message.channel.send(`The magic API says: **${body.answer}**`, {embed});

}