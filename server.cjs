const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors');

const app = express();

// Используйте CORS
app.use(cors());

const TELEGRAM_BOT_TOKEN = 'ТОКЕН ВАШЕГО БОТА'; // Замените на ваш токен
const CHAT_ID = 'ID ВАШЕГО ЧАТА'; // Замените на ваш ID чата

app.use(bodyParser.json());

app.post('/send-data', (req, res) => {
    const userData = req.body;

    const message = `
        **********Новая заявка**********
        ___________________________
        Телефон: ${userData.phone};
        ___________________________
        Комментарий: ${userData.comment};
    `;

    axios.post(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        chat_id: CHAT_ID,
        text: message,
    })
    .then(response => {
        res.status(200).json({ success: true });
    })
    .catch(error => {
        console.error('Ошибка при отправке в Telegram:', error);
        res.status(500).json({ success: false, error: error.message });
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});