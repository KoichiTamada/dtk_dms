var express = require('express');
var router = express.Router();
const fs = require('fs');

/* */
router.get('/', (req, res, next)=> {
  var lineData=[];
  var sendData;//JSON型
  var text = fs.readFileSync('./data/read.txt','utf-8',(err,data)=>
  {
    if(err) throw err;
  });
  // console.log(text);
  var lines = text.toString().split('\n');
    // console.log(lines);
    for(var line of lines){
      // console.log(line);
      lineData.push(line.trim('\n'));
    }
    rowCnt=lineData.length;
    console.log(rowCnt);
    // console.log(lineData);
    
    var jsonData=[];
    
    //各行をJSON型に変換
    for(var i=0;i<rowCnt-1;i++){
      jsonData.push(lineData[i].substr(0,3)+":" + lineData[i].substr(4,7));
      // console.log(jsonData[i]);
    }
    
    //配列→JSON型に変換して送る
    sendData = JSON.stringify(jsonData);
    // console.log(sendData);
    var data1="'apple': 'リンゴ'"

    var obj = {
      "apple": "リンゴ",
      "banana": "バナナ",
      "cherry": "チェリー"
    };

    /** データをJSON文字列に変換 */
    var json = JSON.stringify(sendData);


    res.json(json);
    // res.redirect('monitor');
});

module.exports = router;
