const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log(`6tou!!!11 ${client.users.size} Usuarios.`); 
  client.user.setPresence({ game: { name: 'October Poop 💩', type: 2, url: 'https://www.youtube.com/channel/UCJMy6zh6BUEK4hydRlbuQeg'} });
});

client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.find(ch => ch.name === '🍵vem-bindo');
    if (!channel) return
    channel.send(`
<a:ztemMuns:461656598197305347>👉 Olá ${member}, seja vem bindo ao servre! <:porocoolguy:497444402722111488>
<a:azzz:475694148658266112> <:poritos:475692349645783041> Leia as <#466060461335379968> e clique no link do final para ser verificado e poder utilizar os chats escondidos <:monetizado:399274284880494602><:dokefingerguns:445312340682866708>`);
});

client.login(process.env.BOT_TOKEN);
