const express = require("express");
const app = express();
const { quotes } = require("./quotes");

const port = 3000;


app.use('/', (req, res) => {
    res.send(quotes[Math.floor(Math.random()*quotes.length)]);
});

app.listen(port, () => console.log(`APP IS UP AND RUNNING ON PORT.${port}`));