// libraries requires
const express = require('express');
const router = express.Router();

// local requires
const { Verify } = require('../libs/jwtAuth');
const { UsersController } = require('../controllers');

/**
 * POST /register
 * Create new user
 */
router.post('/register', UsersController.register);

/**
 * POST /login
 * Login user
 */
router.post('/login', UsersController.login);


module.exports = router;



