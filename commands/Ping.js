module.exports = {
    name: 'ping',
    description: "This is a ping command",
    execute(message, args) {
        message.channel.send(message.channel.send(`Hello! @${message.author.username}`));
        console.log(message);

    }
}