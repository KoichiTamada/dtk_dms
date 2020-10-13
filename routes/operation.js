var express = require('express');
var router = express.Router();

/* GET */
router.get('/', (req, res, next)=> {    
  res.render('operation', {title: '操作'});
});

module.exports = router;
