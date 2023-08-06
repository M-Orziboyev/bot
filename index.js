const TelegramBot = require('node-telegram-bot-api');

const token = '6472379583:AAEmhU6jEb5bEEmG1JYymny6V2wIy7qi6lE'

const bot = new TelegramBot(token, { polling: true });

const boostrap = () => {
    bot.setMyCommands([
        {
            command: '/start',
            description: 'Bot haqida qisqacha ma\'\lumot'
        },
        {
            command: '/info',
            description: 'Sizning telegram profilingiz haqida ma\'\lumotlar'
        }
    ])

    bot.on('message', async (msg) => {
        const chatId = msg.chat.id;
        const text = msg.text



        if (text === '/start') {
            return bot.sendMessage(chatId, `Assalamu alaykum, ${msg.from?.first_name} Uzbeklog botiga xush kelibsiz!`)
            
        }
        if (text === '/info') {
            return bot.sendMessage(chatId, `Birinchi ismingiz (first_name) - ${msg.from?.first_name} \n Ikkinchi ismingiz (last_name) - ${msg.from?.last_name} \n Sizning IDingiz - ${msg.from?.id} \n Telegram til versiyangiz - ${msg.from?.language_code}`)
        }
        bot.sendMessage(chatId, 'Men sizni tushinmadim):')
    }

    );

}
boostrap()