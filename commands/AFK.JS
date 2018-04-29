// NOTE:
// The following code is part of the <client>.on('message') event:
// Modules Required: quick.db


// Access the 'AFK' table w/ Quick.db



// NOTE:
// The following code is a command:


const Discord = require('discord.js'),
  	  db = require('quick.db');

exports.run = async (client, message, args, tools) => {

  // Create a new 'AFK' table w/ Quick.db
  const status = new db.table('AFKs');

  // Fetch user object from that table
  let afk = await status.fetch(message.author.id);

  // Form Embed
  const embed = new Discord.MessageEmbed()
    .setColor(0xffffff)

  if (!afk) { // Run if they are NOT afk, or afk is null
    embed.setFooter('You are now AFK.'); // Modify Embed
    // Add the user to the AFK pool
    status.set(message.author.id, args.join(' ') || `Sorry, ${message.author.username} is AFK.`);
  } else { // Run if they ARE afk
    embed.setFooter('You are no longer AFK.'); // Modify Embed
    // Remove the user from the AFK pool
    status.delete(message.author.id);
  }

  // Send Embed
  message.channel.send(embed);

}
let status = new db.table('AFKs');

// Check if author is AFK
let authorStatus =  afk.fetch(message.author.id);

if (authorStatus) { // Run if they are AFK

  const embed = new Discord.MessageEmbed()
    .setColor(0xffffff)
    .setFooter(`${message.author.username} is no longer AFK.`)
	
  // Send a 'You are no longer AFK message'
  message.channel.send(embed).then(i => i.delete({
    timeout: 5000
  }))
  
  // This will delete the user from the AFK pool in the database
  afk.delete(message.author.id);

}

let mentioned = message.mentions.members.first(); // This will store the first member mentioned
if (mentioned) { // This will run if a member is mentioned

  // Access AFK Status
  let status = await afk.fetch(mentioned.id);

  if (status) { // This will run if they are AFK (since the db will return true)

    // Form Embed
    const embed = new Discord.MessageEmbed()
      .setColor(0xffffff)
      .setFooter(status);

    // Send Embed
    message.channel.send(embed);

  }

}