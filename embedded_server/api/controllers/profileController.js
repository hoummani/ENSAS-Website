const Profile = require('../models/profile');
const mongoose = require('mongoose');


exports.getProfile = (req, res, next) => {
  const userId = req.params.userId;
  Profile.find({user: userId})
  .exec()
  .then(doc => {
    res.status(200).json(doc);
  })
  .catch(error => {
    res.status(500).json({
      error: error
    });
  });
};
exports.createProfile = (req, res, next) => {
  const userId = req.params.userId;
  const profile = new Profile({
    _id: new mongoose.Types.ObjectId(),
    user:userId,
    photo: req.file.path,
    cne: req.body.cne,
    cin: req.body.cin,
    firstNameAr: req.body.firstNameAr,
    lastNameAr: req.body.lastNameAr,
    birthDay: req.body.birthDay,
    birthPlace: req.body.birthPlace,
    address: req.body.address,
    nationality: req.body.nationality,
    phone: req.body.phone,
    fatherFullName: req.body.fatherFullName,
    fatherJob: req.body.fatherJob,
    motherFullName: req.body.motherFullName,
    motherJob: req.body.motherJob,
    parentAddress: req.body.parentAddress,
    parentPhone: req.body.parentPhone,
    level: req.body.level,
    filiere: req.body.filiere,
    bacType: req.body.bacType,
    mention: req.body.mention,
    bacGetYear: req.body.bacGetYear,
    bacLycee: req.body.bacLycee,
    bacDirection: req.body.bacDirection,
    bacAccademie: req.body.bacAccademie,
    
  });
  profile.save()
  .then(result => {
    if(result){
      res.status(200).json(result);
    }
  })
  .catch(error => {
    res.status(500).json({
      error:error
    })
  })
};

exports.getDetails = (req, res, next) => {
  return res.status(200).json({
    message: 'Check Auth verified !'
  })
}
