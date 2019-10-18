const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');



//GET
router.get('/', (req, res, next)=>{
  res.status(200).json({
    message: "GET on user !"
  })
});

module.exports = router;