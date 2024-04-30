const express = require('express');
const authController = require('../controllers/auth');
const gameController = require('../controllers/game');
const router = express.Router();

router.get('/create', authController.isLoggedIn, gameController.create);
router.get('/join', authController.isLoggedIn, gameController.join);
router.get('/rejoin', authController.isLoggedIn, gameController.rejoin);
router.post('/saveFen', authController.isLoggedIn, gameController.saveFen);

module.exports = router;