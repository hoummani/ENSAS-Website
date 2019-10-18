const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profileController');


//get profile
router.get('/:userId', profileController.getProfile);

router.post('/:userId', profileController.createProfile);


module.exports = router;