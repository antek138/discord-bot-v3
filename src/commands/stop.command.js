module.exports = {
    name: "stop",
    description: "4!",
    guildOnly: true,
    cooldown: 5,
  
    run(msg, args) {
     let track = await bot.player.stop(message.guild.id);
     message.channel.send("Zatrzymano"); 
    },
  }