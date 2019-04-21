const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log(`6tou!!!11 ${client.users.size} Usuarios.`); 
  client.user.setActivity("Calda de café da manhã 🐲", {type: "WATCHING"});
});

client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.find(ch => ch.id === '546906263494066176');
    if (!channel) return
    channel.send(`👉 Olá ${member} , seja bem-vindo ao server!
<a:asleepkirby:532963176883421186> Leia as <#466060461335379968> e não seja um <@&475081215683067904>
`);
});

//client.on('message', async message => {
//    if (message.content === '!join') {
//        client.emit('guildMemberAdd', message.member || await message.guild.fetchMember(message.author));
//   }
//});
//Comando de Bem Vindo.

client.login(process.env.BOT_TOKEN);
