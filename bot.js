require("dotenv").config();
const Discord = require("discord.js");
const client = new Discord.Client({
  intents: [Discord.GatewayIntentBits.Guilds],
});

client.on("ready", (e) => {
  console.log(`logged in as ${client.user.tag}`);
});

client.login(process.env.BOT_TOKEN);
