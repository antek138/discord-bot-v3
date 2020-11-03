module.exports = {
    name: "play",
    description: "muzyka!",
    guildOnly: true,
    cooldown: 5,
  
    run(msg, args) {
     let track = await bot.player.play(message.member.voice.channel, args[0], message.member.user.tag);
     message.channel.send("Teraz Leci ${track.name} ! - Włączona przez ${track.requestedBy}");     

    },
  }