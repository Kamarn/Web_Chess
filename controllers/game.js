

exports.create = (req, res) => {
    const codeInput = req.query.code;

    if (games[codeInput]) {
        return res.render('index', { message: 'This code is currently in use', user: req.user });
    }

    res.render('game', { color: 'white', user: req.user});
}

exports.join = (req, res) => {
    const codeInput = req.query.code;

    if (!codeInput) {
        return res.render('index', { message: 'No invite code provided', user: req.user });
    }
    if (!games[codeInput]) {
        return res.render('index', { message: 'Wrong invite code', user: req.user });
    }

    res.render('game', { color: 'black', user: req.user});
}