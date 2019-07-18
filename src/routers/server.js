var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
   res.send('GET route on server.');
});
router.post('/', function(req, res){
   res.send('POST route on server.');
});


router.get('/server/:id', function(req, res){
   res.send('GET route on server number'+req.params.id);
});


//export this router to use in our index.js
module.exports = router;