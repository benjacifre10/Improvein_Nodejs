const express = require('express');
const router = express.Router();

const AuthController = require('./controllers/AuthController');

// Home
router.get('/', (req, res) => res.json({ message: 'This is Home' }));

// Auth
router.post('/api/signin', AuthController.signIn);
router.post('/api/signup', AuthController.signUp);
router.post('/api/refresh', AuthController.refresh);

module.exports = router;