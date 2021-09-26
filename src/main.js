require('dotenv').config();
const {Client, Collection} = require('discord.js');
const client = new Client({intents: 13827});

const {registerCommands, registerEvents} =require('./utils/register');

(async () => {
  await client.login(process.env.BOT_TOKEN);
  client.commands = new Collection();
  await registerCommands(client, '../commands');
  await registerEvents(client, '../events');
})();
