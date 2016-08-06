var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/userinfo', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  console.log('-------- userinfo --------');
  res.send(' this is userinfo page ');
});

router.get('/userinfo/:id',function(req,res,next){
    console.log('-----' + id);

    console.log('----userinfo param ---'+ req.params.id);


});

module.exports = router;
