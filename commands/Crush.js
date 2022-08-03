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
            'https://c.tenor.com/04uziUuBDL8AAAAC/spiders-smashing.gif',
            'https://media4.giphy.com/media/fVo4TCeJw8rrpq0aG9/200.gif'
        ]

        if (message.mentions.users.size === 0) {
            const newEmbed = new MessageEmbed()
                .setColor("#304281")
                .setTitle(':bangbang:')
                .setDescription(`**${message.author.username}**`)
                // .addFields({ name: ``, value: `**${message.author.username}**` })
                .setImage(`${gif[Math.floor(Math.random() * gif.length)]}`)
                .setFooter({ text: 'Crush' })
                .setTimestamp();

            message.channel.send({ embeds: [newEmbed] });
        } else if (message.mentions.users.size > 0) {
            mentionAt = message.mentions.users.firstKey();
            const newEmbed = new MessageEmbed()
                .setColor("#304281")
                .setTitle('')
                .setDescription(`**${message.author.username}** crushed **<@${mentionAt}>** :bangbang:`)
                // .addFields({ name: ``, value: `**${message.author.username}** crushed **<@${mentionAt}>**` })
                .setImage(`${gif[Math.floor(Math.random() * gif.length)]}`)
                .setFooter({ text: 'Crush' }, )
                .setTimestamp();

            message.channel.send({ embeds: [newEmbed] });
        }
    }
}