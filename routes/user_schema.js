//mongooseをロードする
const mongoose = require('mongoose');

//ユーザー用のスキーマ(dms_user_schema)を作成
const dms_user_schema = mongoose.Schema({
  account:String,
  password:String,
  name:String,
  role:String
});

//スキーマをモデルに適用
module.exports = mongoose.model("dms_user",dms_user_schema);
