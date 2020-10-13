var express = require('express');
var router = express.Router();

//ユーザースキーマを読込
const dms_user = require('./user_schema');
//mongooseをロードする
const mongoose = require('mongoose');

/* GET */
router.get('/', (req, res, next)=> { 
  dms_user.find({},(error,data)=>{
    if(error) throw error;
    console.log(data.toString());
    
    res.render('show_user', {
      title: 'ユーザー一覧',
      content:data
    });
  });
});

module.exports = router;
