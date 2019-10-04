const User = require('../models/User');
const bcryptjs = require('bcryptjs');







module.exports.controller = (app) => {
  // register a user
  app.post('/users/register', (req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const password = req.body.password;
    
    const newUser=new User({
      firstName,
      lastName,
      email,
      password
    });
    bcryptjs.genSalt(10,(error,salt)=>bcryptjs.hash(newUser.password,salt,(error,hash)=>{
      if(error) throw error;
      newUser.password=hash;
      res.send({newUser});
    }))
    
  });
}