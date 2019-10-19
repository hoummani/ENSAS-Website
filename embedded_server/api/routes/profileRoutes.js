const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profileController');

const multer = require('multer');

const storage = multer.diskStorage({
  destination: function(req, file, callback) {
    callback(null, './static/uploads/');
  },
  filename: function(req, file, callback){
    callback(null, new Date().toISOString() + file.originalname);
  }
});

const fileFilter = (req, file, callback) => {
  if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpg'){
    callback(null, true);
  }else{
    callback(null, false);
  }
};

const upload = multer({ 
    storage: storage, 
    limits:{
      fileSize: 1024 * 1024 * 8
    },
    fileFilter: fileFilter
});


//get profile
router.get('/:userId', profileController.getProfile);


//create profile
router.post('/:userId', upload.single('photo'), profileController.createProfile);


module.exports = router;