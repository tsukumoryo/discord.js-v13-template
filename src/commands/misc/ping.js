const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class PingCommand extends BaseCommand {
  constructor() {
    super('ping', 'misc', [], 'Just a ping command');
  }

  run(client, message) {
    message.channel.send(`The latency is ${Date.now() - message.createdTimestamp}ms.`);
  }
};
