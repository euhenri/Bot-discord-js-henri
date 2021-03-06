const { Interaction } = require('discord.js')
const Command = require('../../structures/Command')

module.exports = class extends Command {
    constructor(client) {
        super(client, {
            name: 'ping',
            description: 'Mostra o ping do bot.'
        })
    }

    run = (Interaction) => {
        interaction.reply({
            content:`O ping do bot é \`${this.client.ws.ping}\`ms.`,
            ephemeral: true
        })
    }
}
