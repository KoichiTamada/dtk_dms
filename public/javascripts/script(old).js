'use strict';
let t_agitator=0;
let t_mixer=0;

var stop_color="LimeGreen";
var start_color="red";
var error_color1="yellow";
var error_color2="DarkKhaki";
var error_text_color1="red";
var error_text_color2="SaddleBrown";

var agitator_pdata1=[];
window.onload = function(){
  
  //現在のURLを取得
  var url=location.href;
  //アジテータ描画
  draw_agitator();
  //ミキサー描画
  draw_mixer();
}

//(1)アジテータ描画
function draw_agitator(){  
  //キャンバスを初期化
  var canvas = document.getElementById("canvas_agitator");
  if(typeof canvas.getContext==='undefined'){
    return;
  }
  var ctx = canvas.getContext("2d");  
  //固定設定
  ctx.font='bold 24px Verdana';
  ctx.textAlign = "center";
  ctx.textBaseline="top";
  ctx.strokeStyle="black";      
  //一端キャンバスをクリア
  ctx.clearRect(0,0,canvas.width,canvas.height);  
  //アジテータ用タイマ
  t_agitator++;
  if(t_agitator>5){
    t_agitator=1  ;
  }
  //アジテータタイマ実行
  setTimeout(draw_agitator,300);  

  switch(t_agitator)//(1)
  {
    case 0://停止
    {
      //羽根の描画
      ctx.beginPath();
      ctx.fillStyle=stop_color;
      ctx.moveTo(0,88);
      ctx.lineTo(0,112);
      ctx.lineTo(200,88);
      ctx.lineTo(200,112);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      //軸の描画
      ctx.fillRect(70,0,60,30);//モーター
      ctx.strokeRect(70,0,60,30);//モーター
      ctx.fillRect(94,30,12,60);//軸
      ctx.strokeRect(94,30,12,60);//軸
      ctx.fillRect(84,90,32,20);//軸芯
      ctx.strokeRect(84,90,32,20);//軸芯
      ctx.fillStyle="white";
      ctx.fillRect(96,32,2,56);//軸光沢
      ctx.fillRect(86,92,2,16);//軸芯光沢
      //モーター文字
      ctx.fillStyle="white";
      ctx.fillText('M',100,4);
      break;
    }
    case 1://運転1
    {
      //羽根の描画
      ctx.beginPath();
      ctx.fillStyle=start_color;
      ctx.moveTo(0,88);
      ctx.lineTo(0,112);
      ctx.lineTo(200,88);
      ctx.lineTo(200,112);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      //軸の描画    
      ctx.fillRect(70,0,60,30);//モーター
      ctx.strokeRect(70,0,60,30);//モーター
      ctx.fillRect(94,30,12,60);//軸
      ctx.strokeRect(94,30,12,60);//軸
      ctx.fillRect(84,90,32,20);//軸芯
      ctx.strokeRect(84,90,32,20);//軸芯
      ctx.fillStyle="white";
      ctx.fillRect(96,32,2,56);//軸光沢
      ctx.fillRect(86,92,2,16);//軸芯光沢
      //モーター文字
      ctx.fillStyle="white";
      ctx.fillText('M',100,4);
      break;
      }
    case 2://運転2
    {
      //羽根の描画
      ctx.beginPath();
      ctx.fillStyle=start_color;
      ctx.moveTo(30,88);
      ctx.lineTo(30,112);
      ctx.lineTo(170,88);
      ctx.lineTo(170,112);
      ctx.closePath();
      ctx.fill();
      ctx.strokeStyle="black";
      ctx.stroke();
      //軸の描画
      ctx.fillRect(70,0,60,30);//モーター
      ctx.strokeRect(70,0,60,30);//モーター
      ctx.fillRect(94,30,12,60);//軸
      ctx.strokeRect(94,30,12,60);//軸
      ctx.fillRect(84,90,32,20);//軸芯
      ctx.strokeRect(84,90,32,20);//軸芯
      ctx.fillStyle="white";
      ctx.fillRect(99,32,2,56);//軸光沢
      ctx.fillRect(99,92,2,16);//軸芯光沢
      //モーター文字
      ctx.fillStyle="white";
      ctx.textAlign = "center";
      ctx.fillText('M',100,4);
      break;
    }
    case 4://運転4
    {
      //羽根の描画
      ctx.beginPath();
      ctx.fillStyle=start_color;
      ctx.moveTo(30,88);
      ctx.lineTo(30,112);
      ctx.lineTo(170,88);
      ctx.lineTo(170,112);
      ctx.closePath();
      ctx.fill();
      ctx.strokeStyle="black";
      ctx.stroke();
      //軸の描画
      ctx.fillRect(70,0,60,30);//モーター
      ctx.strokeRect(70,0,60,30);//モーター
      ctx.fillRect(94,30,12,60);//軸
      ctx.strokeRect(94,30,12,60);//軸
      ctx.fillRect(84,90,32,20);//軸芯
      ctx.strokeRect(84,90,32,20);//軸芯
      //モーター文字
      ctx.fillStyle="white";
      ctx.textAlign = "center";
      ctx.fillText('M',100,4);
      break;
    }
    case 3://運転3
    {
      //軸の描画
      ctx.fillStyle=start_color;
      ctx.fillRect(70,0,60,30);//モーター
      ctx.strokeRect(70,0,60,30);//モーター
      ctx.fillRect(94,30,12,60);//軸
      ctx.strokeRect(94,30,12,60);//軸
      ctx.fillRect(84,90,32,20);//軸芯
      ctx.strokeRect(84,90,32,20);//軸芯
      ctx.fillStyle="white";
      ctx.fillRect(102,32,2,56);//軸光沢
      ctx.fillRect(112,92,2,16);//軸芯光沢
      //モーター文字
      ctx.fillStyle="white";
      ctx.fillText('M',100,4);
      //羽根の描画
      ctx.fillStyle="black";
      ctx.fillRect(96,88,8,24);      
      break;
    }
    case 5://運転5
    {
      //羽根の描画
      ctx.beginPath();
      ctx.fillStyle=start_color;
      ctx.moveTo(0,88);
      ctx.lineTo(0,112);
      ctx.lineTo(200,88);
      ctx.lineTo(200,112);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      //軸の描画    
      ctx.fillRect(70,0,60,30);//モーター
      ctx.strokeRect(70,0,60,30);//モーター
      ctx.fillRect(94,30,12,60);//軸
      ctx.strokeRect(94,30,12,60);//軸
      ctx.fillRect(84,90,32,20);//軸芯
      ctx.strokeRect(84,90,32,20);//軸芯
      ctx.fillStyle="white";
      //モーター文字
      ctx.fillStyle="white";
      ctx.fillText('M',100,4);
      break;
      }
    case 10://異常1
      {
        //羽根の描画
        ctx.beginPath();
        ctx.fillStyle=error_color1;
        ctx.moveTo(0,88);
        ctx.lineTo(0,112);
        ctx.lineTo(200,88);
        ctx.lineTo(200,112);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        //軸の描画
        ctx.fillRect(70,0,60,30);//モーター
        ctx.strokeRect(70,0,60,30);//モーター
        ctx.fillRect(94,30,12,60);//軸
        ctx.strokeRect(94,30,12,60);//軸
        ctx.fillRect(84,90,32,20);//軸芯
        ctx.strokeRect(84,90,32,20);//軸芯
        ctx.fillStyle="white";
        ctx.fillRect(96,32,2,56);//軸光沢
        ctx.fillRect(86,92,2,16);//軸芯光沢
        //モーター文字
        ctx.fillStyle=error_text_color1;
        ctx.fillText('M',100,4);
        break;
      }
    case 11://異常2
    {
      //羽根の描画
      ctx.beginPath();
      ctx.fillStyle=error_color2;
      ctx.moveTo(0,88);
      ctx.lineTo(0,112);
      ctx.lineTo(200,88);
      ctx.lineTo(200,112);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      //軸の描画
      ctx.fillRect(70,0,60,30);//モーター
      ctx.strokeRect(70,0,60,30);//モーター
      ctx.fillRect(94,30,12,60);//軸
      ctx.strokeRect(94,30,12,60);//軸
      ctx.fillRect(84,90,32,20);//軸芯  
      ctx.strokeRect(84,90,32,20);//軸芯  
      ctx.fillStyle="white";
      ctx.fillRect(96,32,2,56);//軸光沢
      ctx.fillRect(86,92,2,16);//軸芯光沢
      //モーター文字
      ctx.fillStyle=error_text_color2;
      ctx.fillText('M',100,4);
      break;
    }
  }
}
//(2)ミキサー描画
function draw_mixer(){  
  //キャンバスを初期化
  var canvas = document.getElementById("canvas_mixer");
  if(typeof canvas.getContext==='undefined'){
    return;
  }
  var ctx = canvas.getContext("2d");  
  //固定設定
  ctx.font='bold 24px Verdana';
  ctx.textAlign = "center";
  ctx.textBaseline="top";
  ctx.strokeStyle="black";      
  //一端キャンバスをクリア
  ctx.clearRect(0,0,canvas.width,canvas.height);  
  t_mixer++;
  if(t_mixer>4){
    t_mixer=1;
  }
  //設定時間後再実行
  setTimeout(draw_mixer,200);  
  
  switch(t_mixer)//(1)
  {
    case 0://停止
    {
      //羽根の描画
      ctx.beginPath();
      ctx.fillStyle=stop_color;
      ctx.moveTo(20,84);
      ctx.lineTo(20,112);
      ctx.lineTo(180,112);
      ctx.lineTo(180,84);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      //羽根の内部
      ctx.beginPath();
      ctx.fillStyle="white";
      ctx.fillRect( 22,90, 12,18);//+19
      ctx.fillRect( 54,90, 30,18);//+33
      ctx.fillRect( 117,90, 30,18);//+19
      ctx.fillRect( 168,90, 10,18);//
      
      //軸の描画
      ctx.fillStyle=stop_color;
      ctx.fillRect(70,0,60,30);//モーター
      ctx.strokeRect(70,0,60,30);//モーター
      ctx.fillRect(94,30,12,54);//軸
      ctx.strokeRect(94,30,12,54);//軸
      ctx.fillStyle="white";
      ctx.fillRect(96,32,2,50);//軸光沢
      //モーター文字
      ctx.fillStyle="white";
      ctx.fillText('M',100,4);
      break;
    }
    case 1://運転1
    {
      //羽根の描画
      ctx.beginPath();
      ctx.fillStyle=start_color;
      ctx.moveTo(20,84);
      ctx.lineTo(20,112);
      ctx.lineTo(180,112);
      ctx.lineTo(180,84);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      //羽根の内部
      ctx.beginPath();
      ctx.fillStyle="white";
      ctx.fillRect( 22,90, 12,18);//+19
      ctx.fillRect( 54,90, 30,18);//+33
      ctx.fillRect( 117,90, 30,18);//+19
      ctx.fillRect( 168,90, 10,18);//
      //軸の描画
      ctx.fillStyle=start_color;
      ctx.fillRect(70,0,60,30);//モーター
      ctx.strokeRect(70,0,60,30);//モーター
      ctx.fillRect(94,30,12,54);//軸
      ctx.strokeRect(94,30,12,54);//軸
      ctx.fillStyle="white";
      ctx.fillRect(96,32,2,50);//軸光沢 
      
      //モーター文字
      ctx.fillStyle="white";
      ctx.fillText('M',100,4);
      break;
    }
    case 2://運転2
    {
      //羽根の描画
      ctx.beginPath();
      ctx.fillStyle=start_color;
      ctx.moveTo(20,84);
      ctx.lineTo(20,112);
      ctx.lineTo(180,112);
      ctx.lineTo(180,84);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      //羽根の内部
      ctx.beginPath();
      ctx.fillStyle="white";
      ctx.fillRect( 31,90, 30,18);//+22
      ctx.fillRect( 83,90, 34,18);//+22
      ctx.fillRect( 139,90, 30,18);//
      
      //軸の描画
      ctx.fillStyle=start_color;
      ctx.fillRect(70,0,60,30);//モーター
      ctx.strokeRect(70,0,60,30);//モーター
      ctx.fillRect(94,30,12,54);//軸
      ctx.strokeRect(94,30,12,54);//軸
      ctx.fillStyle="white";
      ctx.fillRect(102,32,2,50);//軸光沢
      //モーター文字
      ctx.fillStyle="white";
      ctx.fillText('M',100,4);
      break;
    }
    case 3://運転3
    {
      //羽根の描画
      ctx.beginPath();
      ctx.fillStyle=start_color;
      ctx.moveTo(20,84);
      ctx.lineTo(20,112);
      ctx.lineTo(180,112);
      ctx.lineTo(180,84);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      //羽根の内部
      ctx.beginPath();
      ctx.fillStyle="white";
      ctx.fillRect( 22,90, 12,18);//+19
      ctx.fillRect( 54,90, 30,18);//+33
      ctx.fillRect( 117,90, 30,18);//+19
      ctx.fillRect( 168,90, 10,18);//
      
      //軸の描画    
      ctx.fillStyle=start_color;
      ctx.fillRect(70,0,60,30);//モーター
      ctx.strokeRect(70,0,60,30);//モーター
      ctx.fillRect(94,30,12,54);//軸
      ctx.strokeRect(94,30,12,54);//軸
      //モーター文字
      ctx.fillStyle="white";
      ctx.fillText('M',100,4);
      break;
    }
    case 4://運転4
    {
      //羽根の描画
      ctx.beginPath();
      ctx.fillStyle=start_color;
      ctx.moveTo(20,84);
      ctx.lineTo(20,112);
      ctx.lineTo(180,112);
      ctx.lineTo(180,84);
      ctx.closePath();
      ctx.fill();
      ctx.strokeStyle="black";
      ctx.stroke();
      //軸の描画
      ctx.fillRect(70,0,60,30);//モーター
      ctx.strokeRect(70,0,60,30);//モーター
      ctx.fillRect(94,30,12,54);//軸
      ctx.strokeRect(94,30,12,54);//軸
      //羽根の内部
      ctx.beginPath();
      ctx.fillStyle="white";
      ctx.fillRect( 31,90, 30,18);//+22
      ctx.fillRect( 83,90, 34,18);//+22
      ctx.fillRect( 139,90, 30,18);//
      //モーター文字
      ctx.fillStyle="white";
      ctx.textAlign = "center";
      ctx.fillText('M',100,4);
      break;
    }
    case 10://異常1
    {
      //羽根の描画
      ctx.beginPath();
      ctx.fillStyle=error_color1;
      ctx.moveTo(20,84);
      ctx.lineTo(20,112);
      ctx.lineTo(180,112);
      ctx.lineTo(180,84);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      //軸の描画
      ctx.fillRect(70,0,60,30);//モーター
      ctx.strokeRect(70,0,60,30);//モーター
      ctx.fillRect(94,30,12,54);//軸
      ctx.strokeRect(94,30,12,54);//軸
      //モーター文字
      ctx.fillStyle=error_text_color1;
      ctx.fillText('M',100,4);
      break;
    }
    case 11://異常2
    {
      //羽根の描画
      ctx.beginPath();
      ctx.fillStyle=error_color2;
      ctx.moveTo(20,84);
      ctx.lineTo(20,112);
      ctx.lineTo(180,112);
      ctx.lineTo(180,84);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      //軸の描画
      ctx.fillRect(70,0,60,30);//モーター
      ctx.strokeRect(70,0,60,30);//モーター
      ctx.fillRect(94,30,12,54);//軸
      ctx.strokeRect(94,30,12,54);//軸
      //モーター文字
      ctx.fillStyle=error_text_color2;
      ctx.fillText('M',100,4);
      break;
    }
  }
}
    
  