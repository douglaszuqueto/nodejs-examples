const express = require('express');
const router = express.Router();

/**
 * Index
 */
router.get('/', (req, res) => res.json('API is Running'));

/**
 * User
 */
router.use('/users', require('./user/user'));

/**
 * Protected Route
 */
router.get('/secret', require('../config/middlewares/jwt'), (req, res) => res.json('ok'));


module.exports = router;
