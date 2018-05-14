const snek = require('snekfetch');
const Discord = require('discord.js');
const api = "https://api.whatdoestrumpthink.com/api/v1/quotes/random";

module.exports.run = (client, message, args, tools) => {
    snek.get(api).then(r => {
        let embed = new Discord.RichEmbed()
        .setTitle('Trump quotes generator')
        .setDescription(r.body.message)
        .setColor('RANDOM')
        message.channel.send(embed)
    })
} 