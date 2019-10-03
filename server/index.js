const express=require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const fs = require('fs');

//authentication system
const jwt = require('jsonwebtoken');
const passport = require('passport');
const passportJWT = require('passport-jwt');
const ExtractJwt = passportJWT.ExtractJwt;
const JwtStrategy = passportJWT.Strategy;
const jwtOptions = {}
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt');
jwtOptions.secretOrKey = 'ensasecretkey';

//application
const app= express();
const router = express.Router();
app.use('/', router);
//middlwares

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());
app.use(passport.initialize());

//include controllers
fs.readdirSync("controllers").forEach(function (file) {
  if(file.substr(-3) == ".js") {
    const route = require("./controllers/" + file)
    route.controller(app)
  }
});
//routes
router.get('/', function(req, res) {
  res.json({ message: 'API Initialized!'});
});




//run server
mongoose.connect(`mongodb+srv://ensasMongo:${process.env.MONGO_PASSWORD}@cluster0-alkca.mongodb.net/admin?retryWrites=true&w=majority`,function() {
  app.listen(process.env.PORT,function() {
    console.log("Your server is up !... ):");
  });
})
.catch(err=>{
  console.log("SERVER ERROR :(");
})