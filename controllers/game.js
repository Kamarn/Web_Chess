const mysql = require('mysql');
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

    database.query('UPDATE users SET lastFen = ?, lastColor = ?, gameCode = ? WHERE email = ?', ['start', 'white', codeInput, email], async (error, result) => {
        if(error){
            console.log(error);
        }
    });

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

    database.query('UPDATE users SET lastFen = ?, lastColor = ?, gameCode = ? WHERE email = ?', ['start', 'black', codeInput, email], async (error, result) => {
        if(error){
            console.log(error);
        }
    });

    res.render('game', { color: 'black', position: 'start', user: req.user});
}


exports.rejoin = async (req, res) => {
    
    color = req.user.lastColor;
    fen = req.user.lastFen;

    res.render('game', { color: color, position: fen, user: req.user});
    
}


exports.saveFen = (req, res) => {
    
    fen = req.body.fen;
    email = req.user.email;
    
    database.query('UPDATE users SET lastFen = ? WHERE email = ?', [fen, email], async (error, result) => {
        if(error){
            console.log(error);
        }
    });
    
}