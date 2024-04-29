const express = require('express');
const path = require('path');
const cookieparser = require('cookie-parser');
const hbs = require('hbs');

const app = express();
hbs.registerPartials(__dirname + '/partials');
const publicDirectory = path.join(__dirname, '/public');
app.use(express.static(publicDirectory));

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cookieparser());

app.set('view engine', 'hbs');

app.use('/', require('./routes/pages'));
app.use('/auth', require('./routes/auth'));
app.use('/game', require('./routes/game'));

app.listen(5000, () => {
    console.log("Server started at port 5000");
});