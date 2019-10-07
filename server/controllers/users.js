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
  
  
  app.post("users/profile", (req, res) => {
    //const query = {email: req.body.userProfile.email};
    const userProfile = req.body.userProfile;
    /*
    const photo = req.body.photo;
    const cin =  req.body.cin;
    const cne = req.body.cne;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const firstNameAr = req.body.firstNameAr;
    const lastNameAr = req.body.lastNameAr;
    const birthDay = req.body.birthDay;
    const birthPlace = req.body.birthPlace;
    const address = req.body.address;
    const nationality = req.body.nationality;
    const phone = req.body.phone;
    const fatherFullName = req.body.fatherFullName;
    const fatherJob = req.body.fatherJob;
    const motherFullName = req.body.motherFullName;
    const motherJob = req.body.motherJob;
    const parentAddress = req.body.parentAddress;
    const parentPhone = req.body.parentPhone;
    const level = req.body.level;
    const filiere = req.body.filiere;
    
    const bacType = req.body.bacType;
    const mention = req.body.mention;
    const bacGetYear = req.body.bacGetYear;
    const bacLycee = req.body.bacLycee;
    const bacDirection = req.body.bacDirection;
    const bacAccademie = req.body.bacAccademie;
    */
    User.find({ email })
      .then(user => {
        if(!user) {
          res.status(422).json({
              message:"The user does not exist!"
            });
        }else{
          user=userProfile;
          const user = user.save();
          res.send({ user });
        }
      });

  });
  
}