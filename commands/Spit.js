module.exports = {
    name: 'spit',
    description: "When called sends a gif of someone spitting",
    execute(message, args) {
        const { MessageEmbed } = require('discord.js');

        const gif = [
            'https://c.tenor.com/6o_6bMNJ0BAAAAAC/spit-it-out-spit.gif',
            'https://c.tenor.com/uvbbsVYpI6IAAAAC/mad-at-you-bro.gif',
            'https://c.tenor.com/Px2U8r-A-AoAAAAC/the-rock-spit.gif',
            'https://c.tenor.com/Dw87On1BCTMAAAAd/golden-boy-kintaro.gif',
            'https://c.tenor.com/XfPLLvZGRgYAAAAC/hollywood-hulk-hogan-nwo.gif',
            'https://c.tenor.com/ybSK8be2HKEAAAAC/alpaga-spit.gif',
            'https://media3.giphy.com/media/26xBIff2R744KDhNS/giphy.gif'
        ]

        if (message.mentions.users.size === 0) {
            const newEmbed = new MessageEmbed()
                .setColor("#304281")
                .setTitle(':sweat_drops:')
                .setDescription(`**${message.author.username}**`)
                //.addFields({ name: `Spit`, value: `**${message.author.username}**` })
                .setImage(`${gif[Math.floor(Math.random() * gif.length)]}`)
                .setTimestamp()
                .setFooter({ text: 'Spit' });

            message.channel.send({ embeds: [newEmbed] });
        } else if (message.mentions.users.size > 0) {
            mentionAt = message.mentions.users.firstKey();
            const newEmbed = new MessageEmbed()
                .setColor("#304281")
                .setTitle(':sweat_drops:')
                .setDescription(`**${message.author.username}** spat on **<@${mentionAt}>** :sweat_drops:`)
                //.addFields({ name: `Spit`, value: `**${message.author.username}** Spit on **<@${mentionAt}>**` })
                .setImage(`${gif[Math.floor(Math.random() * gif.length)]}`)
                .setTimestamp()
                .setFooter({ text: 'Spit' });

            message.channel.send({ embeds: [newEmbed] });
        }


    }
}