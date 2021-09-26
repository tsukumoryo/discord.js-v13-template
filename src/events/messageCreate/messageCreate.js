require('dotenv').config();
const BaseEvent = require('../../utils/structures/BaseEvent');
const prefix = process.env.DEFAULT_PREFIX;
module.exports = class MessageCreateEvent extends BaseEvent {
  constructor() {
    super('messageCreate');
  }

  run(message, client) {
    if (message.author.bot) return;
    const usedPrefix = message.content.slice(0, prefix.length);
    if (prefix === usedPrefix) {
      const [cmdName, ...cmdArgs] = message.content
          .slice(prefix.length)
          .trim()
          .split(/\s+/);
      const command = client.commands.get(cmdName);
      if (command) {
        try {
          command.run(client, message, cmdArgs);
        } catch (err) {
          console.error(err);
        }
      }
    }
  }
};
