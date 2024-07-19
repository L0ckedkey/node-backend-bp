const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware untuk parsing JSON
app.use(bodyParser.json());

// Rute GET sederhana
app.get('/', (req, res) => {
    res.send('Hello World');
});

// Rute GET dengan parameter
app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`User ID yang diminta: ${userId}`);
});

// Rute POST untuk menerima data JSON
app.post('/user', (req, res) => {
    const userData = req.body;
    res.send(`Data yang diterima: ${JSON.stringify(userData)}`);
});

// Mulai server
app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
