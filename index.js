const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");

client.login(config.Token).catch(console.error);
client.on("ready", () =>{

  console.log(`Logged in as ${client.user.tag}`);
  client.user.setActivity(`dsc.gg/djblob`, { type: 'PLAYING' })
  process.on('unhandledRejection', err => console.log(err));
});

client.on('message', message => {
  if(config.Words.some(word => message.content.toLowerCase().includes(word))){
    message.delete()

    message.author.send(`Hey mind your language\nServer: **${message.guild.name}**`)

}})

client.on('message', message => {
  if(config.Ads.some(word => message.content.toLowerCase().includes(word))){
    message.delete()

    message.author.send(`Do not post ads on any other channel\nServer: **${message.guild.name}**`)

}})

client.on('message', message => {

  if (message.author.bot) return false;

  if (message.content.includes("@here") || message.content.includes("@everyone")) return false;

  if (message.mentions.has(client.user.id)) {


    const embed = new Discord.MessageEmbed()
    .setColor('#dbed20')
    .setThumbnail(client.user.displayAvatarURL({ format: "png" }))
    .setTitle(`About ${client.user.username}`)
    .setDescription(`Hey there I'm ${client.user.username} I delete the messages that contained the banned words and also ads\n**MemberCount of ${message.guild.name}:** ${message.guild.memberCount}`)
    .setFooter(":D")
    .setTimestamp();
    message.channel.send(embed);
};
})


