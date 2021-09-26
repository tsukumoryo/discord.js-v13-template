const BaseEvent = require('../../utils/structures/BaseEvent');

module.exports = class ReadyEvent extends BaseEvent {
  constructor() {
    super('ready');
  }

  async run(client) {
    console.log('\x1b[31m%s\x1b[0m', `${client.user.tag} is online.`);
  }
};
