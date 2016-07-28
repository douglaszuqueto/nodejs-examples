const express = require('express');
const router = express.Router();

/**
 * Routes
 */
router.get('/', require('./controllers/index'));
router.get('/:id', require('./controllers/show'));
router.post('/', require('./controllers/create'));
router.delete('/:id', require('./controllers/delete'));
router.put('/:id', require('./controllers/update'));

router.post('/login', require('./controllers/login'));

module.exports = router;
