const express = require('express');
const path = require('path');
const cookieparser = require('cookie-parser');
const hbs = require('hbs');

hbs.registerHelper('ifnoteq', function (a, b, options) {
    if (a != b) { return options.fn(this); }
    return options.inverse(this);
});

hbs.registerHelper('ifeq', function (a, b, options) {
    if (a == b) { return options.fn(this); }
    return options.inverse(this);
});

const app = express();
hbs.registerPartials(__dirname + '/partials');

//const publicDirectory = path.join(__dirname, 'public');
//app.use(express.static(publicDirectory));
app.use('/public', express.static('public'))

const socket = require('socket.io');
const myIo = require('./sockets/io');
var http = require("http");
const server = http.Server(app);
const io = socket(server);

myIo(io);
games = {};

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cookieparser());

app.set('view engine', 'hbs');

server.listen(5000, () => {
    console.log("Server started at port 5000");
});

app.use('/', require('./routes/pages'));
app.use('/auth', require('./routes/auth'));
app.use('/game', require('./routes/game'));