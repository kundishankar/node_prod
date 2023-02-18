const express = require('express');
const dotenv = require('dotenv');
const path = require('path');

const app = express();
dotenv.config(path.join(__dirname, '.env'));
const port = process.env.PORT;

app.use('/hello', (req, res) => {
    res.send("Hello world!!");
});

app.listen(port, () => console.log(`Server started at port : ${port}`));