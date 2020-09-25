var express = require('express');
var router = express.Router();

/* GET */
router.get('/', (req, res, next)=> {    
  res.render('monitor', {title: 'モニタ'});
});

module.exports = router;
