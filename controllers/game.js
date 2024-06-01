const mysql = require('mysql2');
require('dotenv').config();

var database = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

database.connect( (error) => {
    if(error){
        console.log(error);
    }
    else{
        console.log("Connected to database");
    }
});


exports.create = (req, res) => {
    const codeInput = req.query.code;
    email = req.user.email;

    if (games[codeInput]) {
        return res.render('index', { message: 'This code is currently in use', user: req.user });
    }

    res.render('game', { color: 'white', position: 'start', user: req.user});
}

exports.join = (req, res) => {
    const codeInput = req.query.code;
    email = req.user.email;

    if (!codeInput) {
        return res.render('index', { message: 'No invite code provided', user: req.user });
    }
    if (!games[codeInput]) {
        return res.render('index', { message: 'Wrong invite code', user: req.user });
    }

    res.render('game', { color: 'black', position: 'start', user: req.user});
}