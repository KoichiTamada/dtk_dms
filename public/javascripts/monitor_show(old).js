'use strict'
$(function(){
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

  //表示更新タイマー
  var intervalShow=3000;//3秒毎
  setInterval(showMonitor,intervalShow);
  
  //点滅用タイマー
  var intervalBlink=2000;//1秒毎
  var blinkstatus=1;
  console.log(blinkstatus);
  setInterval(function(){
    blinkstatus++;
    if(blinkstatus>1){blinkstatus=0}
    // console.log(blinkstatus);
  },intervalBlink);

  //テスト用タイマー
  setInterval(function(){
    //モニタ：１段目ランプ
    lamp_status_10++;if(lamp_status_10>5){lamp_status_10=0}
    lamp_status_11++;if(lamp_status_11>5){lamp_status_11=0}
    lamp_status_12++;if(lamp_status_12>5){lamp_status_12=0}
    lamp_status_13++;if(lamp_status_13>5){lamp_status_13=0}
    lamp_status_14++;if(lamp_status_14>5){lamp_status_14=0}
    lamp_status_15++;if(lamp_status_15>5){lamp_status_15=0}
    
    //モニタ：２段目ランプ
    lamp_status_20++;if(lamp_status_20>5){lamp_status_20=0}
    lamp_status_21++;if(lamp_status_21>5){lamp_status_21=0}
    lamp_status_22++;if(lamp_status_22>5){lamp_status_22=0}
    lamp_status_23++;if(lamp_status_23>5){lamp_status_23=0}
    lamp_status_24++;if(lamp_status_24>5){lamp_status_24=0}
    lamp_status_25++;if(lamp_status_25>5){lamp_status_25=0}
    
    //モニタ：３段目ランプ 
    lamp_status_30++;if(lamp_status_30>5){lamp_status_30=0}
    lamp_status_31++;if(lamp_status_31>5){lamp_status_31=0}
    lamp_status_32++;if(lamp_status_32>5){lamp_status_32=0}
    lamp_status_33++;if(lamp_status_33>5){lamp_status_33=0}
    lamp_status_34++;if(lamp_status_34>5){lamp_status_34=0}
    lamp_status_35++;if(lamp_status_35>5){lamp_status_35=0}
    
    //モニタ：４段目ランプ 
    lamp_status_40++;if(lamp_status_40>5){lamp_status_40=0}
    lamp_status_41++;if(lamp_status_41>5){lamp_status_41=0}
    lamp_status_42++;if(lamp_status_42>5){lamp_status_42=0}
    lamp_status_43++;if(lamp_status_43>5){lamp_status_43=0}
    lamp_status_44++;if(lamp_status_44>5){lamp_status_44=0}
    lamp_status_45++;if(lamp_status_45>5){lamp_status_45=0}
    
    //モニタ：５段目ランプ 
    lamp_status_50++;if(lamp_status_50>5){lamp_status_50=0}
    lamp_status_51++;if(lamp_status_51>5){lamp_status_51=0}
    lamp_status_52++;if(lamp_status_52>5){lamp_status_52=0}
    lamp_status_53++;if(lamp_status_53>5){lamp_status_53=0}
    lamp_status_54++;if(lamp_status_54>5){lamp_status_54=0}
    lamp_status_55++;if(lamp_status_55>5){lamp_status_55=0}
    
    //モニタ：配合　銘柄
    meigara_status_10++;if(meigara_status_10>5){meigara_status_10=0}
    meigara_status_11++;if(meigara_status_11>5){meigara_status_11=0}
    meigara_status_12++;if(meigara_status_12>5){meigara_status_12=0}
    meigara_status_13++;if(meigara_status_13>5){meigara_status_13=0}
    meigara_status_14++;if(meigara_status_14>5){meigara_status_14=0}
    
    //モニタ：配合　設定
    haigo_s_status_10++;if(haigo_s_status_10>5){haigo_s_status_10=0}
    haigo_s_status_11++;if(haigo_s_status_11>5){haigo_s_status_11=0}
    haigo_s_status_12++;if(haigo_s_status_12>5){haigo_s_status_12=0}
    haigo_s_status_13++;if(haigo_s_status_13>5){haigo_s_status_13=0}
    haigo_s_status_14++;if(haigo_s_status_14>5){haigo_s_status_14=0}
    haigo_s_status_15++;if(haigo_s_status_15>5){haigo_s_status_15=0}
    
    //モニタ：配合　計量
    haigo_k_status_10++;if(haigo_k_status_10>5){haigo_k_status_10=0}
    haigo_k_status_11++;if(haigo_k_status_11>5){haigo_k_status_11=0}
    haigo_k_status_12++;if(haigo_k_status_12>5){haigo_k_status_12=0}
    haigo_k_status_13++;if(haigo_k_status_13>5){haigo_k_status_13=0}
    haigo_k_status_14++;if(haigo_k_status_14>5){haigo_k_status_14=0}
    haigo_k_status_15++;if(haigo_k_status_15>5){haigo_k_status_15=0}
    
    //モニタ：配合　バッチ
    batch_s_status++;if(batch_s_status>5){batch_s_status=0}
    batch_p_status++;if(batch_p_status>5){batch_p_status=0}
  },10000);

  //モニタ表示関数
  function showMonitor(){   
  //0:通常 1:運転(赤) 2:異常発生中[黄点滅] 3:異常確認[黄点灯]
  //10:運転ﾃｽﾄ 11:異常ﾃｽﾄ
  //【モニタ：１段目】
  //(10)ミキサ
  switch(lamp_status_10){
    case 1://運転
    case 10://運転ﾃｽﾄ  
      $('#lamp_10').css('background','red').css('color','white');
      break;
    case 2://異常発生中
    case 11://異常ﾃｽﾄ
      switch(blinkstatus){
      case 0:
        $('#lamp_10').css('background','yellow').css('color','red');
        break;
      case 1:
        $('#lamp_10').css('background','chocolate').css('color','darkred');
        break;
    }
      break;
    case 3://警報確認済み         
      $('#lamp_10').css('background','yellow').css('color','red');
      break;
    default://通常
      $('#lamp_10').css('background','black').css('color','white');
      break;
  }//
  //(11)アジテータ
  switch(lamp_status_11){
    case 1://運転         
      $('#lamp_11').css('background','red').css('color','white');
      break;
    case 2://異常発生中
      switch(blinkstatus){
      case 0:
        $('#lamp_11').css('background','yellow').css('color','red');
        break;
      case 1:
        $('#lamp_11').css('background','chocolate').css('color','darkred');
        break;
    }
      break;
    case 3://警報確認済み         
      $('#lamp_11').css('background','yellow').css('color','red');
      break;
    default://通常
      $('#lamp_11').css('background','black').css('color','white');
      break;
  }//
  //(12)給水ポンプ1
  switch(lamp_status_12){
    case 1://運転         
      $('#lamp_12').css('background','red').css('color','white');
      break;
    case 2://異常発生中
      switch(blinkstatus){
      case 0:
        $('#lamp_12').css('background','yellow').css('color','red');
        break;
      case 1:
        $('#lamp_12').css('background','chocolate').css('color','darkred');
        break;
    }
      break;
    case 3://警報確認済み         
      $('#lamp_12').css('background','yellow').css('color','red');
      break;
    default://通常
      $('#lamp_12').css('background','black').css('color','white');
      break;
  }//
  //(13)給水ポンプ2
  switch(lamp_status_13){
    case 1://運転         
      $('#lamp_13').css('background','red').css('color','white');
      break;
    case 2://異常発生中
      switch(blinkstatus){
      case 0:
        $('#lamp_13').css('background','yellow').css('color','red');
        break;
      case 1:
        $('#lamp_13').css('background','chocolate').css('color','darkred');
        break;
    }
      break;
    case 3://警報確認済み         
      $('#lamp_13').css('background','yellow').css('color','red');
      break;
    default://通常
      $('#lamp_13').css('background','black').css('color','white');
      break;
  }//
  //(14)原料4
  switch(lamp_status_14){
    case 1://運転         
      $('#lamp_14').css('background','red').css('color','white');
      break;
    case 2://異常発生中
      switch(blinkstatus){
      case 0:
        $('#lamp_14').css('background','yellow').css('color','red');
        break;
      case 1:
        $('#lamp_14').css('background','chocolate').css('color','darkred');
        break;
    }
      break;
    case 3://警報確認済み         
      $('#lamp_14').css('background','yellow').css('color','red');
      break;
    default://通常
      $('#lamp_14').css('background','black').css('color','white');
      break;
  }//
  //(15)原料5
  switch(lamp_status_15){
    case 1://運転         
      $('#lamp_15').css('background','red').css('color','white');
      break;
    case 2://異常発生中
      switch(blinkstatus){
      case 0:
        $('#lamp_15').css('background','yellow').css('color','red');
        break;
      case 1:
        $('#lamp_15').css('background','chocolate').css('color','darkred');
        break;
    }
      break;
    case 3://警報確認済み         
      $('#lamp_15').css('background','yellow').css('color','red');
      break;
    default://通常
      $('#lamp_15').css('background','black').css('color','white');
      break;
  }//モニタ１段目終了
  
  //【モニタ：２段目】
  //(20)コンプレッサ
  switch(lamp_status_20){
    case 1://運転         
      $('#lamp_20').css('background','red').css('color','white');
      break;
    case 2://異常発生中
      switch(blinkstatus){
      case 0:
        $('#lamp_20').css('background','yellow').css('color','red');
        break;
      case 1:
        $('#lamp_20').css('background','chocolate').css('color','darkred');
        break;
    }
      break;
    case 3://警報確認済み         
      $('#lamp_20').css('background','yellow').css('color','red');
      break;
    default://通常
      $('#lamp_20').css('background','black').css('color','white');
      break;
  }//
  //(21)給水弁１
  switch(lamp_status_21){
    case 1://運転         
      $('#lamp_21').css('background','red').css('color','white');
      break;
    case 2://異常発生中
      switch(blinkstatus){
      case 0:
        $('#lamp_21').css('background','yellow').css('color','red');
        break;
      case 1:
        $('#lamp_21').css('background','chocolate').css('color','darkred');
        break;
    }
      break;
    case 3://警報確認済み         
      $('#lamp_21').css('background','yellow').css('color','red');
      break;
    default://通常
      $('#lamp_21').css('background','black').css('color','white');
      break;
  }//
  //(22)給水弁２
  switch(lamp_status_22){
    case 1://運転         
      $('#lamp_22').css('background','red').css('color','white');
      break;
    case 2://異常発生中
      switch(blinkstatus){
      case 0:
        $('#lamp_22').css('background','yellow').css('color','red');
        break;
      case 1:
        $('#lamp_22').css('background','chocolate').css('color','darkred');
        break;
    }
      break;
    case 3://警報確認済み         
      $('#lamp_22').css('background','yellow').css('color','red');
      break;
    default://通常
      $('#lamp_22').css('background','black').css('color','white');
      break;
  }//
  //(23)排出弁
  switch(lamp_status_23){
    case 1://運転         
      $('#lamp_23').css('background','red').css('color','white');
      break;
    case 2://異常発生中
      switch(blinkstatus){
      case 0:
        $('#lamp_23').css('background','yellow').css('color','red');
        break;
      case 1:
        $('#lamp_23').css('background','chocolate').css('color','darkred');
        break;
    }
      break;
    case 3://警報確認済み         
      $('#lamp_23').css('background','yellow').css('color','red');
      break;
    default://通常
      $('#lamp_23').css('background','black').css('color','white');
      break;
  }//
  //(24)セメントサイロＡ
  switch(lamp_status_24){
    case 1://運転         
      $('#lamp_24').css('background','red').css('color','white');
      break;
    case 2://異常発生中
      switch(blinkstatus){
      case 0:
        $('#lamp_24').css('background','yellow').css('color','red');
        break;
      case 1:
        $('#lamp_24').css('background','chocolate').css('color','darkred');
        break;
    }
      break;
    case 3://警報確認済み         
      $('#lamp_24').css('background','yellow').css('color','red');
      break;
    default://通常
      $('#lamp_24').css('background','black').css('color','white');
      break;
  }//
  //(25)セメントサイロＢ
  switch(lamp_status_25){
    case 1://運転         
      $('#lamp_25').css('background','red').css('color','white');
      break;
    case 2://異常発生中
      switch(blinkstatus){
      case 0:
        $('#lamp_25').css('background','yellow').css('color','red');
        break;
      case 1:
        $('#lamp_25').css('background','chocolate').css('color','darkred');
        break;
    }
      break;
    case 3://警報確認済み         
      $('#lamp_25').css('background','yellow').css('color','red');
      break;
    default://通常
      $('#lamp_25').css('background','black').css('color','white');
      break;
  }//モニタ２段目終了
  
  //【モニタ：３段目】
  //(30)ベントナイトサイロ
  switch(lamp_status_30){
    case 1://運転         
      $('#lamp_30').css('background','red').css('color','white');
      break;
    case 2://異常発生中
      switch(blinkstatus){
      case 0:
        $('#lamp_30').css('background','yellow').css('color','red');
        break;
      case 1:
        $('#lamp_30').css('background','chocolate').css('color','darkred');
        break;
    }
      break;
    case 3://警報確認済み         
      $('#lamp_30').css('background','yellow').css('color','red');
      break;
    default://通常
      $('#lamp_30').css('background','black').css('color','white');
      break;
  }//
  //(31)洗浄ポンプ
  switch(lamp_status_31){
    case 1://運転         
      $('#lamp_31').css('background','red').css('color','white');
      break;
    case 2://異常発生中
      switch(blinkstatus){
      case 0:
        $('#lamp_31').css('background','yellow').css('color','red');
        break;
      case 1:
        $('#lamp_31').css('background','chocolate').css('color','darkred');
        break;
    }
      break;
    case 3://警報確認済み         
      $('#lamp_31').css('background','yellow').css('color','red');
      break;
    default://通常
      $('#lamp_31').css('background','black').css('color','white');
      break;
  }//
  //(32)サイロＡ使用
  switch(lamp_status_32){
    case 1://運転         
      $('#lamp_32').css('background','red').css('color','white');
      break;
    case 2://異常発生中
      switch(blinkstatus){
      case 0:
        $('#lamp_32').css('background','yellow').css('color','red');
        break;
      case 1:
        $('#lamp_32').css('background','chocolate').css('color','darkred');
        break;
    }
      break;
    case 3://警報確認済み         
      $('#lamp_32').css('background','yellow').css('color','red');
      break;
    default://通常
      $('#lamp_32').css('background','black').css('color','white');
      break;
  }//
  //(33)サイロＢ使用
  switch(lamp_status_33){
    case 1://運転         
      $('#lamp_33').css('background','red').css('color','white');
      break;
    case 2://異常発生中
      switch(blinkstatus){
      case 0:
        $('#lamp_33').css('background','yellow').css('color','red');
        break;
      case 1:
        $('#lamp_33').css('background','chocolate').css('color','darkred');
        break;
    }
      break;
    case 3://警報確認済み         
      $('#lamp_33').css('background','yellow').css('color','red');
      break;
    default://通常
      $('#lamp_33').css('background','black').css('color','white');
      break;
  }//
  //(34)アジテータ満
  switch(lamp_status_34){
    case 1://運転         
      $('#lamp_34').css('background','red').css('color','white');
      break;
    case 2://異常発生中
      switch(blinkstatus){
      case 0:
        $('#lamp_34').css('background','yellow').css('color','red');
        break;
      case 1:
        $('#lamp_34').css('background','chocolate').css('color','darkred');
        break;
    }
      break;
    case 3://警報確認済み         
      $('#lamp_34').css('background','yellow').css('color','red');
      break;
    default://通常
      $('#lamp_34').css('background','black').css('color','white');
      break;
  }//
  //(35)予備5
  switch(lamp_status_35){
    case 1://運転         
      $('#lamp_35').css('background','red').css('color','white');
      break;
    case 2://異常発生中
      switch(blinkstatus){
      case 0:
        $('#lamp_35').css('background','yellow').css('color','red');
        break;
      case 1:
        $('#lamp_35').css('background','chocolate').css('color','darkred');
        break;
    }
      break;
    case 3://警報確認済み         
      $('#lamp_35').css('background','yellow').css('color','red');
      break;
    default://通常
      $('#lamp_35').css('background','black').css('color','white');
      break;
  }//モニタ３段目終了
  
  //【モニタ：４段目】
  //(40)手動
  switch(lamp_status_40){
    case 1://運転         
      $('#lamp_40').css('background','red').css('color','white');
      break;
    case 2://異常発生中
      switch(blinkstatus){
      case 0:
        $('#lamp_40').css('background','yellow').css('color','red');
        break;
      case 1:
        $('#lamp_40').css('background','chocolate').css('color','darkred');
        break;
    }
      break;
    case 3://警報確認済み         
      $('#lamp_40').css('background','yellow').css('color','red');
      break;
    default://通常
      $('#lamp_40').css('background','black').css('color','white');
      break;
  }//
  //(41)自動
  switch(lamp_status_41){
    case 1://運転         
      $('#lamp_41').css('background','red').css('color','white');
      break;
    case 2://異常発生中
      switch(blinkstatus){
      case 0:
        $('#lamp_41').css('background','yellow').css('color','red');
        break;
      case 1:
        $('#lamp_41').css('background','chocolate').css('color','darkred');
        break;
    }
      break;
    case 3://警報確認済み         
      $('#lamp_41').css('background','yellow').css('color','red');
      break;
    default://通常
      $('#lamp_41').css('background','black').css('color','white');
      break;
  }//
  //(42)自動可
  switch(lamp_status_42){
    case 1://運転         
      $('#lamp_42').css('background','red').css('color','white');
      break;
    case 2://異常発生中
      switch(blinkstatus){
      case 0:
        $('#lamp_42').css('background','yellow').css('color','red');
        break;
      case 1:
        $('#lamp_42').css('background','chocolate').css('color','darkred');
        break;
    }
      break;
    case 3://警報確認済み         
      $('#lamp_42').css('background','yellow').css('color','red');
      break;
    default://通常
      $('#lamp_42').css('background','black').css('color','white');
      break;
  }//
  //(43)配合Ａ
  switch(lamp_status_43){
    case 1://運転         
      $('#lamp_43').css('background','red').css('color','white');
      break;
    case 2://異常発生中
      switch(blinkstatus){
      case 0:
        $('#lamp_43').css('background','yellow').css('color','red');
        break;
      case 1:
        $('#lamp_43').css('background','chocolate').css('color','darkred');
        break;
    }
      break;
    case 3://警報確認済み         
      $('#lamp_43').css('background','yellow').css('color','red');
      break;
    default://通常
      $('#lamp_43').css('background','black').css('color','white');
      break;
  }//
  //(44)配合Ｂ
  switch(lamp_status_44){
    case 1://運転         
      $('#lamp_44').css('background','red').css('color','white');
      break;
    case 2://異常発生中
      switch(blinkstatus){
      case 0:
        $('#lamp_44').css('background','yellow').css('color','red');
        break;
      case 1:
        $('#lamp_44').css('background','chocolate').css('color','darkred');
        break;
    }
      break;
    case 3://警報確認済み         
      $('#lamp_44').css('background','yellow').css('color','red');
      break;
    default://通常
      $('#lamp_44').css('background','black').css('color','white');
      break;
  }//
  //(45)配合Ｃ
  switch(lamp_status_45){
    case 1://運転         
      $('#lamp_45').css('background','red').css('color','white');
      break;
    case 2://異常発生中
      switch(blinkstatus){
      case 0:
        $('#lamp_45').css('background','yellow').css('color','red');
        break;
      case 1:
        $('#lamp_45').css('background','chocolate').css('color','darkred');
        break;
    }
      break;
    case 3://警報確認済み         
      $('#lamp_45').css('background','yellow').css('color','red');
      break;
    default://通常
      $('#lamp_45').css('background','black').css('color','white');
      break;
  }//モニタ４段目終了
  
  //【モニタ：５段目】
  //(50)自動計量
  switch(lamp_status_50){
    case 1://運転         
      $('#lamp_50').css('background','red').css('color','white');
      break;
    case 2://異常発生中
      switch(blinkstatus){
      case 0:
        $('#lamp_50').css('background','yellow').css('color','red');
        break;
      case 1:
        $('#lamp_50').css('background','chocolate').css('color','darkred');
        break;
    }
      break;
    case 3://警報確認済み         
      $('#lamp_50').css('background','yellow').css('color','red');
      break;
    default://通常
      $('#lamp_50').css('background','black').css('color','white');
      break;
    }
  //(51)一時停止
  switch(lamp_status_51){
    case 1://運転         
      $('#lamp_51').css('background','red').css('color','white');
      break;
    case 2://異常発生中
      switch(blinkstatus){
      case 0:
        $('#lamp_51').css('background','yellow').css('color','red');
        break;
      case 1:
        $('#lamp_51').css('background','chocolate').css('color','darkred');
        break;
    }
      break;
    case 3://警報確認済み         
      $('#lamp_51').css('background','yellow').css('color','red');
      break;
    default://通常
      $('#lamp_51').css('background','black').css('color','white');
      break;
    }
  //(52)予備
  switch(lamp_status_52){
    case 1://運転         
      $('#lamp_52').css('background','red').css('color','white');
      break;
    case 2://異常発生中
      switch(blinkstatus){
      case 0:
        $('#lamp_52').css('background','yellow').css('color','red');
        break;
      case 1:
        $('#lamp_52').css('background','chocolate').css('color','darkred');
        break;
    }
      break;
    case 3://警報確認済み         
      $('#lamp_52').css('background','yellow').css('color','red');
      break;
    default://通常
      $('#lamp_52').css('background','black').css('color','white');
      break;
    }
  //(53)予備
  switch(lamp_status_53){
    case 1://運転         
      $('#lamp_53').css('background','red').css('color','white');
      break;
    case 2://異常発生中
      switch(blinkstatus){
      case 0:
        $('#lamp_53').css('background','yellow').css('color','red');
        break;
      case 1:
        $('#lamp_53').css('background','chocolate').css('color','darkred');
        break;
    }
      break;
    case 3://警報確認済み         
      $('#lamp_53').css('background','yellow').css('color','red');
      break;
    default://通常
      $('#lamp_53').css('background','black').css('color','white');
      break;
    }
  //(54)予備
  switch(lamp_status_54){
    case 1://運転         
      $('#lamp_54').css('background','red').css('color','white');
      break;
    case 2://異常発生中
      switch(blinkstatus){
      case 0:
        $('#lamp_54').css('background','yellow').css('color','red');
        break;
      case 1:
        $('#lamp_54').css('background','chocolate').css('color','darkred');
        break;
    }
      break;
    case 3://警報確認済み         
      $('#lamp_54').css('background','yellow').css('color','red');
      break;
    default://通常
      $('#lamp_54').css('background','black').css('color','white');
      break;
    }
  }//モニタ５段目終了
});