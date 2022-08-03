module.exports = {
    name: 'commands',
    description: 'Displays Commands List',
    execute(message, args) {
        const { MessageEmbed } = require('discord.js');

        const newEmbed = new MessageEmbed()
            .setColor("#304281")
            .setTitle('Commands List')
            .setDescription('This is the Bot Commands List')
            .addFields({
                name: '___________________',
                value: '**+Ping:** Bot greeting :smiley:" \n' +
                    '**+Crush:** Crush someone in a gif :smile:. \n' +
                    '**+Commands:** Sends command list. :book:\n' +
                    '**+Spit:** Spit on someone in a gif :tongue:\n' +
                    '___________________'
            })
            .setImage('https://c.tenor.com/3EfoztaqNO8AAAAC/squidward-spongebob.gif')
            .setTimestamp();

        console.log(newEmbed);
        message.channel.send({ embeds: [newEmbed] });
    }
}