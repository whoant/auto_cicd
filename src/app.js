require('dotenv').config();
const express = require('express');

const app = express();
const PORT = process.env.PORT;

app.get('/api', (req, res) => {
    res.send('Tuan');
});

app.listen(PORT, () => {
    console.log(`Start server on ${process.env.NODE_ENV} env`);
    console.log(`Server run on ${PORT}`);
});
