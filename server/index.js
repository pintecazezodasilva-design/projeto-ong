
const express = require('express');

const app = express();

app.get('/api/health', (req, res) => {
    res.json({
        status: 'ok',
        data: new Date().toLocaleString('pt-BR')
    });
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`API rodando em http://localhost:${PORT}`);
});

