var express = require('express');
var router = express.Router();

router.get('/', (req, res, next)=> {
  if(req.session.data==undefined){
    req.session.data=[];
  }
  // console.log(data.toString());

  res.render('index', {
     title: 'ログイン',
     data:req.session.data,
   });
});

router.post('/', (req, res, next)=> {
  let userID=req.body.userID;
  let userPass=req.body.userPass;
  let userMessage=req.body.userMessage;
  req.session.data.push(userID);
  req.session.data.push(userMessage);
  req.session.data.push(userMessage);
  //セッションデータ保存
  res.render('index', {
     title: 'ログイン',
     data:req.session.data,
   });
});

module.exports = router;
