const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log(`6tou!!!11 ${client.users.size} Usuarios.`); 
  client.user.setActivity("2018 part 2", {type: "WATCHING"});
});

client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.find(ch => ch.name === '🍆jeral');
    if (!channel) return
    channel.send(`
<a:ztemMuns:461656598197305347>👉 Olá ${member}, seja vem bindo ao servre! <:porocoolguy:497444402722111488>
<a:azzz:475694148658266112> <:poritos:475692349645783041> Leia as <#466060461335379968> e não seja cuzão <:dokefingerguns:445312340682866708>`);
});

//client.on('message', async message => {
//    if (message.content === '!join') {
//        client.emit('guildMemberAdd', message.member || await message.guild.fetchMember(message.author));
//   }
//});
//Comando de Bem Vindo.

client.login(process.env.BOT_TOKEN);
