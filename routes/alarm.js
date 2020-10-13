var express = require('express');
var router = express.Router();

/* GET */
router.get('/', (req, res, next)=> {    
  res.render('alarm', {title: '警報'});
});

module.exports = router;
