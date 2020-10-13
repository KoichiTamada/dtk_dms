var express = require('express');
var router = express.Router();

router.get('/', (req, res, next)=> { 
 
  //セッションデータ取得
  console.log(req.session.login);
  var obj = req.session.login;
  if(obj[0]==undefined){
    res.redirect('/users/login');
  
  }else{  
    res.render('monitor', {
      title: 'モニタ',
      login:req.session.login
    });
  }
});

module.exports = router;