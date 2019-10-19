const mongoose = require('mongoose');
const User = require('../models/user'); 
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');



//login
exports.login = (req, res, next) => {
  User.find({email: req.body.email}).exec()
  .then(user => {
    if(user.length < 1) {
      return res.status(401).json({
        message: 'User not exist !'
      });
    }
    bcrypt.compare(req.body.password, user[0].password, (err, response) => {
      if(err) {
        return res.status(401).json({
          message: 'Password don\'t much  !'
        });
      }
      if(response) {
        try {
          const token = jwt.sign({email: user[0].email, userId: user[0]._id}, `${process.env.JWT_KEY}`, { expiresIn:'1h'});
          return res.status(200).json({
            message: 'Auth successful !',
            token: token
          });
        } catch (error) {
          return res.status(500).json({
            message: error.message 
          })
        }
        
      }
    })
    
  })
  .catch(error => {
    res.status(401).json({
      error: error
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
      user.save()
      .then(result => {
        const createdUser = new User({
          _id:result._id,
          firstName:result.firstName,
          lastName:result.lastName,
          email:result.email
        });
        res.status(200).json(createdUser);
      })
      .catch(error => {
        res.status(500).json({
          error:error
        });
      })
    }
  })
  
}