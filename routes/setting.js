var express = require('express');
var router = express.Router();

/* GET */
router.get('/', (req, res, next)=> {    
  res.render('setting', {title: '設定'});
});

module.exports = router;
