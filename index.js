const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('Bot ready');
});

client.on('message', (msg) => {
  const {channel, content, author} = msg;

  if (author.bot) {
    return null;
  }

  const message = `Greetings ${channel.name}! Unfortunately I am unable to respond to "${content}" at the moment.`;

  msg.reply(message)
    .then(sent => console.log(`Sent a reply to ${sent.author.username}`))
    .catch(console.error);
});

client.login(process.env.DISCORD_TOKEN || 'some-token');
