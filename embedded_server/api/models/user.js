const mongoose = require('mongoose');

const userScheme = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  firstName:{
    type: String,
    required: true
  },
  lastName:{
    type: String,
    required: true
  },
  email:{
    type: String,
    required: true
  },
  password:{
    type: String,
    required: true
  }

});

module.exports = mongoose.model('User', userScheme);