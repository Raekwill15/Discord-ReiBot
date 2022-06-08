module.exports = {
    name: 'commands',
    description: 'Displays Commands List',
    execute(message, args) {
        const { MessageEmbed } = require('discord.js');

        const newEmbed = new MessageEmbed()
            .setColor("#304281")
            .setTitle('Commands List')
            .setDescription('This is the Bot Commands List')
            .addFields({ name: 'Funnys', value: '**+Ping:** Bot responds "Pong Hello! :)" \n **+crush:** Not yet complete but will send Gif of someone being crushed. \n **+Commands:** Sends command list.' })
            .setImage('https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg')
            .setTimestamp();

        console.log(newEmbed);
        message.channel.send({ embeds: [newEmbed] });
    }
}