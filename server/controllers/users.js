const User = require('../models/User');
const bcryptjs = require('bcryptjs');


//jwt jobs
const passport = require('passport');
const passportJWT = require('passport-jwt');
const jwt = require('jsonwebtoken');
const ExtractJwt = passportJWT.ExtractJwt;
const jwtOptions = {};
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt');
jwtOptions.secretOrKey = 'ensasecretkey';



module.exports.controller = (app) => {
  // register a user
  app.post('/users/register', (req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const password = req.body.password;
    //let errors=[];

    if(!firstName || !lastName || !email || !password){
      res.status(422).json({
          message:"All the fields are required !"
      });
    }
    
    User.findOne({email}).then(user=>{
      if(user){
        res.status(422).json({
          message:"This user is already exist!"
        });
      }else{
        const newUser=new User({
          firstName,
          lastName,
          email,
          password
        });
        bcryptjs.genSalt(10,(error,salt)=>bcryptjs.hash(newUser.password,salt,(error,hash)=>{
          if(error) throw error;
          newUser.password=hash;
          newUser.save().then(user=>{
            res.json({message:"Register successful !"});
          });
        }));
      }
    });
    
    
    
  });
  app.post('/users/login', (req, res) => {
    //login a user
    const email = req.body.email;
    const password = req.body.password;
    User.findOne({email}).then(user=>{
      if(!user){
        res.status(422).json({
          message:"The user does not exist!"
        });
      }else{
        bcryptjs.compare(password,user.password,(error,isMatch)=>{
          if(isMatch){
            const payload = { id: user.id };
            const token = jwt.sign(payload, jwtOptions.secretOrKey);
            const userSend = new User({
              firstName:user.firstName,
              lastName:user.lastName,
              email:user.email
            });
            res.send({ token, userSend });
          }else{
            res.status(422).json({
              message:"The password is incorrect!"
            });
          }
        })
      }
    });
  });
  /*
  app.get("user/profile", passport.authenticate('jwt',{session : false}), (req, res) => {
    const email = 
  });
  */
}