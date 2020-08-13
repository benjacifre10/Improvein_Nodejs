const express = require('express');
const router = express.Router();

// Home
router.get('/', (req, res) => res.json({ message: 'This is Home' }));

module.exports = router;