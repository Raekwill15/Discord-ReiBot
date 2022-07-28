module.exports = {
    name: 'crush',
    description: "When called displays a crushing gif",
    execute(message, args) {
        const { MessageEmbed } = require('discord.js');
        console.log(message);

        const gif = [
            'https://c.tenor.com/t7ocXC1jzesAAAAC/barley-wine-watermelon.gif',
            'https://c.tenor.com/yHX61qy92nkAAAAC/yoshi-mario.gif',
            'https://c.tenor.com/78GOwFlamjkAAAAC/hulk-smash-loki.gif',
            'https://c.tenor.com/7wU5TfvaAfMAAAAC/watermelon-smash.gif',
            'https://media1.giphy.com/media/l0ExaHAzcTOuDptQc/giphy.gif',
            'https://c.tenor.com/04uziUuBDL8AAAAC/spiders-smashing.gif'
        ]

        if (message.mentions.users.size === 0) {
            const newEmbed = new MessageEmbed()
                .setColor("#304281")
                .setTitle('')
                .setDescription(``)
                .addFields({ name: `Crush`, value: `**${message.author.username}** crushed the air?` })
                .setImage(`${gif[Math.floor(Math.random() * gif.length)]}`)
                .setTimestamp();

            message.channel.send({ embeds: [newEmbed] });
        } else if (message.mentions.users.size === 1) {
            mentionAt = message.mentions.client.user.username;

            const newEmbed = new MessageEmbed()
                .setColor("#304281")
                .setTitle('')
                .setDescription(``)
                .addFields({ name: `Crush`, value: `**${message.author.username}** crushed **${mentionAt}**` })
                .setImage(`${gif[Math.floor(Math.random() * gif.length)]}`)
                .setTimestamp();

            message.channel.send({ embeds: [newEmbed] });
        }
    }
}