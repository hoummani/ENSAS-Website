const mongoose = require('mongoose');
const User = require('../models/user'); 
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');



//login
exports.login = (req, res, next) => {
  User.find({email: req.body.email}).exec()
  .then(user => {
    if(user) {
      bcrypt.compare(req.body.password, user.password, (err, response) => {
        if(err) {
          return res.status(401).json({
            message: 'Auth failed !'
          });
        }
        if(response) {
          const token = jwt.sign({email: user.email, userId: user._id}, process.env.KEY,{ expiresIn:'1h'});
          return res.status(200).json({
            message: 'Auth successful !',
            token: token
          });
        }
      })
    }else {
      return res.status(401).json({
        message: 'Auth failed !'
      })
    }
  })
  .catch(error => {
    res.status(401).json({
      message: 'Auth fialed !'
    })
  })
};


//register
exports.register = (req, res, next) => {
  bcrypt.hash(req.body.password,10, (err, hash) => {
    if(err) {
      return res.status(500).json({
        error: err
      })
    }else {
      const user = new User({
        _id:new mongoose.Types.ObjectId(),
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: hash
      })
      user.save().exec()
      .then(result => {
        res.status(200).json(result);
      })
      .catch(error => {
        res.status(500).json({
          error:error
        });
      })
    }
  })
  
}