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


module.exports = router;



