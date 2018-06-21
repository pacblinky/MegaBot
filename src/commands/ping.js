module.exports = {
  meta: {
    level: 0,
    timeout: 10
  },
  fn: (msg) => {
    let start = new Date(msg.timestamp)
    msg.channel.createMessage('Pong!').then(c => {
      c.edit(`Pong! \`${Math.floor(new Date(c.timestamp) - start)}ms, ${msg.channel.guild.shard.latency}ms\``)
    })
  }
}