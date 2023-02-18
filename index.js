const express = require('express');
const format = require('date-format');
const app = express();

const PORT = 4000 || process.env.PORT;

app.get('/', (req, res) => {
    res.status(200).send('Hello Jaimin.')
});

app.get("/api/v1/instagram", (req, res) => {
    const instaSocial = {
        username: "jaiminvadadoriya",
        followers: 149,
        following: 108,
        date: format.asString("dd-MM - hh:mm:ss", new Date()),
    }

    res.status(200).json({ instaSocial });
});

app.get("/api/v1/facebook", (req, res) => {
    const instaSocial = {
        username: "jaiminvadadoriya",
        followers: 300,
        following: 234,
        date: Date.now(),
    }

    res.status(200).json({ instaSocial });
});

app.get("/api/v1/linkedin", (req, res) => {
    const instaSocial = {
        username: "jaiminvadadoriya",
        followers: 10,
        following: 5,
        date: Date.now(),
    }

    res.status(200).json({ instaSocial });
});

app.get("/api/v1/:token", (req, res) => {
    console.log(req.params.token);
    res.status(200).json({ param: req.params.token })
})

app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`)
});