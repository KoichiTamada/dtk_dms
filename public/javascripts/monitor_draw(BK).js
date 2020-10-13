'use strict';
//ランプコモンステータス
//0:通常状態 10:運転ﾗﾝﾌﾟﾃｽﾄ 11:警報ﾗﾝﾌﾟﾃｽﾄ
let lamp_common_status=0;//共通ランプステータス

//0:停止 1:運転 2:異常
let draw_mixer_status=0;
let draw_agitator_status=0;
let draw_cement_sailoA_status=0;
let draw_cement_sailoB_status=0;
let draw_bent_sailo_status=0;
let draw_w_p1_status=0;
let draw_w_p2_status=0;
let draw_gn4_p_status=0;
let draw_gn5_p_status=0;
let draw_gn4_bin_status=0;
let draw_gn5_bin_status=0;
let draw_mixer_haisyutsu1_status=0;
let draw_mixer_haisyutsu2_status=0;
let draw_gn5_tonyu_status=0;
let draw_gn4_haisyutsu_status=0;
let draw_gn5_haisyutsu_status=0;

//タイマー初期化
let t_mixer=0;
let t_agitator=0;
let t_cement_sailoA=0;
let t_cement_sailoB=0;
let t_bent_sailo=0;
let t_w_p1=0;
let t_w_p2=0;
let t_gn4_p=0;
let t_gn5_p=0;
let t_gn4_bin=0;
let t_gn5_bin=0;
let t_gen5_int=0;
let t_mixer_haisyutsu1=0;
let t_mixer_haisyutsu2=0;
let t_gn5_tonyu=0;
let t_gn4_haisyutsu=0;
let t_gn5_haisyutsu=0;

//カラー初期化
var stop_color="LimeGreen";
var start_color="red";
var error_color1="yellow";
var error_color2="DarkKhaki";
var error_text_color1="red";
var error_text_color2="SaddleBrown";
// var agitator_pdata1=[];

var lamp_test_status=false;//ランプテストボタン状態

window.onload = function(){

  //ランプテストスイッチ
  var btn_test = document.getElementById("btn-test");
  var rd_test_run = document.getElementById("rd-test-run");
  var rd_test_err = document.getElementById("rd-test-err");
  
  //ボタンスイッチの状態を確認
  btn_test.addEventListener("click",()=>{
    if(lamp_test_status==false){
      //ランプテスト
      lamp_test_status=true;
      //ラジオボタンを使用不可
      rd_test_run.setAttribute("disabled",true);
      rd_test_err.setAttribute("disabled",true);
      
      if(rd_test_run.checked==true){
        lamp_common_status=10;//共通ステータス：テスト運転
        // alert("lamp_common_status:"+lamp_common_status);
      }else{
        lamp_common_status=11;//共通ステータス：テスト警報
        // alert("lamp_common_status:"+lamp_common_status);
      }
    }else{
      //通常状態
      lamp_test_status=false;
      //ラジオボタンを使用可
      rd_test_run.removeAttribute("disabled");
      rd_test_err.removeAttribute("disabled");
      lamp_common_status=0;//共通ステータス
      // alert("lamp_common_status:"+lamp_common_status);  
    }
  });//テストボタン終了
  
  //現在のURLを取得
  var url=location.href;
  //(1)ミキサー描画
  draw_mixer();
  //(2)アジテータ描画
  draw_agitator();
  //(3)セメントサイロA
  draw_cement_sailoA();
  //(4)セメントサイロB
  draw_cement_sailoB();
  //(5)ベントナイトサイロ
  draw_bent_sailo();
  //(6)給水ポンプ1
  draw_w_p1();
  //(7)給水ポンプ2
  draw_w_p2();
  //(8)原料4ポンプ
  draw_gn4_p();
  //(9)原料5ポンプ
  draw_gn5_p();
  //(10)原料ビン4
  draw_gn4_bin();
  //(7)原料ビン5
  draw_gn5_bin();
  //(11)ミキサー排出弁1
  draw_mixer_haisyutsu1();
  //(12)ミキサー排出弁2
  draw_mixer_haisyutsu2();
  //(13)原料5投入弁
  draw_gn5_tonyu();
  //(14)原料4排出弁
  draw_gn4_haisyutsu();
  //(15)原料5排出弁
  draw_gn5_haisyutsu();
}

//(1)ミキサー描画
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

  //コモンステータス　　0:通常状態 10:運転ﾗﾝﾌﾟﾃｽﾄ 11:警報ﾗﾝﾌﾟﾃｽﾄ
  //ミキサーステータス　0:停止 1:運転 2:異常
  switch(lamp_common_status){
    case 0:
      switch(draw_mixer_status){
        case 0://停止
          t_mixer=0;
          break;
        case 1://運転
          t_mixer++;
          if(t_mixer==5){
            t_mixer=1;
          }
          break;
        case 2://異常
          t_mixer++;
          if(t_mixer<10){t_mixer=10;}
          if(t_mixer==12){
            t_mixer=10;
          }
          break;
        default:
          break;
      }
      break;
    case 10:
      t_mixer++;
      if(t_mixer==5){
        t_mixer=1;
      }
      break;
    case 11:
      t_mixer++;
      if(t_mixer<10){t_mixer=10;}
      if(t_mixer==12){
        t_mixer=10;
      }
      break;
    default:
      break;
  }
  
  //設定時間後再実行
  setTimeout(draw_mixer,500);  
  
  switch(t_mixer)//(1)
  {
    case 0://停止
    {
      //羽根の描画
      ctx.beginPath();
      ctx.fillStyle=stop_color;
      ctx.moveTo(46,72);
      ctx.lineTo(46,100);
      ctx.lineTo(206,100);
      ctx.lineTo(206,72);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      //羽根の内部
      ctx.beginPath();
      ctx.fillStyle="white";
      ctx.fillRect( 46,78, 12,18);//+19
      ctx.fillRect( 80,78, 30,18);//+33
      ctx.fillRect( 141,78, 30,18);//+19
      ctx.fillRect( 194,78, 10,18);//      
      //モーター・軸の描画
      ctx.fillStyle=stop_color;
      ctx.fillRect(96,0,60,30);//モーター
      ctx.strokeRect(96,0,60,30);//モーター
      ctx.fillRect(120,30,12,42);//軸
      ctx.strokeRect(120,30,12,42);//軸
      ctx.fillStyle="white";
      ctx.fillRect(122,32,2,38);//軸光沢
      //モーター文字
      ctx.fillStyle="white";
      ctx.fillText('M',126,4);
      //文字
      ctx.fillStyle="black";
      ctx.font="14px 'ＭＳ Ｐ ゴシック";
      ctx.fillText('ミキサ',40,2);
      break;
    }
    case 1://運転1
    {
      //羽根の描画
      ctx.beginPath();
      ctx.fillStyle=start_color;
      ctx.moveTo(46,72);
      ctx.lineTo(46,100);
      ctx.lineTo(206,100);
      ctx.lineTo(206,72);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      //羽根の内部
      ctx.beginPath();
      ctx.fillStyle="white";
      ctx.fillRect(48,78, 12,18);//+19
      ctx.fillRect(80,78, 30,18);//+33
      ctx.fillRect(143,78, 30,18);//+19
      ctx.fillRect(194,78, 10,18);//
      //モーター・軸の描画
      ctx.fillStyle=start_color;
      ctx.fillRect(96,0,60,30);//モーター
      ctx.strokeRect(96,0,60,30);//モーター
      ctx.fillRect(120,30,12,42);//軸
      ctx.strokeRect(120,30,12,42);//軸
      ctx.fillStyle="white";
      ctx.fillRect(122,32,2,38);//軸光沢       
      //モーター文字
      ctx.fillStyle="white";
      ctx.fillText('M',126,4);
      //文字
      ctx.fillStyle="black";
      ctx.font="14px 'ＭＳ Ｐ ゴシック";
      ctx.fillText('ミキサ',40,2);
      break;
    }
    case 2://運転2
    {
      //羽根の描画
      ctx.beginPath();
      ctx.fillStyle=start_color;
      ctx.moveTo(46,72);
      ctx.lineTo(46,100);
      ctx.lineTo(206,100);
      ctx.lineTo(206,72);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      //羽根の内部
      ctx.beginPath();
      ctx.fillStyle="white";
      ctx.fillRect(57,78, 30,18);//+22
      ctx.fillRect(109,78, 34,18);//+22
      ctx.fillRect(165,78, 30,18);//      
      //モーター・軸の描画
      ctx.fillStyle=start_color;
      ctx.fillRect(96,0,60,30);//モーター
      ctx.strokeRect(96,0,60,30);//モーター
      ctx.fillRect(120,30,12,42);//軸
      ctx.strokeRect(120,30,12,42);//軸
      //軸光沢
      ctx.fillStyle="white";
      ctx.fillRect(128,32,2,38);//軸光沢
      //モーター文字
      ctx.fillStyle="white";
      ctx.fillText('M',126,4);
      //文字
      ctx.fillStyle="black";
      ctx.font="14px 'ＭＳ Ｐ ゴシック";
      ctx.fillText('ミキサ',40,2);
      break;
    }
    case 3://運転3
    {
      //羽根の描画
      ctx.beginPath();
      ctx.fillStyle=start_color;
      ctx.moveTo(46,72);
      ctx.lineTo(46,100);
      ctx.lineTo(206,100);
      ctx.lineTo(206,72);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      //羽根の内部
      ctx.beginPath();
      ctx.fillStyle="white";
      ctx.fillRect(48,78,12,18);//+19
      ctx.fillRect(80,78,30,18);//+33
      ctx.fillRect(143,78,30,18);//+19
      ctx.fillRect(194,78,10,18);//      
      //モーター・軸の描画    
      ctx.fillStyle=start_color;
      ctx.fillRect(96,0,60,30);//モーター
      ctx.strokeRect(96,0,60,30);//モーター
      ctx.fillRect(120,30,12,42);//軸
      ctx.strokeRect(120,30,12,42);//軸
      //軸光沢
      // ctx.fillStyle="white";
      // ctx.fillRect(116,32,2,38);
      //モーター文字
      ctx.fillStyle="white";
      ctx.fillText('M',126,4);
      //文字
      ctx.fillStyle="black";
      ctx.font="14px 'ＭＳ Ｐ ゴシック";
      ctx.fillText('ミキサ',40,2);
      break;
    }
    case 4://運転4
    {
      //羽根の描画
      ctx.beginPath();
      ctx.fillStyle=start_color;
      ctx.moveTo(46,72);
      ctx.lineTo(46,100);
      ctx.lineTo(206,100);
      ctx.lineTo(206,72);
      ctx.closePath();
      ctx.fill();
      ctx.strokeStyle="black";
      ctx.stroke();
      //羽根の内部
      ctx.beginPath();
      ctx.fillStyle="white";
      ctx.fillRect(57,78, 30,18);//+22
      ctx.fillRect(109,78, 34,18);//+22
      ctx.fillRect(165,78, 30,18);//
      //モーター・軸の描画
      ctx.fillStyle=start_color;
      ctx.fillRect(96,0,60,30);//モーター
      ctx.strokeRect(96,0,60,30);//モーター
      ctx.fillRect(120,30,12,42);//軸
      ctx.strokeRect(120,30,12,42);//軸
      //軸光沢
      ctx.fillStyle="white";
      ctx.fillRect(122,32,2,38);//軸光沢
      //モーター文字
      ctx.fillStyle="white";
      ctx.textAlign = "center";
      ctx.fillText('M',126,4);
      //文字
      ctx.fillStyle="black";
      ctx.font="14px 'ＭＳ Ｐ ゴシック";
      ctx.fillText('ミキサ',40,2);
      break;
    }
    case 10://異常1
    {
      //羽根の描画
      ctx.beginPath();
      ctx.fillStyle= ctx.fillStyle=error_color1;
      ctx.moveTo(46,72);
      ctx.lineTo(46,100);
      ctx.lineTo(206,100);
      ctx.lineTo(206,72);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      //羽根の内部
      ctx.beginPath();
      ctx.fillStyle="white";
      ctx.fillRect(48,78, 12,18);//+19
      ctx.fillRect(80,78, 30,18);//+33
      ctx.fillRect(143,78, 30,18);//+19
      ctx.fillRect(194,78, 10,18);//      
      //モーター・軸の描画
      ctx.fillStyle= ctx.fillStyle=error_color1;
      ctx.fillRect(96,0,60,30);//モーター
      ctx.strokeRect(96,0,60,30);//モーター
      ctx.fillRect(120,30,12,42);//軸
      ctx.strokeRect(120,30,12,42);//軸
      ctx.fillStyle="white";
      ctx.fillRect(122,32,2,38);//軸光沢
      //モーター文字
      ctx.fillStyle=error_text_color1;
      ctx.fillText('M',126,4);
      //文字
      ctx.fillStyle="black";
      ctx.font="14px 'ＭＳ Ｐ ゴシック";
      ctx.fillText('ミキサ',40,2);     
      break;
    }
    case 11://異常2
    {
      //羽根の描画
      ctx.beginPath();
      ctx.fillStyle= ctx.fillStyle=error_color2;
      ctx.moveTo(46,72);
      ctx.lineTo(46,100);
      ctx.lineTo(206,100);
      ctx.lineTo(206,72);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      //羽根の内部
      ctx.beginPath();
      ctx.fillStyle="white";
      ctx.fillRect(48,78, 12,18);//+19
      ctx.fillRect(80,78, 30,18);//+33
      ctx.fillRect(143,78, 30,18);//+19
      ctx.fillRect(194,78, 10,18);//      
      //モーター・軸の描画
      ctx.fillStyle= ctx.fillStyle=error_color2;
      ctx.fillRect(96,0,60,30);//モーター
      ctx.strokeRect(96,0,60,30);//モーター
      ctx.fillRect(120,30,12,42);//軸
      ctx.strokeRect(120,30,12,42);//軸
      ctx.fillStyle="white";
      ctx.fillRect(122,32,2,38);//軸光沢
      //モーター文字
      ctx.fillStyle=error_text_color2;
      ctx.fillText('M',126,4);
      //文字
      ctx.fillStyle="black";
      ctx.font="14px 'ＭＳ Ｐ ゴシック";
      ctx.fillText('ミキサ',40,2);
      break;
    }
  }
}//draw_mixer　終了

//(2)アジテータ描画
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
  
  //コモンステータス　　0:通常状態 10:運転ﾗﾝﾌﾟﾃｽﾄ 11:警報ﾗﾝﾌﾟﾃｽﾄ
  //ミキサーステータス　0:停止 1:運転 2:異常
  switch(lamp_common_status){
    case 0:
      switch(draw_agitator_status){
        case 0://停止
          t_agitator=0;
          break;
        case 1://運転
          t_agitator++;
          if(t_agitator==5){
            t_agitator=1;
          }
          break;
        case 2://異常
          t_agitator++;
          if(t_agitator<10){t_agitator=10;}
          if(t_agitator==12){
            t_agitator=10;
          }
          break;
        default:
          break;
      }
      break;
    case 10:
      t_agitator++;
      if(t_agitator==5){
        t_agitator=1;
      }
      break;
    case 11:
      t_agitator++;
      if(t_agitator<10){t_agitator=10;}
      if(t_agitator==12){
        t_agitator=10;
      }
      break;
    default:
      break;
  }
  //設定時間後再実行
  setTimeout(draw_agitator,500);  

  switch(t_agitator)//(1)
  {
    case 0://停止
    {
      //羽根の描画
      ctx.beginPath();
      ctx.fillStyle=stop_color;
      ctx.moveTo(26,76);
      ctx.lineTo(26,100);
      ctx.lineTo(226,76);
      ctx.lineTo(226,100);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      //モーター・軸の描画
      ctx.fillRect(96,0,60,30);//モーター
      ctx.strokeRect(96,0,60,30);//モーター
      ctx.fillRect(120,30,12,48);//軸
      ctx.strokeRect(120,30,12,48);//軸
      ctx.fillRect(110,78,32,20);//軸芯
      ctx.strokeRect(110,78,32,20);//軸芯
      ctx.fillStyle="white";
      ctx.fillRect(122,32,2,44);//軸光沢
      ctx.fillRect(122,80,2,16);//軸芯光沢
      //モーター文字
      ctx.fillStyle="white";
      ctx.fillText('M',126,4);
      //文字
      ctx.fillStyle="black";
      ctx.font="14px 'ＭＳ Ｐ ゴシック";
      ctx.fillText('アジテータ',45,2);
      break;
    }
    case 1://運転1
    {
      //羽根の描画
      ctx.beginPath();
      ctx.fillStyle=start_color;
      ctx.moveTo(26,76);
      ctx.lineTo(26,100);
      ctx.lineTo(226,76);
      ctx.lineTo(226,100);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      //モーター・軸の描画    
      ctx.fillRect(96,0,60,30);//モーター
      ctx.strokeRect(96,0,60,30);//モーター
      ctx.fillRect(120,30,12,48);//軸
      ctx.strokeRect(120,30,12,48);//軸
      ctx.fillRect(110,78,32,20);//軸芯
      ctx.strokeRect(110,78,32,20);//軸芯
      ctx.fillStyle="white";
      ctx.fillRect(122,32,2,44);//軸光沢
      ctx.fillRect(112,80,2,16);//軸芯光沢
      //モーター文字
      ctx.fillStyle="white";
      ctx.fillText('M',126,4);
      //文字
      ctx.fillStyle="black";
      ctx.font="14px 'ＭＳ Ｐ ゴシック";
      ctx.fillText('アジテータ',45,2);
      break;
      }
    case 2://運転2
    {
      //羽根の描画
      ctx.beginPath();
      ctx.fillStyle=start_color;
      ctx.moveTo(56,76);
      ctx.lineTo(56,100);
      ctx.lineTo(196,76);
      ctx.lineTo(196,100);
      ctx.closePath();
      ctx.fill();
      ctx.strokeStyle="black";
      ctx.stroke();
      //モーター・軸の描画
      ctx.fillRect(96,0,60,30);//モーター
      ctx.strokeRect(96,0,60,30);//モーター
      ctx.fillRect(120,30,12,48);//軸
      ctx.strokeRect(120,30,12,48);//軸
      ctx.fillRect(110,78,32,20);//軸芯
      ctx.strokeRect(110,78,32,20);//軸芯
      ctx.fillStyle="white";
      ctx.fillRect(124,32,2,44);//軸光沢
      ctx.fillRect(116,80,2,16);//軸芯光沢
      //モーター文字
      ctx.fillStyle="white";
      ctx.textAlign = "center";
      ctx.fillText('M',126,4);
      //文字
      ctx.fillStyle="black";
      ctx.font="14px 'ＭＳ Ｐ ゴシック";
      ctx.fillText('アジテータ',45,2);
      break;
    }
    case 3://運転3
    {
       //羽根の描画
       ctx.beginPath();
      //  ctx.fillStyle=start_color;
      //  ctx.moveTo(50,76);
      //  ctx.lineTo(50,100);
      //  ctx.lineTo(190,76);
      //  ctx.lineTo(190,100);
      //  ctx.closePath();
      //  ctx.fill();
       ctx.strokeStyle="black";
       ctx.stroke();      
      //モーター・軸の描画
      ctx.fillStyle=start_color;
      ctx.fillRect(96,0,60,30);//モーター
      ctx.strokeRect(96,0,60,30);//モーター
      ctx.fillRect(120,30,12,48);//軸
      ctx.strokeRect(120,30,12,48);//軸
      ctx.fillRect(110,78,32,20);//軸芯
      ctx.strokeRect(110,78,32,20);//軸芯
      ctx.fillStyle="white";
      ctx.fillRect(126,32,2,44);//軸光沢
      ctx.fillRect(132,80,2,16);//軸芯光沢
      //モーター文字
      ctx.fillStyle="white";
      ctx.fillText('M',126,4);
      //羽根の描画
      ctx.fillStyle="black";
      ctx.fillRect(122,76,8,24);   
      //文字
      ctx.fillStyle="black";
      ctx.font="14px 'ＭＳ Ｐ ゴシック";
      ctx.fillText('アジテータ',45,2);   
      break;
    }
    case 4://運転4
    {
      //羽根の描画
      ctx.beginPath();
      ctx.fillStyle=start_color;
      ctx.moveTo(56,76);
      ctx.lineTo(56,100);
      ctx.lineTo(196,76);
      ctx.lineTo(196,100);
      ctx.closePath();
      ctx.fill();
      ctx.strokeStyle="black";
      ctx.stroke();
      //モーター・軸の描画
      ctx.fillRect(96,0,60,30);//モーター
      ctx.strokeRect(96,0,60,30);//モーター
      ctx.fillRect(120,30,12,48);//軸
      ctx.strokeRect(120,30,12,48);//軸
      ctx.fillRect(110,78,32,20);//軸芯
      ctx.strokeRect(110,78,32,20);//軸芯
      //モーター文字
      ctx.fillStyle="white";
      ctx.textAlign = "center";
      ctx.fillText('M',126,4);
      //文字
      ctx.fillStyle="black";
      ctx.font="14px 'ＭＳ Ｐ ゴシック";
      ctx.fillText('アジテータ',45,2);
      break;
    }
    case 5://運転5
    {
      //羽根の描画
      ctx.beginPath();
      ctx.fillStyle=start_color;
      ctx.moveTo(26,76);
      ctx.lineTo(26,100);
      ctx.lineTo(226,76);
      ctx.lineTo(226,100);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      //モーター・軸の描画    
      ctx.fillRect(96,0,60,30);//モーター
      ctx.strokeRect(96,0,60,30);//モーター
      ctx.fillRect(120,30,12,48);//軸
      ctx.strokeRect(120,30,12,48);//軸
      ctx.fillRect(110,78,32,20);//軸芯
      ctx.strokeRect(110,78,32,20);//軸芯
      ctx.fillStyle="white";
      //モーター文字
      ctx.fillStyle="white";
      ctx.fillText('M',126,4);
      //文字
      ctx.fillStyle="black";
      ctx.font="14px 'ＭＳ Ｐ ゴシック";
      ctx.fillText('アジテータ',45,2);
      break;
      }
    case 10://異常1
    {
      //羽根の描画
      ctx.beginPath();
      ctx.fillStyle=error_color1;
      ctx.moveTo(26,76);
      ctx.lineTo(26,100);
      ctx.lineTo(226,76);
      ctx.lineTo(226,100);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      //モーター・軸の描画
      ctx.fillRect(96,0,60,30);//モーター
      ctx.strokeRect(96,0,60,30);//モーター
      ctx.fillRect(120,30,12,48);//軸
      ctx.strokeRect(120,30,12,48);//軸
      ctx.fillRect(110,78,32,20);//軸芯
      ctx.strokeRect(110,78,32,20);//軸芯
      ctx.fillStyle="white";
      ctx.fillRect(122,32,2,44);//軸光沢
      ctx.fillRect(112,80,2,16);//軸芯光沢
      //モーター文字
      ctx.fillStyle=error_text_color1;
      ctx.fillText('M',126,4);
      //文字
      ctx.fillStyle="black";
      ctx.font="14px 'ＭＳ Ｐ ゴシック";
      ctx.fillText('アジテータ',45,2);
      break;
    }
    case 11://異常2
    {
      //羽根の描画
      ctx.beginPath();
      ctx.fillStyle=error_color2;
      ctx.moveTo(26,76);
      ctx.lineTo(26,100);
      ctx.lineTo(226,76);
      ctx.lineTo(226,100);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      //モーター・軸の描画
      ctx.fillRect(96,0,60,30);//モーター
      ctx.strokeRect(96,0,60,30);//モーター
      ctx.fillRect(120,30,12,48);//軸
      ctx.strokeRect(120,30,12,48);//軸
      ctx.fillRect(110,78,32,20);//軸芯  
      ctx.strokeRect(110,78,32,20);//軸芯  
      ctx.fillStyle="white";
      ctx.fillRect(122,32,2,44);//軸光沢
      ctx.fillRect(112,80,2,16);//軸芯光沢
      //モーター文字
      ctx.fillStyle=error_text_color2;
      ctx.fillText('M',126,4);
      //文字
      ctx.fillStyle="black";
      ctx.font="14px 'ＭＳ Ｐ ゴシック";
      ctx.fillText('アジテータ',45,2);
      break;
    }
  }
}//draw_agitator　終了

//(3)セメントサイロA描画
function draw_cement_sailoA(){  
  //キャンバスを初期化
  var canvas = document.getElementById("canvas_cement_sailoA");
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
  //セメントサイロA用タイマ
  //コモンステータス　　0:通常状態 10:運転ﾗﾝﾌﾟﾃｽﾄ 11:警報ﾗﾝﾌﾟﾃｽﾄ
  //ミキサーステータス　0:停止 1:運転 2:異常
  switch(lamp_common_status){
    case 0:
      switch(draw_cement_sailoA_status){
        case 0://停止
          t_cement_sailoA=0;
          break;
        case 1://運転
          t_cement_sailoA++;
          if(t_cement_sailoA==4){
            t_cement_sailoA=1;
          }
          break;
        case 2://異常
          t_cement_sailoA++;
          if(t_cement_sailoA<10){t_cement_sailoA=10;}
          if(t_cement_sailoA==12){
            t_cement_sailoA=10;
          }
          break;
        default:
          break;
      }
      break;
    case 10:
      t_cement_sailoA++;
      if(t_cement_sailoA==4){
        t_cement_sailoA=1;
      }
      break;
    case 11:
      t_cement_sailoA++;
      if(t_cement_sailoA<10){t_cement_sailoA=10;}
      if(t_cement_sailoA==12){
        t_cement_sailoA=10;
      }
      break;
    default:
      break;
  }
  
  //設定時間後再実行
  setTimeout(draw_cement_sailoA,500);  

  switch(t_cement_sailoA)
  {
    case 0://停止
    {
      //サイロの描画
      ctx.beginPath();
      ctx.fillStyle=stop_color;
      ctx.moveTo(0,0);
      ctx.lineTo(55,0);
      ctx.lineTo(55,10);

      ctx.lineTo(76,38);//(1)斜め
      ctx.lineTo(76,46);//(2)縦
      ctx.lineTo(64,46);//(3)横
      ctx.lineTo(64,40);//(4)縦
      ctx.lineTo(55,26);//斜め

      ctx.lineTo(55,100);
      ctx.lineTo(0,100);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      //サイロ文字
      ctx.font="14px 'ＭＳ Ｐ ゴシック";      
      ctx.fillStyle="white";
      ctx.fillText('セメント',27,8);
      ctx.fillText('サイロA',27,26);
      break;
    }
    case 1://運転1
    {
      //サイロの描画
      ctx.beginPath();
      ctx.fillStyle=start_color;
      ctx.moveTo(0,0);
      ctx.lineTo(55,0);
      ctx.lineTo(55,10);

      ctx.lineTo(76,38);//(1)斜め
      ctx.lineTo(76,46);//(2)縦
      ctx.lineTo(64,46);//(3)横
      ctx.lineTo(64,40);//(4)縦
      ctx.lineTo(55,26);//斜め

      ctx.lineTo(55,100);
      ctx.lineTo(0,100);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      //サイロ文字
      ctx.font="14px 'ＭＳ Ｐ ゴシック";      
      ctx.fillStyle="white";
      ctx.fillText('セメント',27,8);
      ctx.fillText('サイロA',27,26);

      //材料落下
      ctx.fillStyle="pink";
      ctx.fillRect(64,50,12,6);
      ctx.fillRect(64,60,12,6);
      ctx.fillRect(64,70,12,6);
      ctx.fillRect(64,80,12,6);
      ctx.fillRect(64,90,12,6);
      ctx.fillRect(64,100,12,6);
      break;
      }
    case 2://運転2
    {
      //サイロの描画
      ctx.beginPath();
      ctx.fillStyle=start_color;
      ctx.moveTo(0,0);
      ctx.lineTo(55,0);
      ctx.lineTo(55,10);

      ctx.lineTo(76,38);//(1)斜め
      ctx.lineTo(76,46);//(2)縦
      ctx.lineTo(64,46);//(3)横
      ctx.lineTo(64,40);//(4)縦
      ctx.lineTo(55,26);//斜め

      ctx.lineTo(55,100);
      ctx.lineTo(0,100);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      //サイロ文字
      ctx.font="14px 'ＭＳ Ｐ ゴシック";      
      ctx.fillStyle="white";
      ctx.fillText('セメント',27,8);
      ctx.fillText('サイロA',27,26);

      //材料落下
      ctx.fillStyle="pink";
      ctx.fillRect(64,46,12,4);
      ctx.fillRect(64,54,12,6);
      ctx.fillRect(64,64,12,6);
      ctx.fillRect(64,74,12,6);
      ctx.fillRect(64,84,12,6);
      ctx.fillRect(64,94,12,6);
      ctx.fillRect(64,104,12,2);
      break;
    }
    case 3://運転3
    {
      //サイロの描画
      ctx.beginPath();
      ctx.fillStyle=start_color;
      ctx.moveTo(0,0);
      ctx.lineTo(55,0);
      ctx.lineTo(55,10);

      ctx.lineTo(76,38);//(1)斜め
      ctx.lineTo(76,46);//(2)縦
      ctx.lineTo(64,46);//(3)横
      ctx.lineTo(64,40);//(4)縦
      ctx.lineTo(55,26);//斜め

      ctx.lineTo(55,100);
      ctx.lineTo(0,100);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      //サイロ文字
      ctx.font="14px 'ＭＳ Ｐ ゴシック";      
      ctx.fillStyle="white";
      ctx.fillText('セメント',27,8);
      ctx.fillText('サイロA',27,26);;

      //材料落下
      ctx.fillStyle="pink";
      ctx.fillRect(64,48,12,6);
      ctx.fillRect(64,58,12,6);
      ctx.fillRect(64,68,12,6);
      ctx.fillRect(64,78,12,6);
      ctx.fillRect(64,88,12,6);
      ctx.fillRect(64,98,12,6);
      // ctx.fillRect(64,108,12,6);
      break;
    }
    case 10://異常1
    {
      //サイロの描画
      ctx.beginPath();
      ctx.fillStyle=error_color1;
      ctx.moveTo(0,0);
      ctx.lineTo(55,0);
      ctx.lineTo(55,10);

      ctx.lineTo(76,38);//(1)斜め
      ctx.lineTo(76,46);//(2)縦
      ctx.lineTo(64,46);//(3)横
      ctx.lineTo(64,40);//(4)縦
      ctx.lineTo(55,26);//斜め

      ctx.lineTo(55,100);
      ctx.lineTo(0,100);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      //サイロ文字
      ctx.fillStyle=error_text_color1;
      ctx.font="14px 'ＭＳ Ｐ ゴシック"; 
      ctx.fillText('セメント',27,8);
      ctx.fillText('サイロA',27,26);
      break;
      }
    case 11://異常2
    {
      //サイロの描画
      ctx.beginPath();
      ctx.fillStyle=error_color2;
      ctx.moveTo(0,0);
      ctx.lineTo(55,0);
      ctx.lineTo(55,10);

      ctx.lineTo(76,38);//(1)斜め
      ctx.lineTo(76,46);//(2)縦
      ctx.lineTo(64,46);//(3)横
      ctx.lineTo(64,40);//(4)縦
      ctx.lineTo(55,26);//斜め

      ctx.lineTo(55,100);
      ctx.lineTo(0,100);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      //サイロ文字
      ctx.fillStyle=error_text_color2;
      ctx.font="14px 'ＭＳ Ｐ ゴシック"; 
      ctx.fillText('セメント',27,8);
      ctx.fillText('サイロA',27,26);
      break;
    }
  }
}//draw_cement_sailoA　終了

//(4)セメントサイロB描画
function draw_cement_sailoB(){  
  //キャンバスを初期化
  var canvas = document.getElementById("canvas_cement_sailoB");
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
  //セメントサイロB用タイマ
  //コモンステータス　　0:通常状態 10:運転ﾗﾝﾌﾟﾃｽﾄ 11:警報ﾗﾝﾌﾟﾃｽﾄ
  //ミキサーステータス　0:停止 1:運転 2:異常
  switch(lamp_common_status){
    case 0:
      switch(draw_cement_sailoB_status){
        case 0://停止
          t_cement_sailoB=0;
          break;
        case 1://運転
          t_cement_sailoB++;
          if(t_cement_sailoB==4){
            t_cement_sailoB=1;
          }
          break;
        case 2://異常
          t_cement_sailoB++;
          if(t_cement_sailoB<10){t_cement_sailoB=10;}
          if(t_cement_sailoB==12){
            t_cement_sailoB=10;
          }
          break;
        default:
          break;
      }
      break;
    case 10:
      t_cement_sailoB++;
      if(t_cement_sailoB==4){
        t_cement_sailoB=1;
      }
      break;
    case 11:
      t_cement_sailoB++;
      if(t_cement_sailoB<10){t_cement_sailoB=10;}
      if(t_cement_sailoB==12){
        t_cement_sailoB=10;
      }
      break;
    default:
      break;
  }
  //設定時間後再実行
  setTimeout(draw_cement_sailoB,500);  

  switch(t_cement_sailoB)
  {
    case 0://停止
    {
      //サイロの描画
      ctx.beginPath();
      ctx.fillStyle=stop_color;
      ctx.moveTo(0,0);
      ctx.lineTo(55,0);
      ctx.lineTo(55,10);

      ctx.lineTo(76,38);//(1)斜め
      ctx.lineTo(76,46);//(2)縦
      ctx.lineTo(64,46);//(3)横
      ctx.lineTo(64,40);//(4)縦
      ctx.lineTo(55,26);//斜め

      ctx.lineTo(55,100);
      ctx.lineTo(0,100);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      //サイロ文字
      ctx.font="14px 'ＭＳ Ｐ ゴシック";      
      ctx.fillStyle="white";
      ctx.fillText('セメント',27,8);
      ctx.fillText('サイロB',27,26);
      break;
    }
    case 1://運転1
    {
      //サイロの描画
      ctx.beginPath();
      ctx.fillStyle=start_color;
      ctx.moveTo(0,0);
      ctx.lineTo(55,0);
      ctx.lineTo(55,10);

      ctx.lineTo(76,38);//(1)斜め
      ctx.lineTo(76,46);//(2)縦
      ctx.lineTo(64,46);//(3)横
      ctx.lineTo(64,40);//(4)縦
      ctx.lineTo(55,26);//斜め

      ctx.lineTo(55,100);
      ctx.lineTo(0,100);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      //サイロ文字
      ctx.font="14px 'ＭＳ Ｐ ゴシック";      
      ctx.fillStyle="white";
      ctx.fillText('セメント',27,8);
      ctx.fillText('サイロB',27,26);

      //材料落下
      ctx.fillStyle="pink";
      ctx.fillRect(64,50,12,6);
      ctx.fillRect(64,60,12,6);
      ctx.fillRect(64,70,12,6);
      ctx.fillRect(64,80,12,6);
      ctx.fillRect(64,90,12,6);
      ctx.fillRect(64,100,12,6);
      break;
      }
    case 2://運転2
    {
      //サイロの描画
      ctx.beginPath();
      ctx.fillStyle=start_color;
      ctx.moveTo(0,0);
      ctx.lineTo(55,0);
      ctx.lineTo(55,10);

      ctx.lineTo(76,38);//(1)斜め
      ctx.lineTo(76,46);//(2)縦
      ctx.lineTo(64,46);//(3)横
      ctx.lineTo(64,40);//(4)縦
      ctx.lineTo(55,26);//斜め

      ctx.lineTo(55,100);
      ctx.lineTo(0,100);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      //サイロ文字
      ctx.font="14px 'ＭＳ Ｐ ゴシック";      
      ctx.fillStyle="white";
      ctx.fillText('セメント',27,8);
      ctx.fillText('サイロB',27,26);

      //材料落下
      ctx.fillStyle="pink";
      ctx.fillRect(64,46,12,4);
      ctx.fillRect(64,54,12,6);
      ctx.fillRect(64,64,12,6);
      ctx.fillRect(64,74,12,6);
      ctx.fillRect(64,84,12,6);
      ctx.fillRect(64,94,12,6);
      ctx.fillRect(64,104,12,2);
      break;
    }
    case 3://運転3
    {
      //サイロの描画
      ctx.beginPath();
      ctx.fillStyle=start_color;
      ctx.moveTo(0,0);
      ctx.lineTo(55,0);
      ctx.lineTo(55,10);

      ctx.lineTo(76,38);//(1)斜め
      ctx.lineTo(76,46);//(2)縦
      ctx.lineTo(64,46);//(3)横
      ctx.lineTo(64,40);//(4)縦
      ctx.lineTo(55,26);//斜め

      ctx.lineTo(55,100);
      ctx.lineTo(0,100);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
 
      //サイロ文字
      ctx.font="14px 'ＭＳ Ｐ ゴシック";      
      ctx.fillStyle="white";
      ctx.fillText('セメント',27,8);
      ctx.fillText('サイロB',27,26);

      //材料落下
      ctx.fillStyle="pink";
      ctx.fillRect(64,48,12,6);
      ctx.fillRect(64,58,12,6);
      ctx.fillRect(64,68,12,6);
      ctx.fillRect(64,78,12,6);
      ctx.fillRect(64,88,12,6);
      ctx.fillRect(64,98,12,6);
      // ctx.fillRect(64,108,12,6);
      break;
    }
    
    case 10://異常1
    {
      //サイロの描画
      ctx.beginPath();
      ctx.fillStyle=error_color1;
      ctx.moveTo(0,0);
      ctx.lineTo(55,0);
      ctx.lineTo(55,10);

      ctx.lineTo(76,38);//(1)斜め
      ctx.lineTo(76,46);//(2)縦
      ctx.lineTo(64,46);//(3)横
      ctx.lineTo(64,40);//(4)縦
      ctx.lineTo(55,26);//斜め

      ctx.lineTo(55,100);
      ctx.lineTo(0,100);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      //サイロ文字
      ctx.fillStyle=error_text_color1;
      ctx.font="14px 'ＭＳ Ｐ ゴシック";      
      ctx.fillText('セメント',27,8);
      ctx.fillText('サイロB',27,26);
      break;
    }
    case 11://異常2
    {
      //サイロの描画
      ctx.beginPath();
      ctx.fillStyle=error_color2;
      ctx.moveTo(0,0);
      ctx.lineTo(55,0);
      ctx.lineTo(55,10);

      ctx.lineTo(76,38);//(1)斜め
      ctx.lineTo(76,46);//(2)縦
      ctx.lineTo(64,46);//(3)横
      ctx.lineTo(64,40);//(4)縦
      ctx.lineTo(55,26);//斜め

      ctx.lineTo(55,100);
      ctx.lineTo(0,100);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      //サイロ文字
      ctx.fillStyle=error_text_color2;
      ctx.font="14px 'ＭＳ Ｐ ゴシック";      
      ctx.fillText('セメント',27,8);
      ctx.fillText('サイロB',27,26);
      break;
    }
  }
}//draw_cement_sailoB　終了

//(5)ベントナイトサイロ描画
function draw_bent_sailo(){  
  //キャンバスを初期化
  var canvas = document.getElementById("canvas_bent_sailo");
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
  //ベントナイトサイロ用タイマ
  //コモンステータス　　0:通常状態 10:運転ﾗﾝﾌﾟﾃｽﾄ 11:警報ﾗﾝﾌﾟﾃｽﾄ
  //ミキサーステータス　0:停止 1:運転 2:異常
  switch(lamp_common_status){
    case 0:
      switch(draw_bent_sailo_status){
        case 0://停止
          t_bent_sailo=0;
          break;
        case 1://運転
          t_bent_sailo++;
          if(t_bent_sailo==4){
            t_bent_sailo=1;
          }
          break;
        case 2://異常
          t_bent_sailo++;
          if(t_bent_sailo<10){t_bent_sailo=10;}
          if(t_bent_sailo==12){
            t_bent_sailo=10;
          }
          break;
        default:
          break;
      }
      break;
    case 10:
      t_bent_sailo++;
      if(t_bent_sailo==4){
        t_bent_sailo=1;
      }
      break;
    case 11:
      t_bent_sailo++;
      if(t_bent_sailo<10){t_bent_sailo=10;}
      if(t_bent_sailo==12){
        t_bent_sailo=10;
      }
      break;
    default:
      break;
  }
  //設定時間後再実行
  setTimeout(draw_bent_sailo,500);  

  switch(t_bent_sailo)
  {
    case 0://停止
    {
      //サイロの描画
      ctx.beginPath();
      ctx.fillStyle=stop_color;
      ctx.moveTo(0,0);
      ctx.lineTo(55,0);
      ctx.lineTo(55,10);

      ctx.lineTo(76,38);//(1)斜め
      ctx.lineTo(76,46);//(2)縦
      ctx.lineTo(64,46);//(3)横
      ctx.lineTo(64,40);//(4)縦
      ctx.lineTo(55,26);//斜め

      ctx.lineTo(55,100);
      ctx.lineTo(0,100);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      //サイロ文字
      ctx.font="14px 'ＭＳ Ｐ ゴシック";      
      ctx.fillStyle="white";
      ctx.fillText('ﾍﾞﾝﾄﾅｲﾄ',27,8);
      ctx.fillText('サイロ',27,26);
      break;
    }
    case 1://運転1
    {
      //サイロの描画
      ctx.beginPath();
      ctx.fillStyle=start_color;
      ctx.moveTo(0,0);
      ctx.lineTo(55,0);
      ctx.lineTo(55,10);

      ctx.lineTo(76,38);//(1)斜め
      ctx.lineTo(76,46);//(2)縦
      ctx.lineTo(64,46);//(3)横
      ctx.lineTo(64,40);//(4)縦
      ctx.lineTo(55,26);//斜め

      ctx.lineTo(55,100);
      ctx.lineTo(0,100);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      //サイロ文字
      ctx.font="14px 'ＭＳ Ｐ ゴシック";      
      ctx.fillStyle="white";
      ctx.fillText('ﾍﾞﾝﾄﾅｲﾄ',27,8);
      ctx.fillText('サイロ',27,26);

      //材料落下
      ctx.fillStyle="pink";
      ctx.fillRect(64,50,12,6);
      ctx.fillRect(64,60,12,6);
      ctx.fillRect(64,70,12,6);
      ctx.fillRect(64,80,12,6);
      ctx.fillRect(64,90,12,6);
      ctx.fillRect(64,100,12,6);
      break;
      }
    case 2://運転2
    {
      //サイロの描画
      ctx.beginPath();
      ctx.fillStyle=start_color;
      ctx.moveTo(0,0);
      ctx.lineTo(55,0);
      ctx.lineTo(55,10);

      ctx.lineTo(76,38);//(1)斜め
      ctx.lineTo(76,46);//(2)縦
      ctx.lineTo(64,46);//(3)横
      ctx.lineTo(64,40);//(4)縦
      ctx.lineTo(55,26);//斜め

      ctx.lineTo(55,100);
      ctx.lineTo(0,100);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      //サイロ文字
      ctx.font="14px 'ＭＳ Ｐ ゴシック";      
      ctx.fillStyle="white";
      ctx.fillText('ﾍﾞﾝﾄﾅｲﾄ',27,8);
      ctx.fillText('サイロ',27,26);

      //材料落下
      ctx.fillStyle="pink";
      ctx.fillRect(64,46,12,4);
      ctx.fillRect(64,54,12,6);
      ctx.fillRect(64,64,12,6);
      ctx.fillRect(64,74,12,6);
      ctx.fillRect(64,84,12,6);
      ctx.fillRect(64,94,12,6);
      ctx.fillRect(64,104,12,2);
      break;
    }
    case 3://運転3
    {
      //サイロの描画
      ctx.beginPath();
      ctx.fillStyle=start_color;
      ctx.moveTo(0,0);
      ctx.lineTo(55,0);
      ctx.lineTo(55,10);

      ctx.lineTo(76,38);//(1)斜め
      ctx.lineTo(76,46);//(2)縦
      ctx.lineTo(64,46);//(3)横
      ctx.lineTo(64,40);//(4)縦
      ctx.lineTo(55,26);//斜め

      ctx.lineTo(55,100);
      ctx.lineTo(0,100);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      //サイロ文字
      ctx.font="14px 'ＭＳ Ｐ ゴシック";      
      ctx.fillStyle="white";
      ctx.fillText('ﾍﾞﾝﾄﾅｲﾄ',27,8);
      ctx.fillText('サイロ',27,26);;

      //材料落下
      ctx.fillStyle="pink";
      ctx.fillRect(64,48,12,6);
      ctx.fillRect(64,58,12,6);
      ctx.fillRect(64,68,12,6);
      ctx.fillRect(64,78,12,6);
      ctx.fillRect(64,88,12,6);
      ctx.fillRect(64,98,12,6);
      // ctx.fillRect(64,108,12,6);
      
      break;
    }
    case 10://異常1
      {
        //サイロの描画
        ctx.beginPath();
        ctx.fillStyle=error_color1;
        ctx.moveTo(0,0);
        ctx.lineTo(55,0);
        ctx.lineTo(55,10);

        ctx.lineTo(76,38);//(1)斜め
        ctx.lineTo(76,46);//(2)縦
        ctx.lineTo(64,46);//(3)横
        ctx.lineTo(64,40);//(4)縦
        ctx.lineTo(55,26);//斜め

        ctx.lineTo(55,100);
        ctx.lineTo(0,100);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        //サイロ文字
        ctx.fillStyle=error_text_color1;
        ctx.font="14px 'ＭＳ Ｐ ゴシック";
        ctx.fillText('ﾍﾞﾝﾄﾅｲﾄ',27,8);
        ctx.fillText('サイロ',27,26);
        break;
      }
    case 11://異常2
    {
      //サイロの描画
      ctx.beginPath();
      ctx.fillStyle=error_color2;
      ctx.moveTo(0,0);
      ctx.lineTo(55,0);
      ctx.lineTo(55,10);

      ctx.lineTo(76,38);//(1)斜め
      ctx.lineTo(76,46);//(2)縦
      ctx.lineTo(64,46);//(3)横
      ctx.lineTo(64,40);//(4)縦
      ctx.lineTo(55,26);//斜め

      ctx.lineTo(55,100);
      ctx.lineTo(0,100);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      //サイロ文字
      ctx.fillStyle=error_text_color2;
      ctx.font="14px 'ＭＳ Ｐ ゴシック"; 
      ctx.fillText('ﾍﾞﾝﾄﾅｲﾄ',27,8);
      ctx.fillText('サイロ',27,26);
      break;
    }
  }
}//draw_bent_sailo　終了

//(6)給水ポンプ1描画
function draw_w_p1(){  
  //キャンバスを初期化
  var canvas = document.getElementById("canvas_w_p1");
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
  //給水ポンプ1用タイマ
  //コモンステータス　　0:通常状態 10:運転ﾗﾝﾌﾟﾃｽﾄ 11:警報ﾗﾝﾌﾟﾃｽﾄ
  //ミキサーステータス　0:停止 1:運転 2:異常
  switch(lamp_common_status){
    case 0:
      switch(draw_w_p1_status){
        case 0://停止
          t_w_p1=0;
          break;
        case 1://運転
          t_w_p1++;
          if(t_w_p1==4){
            t_w_p1=1;
          }
          break;
        case 2://異常
          t_w_p1++;
          if(t_w_p1<10){t_w_p1=10;}
          if(t_w_p1==12){
            t_w_p1=10;
          }
          break;
        default:
          break;
      }
      break;
    case 10:
      t_w_p1++;
      if(t_w_p1==4){
        t_w_p1=1;
      }
      break;
    case 11:
      t_w_p1++;
      if(t_w_p1<10){t_w_p1=10;}
      if(t_w_p1==12){
        t_w_p1=10;
      }
      break;
    default:
      break;
  } 
  //設定時間後再実行
  setTimeout(draw_w_p1,500);  

  switch(t_w_p1)
  {
    case 0://停止
    {
      //ポンプの描画
      ctx.beginPath();
      ctx.fillStyle=stop_color;
      ctx.arc(22,36,20,0,2*3.14,false);
      ctx.fill();
      ctx.stroke();
      //文字
      ctx.fillStyle="black";
      ctx.font="14px 'ＭＳ Ｐ ゴシック"
      ctx.fillText('給水ﾎﾟﾝﾌﾟ1',42,0);
      ctx.fillStyle="white";
      ctx.font="26px 'ＭＳ Ｐ ゴシック"
      ctx.fillText('P',22,24);
      break;
    }
    case 1://運転1
    {
      //ポンプの描画
      ctx.beginPath();
      ctx.fillStyle=start_color;
      ctx.arc(22,36,20,0,2*3.14,false);
      ctx.fill();
      ctx.stroke();
      //文字
      ctx.fillStyle="black";
      ctx.font="14px 'ＭＳ Ｐ ゴシック"
      ctx.fillText('給水ﾎﾟﾝﾌﾟ1',42,0);
      ctx.fillStyle="white";
      ctx.font="26px 'ＭＳ Ｐ ゴシック"
      ctx.fillText('P',22,24);
      //(1)材料落下
      ctx.strokeStyle="greenyellow";
      ctx.fillStyle="pink";
      //横枠線
      ctx.strokeRect(43,30,24,10); 
      //横
      ctx.fillRect(43,30,4,10);
      ctx.fillRect(51,30,6,10);
      ctx.fillRect(61,30,6,10);
      //縦枠線
      ctx.strokeRect(61,40,6,20);
      //縦線
      ctx.fillRect(61,44,6,6);
      ctx.fillRect(61,54,6,6);      
      break;
    }
    case 2://運転2
    {
      //ポンプの描画
      ctx.beginPath();
      ctx.fillStyle=start_color;
      ctx.arc(22,36,20,0,2*3.14,false);
      ctx.fill();
      ctx.stroke();      
      //文字
      ctx.fillStyle="black";
      ctx.font="14px 'ＭＳ Ｐ ゴシック"
      ctx.fillText('給水ﾎﾟﾝﾌﾟ1',42,0);
      ctx.fillStyle="white";
      ctx.font="26px 'ＭＳ Ｐ ゴシック"
      ctx.fillText('P',22,24);      
      //(2)材料落下
      ctx.strokeStyle="greenyellow";
      ctx.fillStyle="pink";
      //枠線
      ctx.strokeRect(43,30,24,10);
      //横
      ctx.fillRect(43,30,6,10);
      ctx.fillRect(53,30,6,10);
      ctx.fillRect(63,30,4,10);
      //縦枠線
      ctx.strokeRect(61,40,6,20);
      //縦
      ctx.fillRect(61,40,6,4);
      ctx.fillRect(61,48,6,6);
      break;
    }
    case 3://運転3
    {
      //ポンプの描画
      ctx.beginPath();
      ctx.fillStyle=start_color;
      ctx.arc(22,36,20,0,2*3.14,false);
      ctx.fill();
      ctx.stroke();      
      //文字
      ctx.fillStyle="black";
      ctx.font="14px 'ＭＳ Ｐ ゴシック"
      ctx.fillText('給水ﾎﾟﾝﾌﾟ1',42,0);
      ctx.fillStyle="white";
      ctx.font="26px 'ＭＳ Ｐ ゴシック"
      ctx.fillText('P',22,24);
      //(3)材料落下
      ctx.strokeStyle="greenyellow";
      ctx.fillStyle="pink";
      //枠線
      ctx.strokeRect(43,30,24,10);
      //横
      ctx.fillRect(47,30,6,10);
      ctx.fillRect(57,30,6,10);
      //縦枠線
      ctx.strokeRect(61,40,6,20);
      //縦
      // ctx.fillRect(61,40,6,4);
      ctx.fillRect(61,40,6,6);
      ctx.fillRect(61,50,6,6);
      break;
    }
    case 10://異常1
      {
       //ポンプの描画
      ctx.beginPath();
      ctx.fillStyle=error_color1;
      ctx.arc(22,36,20,0,2*3.14,false);
      ctx.fill();
      ctx.stroke();
      //文字
      ctx.fillStyle="black";
      ctx.font="14px 'ＭＳ Ｐ ゴシック"
      ctx.fillText('給水ﾎﾟﾝﾌﾟ1',42,0);
      ctx.fillStyle=error_text_color1;
      ctx.font="26px 'ＭＳ Ｐ ゴシック"
      ctx.fillText('P',22,24);
      break;
      }
    case 11://異常2
    {
      //ポンプの描画
      ctx.beginPath();
      ctx.fillStyle=error_color2;
      ctx.arc(22,36,20,0,2*3.14,false);
      ctx.fill();
      ctx.stroke();
      //文字
      ctx.fillStyle="black";
      ctx.font="14px 'ＭＳ Ｐ ゴシック"
      ctx.fillText('給水ﾎﾟﾝﾌﾟ1',42,0);
      ctx.fillStyle=error_text_color2;
      ctx.font="26px 'ＭＳ Ｐ ゴシック"
      ctx.fillText('P',22,24);
      break;
    }
  }
}//draw_w_p1　終了

//(7)給水ポンプ2描画
function draw_w_p2(){  
  //キャンバスを初期化
  var canvas = document.getElementById("canvas_w_p2");
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
  //給水ポンプ2用タイマ
  //コモンステータス　　0:通常状態 10:運転ﾗﾝﾌﾟﾃｽﾄ 11:警報ﾗﾝﾌﾟﾃｽﾄ
  //ミキサーステータス　0:停止 1:運転 2:異常
  switch(lamp_common_status){
    case 0:
      switch(draw_w_p2_status){
        case 0://停止
          t_w_p2=0;
          break;
        case 1://運転
          t_w_p2++;
          if(t_w_p2==4){
            t_w_p2=1;
          }
          break;
        case 2://異常
          t_w_p2++;
          if(t_w_p2<10){t_w_p2=10;}
          if(t_w_p2==12){
            t_w_p2=10;
          }
          break;
        default:
          break;
      }
      break;
    case 10:
      t_w_p2++;
      if(t_w_p2==4){
        t_w_p2=1;
      }
      break;
    case 11:
      t_w_p2++;
      if(t_w_p2<10){t_w_p2=10;}
      if(t_w_p2==12){
        t_w_p2=10;
      }
      break;
    default:
      break;
  }
  //設定時間後再実行
  setTimeout(draw_w_p2,500);  

  switch(t_w_p2)
  {
    case 0://停止
    {
      //ポンプの描画
      ctx.beginPath();
      ctx.fillStyle=stop_color;
      ctx.arc(22,36,20,0,2*3.14,false);
      ctx.fill();
      ctx.stroke();
      //文字
      ctx.fillStyle="black";
      ctx.font="14px 'ＭＳ Ｐ ゴシック"
      ctx.fillText('給水ﾎﾟﾝﾌﾟ2',42,0);
      ctx.fillStyle="white";
      ctx.font="26px 'ＭＳ Ｐ ゴシック"
      ctx.fillText('P',22,24);
      break;
    }
    case 1://運転1
    {
      //ポンプの描画
      ctx.beginPath();
      ctx.fillStyle=start_color;
      ctx.arc(22,36,20,0,2*3.14,false);
      ctx.fill();
      ctx.stroke();
      //文字
      ctx.fillStyle="black";
      ctx.font="14px 'ＭＳ Ｐ ゴシック"
      ctx.fillText('給水ﾎﾟﾝﾌﾟ2',42,0);
      ctx.fillStyle="white";
      ctx.font="26px 'ＭＳ Ｐ ゴシック"
      ctx.fillText('P',22,24);
      //(1)材料落下
      ctx.strokeStyle="greenyellow";
      ctx.fillStyle="pink";
      //横枠線
      ctx.strokeRect(43,30,24,10); 
      //横
      ctx.fillRect(43,30,4,10);
      ctx.fillRect(51,30,6,10);
      ctx.fillRect(61,30,6,10);
      //縦枠線
      ctx.strokeRect(61,40,6,20);
      //縦線
      ctx.fillRect(61,44,6,6);
      ctx.fillRect(61,54,6,6);
      break;
      }
    case 2://運転2
    {
      //ポンプの描画
      ctx.beginPath();
      ctx.fillStyle=start_color;
      ctx.arc(22,36,20,0,2*3.14,false);
      ctx.fill();
      ctx.stroke();
      //文字
      ctx.fillStyle="black";
      ctx.font="14px 'ＭＳ Ｐ ゴシック"
      ctx.fillText('給水ﾎﾟﾝﾌﾟ2',42,0);
      ctx.fillStyle="white";
      ctx.font="26px 'ＭＳ Ｐ ゴシック"
      ctx.fillText('P',22,24);
      //(2)材料落下
      ctx.strokeStyle="greenyellow";
      ctx.fillStyle="pink";
      //枠線
      ctx.strokeRect(43,30,24,10);
      //横
      ctx.fillRect(43,30,6,10);
      ctx.fillRect(53,30,6,10);
      ctx.fillRect(63,30,4,10);
      //縦枠線
      ctx.strokeRect(61,40,6,20);
      //縦
      ctx.fillRect(61,40,6,4);
      ctx.fillRect(61,48,6,6);
      break;
    }
    case 3://運転3
    {
       //ポンプの描画
      ctx.beginPath();
      ctx.fillStyle=start_color;
      ctx.arc(22,36,20,0,2*3.14,false);
      ctx.fill();
      ctx.stroke();
      //文字
      ctx.fillStyle="black";
      ctx.font="14px 'ＭＳ Ｐ ゴシック"
      ctx.fillText('給水ﾎﾟﾝﾌﾟ2',42,0);
      ctx.fillStyle="white";
      ctx.font="26px 'ＭＳ Ｐ ゴシック"
      ctx.fillText('P',22,24);
      //(3)材料落下
      ctx.strokeStyle="greenyellow";
      ctx.fillStyle="pink";
      //枠線
      ctx.strokeRect(43,30,24,10);
      //横
      ctx.fillRect(47,30,6,10);
      ctx.fillRect(57,30,6,10);
      //縦枠線
      ctx.strokeRect(61,40,6,20);
      //縦
      // ctx.fillRect(61,40,6,4);
      ctx.fillRect(61,40,6,6);
      ctx.fillRect(61,50,6,6);
      break;
    }
    case 10://異常1
      {
      //ポンプの描画
        ctx.beginPath();
        ctx.fillStyle=error_color1;
        ctx.arc(22,36,20,0,2*3.14,false);
        ctx.fill();
        ctx.stroke();
        //文字
        ctx.fillStyle="black";
        ctx.font="14px 'ＭＳ Ｐ ゴシック"
        ctx.fillText('給水ﾎﾟﾝﾌﾟ2',42,0);
        ctx.fillStyle=error_text_color1;
        ctx.font="26px 'ＭＳ Ｐ ゴシック"
        ctx.fillText('P',22,24);
        break;
      }
    case 11://異常2
    {
       //ポンプの描画
       ctx.beginPath();
       ctx.fillStyle=error_color2;
       ctx.arc(22,36,20,0,2*3.14,false);
       ctx.fill();
       ctx.stroke(); 
       //文字
       ctx.fillStyle="black";
       ctx.font="14px 'ＭＳ Ｐ ゴシック"
       ctx.fillText('給水ﾎﾟﾝﾌﾟ2',42,0);
       ctx.fillStyle=error_text_color2;
       ctx.font="26px 'ＭＳ Ｐ ゴシック"
       ctx.fillText('P',22,24);
      break;
    }
  }
}//draw_w_p2　終了

//(8)原料4ポンプ描画
function draw_gn4_p(){  
  //キャンバスを初期化
  var canvas = document.getElementById("canvas_gn4_p");
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
  //原料4ポンプ用タイマ
  //コモンステータス　　0:通常状態 10:運転ﾗﾝﾌﾟﾃｽﾄ 11:警報ﾗﾝﾌﾟﾃｽﾄ
  //ミキサーステータス　0:停止 1:運転 2:異常
  switch(lamp_common_status){
    case 0:
      switch(draw_gn4_p_status){
        case 0://停止
          t_gn4_p=0;
          break;
        case 1://運転
          t_gn4_p++;
          if(t_gn4_p==4){
            t_gn4_p=1;
          }
          break;
        case 2://異常
          t_gn4_p++;
          if(t_gn4_p<10){t_gn4_p=10;}
          if(t_gn4_p==12){
            t_gn4_p=10;
          }
          break;
        default:
          break;
      }
      break;
    case 10:
      t_gn4_p++;
      if(t_gn4_p==4){
        t_gn4_p=1;
      }
      break;
    case 11:
      t_gn4_p++;
      if(t_gn4_p<10){t_gn4_p=10;}
      if(t_gn4_p==12){
        t_gn4_p=10;
      }
      break;
    default:
      break;
  }

  //設定時間後再実行
  setTimeout(draw_gn4_p,500);  

  switch(t_gn4_p)
  {
    case 0://停止
    {
      //ポンプの描画
      ctx.beginPath();
      ctx.fillStyle=stop_color;
      ctx.arc(22,36,20,0,2*3.14,false);
      ctx.fill();
      ctx.stroke();
      //文字
      ctx.fillStyle="black";
      ctx.font="14px 'ＭＳ Ｐ ゴシック"
      ctx.fillText('原料4ﾎﾟﾝﾌﾟ',42,0);
      ctx.fillStyle="white";
      ctx.font="26px 'ＭＳ Ｐ ゴシック"
      ctx.fillText('P',22,24);
      break;
    }
    case 1://運転1
    {
      //ポンプの描画
      ctx.beginPath();
      ctx.fillStyle=start_color;
      ctx.arc(22,36,20,0,2*3.14,false);
      ctx.fill();
      ctx.stroke();
      //文字
      ctx.fillStyle="black";
      ctx.font="14px 'ＭＳ Ｐ ゴシック"
      ctx.fillText('原料4ﾎﾟﾝﾌﾟ',42,0);      
      ctx.fillStyle="white";
      ctx.font="26px 'ＭＳ Ｐ ゴシック"
      ctx.fillText('P',22,24);
      //(1)材料落下
      ctx.strokeStyle="greenyellow";
      ctx.fillStyle="pink";
      //横枠線
      ctx.strokeRect(43,30,24,10); 
      //横
      ctx.fillRect(43,30,4,10);
      ctx.fillRect(51,30,6,10);
      ctx.fillRect(61,30,6,10);
      //縦枠線
      ctx.strokeRect(61,40,6,20);
      //縦線
      ctx.fillRect(61,44,6,6);
      ctx.fillRect(61,54,6,6);      
      break;
      }
    case 2://運転2
    {
      //ポンプの描画
      ctx.beginPath();
      ctx.fillStyle=start_color;
      ctx.arc(22,36,20,0,2*3.14,false);
      ctx.fill();
      ctx.stroke();
      //文字
      ctx.fillStyle="black";
      ctx.font="14px 'ＭＳ Ｐ ゴシック"
      ctx.fillText('原料4ﾎﾟﾝﾌﾟ',42,0);
      ctx.fillStyle="white";
      ctx.font="26px 'ＭＳ Ｐ ゴシック"
      ctx.fillText('P',22,24);
      //(2)材料落下
      ctx.strokeStyle="greenyellow";
      ctx.fillStyle="pink";
      //枠線
      ctx.strokeRect(43,30,24,10);
      //横
      ctx.fillRect(43,30,6,10);
      ctx.fillRect(53,30,6,10);
      ctx.fillRect(63,30,4,10);
      //縦枠線
      ctx.strokeRect(61,40,6,20);
      //縦
      ctx.fillRect(61,40,6,4);
      ctx.fillRect(61,48,6,6);
      break;
    }
    case 3://運転3
    {
      //ポンプの描画
      ctx.beginPath();
      ctx.fillStyle=start_color;
      ctx.arc(22,36,20,0,2*3.14,false);
      ctx.fill();
      ctx.stroke();
      //文字
      ctx.fillStyle="black";
      ctx.font="14px 'ＭＳ Ｐ ゴシック"
      ctx.fillText('原料4ﾎﾟﾝﾌﾟ',42,0);
      ctx.fillStyle="white";
      ctx.font="26px 'ＭＳ Ｐ ゴシック"
      ctx.fillText('P',22,24);
      //(3)材料落下
      ctx.strokeStyle="greenyellow";
      ctx.fillStyle="pink";
      //枠線
      ctx.strokeRect(43,30,24,10);
      //横
      ctx.fillRect(47,30,6,10);
      ctx.fillRect(57,30,6,10);
      //縦枠線
      ctx.strokeRect(61,40,6,20);
      //縦
      // ctx.fillRect(61,40,6,4);
      ctx.fillRect(61,40,6,6);
      ctx.fillRect(61,50,6,6);
      break;      
    }
    case 10://異常1
    {
      //ポンプの描画
      ctx.beginPath();
      ctx.fillStyle=error_color1;
      ctx.arc(22,36,20,0,2*3.14,false);
      ctx.fill();
      ctx.stroke();
      //文字
      ctx.fillStyle="black";
      ctx.font="14px 'ＭＳ Ｐ ゴシック"
      ctx.fillText('原料4ﾎﾟﾝﾌﾟ',42,0);
      ctx.fillStyle=error_text_color1;
      ctx.font="26px 'ＭＳ Ｐ ゴシック"
      ctx.fillText('P',22,24);
      break;
      }
    case 11://異常2
    {
      //ポンプの描画
      ctx.beginPath();
      ctx.fillStyle=error_color2;
      ctx.arc(22,36,20,0,2*3.14,false);
      ctx.fill();
      ctx.stroke();
      //文字
      ctx.fillStyle="black";
      ctx.font="14px 'ＭＳ Ｐ ゴシック"
      ctx.fillText('原料4ﾎﾟﾝﾌﾟ',42,0);
      ctx.fillStyle="white";
      ctx.fillStyle=error_text_color2;
      ctx.font="26px 'ＭＳ Ｐ ゴシック"
      ctx.fillText('P',22,24);
      break;
    }
  }
}//draw_gn4_p　終了

//(9)原料5ポンプ描画
function draw_gn5_p(){  
  //キャンバスを初期化
  var canvas = document.getElementById("canvas_gn5_p");
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
  //原料5ポンプ用タイマ
  //コモンステータス　　0:通常状態 10:運転ﾗﾝﾌﾟﾃｽﾄ 11:警報ﾗﾝﾌﾟﾃｽﾄ
  //ミキサーステータス　0:停止 1:運転 2:異常
  switch(lamp_common_status){
    case 0:
      switch(draw_gn5_p_status){
        case 0://停止
          t_gn5_p=0;
          break;
        case 1://運転
          t_gn5_p++;
          if(t_gn5_p==4){
            t_gn5_p=1;
          }
          break;
        case 2://異常
          t_gn5_p++;
          if(t_gn5_p<10){t_gn5_p=10;}
          if(t_gn5_p==12){
            t_gn5_p=10;
          }
          break;
        default:
          break;
      }
      break;
    case 10:
      t_gn5_p++;
      if(t_gn5_p==4){
        t_gn5_p=1;
      }
      break;
    case 11:
      t_gn5_p++;
      if(t_gn5_p<10){t_gn5_p=10;}
      if(t_gn5_p==12){
        t_gn5_p=10;
      }
      break;
    default:
      break;
  }

  //設定時間後再実行
  setTimeout(draw_gn5_p,500);  

  switch(t_gn5_p)
  {
    case 0://停止
    {
      ///ポンプの描画
      ctx.beginPath();
      ctx.fillStyle=stop_color;
      ctx.arc(22,36,20,0,2*3.14,false);
      ctx.fill();
      ctx.stroke();
      //文字
      ctx.fillStyle="black";
      ctx.font="14px 'ＭＳ Ｐ ゴシック"
      ctx.fillText('原料5ﾎﾟﾝﾌﾟ',42,0);
      ctx.fillStyle="white";
      ctx.font="26px 'ＭＳ Ｐ ゴシック"
      ctx.fillText('P',22,24);
      break;
    }
    case 1://運転1
    {
      ///ポンプの描画
      ctx.beginPath();
      ctx.fillStyle=start_color;
      ctx.arc(22,36,20,0,2*3.14,false);
      ctx.fill();
      ctx.stroke(); 
      //文字
      ctx.fillStyle="black";
      ctx.font="14px 'ＭＳ Ｐ ゴシック"
      ctx.fillText('原料5ﾎﾟﾝﾌﾟ',42,0);
      ctx.fillStyle="white";
      ctx.font="26px 'ＭＳ Ｐ ゴシック"
      ctx.fillText('P',22,24);;
      //(1)材料落下
      ctx.strokeStyle="greenyellow";
      ctx.fillStyle="pink";
      //横枠線
      ctx.strokeRect(43,30,24,10); 
      //横
      ctx.fillRect(43,30,4,10);
      ctx.fillRect(51,30,6,10);
      ctx.fillRect(61,30,6,10);
      //縦枠線
      ctx.strokeRect(61,40,6,20);
      //縦線
      ctx.fillRect(61,44,6,6);
      ctx.fillRect(61,54,6,6);      
      break;
    }
    case 2://運転2
    {
      ///ポンプの描画
      ctx.beginPath();
      ctx.fillStyle=start_color;
      ctx.arc(22,36,20,0,2*3.14,false);
      ctx.fill();
      ctx.stroke(); 
      //文字
      ctx.fillStyle="black";
      ctx.font="14px 'ＭＳ Ｐ ゴシック"
      ctx.fillText('原料5ﾎﾟﾝﾌﾟ',42,0);
      ctx.fillStyle="white";
      ctx.font="26px 'ＭＳ Ｐ ゴシック"
      ctx.fillText('P',22,24); 
      //(2)材料落下
      ctx.strokeStyle="greenyellow";
      ctx.fillStyle="pink";
      //枠線
      ctx.strokeRect(43,30,24,10);
      //横
      ctx.fillRect(43,30,6,10);
      ctx.fillRect(53,30,6,10);
      ctx.fillRect(63,30,4,10);
      //縦枠線
      ctx.strokeRect(61,40,6,20);
      //縦
      ctx.fillRect(61,40,6,4);
      ctx.fillRect(61,48,6,6);
      break;
    }
    case 3://運転3
    {
      ///ポンプの描画
      ctx.beginPath();
      ctx.fillStyle=start_color;
      ctx.arc(22,36,20,0,2*3.14,false);
      ctx.fill();
      ctx.stroke();
      //文字
      ctx.fillStyle="black";
      ctx.font="14px 'ＭＳ Ｐ ゴシック"
      ctx.fillText('原料5ﾎﾟﾝﾌﾟ',42,0);
      ctx.fillStyle="white";
      ctx.font="26px 'ＭＳ Ｐ ゴシック"
      ctx.fillText('P',22,24);
      //(3)材料落下
      ctx.strokeStyle="greenyellow";
      ctx.fillStyle="pink";
      //枠線
      ctx.strokeRect(43,30,24,10);
      //横
      ctx.fillRect(47,30,6,10);
      ctx.fillRect(57,30,6,10);
      //縦枠線
      ctx.strokeRect(61,40,6,20);
      //縦
      // ctx.fillRect(61,40,6,4);
      ctx.fillRect(61,40,6,6);
      ctx.fillRect(61,50,6,6);      
      break;
    }
    case 10://異常1
    {
      ///ポンプの描画
      ctx.beginPath();
      ctx.fillStyle=error_color1;
      ctx.arc(22,36,20,0,2*3.14,false);
      ctx.fill();
      ctx.stroke();

      //文字
      ctx.fillStyle="black";
      ctx.font="14px 'ＭＳ Ｐ ゴシック"
      ctx.fillText('原料5ﾎﾟﾝﾌﾟ',42,0);
      ctx.fillStyle=error_text_color1;
      ctx.font="26px 'ＭＳ Ｐ ゴシック"
      ctx.fillText('P',22,24);
      break;
    }
    case 11://異常2
    {
      ///ポンプの描画
      ctx.beginPath();
      ctx.fillStyle=error_color2
      ctx.arc(22,36,20,0,2*3.14,false);
      ctx.fill();
      ctx.stroke();
 
      //文字
      ctx.fillStyle="black";
      ctx.font="14px 'ＭＳ Ｐ ゴシック"
      ctx.fillText('原料5ﾎﾟﾝﾌﾟ',42,0);
      ctx.fillStyle=error_text_color2;
      ctx.font="26px 'ＭＳ Ｐ ゴシック"
      ctx.fillText('P',22,24); 
      break;
    }
  }
}//draw_gn5_p　終了

//(10)原料4ビン描画
function draw_gn4_bin(){  
  //キャンバスを初期化
  var canvas = document.getElementById("canvas_gn4_bin");
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
  //原料4ビン用タイマ
  //コモンステータス　　0:通常状態 10:運転ﾗﾝﾌﾟﾃｽﾄ 11:警報ﾗﾝﾌﾟﾃｽﾄ
  //ミキサーステータス　0:停止 1:運転 2:異常
  switch(lamp_common_status){
    case 0:
      switch(draw_gn4_bin_status){
        case 0://停止
          t_gn4_bin=0;
          break;
        case 1://運転
          t_gn4_bin++;
          if(t_gn4_bin==4){
            t_gn4_bin=1;
          }
          break;
        case 2://異常
          t_gn4_bin++;
          if(t_gn4_bin<10){t_gn4_bin=10;}
          if(t_gn4_bin==12){
            t_gn4_bin=10;
          }
          break;
        default:
          break;
      }
      break;
    case 10:
      t_gn4_bin++;
      if(t_gn4_bin==4){
        t_gn4_bin=1;
      }
      break;
    case 11:
      t_gn4_bin++;
      if(t_gn4_bin<10){t_gn4_bin=10;}
      if(t_gn4_bin==12){
        t_gn4_bin=10;
      }
      break;
    default:
      break;
  }
  //設定時間後再実行
  setTimeout(draw_gn4_bin,500);  

  switch(t_gn4_bin)
  {
    case 0://停止
    {
      //ビンの描画
      ctx.beginPath();
      ctx.fillStyle=stop_color;
      ctx.moveTo(32,22);//左上
      ctx.lineTo(92,22);//右上
      ctx.lineTo(92,60);//下
      ctx.lineTo(77,80);//斜め
      ctx.lineTo(47,80);//底辺
      ctx.lineTo(32,60);//斜め上
      ctx.lineTo(32,22);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle="black"
      ctx.fillRect(12,35,100,2);//横ライン
      //(右)ロードセル三角マーク
      ctx.moveTo(21,37);//ロードセル頂点
      ctx.lineTo(29,48);//右下
      ctx.lineTo(13,48);//左下
      ctx.lineTo(21,37);//
      ctx.closePath();
      //(左)ロードセル三角マーク
      ctx.moveTo(102,37);//ロードセル頂点
      ctx.lineTo(110,48);//右下
      ctx.lineTo(94,48);//左下
      ctx.lineTo(102,37);//
      ctx.closePath();
      ctx.stroke();
      ctx.fillStyle="black"
      
      //ビン文字
      ctx.fillStyle="black";
      ctx.font="14px 'ＭＳ Ｐ ゴシック"
      ctx.fillText('原料4ﾋﾞﾝ',65,0);
      break;
    }
    case 1://運転1
    {
      //ビンの描画
      ctx.beginPath();
      ctx.fillStyle=start_color;
      ctx.moveTo(32,22);//左上
      ctx.lineTo(92,22);//右上
      ctx.lineTo(92,60);//下
      ctx.lineTo(77,80);//斜め
      ctx.lineTo(47,80);//底辺
      ctx.lineTo(32,60);//斜め上
      ctx.lineTo(32,22);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle="black"
      ctx.fillRect(12,35,100,2);//横ライン
      //(右)ロードセル三角マーク
      ctx.moveTo(21,37);//ロードセル頂点
      ctx.lineTo(29,48);//右下
      ctx.lineTo(13,48);//左下
      ctx.lineTo(21,37);//
      ctx.closePath();
      //(左)ロードセル三角マーク
      ctx.moveTo(102,37);//ロードセル頂点
      ctx.lineTo(110,48);//右下
      ctx.lineTo(94,48);//左下
      ctx.lineTo(102,37);//
      ctx.closePath();
      ctx.stroke();
      ctx.fillStyle="black"
      
      //ビン文字
      ctx.fillStyle="black";
      ctx.font="14px 'ＭＳ Ｐ ゴシック"
      ctx.fillText('原料4ﾋﾞﾝ',65,0);
      break;
      }
    case 2://運転2
    {
      //ビンの描画
      ctx.beginPath();
      ctx.fillStyle=start_color;
      ctx.moveTo(32,22);//左上
      ctx.lineTo(92,22);//右上
      ctx.lineTo(92,60);//下
      ctx.lineTo(77,80);//斜め
      ctx.lineTo(47,80);//底辺
      ctx.lineTo(32,60);//斜め上
      ctx.lineTo(32,22);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle="black"
      ctx.fillRect(12,35,100,2);//横ライン
      //(右)ロードセル三角マーク
      ctx.moveTo(21,37);//ロードセル頂点
      ctx.lineTo(29,48);//右下
      ctx.lineTo(13,48);//左下
      ctx.lineTo(21,37);//
      ctx.closePath();
      //(左)ロードセル三角マーク
      ctx.moveTo(102,37);//ロードセル頂点
      ctx.lineTo(110,48);//右下
      ctx.lineTo(94,48);//左下
      ctx.lineTo(102,37);//
      ctx.closePath();
      ctx.stroke();
      ctx.fillStyle="black"
      
      //ビン文字
      ctx.fillStyle="black";
      ctx.font="14px 'ＭＳ Ｐ ゴシック"
      ctx.fillText('原料4ﾋﾞﾝ',65,0);
      break;
    }
    case 3://運転3
    {
      //ビンの描画
      ctx.beginPath();
      ctx.fillStyle=start_color;
      ctx.moveTo(32,22);//左上
      ctx.lineTo(92,22);//右上
      ctx.lineTo(92,60);//下
      ctx.lineTo(77,80);//斜め
      ctx.lineTo(47,80);//底辺
      ctx.lineTo(32,60);//斜め上
      ctx.lineTo(32,22);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle="black"
      ctx.fillRect(12,35,100,2);//横ライン
      //(右)ロードセル三角マーク
      ctx.moveTo(21,37);//ロードセル頂点
      ctx.lineTo(29,48);//右下
      ctx.lineTo(13,48);//左下
      ctx.lineTo(21,37);//
      ctx.closePath();
      //(左)ロードセル三角マーク
      ctx.moveTo(102,37);//ロードセル頂点
      ctx.lineTo(110,48);//右下
      ctx.lineTo(94,48);//左下
      ctx.lineTo(102,37);//
      ctx.closePath();
      ctx.stroke();
      ctx.fillStyle="black"
      
      //ビン文字
      ctx.fillStyle="black";
      ctx.font="14px 'ＭＳ Ｐ ゴシック"
      ctx.fillText('原料4ﾋﾞﾝ',65,0);
      break;
    }
    case 4://運転4
    {
      //ビンの描画
      ctx.beginPath();
      ctx.fillStyle=start_color;
      ctx.moveTo(32,22);//左上
      ctx.lineTo(92,22);//右上
      ctx.lineTo(92,60);//下
      ctx.lineTo(77,80);//斜め
      ctx.lineTo(47,80);//底辺
      ctx.lineTo(32,60);//斜め上
      ctx.lineTo(32,22);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle="black"
      ctx.fillRect(12,35,100,2);//横ライン
      //(右)ロードセル三角マーク
      ctx.moveTo(21,37);//ロードセル頂点
      ctx.lineTo(29,48);//右下
      ctx.lineTo(13,48);//左下
      ctx.lineTo(21,37);//
      ctx.closePath();
      //(左)ロードセル三角マーク
      ctx.moveTo(102,37);//ロードセル頂点
      ctx.lineTo(110,48);//右下
      ctx.lineTo(94,48);//左下
      ctx.lineTo(102,37);//
      ctx.closePath();
      ctx.stroke();
      ctx.fillStyle="black"
      
      //ビン文字
      ctx.fillStyle="black";
      ctx.font="14px 'ＭＳ Ｐ ゴシック"
      ctx.fillText('原料4ﾋﾞﾝ',65,0);
      break;
    }
    case 5://運転5
    {
      //ビンの描画
      ctx.beginPath();
      ctx.fillStyle=start_color;
      ctx.moveTo(32,22);//左上
      ctx.lineTo(92,22);//右上
      ctx.lineTo(92,60);//下
      ctx.lineTo(77,80);//斜め
      ctx.lineTo(47,80);//底辺
      ctx.lineTo(32,60);//斜め上
      ctx.lineTo(32,22);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle="black"
      ctx.fillRect(12,35,100,2);//横ライン
      //(右)ロードセル三角マーク
      ctx.moveTo(21,37);//ロードセル頂点
      ctx.lineTo(29,48);//右下
      ctx.lineTo(13,48);//左下
      ctx.lineTo(21,37);//
      ctx.closePath();
      //(左)ロードセル三角マーク
      ctx.moveTo(102,37);//ロードセル頂点
      ctx.lineTo(110,48);//右下
      ctx.lineTo(94,48);//左下
      ctx.lineTo(102,37);//
      ctx.closePath();
      ctx.stroke();
      ctx.fillStyle="black"
      
      //ビン文字
      ctx.fillStyle="black";
      ctx.font="14px 'ＭＳ Ｐ ゴシック"
      ctx.fillText('原料4ﾋﾞﾝ',65,0);
      break;
    }
    case 10://異常1
    {
      //ビンの描画
      ctx.beginPath();
      ctx.fillStyle=error_color1;
      ctx.moveTo(32,22);//左上
      ctx.lineTo(92,22);//右上
      ctx.lineTo(92,60);//下
      ctx.lineTo(77,80);//斜め
      ctx.lineTo(47,80);//底辺
      ctx.lineTo(32,60);//斜め上
      ctx.lineTo(32,22);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle="black"
      ctx.fillRect(12,35,100,2);//横ライン
      //(右)ロードセル三角マーク
      ctx.moveTo(21,37);//ロードセル頂点
      ctx.lineTo(29,48);//右下
      ctx.lineTo(13,48);//左下
      ctx.lineTo(21,37);//
      ctx.closePath();
      //(左)ロードセル三角マーク
      ctx.moveTo(102,37);//ロードセル頂点
      ctx.lineTo(110,48);//右下
      ctx.lineTo(94,48);//左下
      ctx.lineTo(102,37);//
      ctx.closePath();
      ctx.stroke();
      ctx.fillStyle="black"
      
      //ビン文字
      ctx.fillStyle="black";
      ctx.font="14px 'ＭＳ Ｐ ゴシック"
      ctx.fillText('原料4ﾋﾞﾝ',65,0);
      break;
    }
    case 11://異常2
    {
      //ビンの描画
      ctx.beginPath();
      ctx.fillStyle=error_color2;
      ctx.moveTo(32,22);//左上
      ctx.lineTo(92,22);//右上
      ctx.lineTo(92,60);//下
      ctx.lineTo(77,80);//斜め
      ctx.lineTo(47,80);//底辺
      ctx.lineTo(32,60);//斜め上
      ctx.lineTo(32,22);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle="black"
      ctx.fillRect(12,35,100,2);//横ライン
      //(右)ロードセル三角マーク
      ctx.moveTo(21,37);//ロードセル頂点
      ctx.lineTo(29,48);//右下
      ctx.lineTo(13,48);//左下
      ctx.lineTo(21,37);//
      ctx.closePath();
      //(左)ロードセル三角マーク
      ctx.moveTo(102,37);//ロードセル頂点
      ctx.lineTo(110,48);//右下
      ctx.lineTo(94,48);//左下
      ctx.lineTo(102,37);//
      ctx.closePath();
      ctx.stroke();
      ctx.fillStyle="black"
      
      //ビン文字
      ctx.fillStyle="black";
      ctx.font="14px 'ＭＳ Ｐ ゴシック"
      ctx.fillText('原料4ﾋﾞﾝ',65,0);
      break;
    }
  }
}//draw_gn4_bin　終了

//(11)原料5ビン描画
function draw_gn5_bin(){  
  //キャンバスを初期化
  var canvas = document.getElementById("canvas_gn5_bin");
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
  //原料5ビン用タイマ
  //コモンステータス　　0:通常状態 10:運転ﾗﾝﾌﾟﾃｽﾄ 11:警報ﾗﾝﾌﾟﾃｽﾄ
  //ミキサーステータス　0:停止 1:運転 2:異常
  switch(lamp_common_status){
    case 0:
      switch(draw_gn5_bin_status){
        case 0://停止
          t_gn5_bin=0;
          break;
        case 1://運転
          t_gn5_bin++;
          if(t_gn5_bin==4){
            t_gn5_bin=1;
          }
          break;
        case 2://異常
          t_gn5_bin++;
          if(t_gn5_bin<10){t_gn5_bin=10;}
          if(t_gn5_bin==12){
            t_gn5_bin=10;
          }
          break;
        default:
          break;
      }
      break;
    case 10:
      t_gn5_bin++;
      if(t_gn5_bin==4){
        t_gn5_bin=1;
      }
      break;
    case 11:
      t_gn5_bin++;
      if(t_gn5_bin<10){t_gn5_bin=10;}
      if(t_gn5_bin==12){
        t_gn5_bin=10;
      }
      break;
    default:
      break;
  }
  //設定時間後再実行
  setTimeout(draw_gn5_bin,500);  

  switch(t_gn5_bin)
  {
    case 0://停止
    {
      //ビンの描画
      ctx.beginPath();
      ctx.fillStyle=stop_color;
      ctx.moveTo(32,22);//左上
      ctx.lineTo(92,22);//右上
      ctx.lineTo(92,60);//下
      ctx.lineTo(77,80);//斜め
      ctx.lineTo(47,80);//底辺
      ctx.lineTo(32,60);//斜め上
      ctx.lineTo(32,22);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle="black"
      ctx.fillRect(12,35,100,2);//横ライン
      //(右)ロードセル三角マーク
      ctx.moveTo(21,37);//ロードセル頂点
      ctx.lineTo(29,48);//右下
      ctx.lineTo(13,48);//左下
      ctx.lineTo(21,37);//
      ctx.closePath();
      //(左)ロードセル三角マーク
      ctx.moveTo(102,37);//ロードセル頂点
      ctx.lineTo(110,48);//右下
      ctx.lineTo(94,48);//左下
      ctx.lineTo(102,37);//
      ctx.closePath();
      ctx.stroke();
      ctx.fillStyle="black"
      
      //ビン文字
      ctx.fillStyle="black";
      ctx.font="14px 'ＭＳ Ｐ ゴシック"
      ctx.fillText('原料5ﾋﾞﾝ',65,0);
      break;
    }
    case 1://運転1
    {
      //ビンの描画
      ctx.beginPath();
      ctx.fillStyle=start_color;
      ctx.moveTo(32,22);//左上
      ctx.lineTo(92,22);//右上
      ctx.lineTo(92,60);//下
      ctx.lineTo(77,80);//斜め
      ctx.lineTo(47,80);//底辺
      ctx.lineTo(32,60);//斜め上
      ctx.lineTo(32,22);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle="black"
      ctx.fillRect(12,35,100,2);//横ライン
      //(右)ロードセル三角マーク
      ctx.moveTo(21,37);//ロードセル頂点
      ctx.lineTo(29,48);//右下
      ctx.lineTo(13,48);//左下
      ctx.lineTo(21,37);//
      ctx.closePath();
      //(左)ロードセル三角マーク
      ctx.moveTo(102,37);//ロードセル頂点
      ctx.lineTo(110,48);//右下
      ctx.lineTo(94,48);//左下
      ctx.lineTo(102,37);//
      ctx.closePath();
      ctx.stroke();
      ctx.fillStyle="black"
      
      //ビン文字
      ctx.fillStyle="black";
      ctx.font="14px 'ＭＳ Ｐ ゴシック"
      ctx.fillText('原料5ﾋﾞﾝ',65,0);
      break;
    }
    case 2://運転2
    {
      //ビンの描画
      ctx.beginPath();
      ctx.fillStyle=start_color;
      ctx.moveTo(32,22);//左上
      ctx.lineTo(92,22);//右上
      ctx.lineTo(92,60);//下
      ctx.lineTo(77,80);//斜め
      ctx.lineTo(47,80);//底辺
      ctx.lineTo(32,60);//斜め上
      ctx.lineTo(32,22);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle="black"
      ctx.fillRect(12,35,100,2);//横ライン
      //(右)ロードセル三角マーク
      ctx.moveTo(21,37);//ロードセル頂点
      ctx.lineTo(29,48);//右下
      ctx.lineTo(13,48);//左下
      ctx.lineTo(21,37);//
      ctx.closePath();
      //(左)ロードセル三角マーク
      ctx.moveTo(102,37);//ロードセル頂点
      ctx.lineTo(110,48);//右下
      ctx.lineTo(94,48);//左下
      ctx.lineTo(102,37);//
      ctx.closePath();
      ctx.stroke();
      ctx.fillStyle="black"
      
      //サイロ文字
      ctx.fillStyle="black";
      ctx.font="14px 'ＭＳ Ｐ ゴシック"
      ctx.fillText('原料5ﾋﾞﾝ',65,0);
      break;
    }
    case 3://運転3
    {
      //ビンの描画
      ctx.beginPath();
      ctx.fillStyle=start_color;
      ctx.moveTo(32,22);//左上
      ctx.lineTo(92,22);//右上
      ctx.lineTo(92,60);//下
      ctx.lineTo(77,80);//斜め
      ctx.lineTo(47,80);//底辺
      ctx.lineTo(32,60);//斜め上
      ctx.lineTo(32,22);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle="black"
      ctx.fillRect(12,35,100,2);//横ライン
      //(右)ロードセル三角マーク
      ctx.moveTo(21,37);//ロードセル頂点
      ctx.lineTo(29,48);//右下
      ctx.lineTo(13,48);//左下
      ctx.lineTo(21,37);//
      ctx.closePath();
      //(左)ロードセル三角マーク
      ctx.moveTo(102,37);//ロードセル頂点
      ctx.lineTo(110,48);//右下
      ctx.lineTo(94,48);//左下
      ctx.lineTo(102,37);//
      ctx.closePath();
      ctx.stroke();
      ctx.fillStyle="black"
      
      //サイロ文字
      ctx.fillStyle="black";
      ctx.font="14px 'ＭＳ Ｐ ゴシック"
      ctx.fillText('原料5ﾋﾞﾝ',65,0);
      break;
    }
    case 4://運転4
    {
      //ビンの描画
      ctx.beginPath();
      ctx.fillStyle=start_color;
      ctx.moveTo(32,22);//左上
      ctx.lineTo(92,22);//右上
      ctx.lineTo(92,60);//下
      ctx.lineTo(77,80);//斜め
      ctx.lineTo(47,80);//底辺
      ctx.lineTo(32,60);//斜め上
      ctx.lineTo(32,22);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle="black"
      ctx.fillRect(12,35,100,2);//横ライン
      //(右)ロードセル三角マーク
      ctx.moveTo(21,37);//ロードセル頂点
      ctx.lineTo(29,48);//右下
      ctx.lineTo(13,48);//左下
      ctx.lineTo(21,37);//
      ctx.closePath();
      //(左)ロードセル三角マーク
      ctx.moveTo(102,37);//ロードセル頂点
      ctx.lineTo(110,48);//右下
      ctx.lineTo(94,48);//左下
      ctx.lineTo(102,37);//
      ctx.closePath();
      ctx.stroke();
      ctx.fillStyle="black"
      
      //ビン文字
      ctx.fillStyle="black";
      ctx.font="14px 'ＭＳ Ｐ ゴシック"
      ctx.fillText('原料5ﾋﾞﾝ',65,0);
      break;
    }
    case 5://運転5
    {
      //ビンの描画
      ctx.beginPath();
      ctx.fillStyle=start_color;
      ctx.moveTo(32,22);//左上
      ctx.lineTo(92,22);//右上
      ctx.lineTo(92,60);//下
      ctx.lineTo(77,80);//斜め
      ctx.lineTo(47,80);//底辺
      ctx.lineTo(32,60);//斜め上
      ctx.lineTo(32,22);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle="black"
      ctx.fillRect(12,35,100,2);//横ライン
      //(右)ロードセル三角マーク
      ctx.moveTo(21,37);//ロードセル頂点
      ctx.lineTo(29,48);//右下
      ctx.lineTo(13,48);//左下
      ctx.lineTo(21,37);//
      ctx.closePath();
      //(左)ロードセル三角マーク
      ctx.moveTo(102,37);//ロードセル頂点
      ctx.lineTo(110,48);//右下
      ctx.lineTo(94,48);//左下
      ctx.lineTo(102,37);//
      ctx.closePath();
      ctx.stroke();
      ctx.fillStyle="black"
      
      //ビン文字
      ctx.fillStyle="black";
      ctx.font="14px 'ＭＳ Ｐ ゴシック"
      ctx.fillText('原料5ﾋﾞﾝ',65,0);
      break;
      }
    case 10://異常1
      {
        //ビンの描画
      ctx.beginPath();
      ctx.fillStyle=error_color1;
      ctx.moveTo(32,22);//左上
      ctx.lineTo(92,22);//右上
      ctx.lineTo(92,60);//下
      ctx.lineTo(77,80);//斜め
      ctx.lineTo(47,80);//底辺
      ctx.lineTo(32,60);//斜め上
      ctx.lineTo(32,22);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle="black"
      ctx.fillRect(12,35,100,2);//横ライン
      //(右)ロードセル三角マーク
      ctx.moveTo(21,37);//ロードセル頂点
      ctx.lineTo(29,48);//右下
      ctx.lineTo(13,48);//左下
      ctx.lineTo(21,37);//
      ctx.closePath();
      //(左)ロードセル三角マーク
      ctx.moveTo(102,37);//ロードセル頂点
      ctx.lineTo(110,48);//右下
      ctx.lineTo(94,48);//左下
      ctx.lineTo(102,37);//
      ctx.closePath();
      ctx.stroke();
      ctx.fillStyle="black"
      
      //ビン文字
      ctx.fillStyle="black";
      ctx.font="14px 'ＭＳ Ｐ ゴシック"
      ctx.fillText('原料5ﾋﾞﾝ',65,0);
      break;
      }
    case 11://異常2
    {
      //ビンの描画
      ctx.beginPath();
      ctx.fillStyle=error_color2;
      ctx.moveTo(32,22);//左上
      ctx.lineTo(92,22);//右上
      ctx.lineTo(92,60);//下
      ctx.lineTo(77,80);//斜め
      ctx.lineTo(47,80);//底辺
      ctx.lineTo(32,60);//斜め上
      ctx.lineTo(32,22);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle="black"
      ctx.fillRect(12,35,100,2);//横ライン
      //(右)ロードセル三角マーク
      ctx.moveTo(21,37);//ロードセル頂点
      ctx.lineTo(29,48);//右下
      ctx.lineTo(13,48);//左下
      ctx.lineTo(21,37);//
      ctx.closePath();
      //(左)ロードセル三角マーク
      ctx.moveTo(102,37);//ロードセル頂点
      ctx.lineTo(110,48);//右下
      ctx.lineTo(94,48);//左下
      ctx.lineTo(102,37);//
      ctx.closePath();
      ctx.stroke();
      ctx.fillStyle="black"
      
      //ビン文字
      ctx.fillStyle="black";
      ctx.font="14px 'ＭＳ Ｐ ゴシック"
      ctx.fillText('原料5ﾋﾞﾝ',65,0);
      break;
    }
  }
}//draw_gn5_bin　終了

//(12)ミキサー排出弁1
function draw_mixer_haisyutsu1(){  
  //キャンバスを初期化
  var canvas = document.getElementById("canvas_mixer_haisyutsu1");
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
  
  //コモンステータス　　0:通常状態 10:運転ﾗﾝﾌﾟﾃｽﾄ 11:警報ﾗﾝﾌﾟﾃｽﾄ
  //ミキサーステータス　0:停止 1:運転 2:異常
  switch(lamp_common_status){
    case 0:
      switch(draw_mixer_haisyutsu1_status){
        case 0://停止
          t_mixer_haisyutsu1=0;
          break;
        case 1://運転
          t_mixer_haisyutsu1++;
          if(t_mixer_haisyutsu1==4){
            t_mixer_haisyutsu1=1;
          }
          break;
        case 2://異常
          t_mixer_haisyutsu1++;
          if(t_mixer_haisyutsu1<10){t_mixer_haisyutsu1=10;}
          if(t_mixer_haisyutsu1==12){
            t_mixer_haisyutsu1=10;
          }
          break;
        default:
          break;
      }
      break;
    case 10:
      t_mixer_haisyutsu1++;
      if(t_mixer_haisyutsu1==4){
        t_mixer_haisyutsu1=1;
      }
      break;
    case 11:
      t_mixer_haisyutsu1++;
      if(t_mixer_haisyutsu1<10){t_mixer_haisyutsu1=10;}
      if(t_mixer_haisyutsu1==12){
        t_mixer_haisyutsu1=10;
      }
      break;
    default:
      break;
  }
  //設定時間後再実行
  setTimeout(draw_mixer_haisyutsu1,500);  
  
  switch(t_mixer_haisyutsu1)//(1)
  {
    case 0://停止
    {
      //バルブの描画
      ctx.beginPath();
      ctx.fillStyle=stop_color;
      
      //バルブ本体
      ctx.fillRect(30,0,60,20);
      ctx.strokeRect(30,0,60,20);
      
      //バルブセンター丸
      ctx.arc(60,10,4,0,2*3.14,false);
      ctx.strokeStyle="white";
      ctx.stroke();
    
      //バルブセンターライン
      ctx.moveTo(30,10);
      ctx.lineTo(90,10);
      ctx.stroke();
      ctx.closePath();

      break;
    }
    case 1://開1
    {
      //バルブの描画
      ctx.beginPath();
      ctx.fillStyle=start_color;

      //バルブ本体
      ctx.fillRect(30,0,60,20);
      ctx.strokeRect(30,0,60,20);
      
      //バルブセンター丸
      ctx.arc(60,10,4,0,2*3.14,false);
      ctx.strokeStyle="white";
      ctx.stroke();
    
      //バルブセンターライン
      ctx.moveTo(60,0);
      ctx.lineTo(60,20);
      ctx.stroke();
      ctx.closePath();

      //材料落下
      ctx.fillStyle="pink";
      //1段目
      ctx.fillRect(35,22,10,5);
      ctx.fillRect(55,25,10,5);
      ctx.fillRect(75,22,10,5);
      //2段目
      ctx.fillRect(35,30,10,5);
      ctx.fillRect(55,33,10,5);
      ctx.fillRect(75,30,10,5);
      //3段目
      ctx.fillRect(35,38,10,5);
      ctx.fillRect(55,41,10,5);
      ctx.fillRect(75,38,10,5);
      //4段目
      ctx.fillRect(35,46,10,5);
      ctx.fillRect(55,49,10,5);
      ctx.fillRect(75,46,10,5);
      break;
    }
    
    case 2://開2
    {
      //バルブの描画
      ctx.beginPath();
      ctx.fillStyle=start_color;

      //バルブ本体
      ctx.fillRect(30,0,60,20);
      ctx.strokeRect(30,0,60,20);
      
      //バルブセンター丸
      ctx.arc(60,10,4,0,2*3.14,false);
      ctx.strokeStyle="white";
      ctx.stroke();
    
      //バルブセンターライン
      ctx.moveTo(60,0);
      ctx.lineTo(60,20);
      ctx.stroke();
      ctx.closePath();

      //材料落下
      ctx.fillStyle="pink";
      //0段目(追加)
      ctx.fillRect(35,21,10,2);
      ctx.fillRect(55,21,10,5);
      ctx.fillRect(75,21,10,2);
     
      //1段目
     ctx.fillRect(35,26,10,5);
     ctx.fillRect(55,29,10,5);
     ctx.fillRect(75,26,10,5);
     //2段目
     ctx.fillRect(35,34,10,5);
     ctx.fillRect(55,37,10,5);
     ctx.fillRect(75,34,10,5);
     //3段目
     ctx.fillRect(35,42,10,5);
     ctx.fillRect(55,45,10,5);
     ctx.fillRect(75,42,10,5);
     //4段目
     ctx.fillRect(35,50,10,5);
     ctx.fillRect(55,53,10,5);
     ctx.fillRect(75,50,10,5);
      break;
    }
    
    case 3://開3
    {
      //バルブの描画
      ctx.beginPath();
      ctx.fillStyle=start_color;

      //バルブ本体
      ctx.fillRect(30,0,60,20);
      ctx.strokeRect(30,0,60,20);
      
      //バルブセンター丸
      ctx.arc(60,10,4,0,2*3.14,false);
      ctx.strokeStyle="white";
      ctx.stroke();
    
      //バルブセンターライン
      ctx.moveTo(60,0);
      ctx.lineTo(60,20);
      ctx.stroke();
      ctx.closePath();

      //材料落下
      ctx.fillStyle="pink";
      //0段目(追加)
      ctx.fillRect(35,22,10,5);
      ctx.fillRect(55,25,10,5);
      ctx.fillRect(75,22,10,5);
    
      //1段目
      ctx.fillRect(35,30,10,5);
      ctx.fillRect(55,33,10,5);
      ctx.fillRect(75,30,10,5);
      //2段目
      ctx.fillRect(35,38,10,5);
      ctx.fillRect(55,41,10,5);
      ctx.fillRect(75,38,10,5);
      //3段目
      ctx.fillRect(35,46,10,5);
      ctx.fillRect(55,49,10,5);
      ctx.fillRect(75,46,10,5);
      //4段目
      ctx.fillRect(35,54,10,5);
      ctx.fillRect(55,57,10,5);
      ctx.fillRect(75,54,10,5);
      break;
    }
    case 10://異常1
    {
      //バルブの描画
      ctx.beginPath();
      ctx.fillStyle=error_color1;
      
      //バルブ本体
      ctx.fillRect(30,0,60,20);
      ctx.strokeRect(30,0,60,20);
      
      //バルブセンター丸
      ctx.arc(60,10,4,0,2*3.14,false);
      ctx.strokeStyle=error_text_color1;
      ctx.stroke();
    
      //バルブセンターライン
      ctx.moveTo(30,10);
      ctx.lineTo(90,10);
      ctx.stroke();
      ctx.closePath();
      break;
    }
    case 11://異常2
    {
      //バルブの描画
      ctx.beginPath();
      ctx.fillStyle=error_color2;
      
      //バルブ本体
      ctx.fillRect(30,0,60,20);
      ctx.strokeRect(30,0,60,20);
      
      //バルブセンター丸
      ctx.arc(60,10,4,0,2*3.14,false);
      ctx.strokeStyle=error_text_color2;
      ctx.stroke();
    
      //バルブセンターライン
      ctx.moveTo(30,10);
      ctx.lineTo(90,10);
      ctx.stroke();
      ctx.closePath();
      break;
    }
  }
}//draw_mixer_haisyutsu1　終了

//(13)ミキサー排出弁2
function draw_mixer_haisyutsu2(){  
  //キャンバスを初期化
  var canvas = document.getElementById("canvas_mixer_haisyutsu2");
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
  
  //コモンステータス　　0:通常状態 10:運転ﾗﾝﾌﾟﾃｽﾄ 11:警報ﾗﾝﾌﾟﾃｽﾄ
  //ミキサーステータス　0:停止 1:運転 2:異常
  switch(lamp_common_status){
    case 0:
      switch(draw_mixer_haisyutsu2_status){
        case 0://停止
          t_mixer_haisyutsu2=0;
          break;
        case 1://運転
          t_mixer_haisyutsu2++;
          if(t_mixer_haisyutsu2==4){
            t_mixer_haisyutsu2=1;
          }
          break;
        case 2://異常
          t_mixer_haisyutsu2++;
          if(t_mixer_haisyutsu2<10){t_mixer_haisyutsu2=10;}
          if(t_mixer_haisyutsu2==12){
            t_mixer_haisyutsu2=10;
          }
          break;
        default:
          break;
      }
      break;
    case 10:
      t_mixer_haisyutsu2++;
      if(t_mixer_haisyutsu2==4){
        t_mixer_haisyutsu2=1;
      }
      break;
    case 11:
      t_mixer_haisyutsu2++;
      if(t_mixer_haisyutsu2<10){t_mixer_haisyutsu2=10;}
      if(t_mixer_haisyutsu2==12){
        t_mixer_haisyutsu2=10;
      }
      break;
    default:
      break;
  }

  //設定時間後再実行
  setTimeout(draw_mixer_haisyutsu2,500);  
  
  switch(t_mixer_haisyutsu2)//(1)
  {
    case 0://停止
    {
      //バルブの描画
      ctx.beginPath();
      ctx.fillStyle=stop_color;
      
      //バルブ本体
      ctx.fillRect(30,0,60,20);
      ctx.strokeRect(30,0,60,20);
      
      //バルブセンター丸
      ctx.arc(60,10,4,0,2*3.14,false);
      ctx.strokeStyle="white";
      ctx.stroke();
    
      //バルブセンターライン
      ctx.moveTo(30,10);
      ctx.lineTo(90,10);
      ctx.stroke();
      ctx.closePath();

      break;
    }
    case 1://開1
    {
      //バルブの描画
      ctx.beginPath();
      ctx.fillStyle=start_color;

      //バルブ本体
      ctx.fillRect(30,0,60,20);
      ctx.strokeRect(30,0,60,20);
      
      //バルブセンター丸
      ctx.arc(60,10,4,0,2*3.14,false);
      ctx.strokeStyle="white";
      ctx.stroke();
    
      //バルブセンターライン
      ctx.moveTo(60,0);
      ctx.lineTo(60,20);
      ctx.stroke();
      ctx.closePath();

      //材料落下
      ctx.fillStyle="pink";
      //1段目
      ctx.fillRect(35,22,10,5);
      ctx.fillRect(55,25,10,5);
      ctx.fillRect(75,22,10,5);
      //2段目
      ctx.fillRect(35,30,10,5);
      ctx.fillRect(55,33,10,5);
      ctx.fillRect(75,30,10,5);
      //3段目
      ctx.fillRect(35,38,10,5);
      ctx.fillRect(55,41,10,5);
      ctx.fillRect(75,38,10,5);
      //4段目
      ctx.fillRect(35,46,10,5);
      ctx.fillRect(55,49,10,5);
      ctx.fillRect(75,46,10,5);
      break;
    }    
    case 2://開2
    {
      //バルブの描画
      ctx.beginPath();
      ctx.fillStyle=start_color;

      //バルブ本体
      ctx.fillRect(30,0,60,20);
      ctx.strokeRect(30,0,60,20);
      
      //バルブセンター丸
      ctx.arc(60,10,4,0,2*3.14,false);
      ctx.strokeStyle="white";
      ctx.stroke();
    
      //バルブセンターライン
      ctx.moveTo(60,0);
      ctx.lineTo(60,20);
      ctx.stroke();
      ctx.closePath();

      //材料落下
      ctx.fillStyle="pink";
      //0段目(追加)
      ctx.fillRect(35,21,10,2);
      ctx.fillRect(55,21,10,5);
      ctx.fillRect(75,21,10,2);
     
      //1段目
      ctx.fillRect(35,26,10,5);
      ctx.fillRect(55,29,10,5);
      ctx.fillRect(75,26,10,5);
      //2段目
      ctx.fillRect(35,34,10,5);
      ctx.fillRect(55,37,10,5);
      ctx.fillRect(75,34,10,5);
      //3段目
      ctx.fillRect(35,42,10,5);
      ctx.fillRect(55,45,10,5);
      ctx.fillRect(75,42,10,5);
      //4段目
      ctx.fillRect(35,50,10,5);
      ctx.fillRect(55,53,10,5);
      ctx.fillRect(75,50,10,5);
      break;
    }    
    case 3://開3
    {
      //バルブの描画
      ctx.beginPath();
      ctx.fillStyle=start_color;

      //バルブ本体
      ctx.fillRect(30,0,60,20);
      ctx.strokeRect(30,0,60,20);
      
      //バルブセンター丸
      ctx.arc(60,10,4,0,2*3.14,false);
      ctx.strokeStyle="white";
      ctx.stroke();
    
      //バルブセンターライン
      ctx.moveTo(60,0);
      ctx.lineTo(60,20);
      ctx.stroke();
      ctx.closePath();

      //材料落下
      ctx.fillStyle="pink";
      //0段目(追加)
      ctx.fillRect(35,22,10,5);
      ctx.fillRect(55,25,10,5);
      ctx.fillRect(75,22,10,5);
    
      //1段目
      ctx.fillRect(35,30,10,5);
      ctx.fillRect(55,33,10,5);
      ctx.fillRect(75,30,10,5);
      //2段目
      ctx.fillRect(35,38,10,5);
      ctx.fillRect(55,41,10,5);
      ctx.fillRect(75,38,10,5);
      //3段目
      ctx.fillRect(35,46,10,5);
      ctx.fillRect(55,49,10,5);
      ctx.fillRect(75,46,10,5);
      //4段目
      ctx.fillRect(35,54,10,5);
      ctx.fillRect(55,57,10,5);
      ctx.fillRect(75,54,10,5);  
      break;
    }
    case 10://異常1
    {
      //バルブの描画
      ctx.beginPath();
      ctx.fillStyle=error_color1;
      
      //バルブ本体
      ctx.fillRect(30,0,60,20);
      ctx.strokeRect(30,0,60,20);
      
      //バルブセンター丸
      ctx.arc(60,10,4,0,2*3.14,false);
      ctx.strokeStyle=error_text_color1;
      ctx.stroke();
    
      //バルブセンターライン
      ctx.moveTo(30,10);
      ctx.lineTo(90,10);
      ctx.stroke();
      ctx.closePath();
      break;
    }
    case 11://異常2
    {
      //バルブの描画
      ctx.beginPath();
      ctx.fillStyle=error_color2;
      
      //バルブ本体
      ctx.fillRect(30,0,60,20);
      ctx.strokeRect(30,0,60,20);
      
      //バルブセンター丸
      ctx.arc(60,10,4,0,2*3.14,false);
      ctx.strokeStyle=error_text_color2;
      ctx.stroke();
    
      //バルブセンターライン
      ctx.moveTo(30,10);
      ctx.lineTo(90,10);
      ctx.stroke();
      ctx.closePath();
      break;
    }
  }
}//draw_mixer_haisyutsu2　終了

//(14)原料5投入弁
function draw_gn5_tonyu(){  
  //キャンバスを初期化
  var canvas = document.getElementById("canvas_gn5_tonyu");
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
  
  //コモンステータス　　0:通常状態 10:運転ﾗﾝﾌﾟﾃｽﾄ 11:警報ﾗﾝﾌﾟﾃｽﾄ
  //ミキサーステータス　0:停止 1:運転 2:異常
  switch(lamp_common_status){
    case 0:
      switch(draw_gn5_tonyu_status){
        case 0://停止
          t_gn5_tonyu=0;
          break;
        case 1://運転
          t_gn5_tonyu++;
          if(t_gn5_tonyu==4){
            t_gn5_tonyu=1;
          }
          break;
        case 2://異常
          t_gn5_tonyu++;
          if(t_gn5_tonyu<10){t_gn5_tonyu=10;}
          if(t_gn5_tonyu==12){
            t_gn5_tonyu=10;
          }
          break;
        default:
          break;
      }
      break;
    case 10:
      t_gn5_tonyu++;
      if(t_gn5_tonyu==4){
        t_gn5_tonyu=1;
      }
      break;
    case 11:
      t_gn5_tonyu++;
      if(t_gn5_tonyu<10){t_gn5_tonyu=10;}
      if(t_gn5_tonyu==12){
        t_gn5_tonyu=10;
      }
      break;
    default:
      break;
  }
  //設定時間後再実行
  setTimeout(draw_gn5_tonyu,500);  
  
  switch(t_gn5_tonyu)
  {
    case 0://停止
    {
      //バルブの描画
      ctx.beginPath();
      ctx.fillStyle=stop_color;
      
      //バルブ本体
      ctx.fillRect(45,0,35,20);
      ctx.strokeRect(45,0,35,20);
      
      //バルブセンター丸
      ctx.arc(63,10,4,0,2*3.14,false);
      ctx.strokeStyle="white";
      ctx.stroke();
    
      //バルブセンターライン
      ctx.moveTo(45,10);
      ctx.lineTo(80,10);
      ctx.stroke();

      // ctx.strokeRect(0,0,105,40);//外枠線

      break;
    }
    case 1://開1
    {
      //バルブの描画
      ctx.beginPath();
      ctx.fillStyle=start_color;

      //バルブ本体
      ctx.fillRect(45,0,35,20);
      ctx.strokeRect(45,0,35,20);
      
      //バルブセンター丸
      ctx.arc(63,10,4,0,2*3.14,false);
      ctx.strokeStyle="white";
      ctx.stroke();
    
      //バルブセンターライン
      ctx.moveTo(63,0);
      ctx.lineTo(63,20);
      ctx.stroke();
      ctx.closePath();
  
      //材料落下
      ctx.fillStyle="pink";
      //0段目(追加)
      ctx.fillRect(57,21,12,5);
      //1段目
      ctx.fillRect(57,29,12,5);
      //2段目
      ctx.fillRect(57,37,12,5);
      //3段目
      ctx.fillRect(57,45,12,5);
      //4段目
      ctx.fillRect(57,53,12,5);
      break;
    }
    
    case 2://開2
    {
      //バルブの描画
      ctx.beginPath();
      ctx.fillStyle=start_color;

      //バルブ本体
      ctx.fillRect(45,0,35,20);
      ctx.strokeRect(45,0,35,20);
      
      //バルブセンター丸
      ctx.arc(63,10,4,0,2*3.14,false);
      ctx.strokeStyle="white";
      ctx.stroke();
    
      //バルブセンターライン
      ctx.moveTo(63,0);
      ctx.lineTo(63,20);
      ctx.stroke();
      ctx.closePath();

      //材料落下
      ctx.fillStyle="pink";
      //0段目(追加)
      ctx.fillRect(57,21,12,5);
      //1段目
      ctx.fillRect(57,29,12,5);
     //2段目
      ctx.fillRect(57,37,12,5);
     //3段目
      ctx.fillRect(57,45,12,5);
     //4段目
      ctx.fillRect(57,53,12,5);
      break;
    }
    
    case 3://開3
    {
      //バルブの描画
      ctx.beginPath();
      ctx.fillStyle=start_color;

      //バルブ本体
      ctx.fillRect(45,0,35,20);
      ctx.strokeRect(45,0,35,20);
      
      //バルブセンター丸
      ctx.arc(63,10,4,0,2*3.14,false);
      ctx.strokeStyle="white";
      ctx.stroke();
    
      //バルブセンターライン
      ctx.moveTo(63,0);
      ctx.lineTo(63,20);
      ctx.stroke();
      ctx.closePath();

      //材料落下
      ctx.fillStyle="pink";
      //0段目(追加)
      ctx.fillRect(57,25,12,5);    
      //1段目
      ctx.fillRect(57,33,12,5);
      //2段目
      ctx.fillRect(57,41,12,5);
      //3段目
      ctx.fillRect(57,49,12,5);
      //4段目
      ctx.fillRect(57,57,12,5);
      break;
    }
    case 10://異常1
    {
      //バルブの描画
      ctx.beginPath();
      ctx.fillStyle=error_color1;
      
      //バルブ本体
      ctx.fillRect(45,0,35,20);
      ctx.strokeRect(45,0,35,20);
      
      //バルブセンター丸
      ctx.arc(63,10,4,0,2*3.14,false);
      ctx.strokeStyle=error_text_color1;
      ctx.stroke();

      //バルブセンターライン
      ctx.moveTo(45,10);
      ctx.lineTo(80,10);
      ctx.stroke();
      ctx.closePath();
      break;
    }
    case 11://異常2
    {
      //バルブの描画
      ctx.beginPath();
      ctx.fillStyle=error_color2;

      //バルブ本体
      ctx.fillRect(45,0,35,20);
      ctx.strokeRect(45,0,35,20);
      
      //バルブセンター丸
      ctx.arc(63,10,4,0,2*3.14,false);
      ctx.strokeStyle=error_text_color2;
      ctx.stroke();
    
      //バルブセンターライン
      ctx.moveTo(45,10);
      ctx.lineTo(80,10);
      ctx.stroke();
      ctx.closePath();
      break;
    }
  }
}//draw_gn5_tonyu　終了

//(15)原料4排出
function draw_gn4_haisyutsu(){  
  //キャンバスを初期化
  var canvas = document.getElementById("canvas_gn4_haisyutsu");
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
  
  //コモンステータス　　0:通常状態 10:運転ﾗﾝﾌﾟﾃｽﾄ 11:警報ﾗﾝﾌﾟﾃｽﾄ
  //ミキサーステータス　0:停止 1:運転 2:異常
  switch(lamp_common_status){
    case 0:
      switch(draw_gn4_haisyutsu_status){
        case 0://停止
          t_gn4_haisyutsu=0;
          break;
        case 1://運転
          t_gn4_haisyutsu++;
          if(t_gn4_haisyutsu==4){
            t_gn4_haisyutsu=1;
          }
          break;
        case 2://異常
          t_gn4_haisyutsu++;
          if(t_gn4_haisyutsu<10){t_gn4_haisyutsu=10;}
          if(t_gn4_haisyutsu==12){
            t_gn4_haisyutsu=10;
          }
          break;
        default:
          break;
      }
      break;
    case 10:
      t_gn4_haisyutsu++;
      if(t_gn4_haisyutsu==4){
        t_gn4_haisyutsu=1;
      }
      break;
    case 11:
      t_gn4_haisyutsu++;
      if(t_gn4_haisyutsu<10){t_gn4_haisyutsu=10;}
      if(t_gn4_haisyutsu==12){
        t_gn4_haisyutsu=10;
      }
      break;
    default:
      break;
  }

  //設定時間後再実行
  setTimeout(draw_gn4_haisyutsu,500);  
  
  switch(t_gn4_haisyutsu)
  {
    case 0://停止
    {
      //バルブの描画
      ctx.beginPath();
      ctx.fillStyle=stop_color;

      //バルブ本体
      ctx.fillRect(45,0,35,20);
      ctx.strokeRect(45,0,35,20);
      
      //バルブセンター丸
      ctx.arc(63,10,4,0,2*3.14,false);
      ctx.strokeStyle="white";
      ctx.stroke();
    
      //バルブセンターライン
      ctx.moveTo(45,10);
      ctx.lineTo(80,10);
      ctx.stroke();
      ctx.closePath();
      break;
    }
    case 1://開1
    {
      //バルブの描画
      ctx.beginPath();
      ctx.fillStyle=start_color;

      //バルブ本体
      ctx.fillRect(45,0,35,20);
      ctx.strokeRect(45,0,35,20);
      
      //バルブセンター丸
      ctx.arc(63,10,4,0,2*3.14,false);
      ctx.strokeStyle="white";
      ctx.stroke();
    
      //バルブセンターライン
      ctx.moveTo(63,0);
      ctx.lineTo(63,20);
      ctx.stroke();
      ctx.closePath();

      //材料落下
      ctx.fillStyle="pink";
      //1段目
      ctx.fillRect(57,25,12,5);
      //2段目
      ctx.fillRect(57,33,12,5);
      //3段目
      ctx.fillRect(57,41,12,5);
      //4段目
      ctx.fillRect(57,49,12,5);
      break;
    }    
    case 2://開2
    {
      //バルブの描画
      ctx.beginPath();
      ctx.fillStyle=start_color;

      //バルブ本体
      ctx.fillRect(45,0,35,20);
      ctx.strokeRect(45,0,35,20);
      
      //バルブセンター丸
      ctx.arc(63,10,4,0,2*3.14,false);
      ctx.strokeStyle="white";
      ctx.stroke();
    
      //バルブセンターライン
      ctx.moveTo(63,0);
      ctx.lineTo(63,20);
      ctx.stroke();
      ctx.closePath();

      //材料落下
      ctx.fillStyle="pink";
      //0段目(追加)
      ctx.fillRect(57,21,12,5);     
      //1段目
      ctx.fillRect(57,29,12,5);
      //2段目
      ctx.fillRect(57,37,12,5);
      //3段目
      ctx.fillRect(57,45,12,5);
      //4段目
      ctx.fillRect(57,53,12,5);
      break;
    }    
    case 3://開3
    {
      //バルブの描画
      ctx.beginPath();
      ctx.fillStyle=start_color;

      //バルブ本体
      ctx.fillRect(45,0,35,20);
      ctx.strokeRect(45,0,35,20);
      
      //バルブセンター丸
      ctx.arc(63,10,4,0,2*3.14,false);
      ctx.strokeStyle="white";
      ctx.stroke();
    
      //バルブセンターライン
      ctx.moveTo(63,0);
      ctx.lineTo(63,20);
      ctx.stroke();
      ctx.closePath();

      //材料落下
      ctx.fillStyle="pink";
      //0段目(追加)
      ctx.fillRect(57,25,12,5);    
      //1段目
      ctx.fillRect(57,33,12,5);
      //2段目
      ctx.fillRect(57,41,12,5);
      //3段目
      ctx.fillRect(57,49,12,5);
      //4段目
      ctx.fillRect(57,57,12,5);
      break;
    }
    case 10://異常1
    {
      //バルブの描画
      ctx.beginPath();
      ctx.fillStyle=error_color1;

      //バルブ本体
      ctx.fillRect(45,0,35,20);
      ctx.strokeRect(45,0,35,20);
      
      //バルブセンター丸
      ctx.arc(63,10,4,0,2*3.14,false);
      ctx.strokeStyle=error_text_color1;
      ctx.stroke();
    
      //バルブセンターライン
      ctx.moveTo(45,10);
      ctx.lineTo(80,10);
      ctx.stroke();
      ctx.closePath();
      break;
    }
    case 11://異常2
    {
      //バルブの描画
      ctx.beginPath();
      ctx.fillStyle=error_color2;
      
      //バルブ本体
      ctx.fillRect(45,0,35,20);
      ctx.strokeRect(45,0,35,20);
      
      //バルブセンター丸
      ctx.arc(63,10,4,0,2*3.14,false);
      ctx.strokeStyle=error_text_color2;
      ctx.stroke();
    
      //バルブセンターライン
      ctx.moveTo(45,10);
      ctx.lineTo(80,10);
      ctx.stroke();
      ctx.closePath();
      break;
    }
  }
}//draw_gn4_haisyutsu　終了

//(16)原料5排出
function draw_gn5_haisyutsu(){  
  //キャンバスを初期化
  var canvas = document.getElementById("canvas_gn5_haisyutsu");
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
  
    //コモンステータス　　0:通常状態 10:運転ﾗﾝﾌﾟﾃｽﾄ 11:警報ﾗﾝﾌﾟﾃｽﾄ
  //ミキサーステータス　0:停止 1:運転 2:異常
  switch(lamp_common_status){
    case 0:
      switch(draw_gn4_haisyutsu_status){
        case 0://停止
          t_gn5_haisyutsu=0;
          break;
        case 1://運転
          t_gn5_haisyutsu++;
          if(t_gn5_haisyutsu==4){
            t_gn5_haisyutsu=1;
          }
          break;
        case 2://異常
          t_gn5_haisyutsu++;
          if(t_gn5_haisyutsu<10){t_gn5_haisyutsu=10;}
          if(t_gn5_haisyutsu==12){
            t_gn5_haisyutsu=10;
          }
          break;
        default:
          break;
      }
      break;
    case 10:
      t_gn5_haisyutsu++;
      if(t_gn5_haisyutsu==4){
        t_gn5_haisyutsu=1;
      }
      break;
    case 11:
      t_gn5_haisyutsu++;
      if(t_gn5_haisyutsu<10){t_gn5_haisyutsu=10;}
      if(t_gn5_haisyutsu==12){
        t_gn5_haisyutsu=10;
      }
      break;
    default:
      break;
  }

  //設定時間後再実行
  setTimeout(draw_gn5_haisyutsu,500);  
  
  switch(t_gn5_haisyutsu)
  {
    case 0://停止
    {
      //バルブの描画
      ctx.beginPath();
      ctx.fillStyle=stop_color;
      
      //バルブ本体
      ctx.fillRect(45,0,35,20);
      ctx.strokeRect(45,0,35,20);
      
      //バルブセンター丸
      ctx.arc(63,10,4,0,2*3.14,false);
      ctx.strokeStyle="white";
      ctx.stroke();
    
      //バルブセンターライン
      ctx.moveTo(45,10);
      ctx.lineTo(80,10);
      ctx.stroke();
      ctx.closePath();
      break;
    }
    case 1://開1
    {
      //バルブの描画
      ctx.beginPath();
      ctx.fillStyle=start_color;

      //バルブ本体
      ctx.fillRect(45,0,35,20);
      ctx.strokeRect(45,0,35,20);
      
      //バルブセンター丸
      ctx.arc(63,10,4,0,2*3.14,false);
      ctx.strokeStyle="white";
      ctx.stroke();
    
      //バルブセンターライン
      ctx.moveTo(63,0);
      ctx.lineTo(63,20);
      ctx.stroke();
      ctx.closePath();

      //材料落下
      ctx.fillStyle="pink";
      //1段目
      ctx.fillRect(57,25,12,5);
      //2段目
      ctx.fillRect(57,33,12,5);
      //3段目
      ctx.fillRect(57,41,12,5);
      //4段目
      ctx.fillRect(57,49,12,5);
      break;
    }    
    case 2://開2
    {
      //バルブの描画
      ctx.beginPath();
      ctx.fillStyle=start_color;

      //バルブ本体
      ctx.fillRect(45,0,35,20);
      ctx.strokeRect(45,0,35,20);
      
      //バルブセンター丸
      ctx.arc(63,10,4,0,2*3.14,false);
      ctx.strokeStyle="white";
      ctx.stroke();
    
      //バルブセンターライン
      ctx.moveTo(63,0);
      ctx.lineTo(63,20);
      ctx.stroke();
      ctx.closePath();

      //材料落下
      ctx.fillStyle="pink";
      //0段目(追加)
      ctx.fillRect(57,21,12,5);     
      //1段目
      ctx.fillRect(57,29,12,5);
      //2段目
      ctx.fillRect(57,37,12,5);
      //3段目
      ctx.fillRect(57,45,12,5);
      //4段目
      ctx.fillRect(57,53,12,5);
      break;
    }    
    case 3://開3
    {
      //バルブの描画
      ctx.beginPath();
      ctx.fillStyle=start_color;

      //バルブ本体
      ctx.fillRect(45,0,35,20);
      ctx.strokeRect(45,0,35,20);
      
      //バルブセンター丸
      ctx.arc(63,10,4,0,2*3.14,false);
      ctx.strokeStyle="white";
      ctx.stroke();
    
      //バルブセンターライン
      ctx.moveTo(63,0);
      ctx.lineTo(63,20);
      ctx.stroke();
      ctx.closePath();

      //材料落下
      ctx.fillStyle="pink";
      //0段目(追加)
      ctx.fillRect(57,25,12,5);
      //1段目
      ctx.fillRect(57,33,12,5);
      //2段目
      ctx.fillRect(57,41,12,5);
      //3段目
      ctx.fillRect(57,49,12,5);
      //4段目
      ctx.fillRect(57,57,12,5);
      // ctx.fillRect(75,54,10,5);
      break;
    }
    case 10://異常1
    {
      //バルブの描画
      ctx.beginPath();
      ctx.fillStyle=error_color1;
      
      //バルブ本体
      ctx.fillRect(45,0,35,20);
      ctx.strokeRect(45,0,35,20);
      
      //バルブセンター丸
      ctx.arc(63,10,4,0,2*3.14,false);
      ctx.strokeStyle=error_text_color1;
      ctx.stroke();
    
      //バルブセンターライン
      ctx.moveTo(45,10);
      ctx.lineTo(80,10);
      ctx.stroke();
      ctx.closePath();
      break;
    }
    case 11://異常2
    {
      //バルブの描画
      ctx.beginPath();
      ctx.fillStyle=error_color2;
      
      //バルブ本体
      ctx.fillRect(45,0,35,20);
      ctx.strokeRect(45,0,35,20);
      
      //バルブセンター丸
      ctx.arc(63,10,4,0,2*3.14,false);
      ctx.strokeStyle=error_text_color2;
      ctx.stroke();
    
      //バルブセンターライン
      ctx.moveTo(45,10);
      ctx.lineTo(80,10);
      ctx.stroke();
      ctx.closePath();
      break;
    }
  }
}//draw_gn5_haisyutsu2　終了

