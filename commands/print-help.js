const printHelp = (COMMANDS) => {
  return COMMANDS.map(({helpMessage}) => helpMessage);
}

module.exports = {
  printHelp,
  helpMessage: '->help: Prints this message',
}
