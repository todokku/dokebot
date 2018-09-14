const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.on("ready", () => {
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
  client.user.setPresence({ game: { name: 'as boas velhas do sevre.', type: 2, url: 'https://www.youtube.com/user/DokebuGamer'} });
});

client.on("guildCreate", guild => {
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  client.user.setPresence({ game: { name: 'as boas velhas do sevre.', type: 2, url: 'https://www.youtube.com/user/DokebuGamer'} });
});

client.on("guildDelete", guild => {
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  client.user.setPresence({ game: { name: 'as boas velhas do sevre.', type: 2, url: 'https://www.youtube.com/user/DokebuGamer'} });
});

client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.find(ch => ch.name === '🍆jeral');
    if (!channel) return;
    channel.send(`<a:ztemMuns:461656598197305347>👉 ${member} bem vindo ao servre <a:zbongocat2:471461208394956810>
<:poritos:475692349645783041> <a:azzz:475694148658266112> Leia as <#466060461335379968> e seja 2000% framily cremely <:monetizado:399274284880494602><:dokefingerguns:445312340682866708>`);
});

  client.on("message", async message => {

  if(message.author.bot) return;
  
  if(message.content.indexOf(config.prefix) !== 0) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

});

client.login(config.token);
