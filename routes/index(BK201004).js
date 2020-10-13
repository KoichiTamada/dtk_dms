var express = require('express');
var router = express.Router();

//ユーザースキーマを読込
const dms_user = require('./user_schema');

  //mongooseをロードする
  const mongoose = require('mongoose');
//データベース接続を設定
mongoose.connect(
  "mongodb://localhost:27017/dtk",
  {useNewUrlParser:true}
);
//データベースをdb変数に代入
const db = mongoose.connection;

db.once("open",()=>{
  console.log("Successfully connected to MongoDB using Mongoose!");
});

//メッセージの配列
var myMessage=[];
router.get('/', (req, res, next)=> {
  if(req.session.data==undefined){
    req.session.data=[];
  }
  // console.log(data.toString());

  res.render('index', {
     title: 'ログイン',
     data:req.session.data,
     message:myMessage 
   });
});

router.post('/', (req, res, next)=> {
  let userID=req.body.userID;
  let userPass=req.body.userPass;
  let opt="ID:"+userID+"PASS:"+userPass;
  myMessage.unshift(req.body.userMessage);
  //セッションデータ保存
  req.session.data=opt;
  console.log(myMessage); 
  res.render('index', {
     title: 'ログイン',
     data:req.session.data,
     message:myMessage 
   });
});

module.exports = router;
