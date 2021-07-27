// // jshint esversion:6
// const express = require('express');
// const jwt = require('jsonwebtoken');
// require('dotenv').config();

// const app = express();

// app.get('/api', (req, res) => {
//     res.json({
//         message: 'API Connected Successfully'
//     });
// });


// app.post('/api/posts', verifyToken, (req, res) => {

//     jwt.verify(req.token, 'secret', (err, authData) => {
//         if (err) {
//             res.sendStatus(403)
//         } else {
//             res.json({
//                 message: 'Post Created...',
//                 authData
//             });
//         }
//     });

// });

// app.post('/api/login', (req, res) => {
//     const user = {
//         id: 1,
//         username: process.env.USER_NAME,
//         email: process.env.EMAIL
//     };

//     jwt.sign({ user: user }, 'secret', (err, token) => {
//         res.json({
//             token: token
//         });
//     });
// });

// function verifyToken(req, res, next) {
//     const bearerHeader = req.headers.authorization;

//     if (typeof bearerHeader !== 'undefined') {
//         const bearer = bearerHeader.split(' ');
//         const bearerToken = bearer[1];
//         req.token = bearerToken;

//         next();
//     } else {
//         res.sendStatus(403);
//     }
// }

// // const PORT = process.env.PORT || 8000;

// // app.listen(PORT, () => console.log(`Server running on PORT: ${PORT} 🔥`));