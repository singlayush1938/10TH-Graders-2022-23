const Discord = require("discord.js");
const config = require("./config.json");

const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES"]});

client.on('ready' , () =>{
 client.user.setStatus('dnd');
  client.user.setActivity('with Harshaan a*s');
});

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

client.on("messageCreate", function(message) {
  if (message.content === "online"){
    message.channel.send('<@973238686437220412> is ready')
  }
  if (message.content === "Online"){
    message.channel.send('<@973238686437220412> is ready')
  }
  if (!message.attachments.find(attachment => attachment.filename.endsWith('png') || attachment.filename.endsWith('jpg') || attachment.filename.endsWith('gif'))&&(message.channel.id === '973232506302263366')){
        message.delete();
  }

});

console.log(`10TH Graders 2022-23#4597 is ready`) 

client.login(config.BOT_TOKEN);
