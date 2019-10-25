const Discord = require('discord.js');
const client = new Discord.Client();

const PREFIX = '->';
const {COMMANDS} = require('./command-list');
const GUILD_ID = process.env.DISCORD_GUILD_ID
const CHANNEL_NAME = process.env.DISCORD_DEFAULT_CHANNEL_NAME

client.on('ready', () => {
  const guildId = GUILD_ID;
  client.guilds.map((guild) => {
    console.log(`Guild id: ${guild.id}`);
    console.log(`Guild name: ${guild.name}`);
  });

  const guild = client.guilds.find(({id}) => id === guildId);
  const channel = guild.channels.find(({ name }) => {
    return name === CHANNEL_NAME;
  })

  channel.send('Bottori is ONLINE');

  const helpCommand = COMMANDS
    .find(({command}) => command === 'help')

  helpCommand.fn(COMMANDS)
    .forEach(t => channel.send(t));
});

client.on('message', (msg) => {
  const {channel, content, author} = msg;

  if (!author || author.bot) {
    return null;
  }

  if (!msg.content.startsWith(PREFIX)) {
    return null;
  }

  const message = `Greetings ${channel.name}! Unfortunately I am unable to respond to "${content}" at the moment.`;

  msg.reply(message)
    .then(sent => console.log(`Sent a reply to ${sent.author.username}`))
    .catch(console.error);
});

client.login(process.env.DISCORD_TOKEN || 'some-token');
