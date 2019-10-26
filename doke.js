//Dokebot 2.0 :)
//Inicio da programação
const Discord = require("discord.js");
const bot = new Discord.Client();

//Seção para mostra que o bot está vivo
bot.on("ready", () => {
  console.log(`Olá | ${bot.users.size} Usuarios.`); 
  bot.user.setActivity("🎃 spooky", {type: "WATCHING"});
});

//Mensagem de bem vindo para o canal do Server
bot.on('guildMemberAdd', member => {
    const channel = member.guild.channels.find(ch => ch.id === '546906263494066176');
    if (!channel) return
    channel.send(`👉 Olá ${member} , seja bem-vindo ao server!\n <a:asleepkirby:532963176883421186> Leia as <#466060461335379968> e não seja um bananão 🍌`);
});

//Unico comando do bot que só funciona pra mim (criador do bot)
bot.on('message', async message => {

const prefix = 'maid!';

if(message.author.bot) return;  
  if(message.content.indexOf(prefix) !== 0) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

    if (command === 'entra') {
        bot.emit('guildMemberAdd', message.member || await message.guild.fetchMember(message.author));
   }
});

//Iniciar
bot.login(process.env.BOT_TOKEN);
