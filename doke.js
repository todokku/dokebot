const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log(`6tou!!!11 ${client.users.size} Usuarios.`); 
  client.user.setPresence({ game: { name: '*gay noises*', type: 2, url: 'link ~~e zelda~~'} });

client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.find(ch => ch.name === '🍆jeral');
    if (!channel) return;
    channel.send(`<a:ztemMuns:461656598197305347>👉 ${member} bem vindo ao servre <a:zbongocat2:471461208394956810>
<:poritos:475692349645783041> <a:azzz:475694148658266112> Leia as <#466060461335379968> e seja 2000% framily cremely <:monetizado:399274284880494602><:dokefingerguns:445312340682866708>`);
});

client.login(process.env.BOT_TOKEN);
