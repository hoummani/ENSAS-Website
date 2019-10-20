const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profileController');

const checkAuth = require('../middlewares/checkAuth');
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



//test check Auth
router.get('/details', checkAuth, profileController.getDetails);
//get profile
router.get('/:userId', checkAuth, profileController.getProfile);


//create profile
router.post('/:userId', checkAuth, upload.single('photo'), profileController.createProfile);

//check image file
router.post('/photo/:userId', checkAuth, (req, res, next) => {
  const _id = req.params.userId;
  
  console.log("------------------------------------");
  console.log(_id);
  
})





module.exports = router;