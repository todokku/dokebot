const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log(`6tou!!!11 ${client.users.size} Usuarios.`); 
  client.user.setActivity("2018 part 2", {type: "WATCHING"});
});

client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.find(ch => ch.name === '🍆jeral');
    if (!channel) return
    channel.send(`👉 Olá ${member} , seja bem-vindo ao server!
<a:asleepkirby:532963176883421186> Leia as <#466060461335379968> e não seja um cuzão.
`);
});

//client.on('message', async message => {
//    if (message.content === '!join') {
//        client.emit('guildMemberAdd', message.member || await message.guild.fetchMember(message.author));
//   }
//});
//Comando de Bem Vindo.

client.login(process.env.BOT_TOKEN);
