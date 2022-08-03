module.exports = {
    name: 'ping',
    description: "When called says hello to the user",
    execute(message, args) {
        console.log(message.author);
        message.channel.send(`Pong. Hello ${message.author}! :grinning:`);
    }
}