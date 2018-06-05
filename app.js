console.log('Opening app.js');
// Require Packages
const Discord = require('discord.js');

const db = require('quick.db');

// Configure Packages
const client = new Discord.Client();
const prefix = 'l!';

client.login(process.env.token);
client.on('ready', () => {
  console.log('Shard Count: ', client.shard.count);
  client.channels.get('441349190136627210').send('Shard Count: ', client.shard.count);
  db.set('test', 1).then(i => console.log('Set: ', i));
}); 
