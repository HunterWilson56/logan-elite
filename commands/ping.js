const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
const time = await message.channel.send("Pong")
message.channel.bulkDelete(1),
message.channel.send({embed: {
    title: "**Pong!**",
    color: 613357,
    description: `**Latency:** ${time.createdTimestamp - message.createdTimestamp}ms\n**API Latency:** ${Math.round(client.ping)}ms`
}})
}
