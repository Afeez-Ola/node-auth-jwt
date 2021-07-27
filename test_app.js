// jshint esversion:10
const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();

app.get('/api', (req, res) => {
    res.json({
        message: 'Server created...'
    });
});

app.post('/api/posts', verifyToken, (req, res) => {

    jwt.verify(req.token, 'secret', (err, authData) => {
        if (err) {
            res.sendStatus(403);
        } else {
            res.json({
                message: 'Posts route created...',
                authData
            });
        }
    });
});

app.post('/api/login', (req, res) => {
    const user = {
        id: Math.round(Math.random() * 10 + 1),
        userName: 'mobolaji',
        email: 'afeez@gmail.com'
    };

    jwt.sign({ user: user }, 'secret', (err, token) => {
        if (!err) {
            res.json({
                token: token
            });
        }
    });
});

function verifyToken(req, res, next) {
    const bearerHeader = req.headers.authorization;
    if (bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerToken;

        next();
    } else {
        res.sendStatus(403);
    }
}


// const PORT = parseInt(process.env.POR);
const PORT = 3000;

console.log(PORT);

app.listen(PORT, () => {
    console.log(`Server started on PORT: ${PORT}`);
});