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

router.get('/login', (req, res, next)=> {
  if(req.session.login==undefined){
    // req.session.login=[];
  }
  res.render('users/login', {
    title: 'ログイン',
    login:req.session.login
  });
});

// ログインページ
router.post('/login', (req, res, next)=> {
  let account=req.body.account;
  let password=req.body.password;
  //セッションデータ保存
  dms_user.find({$and:[{account:account},{password:password}]},{_id:0},(error,data)=>{
    if(error) throw error;
    if(data!=undefined){
      req.session.login=data;
    }    
    res.redirect('../monitor');
  });
});

// ログアウトページ
router.get('/logout', (req, res, next)=> {
  req.session.login=undefined;
  res.redirect('/users/login');
});

//管理者ページ(一覧表示)
router.get('/admin', (req, res, next)=> {
  var obj = req.session.login;
  var role=obj[0].role;
  if(role!="admin"){
    res.redirect('../monitor');
  }else{
    dms_user.find({},(error,data)=>{
      if(error) throw error;
      res.render('users/admin',{
        title:"管理画面",
        content:data,
        login:req.session.login
      });
    });
  }
});

router.post('/admin', (req, res, next)=> {
  res.redirect('/users/admin');
});

module.exports = router;

//管理者ページ(新規登録)
router.get('/admin_add_user', (req, res, next)=> {
  res.render('users/admin_add_user',{
  title:"管理画面",
  });
});

router.post('/admin_add_user', (req, res, next)=> {
  //新しいdms_userを作成
  console.log('Get update');
  let new_dms_user = new dms_user({
    account:req.body.account,
    password:req.body.password
  });
  //新しいdms_userを保存
  new_dms_user.save((error,result)=>{
    if(error) throw error;
  });
  res.redirect('/users/admin');
});

//管理者ページ(編集)
router.get('/admin_update_user', (req, res, next)=> {
  res.render('users/admin_update_user',{
  title:"管理画面",
  });
});
//管理者ページ(削除)
router.get('/admin_delete_user', (req, res, next)=> {
  res.render('users/admin_delete_user',{
  title:"管理画面",
  });
});
     