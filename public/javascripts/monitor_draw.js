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

//モニタ：１段目ランプ
let lamp_status_10 = 0;
let lamp_status_11 = 0;
let lamp_status_12 = 0;
let lamp_status_13 = 0;
let lamp_status_14 = 0;
let lamp_status_15 = 0;

//モニタ：２段目ランプ
let lamp_status_20 = 0;
let lamp_status_21 = 0;
let lamp_status_22 = 0;
let lamp_status_23 = 0;
let lamp_status_24 = 0;
let lamp_status_25 = 0;

//モニタ　３段目ランプ
let lamp_status_30 = 0;
let lamp_status_31 = 0;
let lamp_status_32 = 0;
let lamp_status_33 = 0;
let lamp_status_34 = 0;
let lamp_status_35 = 0;

//モニタ　４段目ランプ
let lamp_status_40 = 0;
let lamp_status_41 = 0;
let lamp_status_42 = 0;
let lamp_status_43 = 0;
let lamp_status_44 = 0;
let lamp_status_45 = 0;

//モニタ　５段目ランプ
let lamp_status_50 = 0;
let lamp_status_51 = 0;
let lamp_status_52 = 0;
let lamp_status_53 = 0;
let lamp_status_54 = 0;
let lamp_status_55 = 0;

//モニタ　配合：銘柄
let meigara_status_10 = 0;
let meigara_status_11 = 0;
let meigara_status_12 = 0;
let meigara_status_13 = 0;
let meigara_status_14 = 0;
let meigara_status_15 = 0;

//モニタ　配合：設定
let haigo_s_status_10 = 0;
let haigo_s_status_11 = 0;
let haigo_s_status_12 = 0;
let haigo_s_status_13 = 0;
let haigo_s_status_14 = 0;
let haigo_s_status_15 = 0;

//モニタ　配合：計量
let haigo_k_status_10 = 0;
let haigo_k_status_11 = 0;
let haigo_k_status_12 = 0;
let haigo_k_status_13 = 0;
let haigo_k_status_14 = 0;
let haigo_k_status_15 = 0;

//モニタ　配合：バッチ
let batch_s_status  = 0;
let batch_p_status  = 0;

//タイマー初期化【DRAW】
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

//タイマー初期化【MONITOR】
//1段目ランプ用
let t_lamp10=0;
let t_lamp11=0;
let t_lamp12=0;
let t_lamp13=0;
let t_lamp14=0;
let t_lamp15=0;
//2段目ランプ用
let t_lamp20=0;
let t_lamp21=0;
let t_lamp22=0;
let t_lamp23=0;
let t_lamp24=0;
let t_lamp25=0;
//3段目ランプ用
let t_lamp30=0;
let t_lamp31=0;
let t_lamp32=0;
let t_lamp33=0;
let t_lamp34=0;
let t_lamp35=0;
//4段目ランプ用
let t_lamp40=0;
let t_lamp41=0;
let t_lamp42=0;
let t_lamp43=0;
let t_lamp44=0;
let t_lamp45=0;
//5段目ランプ用
let t_lamp50=0;
let t_lamp51=0;
let t_lamp52=0;
let t_lamp53=0;
let t_lamp54=0;
let t_lamp55=0;
//銘柄
let t_meigara10=0;
let t_meigara11=0;
let t_meigara12=0;
let t_meigara13=0;
let t_meigara14=0;
//配合設定
let t_haigo_s_10=0;
let t_haigo_s_11=0;
let t_haigo_s_12=0;
let t_haigo_s_13=0;
let t_haigo_s_14=0;
//配合計量
let t_haigo_k_10=0;
let t_haigo_k_11=0;
let t_haigo_k_12=0;
let t_haigo_k_13=0;
let t_haigo_k_14=0;
//カラー初期化
var stop_color="LimeGreen";
var start_color="red";
var error_color1="yellow";
var error_color2="DarkKhaki";
var error_text_color1="red";
var error_text_color2="SaddleBrown";
// var agitator_pdata1=[];

//ランプテストボタン状態
var lamp_test_status=false;

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
  //【右DRAW系】
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

  //左ランプ系
  //(1)1段目
  lamp_mon_10();
  lamp_mon_11();
  lamp_mon_12();
  lamp_mon_13();
  lamp_mon_14();
  lamp_mon_15();
  //(2)2段目
  lamp_mon_20();
  lamp_mon_21();
  lamp_mon_22();
  lamp_mon_23();
  lamp_mon_24();
  lamp_mon_25();
  //(3)3段目
  lamp_mon_30();
  lamp_mon_31();
  lamp_mon_32();
  lamp_mon_33();
  lamp_mon_34();
  lamp_mon_35();
  //(4)4段目
  lamp_mon_40();
  lamp_mon_41();
  lamp_mon_42();
  lamp_mon_43();
  lamp_mon_44();
  lamp_mon_45();
  //(5)5段目
  lamp_mon_50();
  lamp_mon_51();
  lamp_mon_52();
  lamp_mon_53();
  lamp_mon_54();
  lamp_mon_55();
  //銘柄
  meigara_mon_10();
  meigara_mon_11();
  meigara_mon_12();
  meigara_mon_13();
  meigara_mon_14();
  //配合設定
  haigo_settei_mon_10;
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

//【ランプモニタ】
//(1段目)-1
function lamp_mon_10(){  
  //キャンバスを初期化
  var lamp10 = document.getElementById("lamp_10");
  // lamp_status_10=3;
  //コモンステータス　　0:通常状態 10:運転ﾗﾝﾌﾟﾃｽﾄ 11:警報ﾗﾝﾌﾟﾃｽﾄ
  //ランプステータス　0:停止 1:運転 2:異常発生中 3:異常確認
  switch(lamp_common_status){
    case 0://通常
      switch(lamp_status_10){
        case 0://停止
          t_lamp10=0;
          break;
        case 1://運転
          t_lamp10=1;
          break;
        case 2://異常発生中
          t_lamp10++;
          if(t_lamp10<10){t_lamp10=10;}
          if(t_lamp10==12){
            t_lamp10=10;
          }
          break;
        case 3://異常確認
          t_lamp10=10;
        break;
        default:
          break;
      }
      break;
    case 10:
      t_lamp10++;
      if(t_lamp10==2){
        t_lamp10=1;
      }
      break;
    case 11:
      t_lamp10++;
      if(t_lamp10<10){t_lamp10=10;}
      if(t_lamp10==12){
        t_lamp10=10;
      }
      break;
    default:
      break;
  }

  //設定時間後再実行
  setTimeout(lamp_mon_10,500);  
  
  switch(t_lamp10)
  {
    case 0://停止
    {
      lamp10.style.backgroundColor="rgb(0,0,0)";
      lamp10.style.color="rgb(255,255,255)";
      break;
    }
    case 1://運転
    {
      lamp10.style.backgroundColor="rgb(255,0,0)";
      lamp10.style.color="rgb(255,255,255)";
      break;
    }    
    case 10://異常1
    {
      lamp10.style.backgroundColor="rgb(255,255,0)";
      lamp10.style.color="rgb(255,0,0)";
      break;
    }    
    case 11://異常2
    {
      lamp10.style.backgroundColor="rgb(180,180,0)";
      lamp10.style.color="rgb(200,0,0)";
      break;
    }
    default:
      break;
  }
}//lamp_mon_10終了

//【ランプモニタ】
//(1段目)-2
function lamp_mon_11(){  
  //キャンバスを初期化
  var lamp11 = document.getElementById("lamp_11");
  // lamp_status_11=3;
  //コモンステータス　　0:通常状態 10:運転ﾗﾝﾌﾟﾃｽﾄ 11:警報ﾗﾝﾌﾟﾃｽﾄ
  //ランプステータス　0:停止 1:運転 2:異常発生中 3:異常確認
  switch(lamp_common_status){
    case 0://通常
      switch(lamp_status_11){
        case 0://停止
          t_lamp11=0;
          break;
        case 1://運転
          t_lamp11=1;
          break;
        case 2://異常発生中
          t_lamp11++;
          if(t_lamp11<10){t_lamp11=10;}
          if(t_lamp11==12){
            t_lamp11=10;
          }
          break;
        case 3://異常確認
          t_lamp11=10;
        break;
        default:
          break;
      }
      break;
    case 10:
      t_lamp11++;
      if(t_lamp11==2){
        t_lamp11=1;
      }
      break;
    case 11:
      t_lamp11++;
      if(t_lamp11<10){t_lamp11=10;}
      if(t_lamp11==12){
        t_lamp11=10;
      }
      break;
    default:
      break;
  }

  //設定時間後再実行
  setTimeout(lamp_mon_11,500);  
  
  switch(t_lamp11)
  {
    case 0://停止
    {
      lamp11.style.backgroundColor="rgb(0,0,0)";
      lamp11.style.color="rgb(255,255,255)";
      break;
    }
    case 1://運転
    {
      lamp11.style.backgroundColor="rgb(255,0,0)";
      lamp11.style.color="rgb(255,255,255)";
      break;
    }    
    case 10://異常1
    {
      lamp11.style.backgroundColor="rgb(255,255,0)";
      lamp11.style.color="rgb(255,0,0)";
      break;
    }    
    case 11://異常2
    {
      lamp11.style.backgroundColor="rgb(180,180,0)";
      lamp11.style.color="rgb(200,0,0)";
      break;
    }
    default:
      break;
  }
}//lamp_mon_11終了

//【ランプモニタ】
//(1段目)-3
function lamp_mon_12(){  
  //キャンバスを初期化
  var lamp12 = document.getElementById("lamp_12");
  // lamp_status_12=3;
  //コモンステータス　　0:通常状態 10:運転ﾗﾝﾌﾟﾃｽﾄ 11:警報ﾗﾝﾌﾟﾃｽﾄ
  //ランプステータス　0:停止 1:運転 2:異常発生中 3:異常確認
  switch(lamp_common_status){
    case 0://通常
      switch(lamp_status_12){
        case 0://停止
          t_lamp12=0;
          break;
        case 1://運転
          t_lamp12=1;
          break;
        case 2://異常発生中
          t_lamp12++;
          if(t_lamp12<10){t_lamp12=10;}
          if(t_lamp12==12){
            t_lamp12=10;
          }
          break;
        case 3://異常確認
          t_lamp12=10;
        break;
        default:
          break;
      }
      break;
    case 10:
      t_lamp12++;
      if(t_lamp12==2){
        t_lamp12=1;
      }
      break;
    case 11:
      t_lamp12++;
      if(t_lamp12<10){t_lamp12=10;}
      if(t_lamp12==12){
        t_lamp12=10;
      }
      break;
    default:
      break;
  }

  //設定時間後再実行
  setTimeout(lamp_mon_12,500);  
  
  switch(t_lamp12)
  {
    case 0://停止
    {
      lamp12.style.backgroundColor="rgb(0,0,0)";
      lamp12.style.color="rgb(255,255,255)";
      break;
    }
    case 1://運転
    {
      lamp12.style.backgroundColor="rgb(255,0,0)";
      lamp12.style.color="rgb(255,255,255)";
      break;
    }    
    case 10://異常1
    {
      lamp12.style.backgroundColor="rgb(255,255,0)";
      lamp12.style.color="rgb(255,0,0)";
      break;
    }    
    case 11://異常2
    {
      lamp12.style.backgroundColor="rgb(180,180,0)";
      lamp12.style.color="rgb(200,0,0)";
      break;
    }
    default:
      break;
  }
}//lamp_mon_12終了

//【ランプモニタ】
//(1段目)-4
function lamp_mon_13(){  
  //キャンバスを初期化
  var lamp13 = document.getElementById("lamp_13");
  // lamp_status_13=3;
  //コモンステータス　　0:通常状態 10:運転ﾗﾝﾌﾟﾃｽﾄ 11:警報ﾗﾝﾌﾟﾃｽﾄ
  //ランプステータス　0:停止 1:運転 2:異常発生中 3:異常確認
  switch(lamp_common_status){
    case 0://通常
      switch(lamp_status_13){
        case 0://停止
          t_lamp13=0;
          break;
        case 1://運転
          t_lamp13=1;
          break;
        case 2://異常発生中
          t_lamp13++;
          if(t_lamp13<10){t_lamp13=10;}
          if(t_lamp13==12){
            t_lamp13=10;
          }
          break;
        case 3://異常確認
          t_lamp13=10;
        break;
        default:
          break;
      }
      break;
    case 10:
      t_lamp13++;
      if(t_lamp13==2){
        t_lamp13=1;
      }
      break;
    case 11:
      t_lamp13++;
      if(t_lamp13<10){t_lamp13=10;}
      if(t_lamp13==12){
        t_lamp13=10;
      }
      break;
    default:
      break;
  }

  //設定時間後再実行
  setTimeout(lamp_mon_13,500);  
  
  switch(t_lamp13)
  {
    case 0://停止
    {
      lamp13.style.backgroundColor="rgb(0,0,0)";
      lamp13.style.color="rgb(255,255,255)";
      break;
    }
    case 1://運転
    {
      lamp13.style.backgroundColor="rgb(255,0,0)";
      lamp13.style.color="rgb(255,255,255)";
      break;
    }    
    case 10://異常1
    {
      lamp13.style.backgroundColor="rgb(255,255,0)";
      lamp13.style.color="rgb(255,0,0)";
      break;
    }    
    case 11://異常2
    {
      lamp13.style.backgroundColor="rgb(180,180,0)";
      lamp13.style.color="rgb(200,0,0)";
      break;
    }
    default:
      break;
  }
}//lamp_mon_13終了

//【ランプモニタ】
//(1段目)-5
function lamp_mon_14(){  
  //キャンバスを初期化
  var lamp14 = document.getElementById("lamp_14");
  // lamp_status_14=3;
  //コモンステータス　　0:通常状態 10:運転ﾗﾝﾌﾟﾃｽﾄ 11:警報ﾗﾝﾌﾟﾃｽﾄ
  //ランプステータス　0:停止 1:運転 2:異常発生中 3:異常確認
  switch(lamp_common_status){
    case 0://通常
      switch(lamp_status_14){
        case 0://停止
          t_lamp14=0;
          break;
        case 1://運転
          t_lamp14=1;
          break;
        case 2://異常発生中
          t_lamp14++;
          if(t_lamp14<10){t_lamp14=10;}
          if(t_lamp14==12){
            t_lamp14=10;
          }
          break;
        case 3://異常確認
          t_lamp14=10;
        break;
        default:
          break;
      }
      break;
    case 10:
      t_lamp14++;
      if(t_lamp14==2){
        t_lamp14=1;
      }
      break;
    case 11:
      t_lamp14++;
      if(t_lamp14<10){t_lamp14=10;}
      if(t_lamp14==12){
        t_lamp14=10;
      }
      break;
    default:
      break;
  }

  //設定時間後再実行
  setTimeout(lamp_mon_14,500);  
  
  switch(t_lamp14)
  {
    case 0://停止
    {
      lamp14.style.backgroundColor="rgb(0,0,0)";
      lamp14.style.color="rgb(255,255,255)";
      break;
    }
    case 1://運転
    {
      lamp14.style.backgroundColor="rgb(255,0,0)";
      lamp14.style.color="rgb(255,255,255)";
      break;
    }    
    case 10://異常1
    {
      lamp14.style.backgroundColor="rgb(255,255,0)";
      lamp14.style.color="rgb(255,0,0)";
      break;
    }    
    case 11://異常2
    {
      lamp14.style.backgroundColor="rgb(180,180,0)";
      lamp14.style.color="rgb(200,0,0)";
      break;
    }
    default:
      break;
  }
}//lamp_mon_14終了

//【ランプモニタ】
//(1段目)-6
function lamp_mon_15(){  
  //キャンバスを初期化
  var lamp15 = document.getElementById("lamp_15");
  // lamp_status_15=3;
  //コモンステータス　　0:通常状態 10:運転ﾗﾝﾌﾟﾃｽﾄ 11:警報ﾗﾝﾌﾟﾃｽﾄ
  //ランプステータス　0:停止 1:運転 2:異常発生中 3:異常確認
  switch(lamp_common_status){
    case 0://通常
      switch(lamp_status_15){
        case 0://停止
          t_lamp15=0;
          break;
        case 1://運転
          t_lamp15=1;
          break;
        case 2://異常発生中
          t_lamp15++;
          if(t_lamp15<10){t_lamp15=10;}
          if(t_lamp15==12){
            t_lamp15=10;
          }
          break;
        case 3://異常確認
          t_lamp15=10;
        break;
        default:
          break;
      }
      break;
    case 10:
      t_lamp15++;
      if(t_lamp15==2){
        t_lamp15=1;
      }
      break;
    case 11:
      t_lamp15++;
      if(t_lamp15<10){t_lamp15=10;}
      if(t_lamp15==12){
        t_lamp15=10;
      }
      break;
    default:
      break;
  }

  //設定時間後再実行
  setTimeout(lamp_mon_15,500);  
  
  switch(t_lamp15)
  {
    case 0://停止
    {
      lamp15.style.backgroundColor="rgb(0,0,0)";
      lamp15.style.color="rgb(255,255,255)";
      break;
    }
    case 1://運転
    {
      lamp15.style.backgroundColor="rgb(255,0,0)";
      lamp15.style.color="rgb(255,255,255)";
      break;
    }    
    case 10://異常1
    {
      lamp15.style.backgroundColor="rgb(255,255,0)";
      lamp15.style.color="rgb(255,0,0)";
      break;
    }    
    case 11://異常2
    {
      lamp15.style.backgroundColor="rgb(180,180,0)";
      lamp15.style.color="rgb(200,0,0)";
      break;
    }
    default:
      break;
  }
}//lamp_mon_15終了

//【ランプモニタ】
//(2段目)-1
function lamp_mon_20(){  
  //キャンバスを初期化
  var lamp20 = document.getElementById("lamp_20");
  // lamp_status_10=3;
  //コモンステータス　　0:通常状態 10:運転ﾗﾝﾌﾟﾃｽﾄ 11:警報ﾗﾝﾌﾟﾃｽﾄ
  //ランプステータス　0:停止 1:運転 2:異常発生中 3:異常確認
  switch(lamp_common_status){
    case 0://通常
      switch(lamp_status_20){
        case 0://停止
          t_lamp20=0;
          break;
        case 1://運転
          t_lamp20=1;
          break;
        case 2://異常発生中
          t_lamp20++;
          if(t_lamp20<10){t_lamp20=10;}
          if(t_lamp20==12){
            t_lamp20=10;
          }
          break;
        case 3://異常確認
          t_lamp20=10;
        break;
        default:
          break;
      }
      break;
    case 10:
      t_lamp20++;
      if(t_lamp20==2){
        t_lamp20=1;
      }
      break;
    case 11:
      t_lamp20++;
      if(t_lamp20<10){t_lamp20=10;}
      if(t_lamp20==12){
        t_lamp20=10;
      }
      break;
    default:
      break;
  }

  //設定時間後再実行
  setTimeout(lamp_mon_20,500);  
  
  switch(t_lamp20)
  {
    case 0://停止
    {
      lamp20.style.backgroundColor="rgb(0,0,0)";
      lamp20.style.color="rgb(255,255,255)";
      break;
    }
    case 1://運転
    {
      lamp20.style.backgroundColor="rgb(255,0,0)";
      lamp20.style.color="rgb(255,255,255)";
      break;
    }    
    case 10://異常1
    {
      lamp20.style.backgroundColor="rgb(255,255,0)";
      lamp20.style.color="rgb(255,0,0)";
      break;
    }    
    case 11://異常2
    {
      lamp20.style.backgroundColor="rgb(180,180,0)";
      lamp20.style.color="rgb(200,0,0)";
      break;
    }
    default:
      break;
  }
}//lamp_mon_20終了

//【ランプモニタ】
//(2段目)-2
function lamp_mon_21(){  
  //キャンバスを初期化
  var lamp21 = document.getElementById("lamp_21");
  // lamp_status_21=3;
  //コモンステータス　　0:通常状態 10:運転ﾗﾝﾌﾟﾃｽﾄ 11:警報ﾗﾝﾌﾟﾃｽﾄ
  //ランプステータス　0:停止 1:運転 2:異常発生中 3:異常確認
  switch(lamp_common_status){
    case 0://通常
      switch(lamp_status_21){
        case 0://停止
          t_lamp21=0;
          break;
        case 1://運転
          t_lamp21=1;
          break;
        case 2://異常発生中
          t_lamp21++;
          if(t_lamp21<10){t_lamp21=10;}
          if(t_lamp21==12){
            t_lamp21=10;
          }
          break;
        case 3://異常確認
          t_lamp21=10;
        break;
        default:
          break;
      }
      break;
    case 10:
      t_lamp21++;
      if(t_lamp21==2){
        t_lamp21=1;
      }
      break;
    case 11:
      t_lamp21++;
      if(t_lamp21<10){t_lamp21=10;}
      if(t_lamp21==12){
        t_lamp21=10;
      }
      break;
    default:
      break;
  }

  //設定時間後再実行
  setTimeout(lamp_mon_21,500);  
  
  switch(t_lamp21)
  {
    case 0://停止
    {
      lamp21.style.backgroundColor="rgb(0,0,0)";
      lamp21.style.color="rgb(255,255,255)";
      break;
    }
    case 1://運転
    {
      lamp21.style.backgroundColor="rgb(255,0,0)";
      lamp21.style.color="rgb(255,255,255)";
      break;
    }    
    case 10://異常1
    {
      lamp21.style.backgroundColor="rgb(255,255,0)";
      lamp21.style.color="rgb(255,0,0)";
      break;
    }    
    case 11://異常2
    {
      lamp21.style.backgroundColor="rgb(180,180,0)";
      lamp21.style.color="rgb(200,0,0)";
      break;
    }
    default:
      break;
  }
}//lamp_mon_21終了

//【ランプモニタ】
//(2段目)-3
function lamp_mon_22(){  
  //キャンバスを初期化
  var lamp22 = document.getElementById("lamp_22");
  // lamp_status_22=3;
  //コモンステータス　　0:通常状態 10:運転ﾗﾝﾌﾟﾃｽﾄ 11:警報ﾗﾝﾌﾟﾃｽﾄ
  //ランプステータス　0:停止 1:運転 2:異常発生中 3:異常確認
  switch(lamp_common_status){
    case 0://通常
      switch(lamp_status_22){
        case 0://停止
          t_lamp22=0;
          break;
        case 1://運転
          t_lamp22=1;
          break;
        case 2://異常発生中
          t_lamp22++;
          if(t_lamp22<10){t_lamp22=10;}
          if(t_lamp22==12){
            t_lamp22=10;
          }
          break;
        case 3://異常確認
          t_lamp22=10;
        break;
        default:
          break;
      }
      break;
    case 10:
      t_lamp22++;
      if(t_lamp22==2){
        t_lamp22=1;
      }
      break;
    case 11:
      t_lamp22++;
      if(t_lamp22<10){t_lamp22=10;}
      if(t_lamp22==12){
        t_lamp22=10;
      }
      break;
    default:
      break;
  }

  //設定時間後再実行
  setTimeout(lamp_mon_22,500);  
  
  switch(t_lamp22)
  {
    case 0://停止
    {
      lamp22.style.backgroundColor="rgb(0,0,0)";
      lamp22.style.color="rgb(255,255,255)";
      break;
    }
    case 1://運転
    {
      lamp22.style.backgroundColor="rgb(255,0,0)";
      lamp22.style.color="rgb(255,255,255)";
      break;
    }    
    case 10://異常1
    {
      lamp22.style.backgroundColor="rgb(255,255,0)";
      lamp22.style.color="rgb(255,0,0)";
      break;
    }    
    case 11://異常2
    {
      lamp22.style.backgroundColor="rgb(180,180,0)";
      lamp22.style.color="rgb(200,0,0)";
      break;
    }
    default:
      break;
  }
}//lamp_mon_22終了

//【ランプモニタ】
//(2段目)-4
function lamp_mon_23(){  
  //キャンバスを初期化
  var lamp23 = document.getElementById("lamp_23");
  // lamp_status_23=3;
  //コモンステータス　　0:通常状態 10:運転ﾗﾝﾌﾟﾃｽﾄ 11:警報ﾗﾝﾌﾟﾃｽﾄ
  //ランプステータス　0:停止 1:運転 2:異常発生中 3:異常確認
  switch(lamp_common_status){
    case 0://通常
      switch(lamp_status_23){
        case 0://停止
          t_lamp23=0;
          break;
        case 1://運転
          t_lamp23=1;
          break;
        case 2://異常発生中
          t_lamp23++;
          if(t_lamp23<10){t_lamp23=10;}
          if(t_lamp23==12){
            t_lamp23=10;
          }
          break;
        case 3://異常確認
          t_lamp23=10;
        break;
        default:
          break;
      }
      break;
    case 10:
      t_lamp23++;
      if(t_lamp23==2){
        t_lamp23=1;
      }
      break;
    case 11:
      t_lamp23++;
      if(t_lamp23<10){t_lamp23=10;}
      if(t_lamp23==12){
        t_lamp23=10;
      }
      break;
    default:
      break;
  }

  //設定時間後再実行
  setTimeout(lamp_mon_23,500);  
  
  switch(t_lamp23)
  {
    case 0://停止
    {
      lamp23.style.backgroundColor="rgb(0,0,0)";
      lamp23.style.color="rgb(255,255,255)";
      break;
    }
    case 1://運転
    {
      lamp23.style.backgroundColor="rgb(255,0,0)";
      lamp23.style.color="rgb(255,255,255)";
      break;
    }    
    case 10://異常1
    {
      lamp23.style.backgroundColor="rgb(255,255,0)";
      lamp23.style.color="rgb(255,0,0)";
      break;
    }    
    case 11://異常2
    {
      lamp23.style.backgroundColor="rgb(180,180,0)";
      lamp23.style.color="rgb(200,0,0)";
      break;
    }
    default:
      break;
  }
}//lamp_mon_23終了

//【ランプモニタ】
//(2段目)-5
function lamp_mon_24(){  
  //キャンバスを初期化
  var lamp24 = document.getElementById("lamp_24");
  // lamp_status_24=3;
  //コモンステータス　　0:通常状態 10:運転ﾗﾝﾌﾟﾃｽﾄ 11:警報ﾗﾝﾌﾟﾃｽﾄ
  //ランプステータス　0:停止 1:運転 2:異常発生中 3:異常確認
  switch(lamp_common_status){
    case 0://通常
      switch(lamp_status_24){
        case 0://停止
          t_lamp24=0;
          break;
        case 1://運転
          t_lamp24=1;
          break;
        case 2://異常発生中
          t_lamp24++;
          if(t_lamp24<10){t_lamp24=10;}
          if(t_lamp24==12){
            t_lamp24=10;
          }
          break;
        case 3://異常確認
          t_lamp24=10;
        break;
        default:
          break;
      }
      break;
    case 10:
      t_lamp24++;
      if(t_lamp24==2){
        t_lamp24=1;
      }
      break;
    case 11:
      t_lamp24++;
      if(t_lamp24<10){t_lamp24=10;}
      if(t_lamp24==12){
        t_lamp24=10;
      }
      break;
    default:
      break;
  }

  //設定時間後再実行
  setTimeout(lamp_mon_24,500);  
  
  switch(t_lamp24)
  {
    case 0://停止
    {
      lamp24.style.backgroundColor="rgb(0,0,0)";
      lamp24.style.color="rgb(255,255,255)";
      break;
    }
    case 1://運転
    {
      lamp24.style.backgroundColor="rgb(255,0,0)";
      lamp24.style.color="rgb(255,255,255)";
      break;
    }    
    case 10://異常1
    {
      lamp24.style.backgroundColor="rgb(255,255,0)";
      lamp24.style.color="rgb(255,0,0)";
      break;
    }    
    case 11://異常2
    {
      lamp24.style.backgroundColor="rgb(180,180,0)";
      lamp24.style.color="rgb(200,0,0)";
      break;
    }
    default:
      break;
  }
}//lamp_mon_24終了

//【ランプモニタ】
//(2段目)-6
function lamp_mon_25(){  
  //キャンバスを初期化
  var lamp25 = document.getElementById("lamp_25");
  // lamp_status_25=3;
  //コモンステータス　　0:通常状態 10:運転ﾗﾝﾌﾟﾃｽﾄ 11:警報ﾗﾝﾌﾟﾃｽﾄ
  //ランプステータス　0:停止 1:運転 2:異常発生中 3:異常確認
  switch(lamp_common_status){
    case 0://通常
      switch(lamp_status_25){
        case 0://停止
          t_lamp25=0;
          break;
        case 1://運転
          t_lamp25=1;
          break;
        case 2://異常発生中
          t_lamp25++;
          if(t_lamp25<10){t_lamp25=10;}
          if(t_lamp25==12){
            t_lamp25=10;
          }
          break;
        case 3://異常確認
          t_lamp25=10;
        break;
        default:
          break;
      }
      break;
    case 10:
      t_lamp25++;
      if(t_lamp25==2){
        t_lamp25=1;
      }
      break;
    case 11:
      t_lamp25++;
      if(t_lamp25<10){t_lamp25=10;}
      if(t_lamp25==12){
        t_lamp25=10;
      }
      break;
    default:
      break;
  }

  //設定時間後再実行
  setTimeout(lamp_mon_25,500);  
  
  switch(t_lamp25)
  {
    case 0://停止
    {
      lamp25.style.backgroundColor="rgb(0,0,0)";
      lamp25.style.color="rgb(255,255,255)";
      break;
    }
    case 1://運転
    {
      lamp25.style.backgroundColor="rgb(255,0,0)";
      lamp25.style.color="rgb(255,255,255)";
      break;
    }    
    case 10://異常1
    {
      lamp25.style.backgroundColor="rgb(255,255,0)";
      lamp25.style.color="rgb(255,0,0)";
      break;
    }    
    case 11://異常2
    {
      lamp25.style.backgroundColor="rgb(180,180,0)";
      lamp25.style.color="rgb(200,0,0)";
      break;
    }
    default:
      break;
  }
}//lamp_mon_25終了

//【ランプモニタ】
//(3段目)-1
function lamp_mon_30(){  
  //キャンバスを初期化
  var lamp30 = document.getElementById("lamp_30");
  // lamp_status_30=3;
  //コモンステータス　　0:通常状態 10:運転ﾗﾝﾌﾟﾃｽﾄ 11:警報ﾗﾝﾌﾟﾃｽﾄ
  //ランプステータス　0:停止 1:運転 2:異常発生中 3:異常確認
  switch(lamp_common_status){
    case 0://通常
      switch(lamp_status_30){
        case 0://停止
          t_lamp30=0;
          break;
        case 1://運転
          t_lamp30=1;
          break;
        case 2://異常発生中
          t_lamp30++;
          if(t_lamp30<10){t_lamp30=10;}
          if(t_lamp30==12){
            t_lamp30=10;
          }
          break;
        case 3://異常確認
          t_lamp30=10;
        break;
        default:
          break;
      }
      break;
    case 10:
      t_lamp30++;
      if(t_lamp30==2){
        t_lamp30=1;
      }
      break;
    case 11:
      t_lamp30++;
      if(t_lamp30<10){t_lamp30=10;}
      if(t_lamp30==12){
        t_lamp30=10;
      }
      break;
    default:
      break;
  }

  //設定時間後再実行
  setTimeout(lamp_mon_30,500);  
  
  switch(t_lamp30)
  {
    case 0://停止
    {
      lamp30.style.backgroundColor="rgb(0,0,0)";
      lamp30.style.color="rgb(255,255,255)";
      break;
    }
    case 1://運転
    {
      lamp30.style.backgroundColor="rgb(255,0,0)";
      lamp30.style.color="rgb(255,255,255)";
      break;
    }    
    case 10://異常1
    {
      lamp30.style.backgroundColor="rgb(255,255,0)";
      lamp30.style.color="rgb(255,0,0)";
      break;
    }    
    case 11://異常2
    {
      lamp30.style.backgroundColor="rgb(180,180,0)";
      lamp30.style.color="rgb(200,0,0)";
      break;
    }
    default:
      break;
  }
}//lamp_mon_30終了

//【ランプモニタ】
//(3段目)-2
function lamp_mon_31(){  
  //キャンバスを初期化
  var lamp31 = document.getElementById("lamp_31");
  // lamp_status_31=3;
  //コモンステータス　　0:通常状態 10:運転ﾗﾝﾌﾟﾃｽﾄ 11:警報ﾗﾝﾌﾟﾃｽﾄ
  //ランプステータス　0:停止 1:運転 2:異常発生中 3:異常確認
  switch(lamp_common_status){
    case 0://通常
      switch(lamp_status_31){
        case 0://停止
          t_lamp31=0;
          break;
        case 1://運転
          t_lamp31=1;
          break;
        case 2://異常発生中
          t_lamp31++;
          if(t_lamp31<10){t_lamp31=10;}
          if(t_lamp31==12){
            t_lamp31=10;
          }
          break;
        case 3://異常確認
          t_lamp31=10;
        break;
        default:
          break;
      }
      break;
    case 10:
      t_lamp31++;
      if(t_lamp31==2){
        t_lamp31=1;
      }
      break;
    case 11:
      t_lamp31++;
      if(t_lamp31<10){t_lamp31=10;}
      if(t_lamp31==12){
        t_lamp31=10;
      }
      break;
    default:
      break;
  }

  //設定時間後再実行
  setTimeout(lamp_mon_31,500);  
  
  switch(t_lamp31)
  {
    case 0://停止
    {
      lamp31.style.backgroundColor="rgb(0,0,0)";
      lamp31.style.color="rgb(255,255,255)";
      break;
    }
    case 1://運転
    {
      lamp31.style.backgroundColor="rgb(255,0,0)";
      lamp31.style.color="rgb(255,255,255)";
      break;
    }    
    case 10://異常1
    {
      lamp31.style.backgroundColor="rgb(255,255,0)";
      lamp31.style.color="rgb(255,0,0)";
      break;
    }    
    case 11://異常2
    {
      lamp31.style.backgroundColor="rgb(180,180,0)";
      lamp31.style.color="rgb(200,0,0)";
      break;
    }
    default:
      break;
  }
}//lamp_mon_31終了

//【ランプモニタ】
//(3段目)-3
function lamp_mon_32(){  
  //キャンバスを初期化
  var lamp32 = document.getElementById("lamp_32");
  // lamp_status_32=3;
  //コモンステータス　　0:通常状態 10:運転ﾗﾝﾌﾟﾃｽﾄ 11:警報ﾗﾝﾌﾟﾃｽﾄ
  //ランプステータス　0:停止 1:運転 2:異常発生中 3:異常確認
  switch(lamp_common_status){
    case 0://通常
      switch(lamp_status_32){
        case 0://停止
          t_lamp32=0;
          break;
        case 1://運転
          t_lamp32=1;
          break;
        case 2://異常発生中
          t_lamp32++;
          if(t_lamp32<10){t_lamp32=10;}
          if(t_lamp32==12){
            t_lamp32=10;
          }
          break;
        case 3://異常確認
          t_lamp32=10;
        break;
        default:
          break;
      }
      break;
    case 10:
      t_lamp32++;
      if(t_lamp32==2){
        t_lamp32=1;
      }
      break;
    case 11:
      t_lamp32++;
      if(t_lamp32<10){t_lamp32=10;}
      if(t_lamp32==12){
        t_lamp32=10;
      }
      break;
    default:
      break;
  }

  //設定時間後再実行
  setTimeout(lamp_mon_32,500);  
  
  switch(t_lamp32)
  {
    case 0://停止
    {
      lamp32.style.backgroundColor="rgb(0,0,0)";
      lamp32.style.color="rgb(255,255,255)";
      break;
    }
    case 1://運転
    {
      lamp32.style.backgroundColor="rgb(255,0,0)";
      lamp32.style.color="rgb(255,255,255)";
      break;
    }    
    case 10://異常1
    {
      lamp32.style.backgroundColor="rgb(255,255,0)";
      lamp32.style.color="rgb(255,0,0)";
      break;
    }    
    case 11://異常2
    {
      lamp32.style.backgroundColor="rgb(180,180,0)";
      lamp32.style.color="rgb(200,0,0)";
      break;
    }
    default:
      break;
  }
}//lamp_mon_32終了

//【ランプモニタ】
//(3段目)-4
function lamp_mon_33(){  
  //キャンバスを初期化
  var lamp33 = document.getElementById("lamp_33");
  // lamp_status_33=3;
  //コモンステータス　　0:通常状態 10:運転ﾗﾝﾌﾟﾃｽﾄ 11:警報ﾗﾝﾌﾟﾃｽﾄ
  //ランプステータス　0:停止 1:運転 2:異常発生中 3:異常確認
  switch(lamp_common_status){
    case 0://通常
      switch(lamp_status_33){
        case 0://停止
          t_lamp33=0;
          break;
        case 1://運転
          t_lamp33=1;
          break;
        case 2://異常発生中
          t_lamp33++;
          if(t_lamp33<10){t_lamp33=10;}
          if(t_lamp33==12){
            t_lamp33=10;
          }
          break;
        case 3://異常確認
          t_lamp33=10;
        break;
        default:
          break;
      }
      break;
    case 10:
      t_lamp33++;
      if(t_lamp33==2){
        t_lamp33=1;
      }
      break;
    case 11:
      t_lamp33++;
      if(t_lamp33<10){t_lamp33=10;}
      if(t_lamp33==12){
        t_lamp33=10;
      }
      break;
    default:
      break;
  }

  //設定時間後再実行
  setTimeout(lamp_mon_33,500);  
  
  switch(t_lamp33)
  {
    case 0://停止
    {
      lamp33.style.backgroundColor="rgb(0,0,0)";
      lamp33.style.color="rgb(255,255,255)";
      break;
    }
    case 1://運転
    {
      lamp33.style.backgroundColor="rgb(255,0,0)";
      lamp33.style.color="rgb(255,255,255)";
      break;
    }    
    case 10://異常1
    {
      lamp33.style.backgroundColor="rgb(255,255,0)";
      lamp33.style.color="rgb(255,0,0)";
      break;
    }    
    case 11://異常2
    {
      lamp33.style.backgroundColor="rgb(180,180,0)";
      lamp33.style.color="rgb(200,0,0)";
      break;
    }
    default:
      break;
  }
}//lamp_mon_33終了

//【ランプモニタ】
//(3段目)-5
function lamp_mon_34(){  
  //キャンバスを初期化
  var lamp34 = document.getElementById("lamp_34");
  // lamp_status_34=3;
  //コモンステータス　　0:通常状態 10:運転ﾗﾝﾌﾟﾃｽﾄ 11:警報ﾗﾝﾌﾟﾃｽﾄ
  //ランプステータス　0:停止 1:運転 2:異常発生中 3:異常確認
  switch(lamp_common_status){
    case 0://通常
      switch(lamp_status_34){
        case 0://停止
          t_lamp34=0;
          break;
        case 1://運転
          t_lamp34=1;
          break;
        case 2://異常発生中
          t_lamp34++;
          if(t_lamp34<10){t_lamp34=10;}
          if(t_lamp34==12){
            t_lamp34=10;
          }
          break;
        case 3://異常確認
          t_lamp34=10;
        break;
        default:
          break;
      }
      break;
    case 10:
      t_lamp34++;
      if(t_lamp34==2){
        t_lamp34=1;
      }
      break;
    case 11:
      t_lamp34++;
      if(t_lamp34<10){t_lamp34=10;}
      if(t_lamp34==12){
        t_lamp34=10;
      }
      break;
    default:
      break;
  }

  //設定時間後再実行
  setTimeout(lamp_mon_34,500);  
  
  switch(t_lamp34)
  {
    case 0://停止
    {
      lamp34.style.backgroundColor="rgb(0,0,0)";
      lamp34.style.color="rgb(255,255,255)";
      break;
    }
    case 1://運転
    {
      lamp34.style.backgroundColor="rgb(255,0,0)";
      lamp34.style.color="rgb(255,255,255)";
      break;
    }    
    case 10://異常1
    {
      lamp34.style.backgroundColor="rgb(255,255,0)";
      lamp34.style.color="rgb(255,0,0)";
      break;
    }    
    case 11://異常2
    {
      lamp34.style.backgroundColor="rgb(180,180,0)";
      lamp34.style.color="rgb(200,0,0)";
      break;
    }
    default:
      break;
  }
}//lamp_mon_34終了

//【ランプモニタ】
//(3段目)-6
function lamp_mon_35(){  
  //キャンバスを初期化
  var lamp35 = document.getElementById("lamp_35");
  // lamp_status_35=3;
  //コモンステータス　　0:通常状態 10:運転ﾗﾝﾌﾟﾃｽﾄ 11:警報ﾗﾝﾌﾟﾃｽﾄ
  //ランプステータス　0:停止 1:運転 2:異常発生中 3:異常確認
  switch(lamp_common_status){
    case 0://通常
      switch(lamp_status_35){
        case 0://停止
          t_lamp35=0;
          break;
        case 1://運転
          t_lamp35=1;
          break;
        case 2://異常発生中
          t_lamp35++;
          if(t_lamp35<10){t_lamp35=10;}
          if(t_lamp35==12){
            t_lamp35=10;
          }
          break;
        case 3://異常確認
          t_lamp35=10;
        break;
        default:
          break;
      }
      break;
    case 10:
      t_lamp35++;
      if(t_lamp35==2){
        t_lamp35=1;
      }
      break;
    case 11:
      t_lamp35++;
      if(t_lamp35<10){t_lamp35=10;}
      if(t_lamp35==12){
        t_lamp35=10;
      }
      break;
    default:
      break;
  }

  //設定時間後再実行
  setTimeout(lamp_mon_35,500);  
  
  switch(t_lamp35)
  {
    case 0://停止
    {
      lamp35.style.backgroundColor="rgb(0,0,0)";
      lamp35.style.color="rgb(255,255,255)";
      break;
    }
    case 1://運転
    {
      lamp35.style.backgroundColor="rgb(255,0,0)";
      lamp35.style.color="rgb(255,255,255)";
      break;
    }    
    case 10://異常1
    {
      lamp35.style.backgroundColor="rgb(255,255,0)";
      lamp35.style.color="rgb(255,0,0)";
      break;
    }    
    case 11://異常2
    {
      lamp35.style.backgroundColor="rgb(180,180,0)";
      lamp35.style.color="rgb(200,0,0)";
      break;
    }
    default:
      break;
  }
}//lamp_mon_35終了

//【ランプモニタ】
//(4段目)-1
function lamp_mon_40(){  
  //キャンバスを初期化
  var lamp40 = document.getElementById("lamp_40");
  // lamp_status_40=3;
  //コモンステータス　　0:通常状態 10:運転ﾗﾝﾌﾟﾃｽﾄ 11:警報ﾗﾝﾌﾟﾃｽﾄ
  //ランプステータス　0:停止 1:運転 2:異常発生中 3:異常確認
  switch(lamp_common_status){
    case 0://通常
      switch(lamp_status_40){
        case 0://停止
          t_lamp40=0;
          break;
        case 1://運転
          t_lamp40=1;
          break;
        case 2://異常発生中
          t_lamp40++;
          if(t_lamp40<10){t_lamp40=10;}
          if(t_lamp40==12){
            t_lamp40=10;
          }
          break;
        case 3://異常確認
          t_lamp40=10;
        break;
        default:
          break;
      }
      break;
    case 10:
      t_lamp40++;
      if(t_lamp40==2){
        t_lamp40=1;
      }
      break;
    case 11:
      t_lamp40++;
      if(t_lamp40<10){t_lamp40=10;}
      if(t_lamp40==12){
        t_lamp40=10;
      }
      break;
    default:
      break;
  }

  //設定時間後再実行
  setTimeout(lamp_mon_40,500);  
  
  switch(t_lamp40)
  {
    case 0://停止
    {
      lamp40.style.backgroundColor="rgb(0,0,0)";
      lamp40.style.color="rgb(255,255,255)";
      break;
    }
    case 1://運転
    {
      lamp40.style.backgroundColor="rgb(255,0,0)";
      lamp40.style.color="rgb(255,255,255)";
      break;
    }    
    case 10://異常1
    {
      lamp40.style.backgroundColor="rgb(255,255,0)";
      lamp40.style.color="rgb(255,0,0)";
      break;
    }    
    case 11://異常2
    {
      lamp40.style.backgroundColor="rgb(180,180,0)";
      lamp40.style.color="rgb(200,0,0)";
      break;
    }
    default:
      break;
  }
}//lamp_mon_40終了

//【ランプモニタ】
//(4段目)-2
function lamp_mon_41(){  
  //キャンバスを初期化
  var lamp41 = document.getElementById("lamp_41");
  // lamp_status_41=3;
  //コモンステータス　　0:通常状態 10:運転ﾗﾝﾌﾟﾃｽﾄ 11:警報ﾗﾝﾌﾟﾃｽﾄ
  //ランプステータス　0:停止 1:運転 2:異常発生中 3:異常確認
  switch(lamp_common_status){
    case 0://通常
      switch(lamp_status_41){
        case 0://停止
          t_lamp41=0;
          break;
        case 1://運転
          t_lamp41=1;
          break;
        case 2://異常発生中
          t_lamp41++;
          if(t_lamp41<10){t_lamp41=10;}
          if(t_lamp41==12){
            t_lamp41=10;
          }
          break;
        case 3://異常確認
          t_lamp41=10;
        break;
        default:
          break;
      }
      break;
    case 10:
      t_lamp41++;
      if(t_lamp41==2){
        t_lamp41=1;
      }
      break;
    case 11:
      t_lamp41++;
      if(t_lamp41<10){t_lamp41=10;}
      if(t_lamp41==12){
        t_lamp41=10;
      }
      break;
    default:
      break;
  }

  //設定時間後再実行
  setTimeout(lamp_mon_41,500);  
  
  switch(t_lamp41)
  {
    case 0://停止
    {
      lamp41.style.backgroundColor="rgb(0,0,0)";
      lamp41.style.color="rgb(255,255,255)";
      break;
    }
    case 1://運転
    {
      lamp41.style.backgroundColor="rgb(255,0,0)";
      lamp41.style.color="rgb(255,255,255)";
      break;
    }    
    case 10://異常1
    {
      lamp41.style.backgroundColor="rgb(255,255,0)";
      lamp41.style.color="rgb(255,0,0)";
      break;
    }    
    case 11://異常2
    {
      lamp41.style.backgroundColor="rgb(180,180,0)";
      lamp41.style.color="rgb(200,0,0)";
      break;
    }
    default:
      break;
  }
}//lamp_mon_41終了

//【ランプモニタ】
//(4段目)-3
function lamp_mon_42(){  
  //キャンバスを初期化
  var lamp42 = document.getElementById("lamp_42");
  // lamp_status_42=3;
  //コモンステータス　　0:通常状態 10:運転ﾗﾝﾌﾟﾃｽﾄ 11:警報ﾗﾝﾌﾟﾃｽﾄ
  //ランプステータス　0:停止 1:運転 2:異常発生中 3:異常確認
  switch(lamp_common_status){
    case 0://通常
      switch(lamp_status_42){
        case 0://停止
          t_lamp42=0;
          break;
        case 1://運転
          t_lamp42=1;
          break;
        case 2://異常発生中
          t_lamp42++;
          if(t_lamp42<10){t_lamp42=10;}
          if(t_lamp42==12){
            t_lamp42=10;
          }
          break;
        case 3://異常確認
          t_lamp42=10;
        break;
        default:
          break;
      }
      break;
    case 10:
      t_lamp42++;
      if(t_lamp42==2){
        t_lamp42=1;
      }
      break;
    case 11:
      t_lamp42++;
      if(t_lamp42<10){t_lamp42=10;}
      if(t_lamp42==12){
        t_lamp42=10;
      }
      break;
    default:
      break;
  }

  //設定時間後再実行
  setTimeout(lamp_mon_42,500);  
  
  switch(t_lamp42)
  {
    case 0://停止
    {
      lamp42.style.backgroundColor="rgb(0,0,0)";
      lamp42.style.color="rgb(255,255,255)";
      break;
    }
    case 1://運転
    {
      lamp42.style.backgroundColor="rgb(255,0,0)";
      lamp42.style.color="rgb(255,255,255)";
      break;
    }    
    case 10://異常1
    {
      lamp42.style.backgroundColor="rgb(255,255,0)";
      lamp42.style.color="rgb(255,0,0)";
      break;
    }    
    case 11://異常2
    {
      lamp42.style.backgroundColor="rgb(180,180,0)";
      lamp42.style.color="rgb(200,0,0)";
      break;
    }
    default:
      break;
  }
}//lamp_mon_42終了

//【ランプモニタ】
//(4段目)-4
function lamp_mon_43(){  
  //キャンバスを初期化
  var lamp43 = document.getElementById("lamp_43");
  // lamp_status_43=3;
  //コモンステータス　　0:通常状態 10:運転ﾗﾝﾌﾟﾃｽﾄ 11:警報ﾗﾝﾌﾟﾃｽﾄ
  //ランプステータス　0:停止 1:運転 2:異常発生中 3:異常確認
  switch(lamp_common_status){
    case 0://通常
      switch(lamp_status_43){
        case 0://停止
          t_lamp43=0;
          break;
        case 1://運転
          t_lamp43=1;
          break;
        case 2://異常発生中
          t_lamp43++;
          if(t_lamp43<10){t_lamp43=10;}
          if(t_lamp43==12){
            t_lamp43=10;
          }
          break;
        case 3://異常確認
          t_lamp43=10;
        break;
        default:
          break;
      }
      break;
    case 10:
      t_lamp43++;
      if(t_lamp43==2){
        t_lamp43=1;
      }
      break;
    case 11:
      t_lamp43++;
      if(t_lamp43<10){t_lamp43=10;}
      if(t_lamp43==12){
        t_lamp43=10;
      }
      break;
    default:
      break;
  }

  //設定時間後再実行
  setTimeout(lamp_mon_43,500);  
  
  switch(t_lamp43)
  {
    case 0://停止
    {
      lamp43.style.backgroundColor="rgb(0,0,0)";
      lamp43.style.color="rgb(255,255,255)";
      break;
    }
    case 1://運転
    {
      lamp43.style.backgroundColor="rgb(255,0,0)";
      lamp43.style.color="rgb(255,255,255)";
      break;
    }    
    case 10://異常1
    {
      lamp43.style.backgroundColor="rgb(255,255,0)";
      lamp43.style.color="rgb(255,0,0)";
      break;
    }    
    case 11://異常2
    {
      lamp43.style.backgroundColor="rgb(180,180,0)";
      lamp43.style.color="rgb(200,0,0)";
      break;
    }
    default:
      break;
  }
}//lamp_mon_43終了

//【ランプモニタ】
//(4段目)-5
function lamp_mon_44(){  
  //キャンバスを初期化
  var lamp44 = document.getElementById("lamp_44");
  // lamp_status_44=3;
  //コモンステータス　　0:通常状態 10:運転ﾗﾝﾌﾟﾃｽﾄ 11:警報ﾗﾝﾌﾟﾃｽﾄ
  //ランプステータス　0:停止 1:運転 2:異常発生中 3:異常確認
  switch(lamp_common_status){
    case 0://通常
      switch(lamp_status_44){
        case 0://停止
          t_lamp44=0;
          break;
        case 1://運転
          t_lamp44=1;
          break;
        case 2://異常発生中
          t_lamp44++;
          if(t_lamp44<10){t_lamp44=10;}
          if(t_lamp44==12){
            t_lamp44=10;
          }
          break;
        case 3://異常確認
          t_lamp44=10;
        break;
        default:
          break;
      }
      break;
    case 10:
      t_lamp44++;
      if(t_lamp44==2){
        t_lamp44=1;
      }
      break;
    case 11:
      t_lamp44++;
      if(t_lamp44<10){t_lamp44=10;}
      if(t_lamp44==12){
        t_lamp44=10;
      }
      break;
    default:
      break;
  }

  //設定時間後再実行
  setTimeout(lamp_mon_44,500);  
  
  switch(t_lamp44)
  {
    case 0://停止
    {
      lamp44.style.backgroundColor="rgb(0,0,0)";
      lamp44.style.color="rgb(255,255,255)";
      break;
    }
    case 1://運転
    {
      lamp44.style.backgroundColor="rgb(255,0,0)";
      lamp44.style.color="rgb(255,255,255)";
      break;
    }    
    case 10://異常1
    {
      lamp44.style.backgroundColor="rgb(255,255,0)";
      lamp44.style.color="rgb(255,0,0)";
      break;
    }    
    case 11://異常2
    {
      lamp44.style.backgroundColor="rgb(180,180,0)";
      lamp44.style.color="rgb(200,0,0)";
      break;
    }
    default:
      break;
  }
}//lamp_mon_44終了

//【ランプモニタ】
//(4段目)-6
function lamp_mon_45(){  
  //キャンバスを初期化
  var lamp45 = document.getElementById("lamp_45");
  // lamp_status_45=3;
  //コモンステータス　　0:通常状態 10:運転ﾗﾝﾌﾟﾃｽﾄ 11:警報ﾗﾝﾌﾟﾃｽﾄ
  //ランプステータス　0:停止 1:運転 2:異常発生中 3:異常確認
  switch(lamp_common_status){
    case 0://通常
      switch(lamp_status_45){
        case 0://停止
          t_lamp45=0;
          break;
        case 1://運転
          t_lamp45=1;
          break;
        case 2://異常発生中
          t_lamp45++;
          if(t_lamp45<10){t_lamp45=10;}
          if(t_lamp45==12){
            t_lamp45=10;
          }
          break;
        case 3://異常確認
          t_lamp45=10;
        break;
        default:
          break;
      }
      break;
    case 10:
      t_lamp45++;
      if(t_lamp45==2){
        t_lamp45=1;
      }
      break;
    case 11:
      t_lamp45++;
      if(t_lamp45<10){t_lamp45=10;}
      if(t_lamp45==12){
        t_lamp45=10;
      }
      break;
    default:
      break;
  }

  //設定時間後再実行
  setTimeout(lamp_mon_45,500);  
  
  switch(t_lamp45)
  {
    case 0://停止
    {
      lamp45.style.backgroundColor="rgb(0,0,0)";
      lamp45.style.color="rgb(255,255,255)";
      break;
    }
    case 1://運転
    {
      lamp45.style.backgroundColor="rgb(255,0,0)";
      lamp45.style.color="rgb(255,255,255)";
      break;
    }    
    case 10://異常1
    {
      lamp45.style.backgroundColor="rgb(255,255,0)";
      lamp45.style.color="rgb(255,0,0)";
      break;
    }    
    case 11://異常2
    {
      lamp45.style.backgroundColor="rgb(180,180,0)";
      lamp45.style.color="rgb(200,0,0)";
      break;
    }
    default:
      break;
  }
}//lamp_mon_45終了

//【ランプモニタ】
//(5段目)-1
function lamp_mon_50(){  
  //キャンバスを初期化
  var lamp50 = document.getElementById("lamp_50");
  // lamp_status_50=3;
  //コモンステータス　　0:通常状態 10:運転ﾗﾝﾌﾟﾃｽﾄ 11:警報ﾗﾝﾌﾟﾃｽﾄ
  //ランプステータス　0:停止 1:運転 2:異常発生中 3:異常確認
  switch(lamp_common_status){
    case 0://通常
      switch(lamp_status_50){
        case 0://停止
          t_lamp50=0;
          break;
        case 1://運転
          t_lamp50=1;
          break;
        case 2://異常発生中
          t_lamp50++;
          if(t_lamp50<10){t_lamp50=10;}
          if(t_lamp50==12){
            t_lamp50=10;
          }
          break;
        case 3://異常確認
          t_lamp50=10;
        break;
        default:
          break;
      }
      break;
    case 10:
      t_lamp50++;
      if(t_lamp50==2){
        t_lamp50=1;
      }
      break;
    case 11:
      t_lamp50++;
      if(t_lamp50<10){t_lamp50=10;}
      if(t_lamp50==12){
        t_lamp50=10;
      }
      break;
    default:
      break;
  }

  //設定時間後再実行
  setTimeout(lamp_mon_50,500);  
  
  switch(t_lamp50)
  {
    case 0://停止
    {
      lamp50.style.backgroundColor="rgb(0,0,0)";
      lamp50.style.color="rgb(255,255,255)";
      break;
    }
    case 1://運転
    {
      lamp50.style.backgroundColor="rgb(255,0,0)";
      lamp50.style.color="rgb(255,255,255)";
      break;
    }    
    case 10://異常1
    {
      lamp50.style.backgroundColor="rgb(255,255,0)";
      lamp50.style.color="rgb(255,0,0)";
      break;
    }    
    case 11://異常2
    {
      lamp50.style.backgroundColor="rgb(180,180,0)";
      lamp50.style.color="rgb(200,0,0)";
      break;
    }
    default:
      break;
  }
}//lamp_mon_50終了

//【ランプモニタ】
//(1段目)-1
function lamp_mon_51(){  
  //キャンバスを初期化
  var lamp51 = document.getElementById("lamp_51");
  // lamp_status_51=3;
  //コモンステータス　　0:通常状態 10:運転ﾗﾝﾌﾟﾃｽﾄ 11:警報ﾗﾝﾌﾟﾃｽﾄ
  //ランプステータス　0:停止 1:運転 2:異常発生中 3:異常確認
  switch(lamp_common_status){
    case 0://通常
      switch(lamp_status_51){
        case 0://停止
          t_lamp51=0;
          break;
        case 1://運転
          t_lamp51=1;
          break;
        case 2://異常発生中
          t_lamp51++;
          if(t_lamp51<10){t_lamp51=10;}
          if(t_lamp51==12){
            t_lamp51=10;
          }
          break;
        case 3://異常確認
          t_lamp51=10;
        break;
        default:
          break;
      }
      break;
    case 10:
      t_lamp51++;
      if(t_lamp51==2){
        t_lamp51=1;
      }
      break;
    case 11:
      t_lamp51++;
      if(t_lamp51<10){t_lamp51=10;}
      if(t_lamp51==12){
        t_lamp51=10;
      }
      break;
    default:
      break;
  }

  //設定時間後再実行
  setTimeout(lamp_mon_51,500);  
  
  switch(t_lamp51)
  {
    case 0://停止
    {
      lamp51.style.backgroundColor="rgb(0,0,0)";
      lamp51.style.color="rgb(255,255,255)";
      break;
    }
    case 1://運転
    {
      lamp51.style.backgroundColor="rgb(255,0,0)";
      lamp51.style.color="rgb(255,255,255)";
      break;
    }    
    case 10://異常1
    {
      lamp51.style.backgroundColor="rgb(255,255,0)";
      lamp51.style.color="rgb(255,0,0)";
      break;
    }    
    case 11://異常2
    {
      lamp51.style.backgroundColor="rgb(180,180,0)";
      lamp51.style.color="rgb(200,0,0)";
      break;
    }
    default:
      break;
  }
}//lamp_mon_51終了

//【ランプモニタ】
//(5段目)-3
function lamp_mon_52(){  
  //キャンバスを初期化
  var lamp52 = document.getElementById("lamp_52");
  // lamp_status_52=3;
  //コモンステータス　　0:通常状態 10:運転ﾗﾝﾌﾟﾃｽﾄ 11:警報ﾗﾝﾌﾟﾃｽﾄ
  //ランプステータス　0:停止 1:運転 2:異常発生中 3:異常確認
  switch(lamp_common_status){
    case 0://通常
      switch(lamp_status_52){
        case 0://停止
          t_lamp52=0;
          break;
        case 1://運転
          t_lamp52=1;
          break;
        case 2://異常発生中
          t_lamp52++;
          if(t_lamp52<10){t_lamp52=10;}
          if(t_lamp52==12){
            t_lamp52=10;
          }
          break;
        case 3://異常確認
          t_lamp52=10;
        break;
        default:
          break;
      }
      break;
    case 10:
      t_lamp52++;
      if(t_lamp52==2){
        t_lamp52=1;
      }
      break;
    case 11:
      t_lamp52++;
      if(t_lamp52<10){t_lamp52=10;}
      if(t_lamp52==12){
        t_lamp52=10;
      }
      break;
    default:
      break;
  }

  //設定時間後再実行
  setTimeout(lamp_mon_52,500);  
  
  switch(t_lamp52)
  {
    case 0://停止
    {
      lamp52.style.backgroundColor="rgb(0,0,0)";
      lamp52.style.color="rgb(255,255,255)";
      break;
    }
    case 1://運転
    {
      lamp52.style.backgroundColor="rgb(255,0,0)";
      lamp52.style.color="rgb(255,255,255)";
      break;
    }    
    case 10://異常1
    {
      lamp52.style.backgroundColor="rgb(255,255,0)";
      lamp52.style.color="rgb(255,0,0)";
      break;
    }    
    case 11://異常2
    {
      lamp52.style.backgroundColor="rgb(180,180,0)";
      lamp52.style.color="rgb(200,0,0)";
      break;
    }
    default:
      break;
  }
}//lamp_mon_52終了
//【ランプモニタ】
//(5段目)-4
function lamp_mon_53(){  
  //キャンバスを初期化
  var lamp53 = document.getElementById("lamp_53");
  // lamp_status_53=3;
  //コモンステータス　　0:通常状態 10:運転ﾗﾝﾌﾟﾃｽﾄ 11:警報ﾗﾝﾌﾟﾃｽﾄ
  //ランプステータス　0:停止 1:運転 2:異常発生中 3:異常確認
  switch(lamp_common_status){
    case 0://通常
      switch(lamp_status_53){
        case 0://停止
          t_lamp53=0;
          break;
        case 1://運転
          t_lamp53=1;
          break;
        case 2://異常発生中
          t_lamp53++;
          if(t_lamp53<10){t_lamp53=10;}
          if(t_lamp53==12){
            t_lamp53=10;
          }
          break;
        case 3://異常確認
          t_lamp53=10;
        break;
        default:
          break;
      }
      break;
    case 10:
      t_lamp53++;
      if(t_lamp53==2){
        t_lamp53=1;
      }
      break;
    case 11:
      t_lamp53++;
      if(t_lamp53<10){t_lamp53=10;}
      if(t_lamp53==12){
        t_lamp53=10;
      }
      break;
    default:
      break;
  }

  //設定時間後再実行
  setTimeout(lamp_mon_53,500);  
  
  switch(t_lamp53)
  {
    case 0://停止
    {
      lamp53.style.backgroundColor="rgb(0,0,0)";
      lamp53.style.color="rgb(255,255,255)";
      break;
    }
    case 1://運転
    {
      lamp53.style.backgroundColor="rgb(255,0,0)";
      lamp53.style.color="rgb(255,255,255)";
      break;
    }    
    case 10://異常1
    {
      lamp53.style.backgroundColor="rgb(255,255,0)";
      lamp53.style.color="rgb(255,0,0)";
      break;
    }    
    case 11://異常2
    {
      lamp53.style.backgroundColor="rgb(180,180,0)";
      lamp53.style.color="rgb(200,0,0)";
      break;
    }
    default:
      break;
  }
}//lamp_mon_53終了

//【ランプモニタ】
//(5段目)-5
function lamp_mon_54(){  
  //キャンバスを初期化
  var lamp54 = document.getElementById("lamp_54");
  // lamp_status_54=3;
  //コモンステータス　　0:通常状態 10:運転ﾗﾝﾌﾟﾃｽﾄ 11:警報ﾗﾝﾌﾟﾃｽﾄ
  //ランプステータス　0:停止 1:運転 2:異常発生中 3:異常確認
  switch(lamp_common_status){
    case 0://通常
      switch(lamp_status_54){
        case 0://停止
          t_lamp54=0;
          break;
        case 1://運転
          t_lamp54=1;
          break;
        case 2://異常発生中
          t_lamp54++;
          if(t_lamp54<10){t_lamp54=10;}
          if(t_lamp54==12){
            t_lamp54=10;
          }
          break;
        case 3://異常確認
          t_lamp54=10;
        break;
        default:
          break;
      }
      break;
    case 10:
      t_lamp54++;
      if(t_lamp54==2){
        t_lamp54=1;
      }
      break;
    case 11:
      t_lamp54++;
      if(t_lamp54<10){t_lamp54=10;}
      if(t_lamp54==12){
        t_lamp54=10;
      }
      break;
    default:
      break;
  }

  //設定時間後再実行
  setTimeout(lamp_mon_54,500);  
  
  switch(t_lamp54)
  {
    case 0://停止
    {
      lamp54.style.backgroundColor="rgb(0,0,0)";
      lamp54.style.color="rgb(255,255,255)";
      break;
    }
    case 1://運転
    {
      lamp54.style.backgroundColor="rgb(255,0,0)";
      lamp54.style.color="rgb(255,255,255)";
      break;
    }    
    case 10://異常1
    {
      lamp54.style.backgroundColor="rgb(255,255,0)";
      lamp54.style.color="rgb(255,0,0)";
      break;
    }    
    case 11://異常2
    {
      lamp54.style.backgroundColor="rgb(180,180,0)";
      lamp54.style.color="rgb(200,0,0)";
      break;
    }
    default:
      break;
  }
}//lamp_mon_54終了

//【ランプモニタ】
//(5段目)-6
function lamp_mon_55(){  
  //キャンバスを初期化
  var lamp55 = document.getElementById("lamp_55");
  // lamp_status_55=3;
  //コモンステータス　　0:通常状態 10:運転ﾗﾝﾌﾟﾃｽﾄ 11:警報ﾗﾝﾌﾟﾃｽﾄ
  //ランプステータス　0:停止 1:運転 2:異常発生中 3:異常確認
  switch(lamp_common_status){
    case 0://通常
      switch(lamp_status_55){
        case 0://停止
          t_lamp55=0;
          break;
        case 1://運転
          t_lamp55=1;
          break;
        case 2://異常発生中
          t_lamp55++;
          if(t_lamp55<10){t_lamp55=10;}
          if(t_lamp55==12){
            t_lamp55=10;
          }
          break;
        case 3://異常確認
          t_lamp55=10;
        break;
        default:
          break;
      }
      break;
    case 10:
      t_lamp55++;
      if(t_lamp55==2){
        t_lamp55=1;
      }
      break;
    case 11:
      t_lamp55++;
      if(t_lamp55<10){t_lamp55=10;}
      if(t_lamp55==12){
        t_lamp55=10;
      }
      break;
    default:
      break;
  }

  //設定時間後再実行
  setTimeout(lamp_mon_55,500);  
  
  switch(t_lamp55)
  {
    case 0://停止
    {
      lamp55.style.backgroundColor="rgb(0,0,0)";
      lamp55.style.color="rgb(255,255,255)";
      break;
    }
    case 1://運転
    {
      lamp55.style.backgroundColor="rgb(255,0,0)";
      lamp55.style.color="rgb(255,255,255)";
      break;
    }    
    case 10://異常1
    {
      lamp55.style.backgroundColor="rgb(255,255,0)";
      lamp55.style.color="rgb(255,0,0)";
      break;
    }    
    case 11://異常2
    {
      lamp55.style.backgroundColor="rgb(180,180,0)";
      lamp55.style.color="rgb(200,0,0)";
      break;
    }
    default:
      break;
  }
}//lamp_mon_55終了

//【銘柄モニタ】
//(1)
function meigara_mon_10(){  
  //キャンバスを初期化
  var meigara10 = document.getElementById("meigara10");
  meigara10.style.backgroundColor="rgb(220,220,220)";
  meigara10.style.color="rgb(250,0,255)";
  meigara10.style.fontSize="16px";
  meigara10.style.fontWeight="bold";
  meigara10.style.margin="2px 0 0 0";
  meigara10.style.padding="9px 0 0 0";
  meigara10.style.height="40px";
  meigara10.style.border="1px solid black";

  //ここで銘柄を初期設定
  if(meigara_status_10==0 && meigara_status_11==0 
    && meigara_status_12==0&& meigara_status_13==0
    && meigara_status_14==0 && meigara_status_15==0){
    meigara_status_11=1;
    meigara_status_12=2;
    meigara_status_13=3;
    meigara_status_14=4;
    meigara_status_15=5;
  }
  // meigara_status_10=3;
  //コモンステータス　　0:通常状態 10:運転ﾗﾝﾌﾟﾃｽﾄ 11:警報ﾗﾝﾌﾟﾃｽﾄ
  //ランプステータス　0:水 1:ｾﾒﾝﾄ 2:ﾍﾞﾝﾄ 3:原料4 4:原料5
  switch(lamp_common_status){
    case 0://通常
      switch(meigara_status_10){
        case 0://水
          t_meigara10=0;
          break;
        case 1://ｾﾒﾝﾄ
          t_meigara10=1;
          break;
        case 2://ﾍﾞﾝﾄﾅｲﾄ
          t_meigara10=2;
          break;
          case 3://原料4
          t_meigara10=3;
          break;
          case 4://原料5
          t_meigara10=4;
          break;
          default:
            break;
          }
          break;
          case 10://運転ランプテスト
          case 11://警報ランプテスト
          t_meigara10++;
          if(t_meigara10>4){
            t_meigara10=0;
          }
          break;
          default:
            break;
          }

  //設定時間後再実行
  setTimeout(meigara_mon_10,1000);  
  
  switch(t_meigara10)
  {
    case 0://水
    {
      meigara10.textContent="水"
      break;
    }
    case 1://ｾﾒﾝﾄ
    {
      meigara10.textContent="セメント"
      break;
    }    
    case 2://ﾍﾞﾝﾄﾅｲﾄ
    {
      meigara10.textContent="ベントナイト"
      
      break;
    }    
    case 3://原料4
    {
      meigara10.textContent="原料4"
      
      break;
    }
    case 4://原料5
    {
      meigara10.textContent="原料5"      
      break;
    }
    default:
      break;
  }
}//meigara_10終了

//【銘柄モニタ】
//(2)
function meigara_mon_11(){  
  //キャンバスを初期化
  var meigara11 = document.getElementById("meigara11");
  meigara11.style.backgroundColor="rgb(220,220,220)";
  meigara11.style.color="rgb(250,0,255)";
  meigara11.style.fontSize="16px";
  meigara11.style.fontWeight="bold";
  meigara11.style.margin="2px 0 0 0";
  meigara11.style.padding="9px 0 0 0";
  meigara11.style.height="40px";
  meigara11.style.border="1px solid black";

  
  // meigara_status_11=3;
  //コモンステータス　　0:通常状態 10:運転ﾗﾝﾌﾟﾃｽﾄ 11:警報ﾗﾝﾌﾟﾃｽﾄ
  //ランプステータス　0:水 1:ｾﾒﾝﾄ 2:ﾍﾞﾝﾄ 3:原料4 4:原料5
  switch(lamp_common_status){
    case 0://通常
      switch(meigara_status_11){
        case 0://水
          t_meigara11=0;
          break;
        case 1://ｾﾒﾝﾄ
          t_meigara11=1;
          break;
        case 2://ﾍﾞﾝﾄﾅｲﾄ
          t_meigara11=2;
          break;
          case 3://原料4
          t_meigara11=3;
          break;
          case 4://原料5
          t_meigara11=4;
          break;
          default:
            break;
          }
          break;
          case 10://運転ランプテスト
          case 11://警報ランプテスト
          t_meigara11++;
          if(t_meigara11>4){
            t_meigara11=0;
          }
          break;
          default:
            break;
          }

  //設定時間後再実行
  setTimeout(meigara_mon_11,1000);  
  
  switch(t_meigara11)
  {
    case 0://水
    {
      meigara11.textContent="水"
      break;
    }
    case 1://ｾﾒﾝﾄ
    {
      meigara11.textContent="セメント"
      break;
    }    
    case 2://ﾍﾞﾝﾄﾅｲﾄ
    {
      meigara11.textContent="ベントナイト"
      
      break;
    }    
    case 3://原料4
    {
      meigara11.textContent="原料4"
      
      break;
    }
    case 4://原料5
    {
      meigara11.textContent="原料5"      
      break;
    }
    default:
      break;
  }
}//meigara_11終了

//【銘柄モニタ】
//(3)
function meigara_mon_12(){  
  //キャンバスを初期化
  var meigara12 = document.getElementById("meigara12");
  meigara12.style.backgroundColor="rgb(220,220,220)";
  meigara12.style.color="rgb(250,0,255)";
  meigara12.style.fontSize="16px";
  meigara12.style.fontWeight="bold";
  meigara12.style.margin="2px 0 0 0";
  meigara12.style.padding="9px 0 0 0";
  meigara12.style.height="40px";
  meigara12.style.border="1px solid black";
  
  // meigara_status_12=3;
  //コモンステータス　　0:通常状態 10:運転ﾗﾝﾌﾟﾃｽﾄ 11:警報ﾗﾝﾌﾟﾃｽﾄ
  //ランプステータス　0:水 1:ｾﾒﾝﾄ 2:ﾍﾞﾝﾄ 3:原料4 4:原料5
  switch(lamp_common_status){
    case 0://通常
      switch(meigara_status_12){
        case 0://水
          t_meigara12=0;
          break;
        case 1://ｾﾒﾝﾄ
          t_meigara12=1;
          break;
        case 2://ﾍﾞﾝﾄﾅｲﾄ
          t_meigara12=2;
          break;
          case 3://原料4
          t_meigara12=3;
          break;
          case 4://原料5
          t_meigara12=4;
          break;
          default:
            break;
          }
          break;
          case 10://運転ランプテスト
          case 11://警報ランプテスト
          t_meigara12++;
          if(t_meigara12>4){
            t_meigara12=0;
          }
          break;
          default:
            break;
          }

  //設定時間後再実行
  setTimeout(meigara_mon_12,1000);  
  
  switch(t_meigara12)
  {
    case 0://水
    {
      meigara12.textContent="水"
      break;
    }
    case 1://ｾﾒﾝﾄ
    {
      meigara12.textContent="セメント"
      break;
    }    
    case 2://ﾍﾞﾝﾄﾅｲﾄ
    {
      meigara12.textContent="ベントナイト"
      
      break;
    }    
    case 3://原料4
    {
      meigara12.textContent="原料4"
      
      break;
    }
    case 4://原料5
    {
      meigara12.textContent="原料5"      
      break;
    }
    default:
      break;
  }
}//meigara_12終了

//【銘柄モニタ】
//(4)
function meigara_mon_13(){  
  //キャンバスを初期化
  var meigara13 = document.getElementById("meigara13");
  meigara13.style.backgroundColor="rgb(220,220,220)";
  meigara13.style.color="rgb(250,0,255)";
  meigara13.style.fontSize="16px";
  meigara13.style.fontWeight="bold";
  meigara13.style.margin="2px 0 0 0";
  meigara13.style.padding="9px 0 0 0";
  meigara13.style.height="40px";
  meigara13.style.border="1px solid black";

  // meigara_status_13=3;
  //コモンステータス　　0:通常状態 10:運転ﾗﾝﾌﾟﾃｽﾄ 11:警報ﾗﾝﾌﾟﾃｽﾄ
  //ランプステータス　0:水 1:ｾﾒﾝﾄ 2:ﾍﾞﾝﾄ 3:原料4 4:原料5
  switch(lamp_common_status){
    case 0://通常
      switch(meigara_status_13){
        case 0://水
          t_meigara13=0;
          break;
        case 1://ｾﾒﾝﾄ
          t_meigara13=1;
          break;
        case 2://ﾍﾞﾝﾄﾅｲﾄ
          t_meigara13=2;
          break;
          case 3://原料4
          t_meigara13=3;
          break;
          case 4://原料5
          t_meigara13=4;
          break;
          default:
            break;
          }
          break;
          case 10://運転ランプテスト
          case 11://警報ランプテスト
          t_meigara13++;
          if(t_meigara13>4){
            t_meigara13=0;
          }
          break;
          default:
            break;
          }

  //設定時間後再実行
  setTimeout(meigara_mon_13,1000);  
  
  switch(t_meigara13)
  {
    case 0://水
    {
      meigara13.textContent="水"
      break;
    }
    case 1://ｾﾒﾝﾄ
    {
      meigara13.textContent="セメント"
      break;
    }    
    case 2://ﾍﾞﾝﾄﾅｲﾄ
    {
      meigara13.textContent="ベントナイト"
      
      break;
    }    
    case 3://原料4
    {
      meigara13.textContent="原料4"
      
      break;
    }
    case 4://原料5
    {
      meigara13.textContent="原料5"      
      break;
    }
    default:
      break;
  }
}//meigara_13終了

//【銘柄モニタ】
//(5)
function meigara_mon_14(){  
  //キャンバスを初期化
  var meigara14 = document.getElementById("meigara14");
  meigara14.style.backgroundColor="rgb(220,220,220)";
  meigara14.style.color="rgb(250,0,255)";
  meigara14.style.fontSize="16px";
  meigara14.style.fontWeight="bold";
  meigara14.style.margin="2px 0 0 0";
  meigara14.style.padding="9px 0 0 0";
  meigara14.style.height="40px";
  meigara14.style.border="1px solid black";

  // meigara_status_14=3;
  //コモンステータス　　0:通常状態 10:運転ﾗﾝﾌﾟﾃｽﾄ 11:警報ﾗﾝﾌﾟﾃｽﾄ
  //ランプステータス　0:水 1:ｾﾒﾝﾄ 2:ﾍﾞﾝﾄ 3:原料4 4:原料5
  switch(lamp_common_status){
    case 0://通常
      switch(meigara_status_14){
        case 0://水
          t_meigara14=0;
          break;
        case 1://ｾﾒﾝﾄ
          t_meigara14=1;
          break;
        case 2://ﾍﾞﾝﾄﾅｲﾄ
          t_meigara14=2;
          break;
          case 3://原料4
          t_meigara14=3;
          break;
          case 4://原料5
          t_meigara14=4;
          break;
          default:
            break;
          }
          break;
          case 10://運転ランプテスト
          case 11://警報ランプテスト
          t_meigara14++;
          if(t_meigara14>4){
            t_meigara14=0;
          }
          break;
          default:
            break;
          }

  //設定時間後再実行
  setTimeout(meigara_mon_14,1000);  
  
  switch(t_meigara14)
  {
    case 0://水
    {
      meigara14.textContent="水"
      break;
    }
    case 1://ｾﾒﾝﾄ
    {
      meigara14.textContent="セメント"
      break;
    }    
    case 2://ﾍﾞﾝﾄﾅｲﾄ
    {
      meigara14.textContent="ベントナイト"
      
      break;
    }    
    case 3://原料4
    {
      meigara14.textContent="原料4"
      
      break;
    }
    case 4://原料5
    {
      meigara14.textContent="原料5"      
      break;
    }
    default:
      break;
  }
}//meigara_14終了

//【配合設定モニタ】
//(1)
function haigo_settei_mon_10(){  
  //キャンバスを初期化
  var haigo_settei10 = document.getElementById("haigo_setti_10");
  haigo_settei_10.style.backgroundColor="rgb(0,255,0)";
  haigo_settei_10.style.color="rgb(0,0,0)";
  haigo_settei_10.style.fontSize="20px";
  haigo_settei_10.style.fontWeight="bold";
  haigo_settei_10.style.margin="2px 0 0 0";
  haigo_settei_10.style.padding="9px 0 0 0";
  haigo_settei_10.style.height="40px";
  haigo_settei_10.style.border="1px solid black";

  // meigara_status_14=3;
  //コモンステータス　　0:通常状態 10:運転ﾗﾝﾌﾟﾃｽﾄ 11:警報ﾗﾝﾌﾟﾃｽﾄ
  //ランプステータス　0:水 1:ｾﾒﾝﾄ 2:ﾍﾞﾝﾄ 3:原料4 4:原料5
  switch(lamp_common_status){
    case 0://通常
      switch(haigo_s_status_10){
        case 0://リセット状態
          t_haigo_s_10=0;
          break;
        case 1://設定値表示
          t_haigo_s_10=1;
          break;
          default:
            break;
          }
      break;
      case 10://運転ランプテスト
      case 11://警報ランプテスト
        t_haigo_s_10++;
        if(t_haigo_s_10>4){
          t_haigo_s_10=0;
        }
        break;
        default:
          break;
        }

  //設定時間後再実行
  setTimeout(haigo_settei_mon_10,500);  
  
  switch(t_haigo_s_10)
  {
    case 0://水
    {
      // meigara14.textContent="水"
      break;
    }
    case 1://ｾﾒﾝﾄ
    {
      // meigara14.textContent="セメント"
      break;
    }    
    case 2://ﾍﾞﾝﾄﾅｲﾄ
    {
      // meigara14.textContent="ベントナイト"
      
      break;
    }    
    case 3://原料4
    {
      // meigara14.textContent="原料4"
      
      break;
    }
    case 4://原料5
    {
      // meigara14.textContent="原料5"      
      break;
    }
    default:
      break;
  }
}//haigo_settei_mon_10終了