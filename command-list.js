const {printHelp, helpMessage} = require('./commands/print-help');

COMMANDS = [{
  command: 'help',
  fn: printHelp,
  helpMessage,
}];

module.exports = {COMMANDS};
