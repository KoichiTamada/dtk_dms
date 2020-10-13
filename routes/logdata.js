var express = require('express');
var router = express.Router();

/* GET */
router.get('/', (req, res, next)=> {    
  res.render('logdata', {title: 'ログ'});
});

module.exports = router;
