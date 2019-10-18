const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');


//Login
router.post('/login', userController.login);

router.post('/register', userController.register);

//register
router.get('/register', userController.register);
module.exports = router;