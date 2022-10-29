require('dotenv').config();
const express = require('express');

const app = express();
const PORT = process.env.PORT;

app.get('/api', (req, res) => {
    res.send('Test');
});

app.listen(PORT, () => {
    console.log(`Start server on ${process.env.NODE_ENV}`);
    console.log(`Server run on ${PORT}`);
});
