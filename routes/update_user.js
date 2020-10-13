var express = require('express');
var router = express.Router();

//ユーザースキーマを読込
const dms_user = require('./user_schema');
//mongooseをロードする
const mongoose = require('mongoose');

/* GET */
router.get('/', (req, res, next)=> { 
  res.send('update!');
});

/* POST */
router.post('/', (req, res, next)=> { 
  //新しいdms_userを作成
  let new_dms_user = new dms_user({
    id:req.body.id,
    password:req.body.password
  });

  //新しいdms_userを保存
  new_dms_user.save((error,result)=>{
    if(error) throw error;
  });
  res.redirect('./show_user');
});

module.exports = router;
