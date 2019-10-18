const mongoose = require('mongoose');

const profileSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  user:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  photo:{
    type:String,
    required : true
  },
  cin:{
    type:String,
    required : true
  },
  cne:{
    type:String,
    required : true
  },
  firstNameAr:{
    type:String,
    required : true
  },
  lastNameAr:{
    type:String,
    required : true
  },
  birthDay:{
    type:String,
    required : true
  },
  birthPlace:{
    type:String,
    required : true
  },
  address:{
    type:String,
    required : true
  },
  nationality:{
    type:String,
    required : true
  },
  phone:{
    type:String,
    required : true
  },
  fatherFullName:{
    type:String,
    required : true
  },
  fatherJob:{
    type:String,
    required : true
  },
  motherFullName:{
    type:String,
    required : true
  },
  motherJob:{
    type:String,
    required : true
  },
  parentAddress:{
    type:String,
    required : true
  },
  parentPhone:{
    type:String,
    required : true
  },
  level:{
    type:String,
    required : true
  },
  filiere:{
    type:String,
    required : true
  },
  bacType:{
    type:String,
    required : true
  },
  mention:{
    type:String,
    required : true
  },
  bacGetYear:{
    type:String,
    required : true
  },
  bacLycee:{
    type:String,
    required : true
  },
  bacDirection:{
    type:String,
    required : true
  },
  bacAccademie:{
    type:String,
    required : true
  }
});

module.exports= mongoose.model('Profile', profileSchema);