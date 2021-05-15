const Discord = require("discord.js");
const client = new Discord.Client();
client.on("ready", function() {
  console.log("Connected");
});
client.on('ready', async () => {
 client.user.setActivity("24/7 | TheOfficialAyush#0001",{type: "LISTENING"})
    }); 
client.on("message", message => {
  if (message.content.startsWith(`<@!${client.user.id}>`)) {
    (async () => {
      var voiceChannel = message.member.voice.channel;
      voiceChannel
        .join()
          .then(async connection => {
          const dispatcher = connection.play(
            "https://rainymood.com/audio1112/0.m4a"
          );
          
          dispatcher.on("finish", end => {
            voiceChannel.leave();
          });
        })
        .catch(err => console.log(err));
    })();
  }
});
client.login(process.env.token);