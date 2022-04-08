const { Member } = require('eris')
const Event = require('../../structures/Event')

module.exports = class extends Event {
    constructor(client) {
        super(client, {
            name: 'guilMemberAdd'
        })
    }

    run = async (member) => {
        const guildDb = await this.client.db.guilds.findById(member.guild.id)

        if (guildDb?.welcome) {
            const welcomeChannel = member.guild.channels.cache.get(guildDb.welcome.channel)

            welcomeChannel?.send(`${member.toSting()}, Seja bem-vindo(ª) ao servidor`)
        }
    }
}