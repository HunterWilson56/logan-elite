const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    if (message.author.bot) return;
    message.delete()

    var msg = message.content.toUpperCase();
    var args = msg.split(" ")
    if (!args[1]) return message.channel.send("`You have to provide a message for me to say!`");
    let arg = message.content.split(" ").slice(1);
    message.channel.send(arg.join(" "));

};