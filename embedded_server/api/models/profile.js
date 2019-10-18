const mongoose = require('mongoose');

const profileSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  user:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  photo:{
    type:String,
    required : true,
    default:""
  },
  cin:{
    type:String,
    required : true,
    default:""
  },
  cne:{
    type:String,
    required : true,
    default:""
  },
  firstNameAr:{
    type:String,
    required : true,
    default:""
  },
  lastNameAr:{
    type:String,
    required : true,
    default:""
  },
  birthDay:{
    type:String,
    required : true,
    default:""
  },
  birthPlace:{
    type:String,
    required : true,
    default:""
  },
  address:{
    type:String,
    required : true,
    default:""
  },
  nationality:{
    type:String,
    required : true,
    default:""
  },
  phone:{
    type:String,
    required : true,
    default:""
  },
  fatherFullName:{
    type:String,
    required : true,
    default:""
  },
  fatherJob:{
    type:String,
    required : true,
    default:""
  },
  motherFullName:{
    type:String,
    required : true,
    default:""
  },
  motherJob:{
    type:String,
    required : true,
    default:""
  },
  parentAddress:{
    type:String,
    required : true,
    default:""
  },
  parentPhone:{
    type:String,
    required : true,
    default:""
  },
  level:{
    type:String,
    required : true,
    default:""
  },
  filiere:{
    type:String,
    required : true,
    default:""
  },
  bacType:{
    type:String,
    required : true,
    default:""
  },
  mention:{
    type:String,
    required : true,
    default:""
  },
  bacGetYear:{
    type:String,
    required : true,
    default:""
  },
  bacLycee:{
    type:String,
    required : true,
    default:""
  },
  bacDirection:{
    type:String,
    required : true,
    default:""
  },
  bacAccademie:{
    type:String,
    required : true,
    default:""
  }
});

module.exports= mongoose.model('Profile', profileSchema);