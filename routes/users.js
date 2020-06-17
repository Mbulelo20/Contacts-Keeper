const express = require('express');
const router = express.Router();

// @route POST api/users
// @desc Rester a user
// @access Public
router.post('/', (req, res) => {
    res.send('Register');
});

module.exports = router;