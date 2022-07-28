module.exports = {
    name: 'ping',
    description: "This is a ping command",
    execute(message, args) {
        console.log(message.author);
        message.channel.send(`Pong. Hello ${message.author}! :grinning:`);
    }
}