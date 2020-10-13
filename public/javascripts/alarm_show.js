'use strict'
$(function(){
  //警報画面表示
  //1段目フラグ
  var alarm_flag_10 = 0;
  var alarm_flag_11 = 0;
  var alarm_flag_12 = 0;
  var alarm_flag_13 = 0;
  var alarm_flag_14 = 0;
  var alarm_flag_15 = 0;
  //2段目フラグ
  var alarm_flag_20 = 0;
  var alarm_flag_21 = 0;
  var alarm_flag_22 = 0;
  var alarm_flag_23 = 0;
  var alarm_flag_24 = 0;
  var alarm_flag_25 = 0;

  //3段目フラグ
  var alarm_flag_30 = 0;
  var alarm_flag_31 = 0;
  var alarm_flag_32 = 0;
  var alarm_flag_33 = 0;
  var alarm_flag_34 = 0;
  var alarm_flag_35 = 0;
  
  //4段目フラグ
  var alarm_flag_40 = 0;
  var alarm_flag_41 = 0;
  var alarm_flag_42 = 0;
  var alarm_flag_43 = 0;
  var alarm_flag_44 = 0;
  var alarm_flag_45 = 0;
  
  //5段目フラグ
  var alarm_flag_50 = 0;
  var alarm_flag_51 = 0;
  var alarm_flag_52 = 0;
  var alarm_flag_53 = 0;
  var alarm_flag_54 = 0;
  var alarm_flag_55 = 0;
  
  //6段目フラグ
  var alarm_flag_60 = 0;
  var alarm_flag_61 = 0;
  var alarm_flag_62 = 0;
  var alarm_flag_63 = 0;
  var alarm_flag_64 = 0;
  var alarm_flag_65 = 0;
  
  //7段目フラグ
  var alarm_flag_70 = 0;
  var alarm_flag_71 = 0;
  var alarm_flag_72 = 0;
  var alarm_flag_73 = 0;
  var alarm_flag_74 = 0;
  var alarm_flag_75 = 0;

  //表示更新タイマー
  var intervalShow=3000;//3秒毎
  setInterval(showAlarm,intervalShow);
  
  //点滅用タイマー
  var intervalBlink=1000;//1秒毎
  var blinkFlag=1;
  
  setInterval(function(){
    blinkFlag++;
    if(blinkFlag>1){blinkFlag=0}
    // console.log(blinkFlag);
  },intervalBlink);
  
  //テスト用タイマー
  setInterval(function(){
    //[1段目]
    alarm_flag_10++;if(alarm_flag_10>2){alarm_flag_10=0}
    alarm_flag_11++;if(alarm_flag_11>2){alarm_flag_11=0}
    alarm_flag_12++;if(alarm_flag_12>2){alarm_flag_12=0}
    alarm_flag_13++;if(alarm_flag_13>2){alarm_flag_13=0}
    alarm_flag_14++;if(alarm_flag_14>2){alarm_flag_14=0}
    alarm_flag_15++;if(alarm_flag_15>2){alarm_flag_15=0}
    
    //[2段目]
    alarm_flag_20++;if(alarm_flag_20>2){alarm_flag_20=0}
    alarm_flag_21++;if(alarm_flag_21>2){alarm_flag_21=0}
    alarm_flag_22++;if(alarm_flag_22>2){alarm_flag_22=0}
    alarm_flag_23++;if(alarm_flag_23>2){alarm_flag_23=0}
    alarm_flag_24++;if(alarm_flag_24>2){alarm_flag_24=0}
    alarm_flag_25++;if(alarm_flag_25>2){alarm_flag_25=0}
    
    //[3段目]
    alarm_flag_30++;if(alarm_flag_30>2){alarm_flag_30=0}
    alarm_flag_31++;if(alarm_flag_31>2){alarm_flag_31=0}
    alarm_flag_32++;if(alarm_flag_32>2){alarm_flag_32=0}
    alarm_flag_33++;if(alarm_flag_33>2){alarm_flag_33=0}
    alarm_flag_34++;if(alarm_flag_34>2){alarm_flag_34=0}
    alarm_flag_35++;if(alarm_flag_35>2){alarm_flag_35=0}
    
    //[4段目]
    alarm_flag_40++;if(alarm_flag_40>2){alarm_flag_40=0}
    alarm_flag_41++;if(alarm_flag_41>2){alarm_flag_41=0}
    alarm_flag_42++;if(alarm_flag_42>2){alarm_flag_42=0}
    alarm_flag_43++;if(alarm_flag_43>2){alarm_flag_43=0}
    alarm_flag_44++;if(alarm_flag_44>2){alarm_flag_44=0}
    alarm_flag_45++;if(alarm_flag_45>2){alarm_flag_45=0}

    //[5段目]
    alarm_flag_50++;if(alarm_flag_50>2){alarm_flag_50=0}
    alarm_flag_51++;if(alarm_flag_51>2){alarm_flag_51=0}
    alarm_flag_52++;if(alarm_flag_52>2){alarm_flag_52=0}
    alarm_flag_53++;if(alarm_flag_53>2){alarm_flag_53=0}
    alarm_flag_54++;if(alarm_flag_54>2){alarm_flag_54=0}
    alarm_flag_55++;if(alarm_flag_55>2){alarm_flag_55=0}
    
    //[6段目]
    alarm_flag_60++;if(alarm_flag_60>2){alarm_flag_60=0}
    alarm_flag_61++;if(alarm_flag_61>2){alarm_flag_61=0}
    alarm_flag_62++;if(alarm_flag_62>2){alarm_flag_62=0}
    alarm_flag_63++;if(alarm_flag_63>2){alarm_flag_63=0}
    alarm_flag_64++;if(alarm_flag_64>2){alarm_flag_64=0}
    alarm_flag_65++;if(alarm_flag_65>2){alarm_flag_65=0}
    
    //[7段目]
    alarm_flag_70++;if(alarm_flag_70>2){alarm_flag_70=0}
    alarm_flag_71++;if(alarm_flag_71>2){alarm_flag_71=0}
    alarm_flag_72++;if(alarm_flag_72>2){alarm_flag_72=0}
    alarm_flag_73++;if(alarm_flag_73>2){alarm_flag_73=0}
    alarm_flag_74++;if(alarm_flag_74>2){alarm_flag_74=0}
    alarm_flag_75++;if(alarm_flag_75>2){alarm_flag_75=0}

  },10000)

  //アラーム表示関数
  function showAlarm(){   
    //0:通常 1:異常発生中[点滅] 2:異常確認[点灯]
    
    //【1段目】
    //(10)非常停止
    switch(alarm_flag_10){
      case 1://警報発生中
        switch(blinkFlag){
        case 0:
          $('#alarm_10').css('background','red').css('color','white');
          break;
        case 1:
          $('#alarm_10').css('background','yellow').css('color','red');
          break;
      }
        break;
      case 2://警報確認済み         
        $('#alarm_10').css('background','red').css('color','white');
        break;
      default://通常
        $('#alarm_10').css('background','black').css('color','white');
        break;
    }//
    //(11)PLC異常
    switch(alarm_flag_11){
      case 1://警報発生中
        switch(blinkFlag){
        case 0:
          $('#alarm_11').css('background','red').css('color','white');
          break;
        case 1:
          $('#alarm_11').css('background','yellow').css('color','red');
          break;
      }
        break;
      case 2://警報確認済み         
        $('#alarm_11').css('background','red').css('color','white');
        break;
      default://通常
        $('#alarm_11').css('background','black').css('color','white');
        break;
    }//
    //(12)計算機リンクユニット異常
    switch(alarm_flag_12){
      case 1://警報発生中
        switch(blinkFlag){
        case 0:
          $('#alarm_12').css('background','red').css('color','white');
          break;
        case 1:
          $('#alarm_12').css('background','yellow').css('color','red');
          break;
      }
        break;
      case 2://警報確認済み         
        $('#alarm_12').css('background','red').css('color','white');
        break;
      default://通常
        $('#alarm_12').css('background','black').css('color','white');
        break;
    }//
    //(13)CC-Linkユニット異常
    switch(alarm_flag_13){
      case 1://警報発生中
        switch(blinkFlag){
        case 0:
          $('#alarm_13').css('background','red').css('color','white');
          break;
        case 1:
          $('#alarm_13').css('background','yellow').css('color','red');
          break;
      }
        break;
      case 2://警報確認済み         
        $('#alarm_13').css('background','red').css('color','white');
        break;
      default://通常
        $('#alarm_13').css('background','black').css('color','white');
        break;
    }//
    //(14)プリンタ通信
    switch(alarm_flag_14){
      case 1://警報発生中
        switch(blinkFlag){
        case 0:
          $('#alarm_14').css('background','red').css('color','white');
          break;
        case 1:
          $('#alarm_14').css('background','yellow').css('color','red');
          break;
      }
        break;
      case 2://警報確認済み         
        $('#alarm_14').css('background','red').css('color','white');
        break;
      default://通常
        $('#alarm_14').css('background','black').css('color','white');
        break;
    }//
    //(15)Web通信異常
    switch(alarm_flag_15){
      case 1://警報発生中
        switch(blinkFlag){
        case 0:
          $('#alarm_15').css('background','red').css('color','white');
          break;
        case 1:
          $('#alarm_15').css('background','yellow').css('color','red');
          break;
      }
        break;
      case 2://警報確認済み         
        $('#alarm_15').css('background','red').css('color','white');
        break;
      default://通常
        $('#alarm_15').css('background','black').css('color','white');
        break;
    }//
      
    //【2段目】
    //(20)ミキサ計量器通信異常
    switch(alarm_flag_20){
      case 1://警報発生中
        switch(blinkFlag){
        case 0:
          $('#alarm_20').css('background','red').css('color','white');
          break;
        case 1:
          $('#alarm_20').css('background','yellow').css('color','red');
          break;
      }
        break;
      case 2://警報確認済み         
        $('#alarm_20').css('background','red').css('color','white');
        break;
      default://通常
        $('#alarm_20').css('background','black').css('color','white');
        break;
    }//
    //(21)原料4計量器通信異常
    switch(alarm_flag_21){
      case 1://警報発生中
        switch(blinkFlag){
        case 0:
          $('#alarm_21').css('background','red').css('color','white');
          break;
        case 1:
          $('#alarm_21').css('background','yellow').css('color','red');
          break;
      }
        break;
      case 2://警報確認済み         
        $('#alarm_21').css('background','red').css('color','white');
        break;
      default://通常
        $('#alarm_21').css('background','black').css('color','white');
        break;
    }//
    //(22)原料5計量機通信異常
    switch(alarm_flag_22){
      case 1://警報発生中
        switch(blinkFlag){
        case 0:
          $('#alarm_22').css('background','red').css('color','white');
          break;
        case 1:
          $('#alarm_22').css('background','yellow').css('color','red');
          break;
      }
        break;
      case 2://警報確認済み         
        $('#alarm_22').css('background','red').css('color','white');
        break;
      default://通常
        $('#alarm_22').css('background','black').css('color','white');
        break;
    }//
    //(23)ミキサ過負荷
    switch(alarm_flag_23){
      case 1://警報発生中
        switch(blinkFlag){
        case 0:
          $('#alarm_23').css('background','red').css('color','white');
          break;
        case 1:
          $('#alarm_23').css('background','yellow').css('color','red');
          break;
      }
        break;
      case 2://警報確認済み         
        $('#alarm_23').css('background','red').css('color','white');
        break;
      default://通常
        $('#alarm_23').css('background','black').css('color','white');
        break;
    }//
    //(24)給水ポンプ1過負荷
    switch(alarm_flag_24){
      case 1://警報発生中
        switch(blinkFlag){
        case 0:
          $('#alarm_24').css('background','red').css('color','white');
          break;
        case 1:
          $('#alarm_24').css('background','yellow').css('color','red');
          break;
      }
        break;
      case 2://警報確認済み         
        $('#alarm_24').css('background','red').css('color','white');
        break;
      default://通常
        $('#alarm_24').css('background','black').css('color','white');
        break;
    }//
    //(25)給水ポンプ2過負荷
    switch(alarm_flag_25){
      case 1://警報発生中
        switch(blinkFlag){
        case 0:
          $('#alarm_25').css('background','red').css('color','white');
          break;
        case 1:
          $('#alarm_25').css('background','yellow').css('color','red');
          break;
      }
        break;
      case 2://警報確認済み         
        $('#alarm_25').css('background','red').css('color','white');
        break;
      default://通常
        $('#alarm_25').css('background','black').css('color','white');
        break;
    }//

    //【3段目】
    //(30)アジテータ過負荷
    switch(alarm_flag_30){
      case 1://警報発生中
        switch(blinkFlag){
        case 0:
          $('#alarm_30').css('background','red').css('color','white');
          break;
        case 1:
          $('#alarm_30').css('background','yellow').css('color','red');
          break;
      }
        break;
      case 2://警報確認済み         
        $('#alarm_30').css('background','red').css('color','white');
        break;
      default://通常
        $('#alarm_30').css('background','black').css('color','white');
        break;
    }//
    //(31)コンプレッサ過負荷
    switch(alarm_flag_31){
      case 1://警報発生中
        switch(blinkFlag){
        case 0:
          $('#alarm_31').css('background','red').css('color','white');
          break;
        case 1:
          $('#alarm_31').css('background','yellow').css('color','red');
          break;
      }
        break;
      case 2://警報確認済み         
        $('#alarm_31').css('background','red').css('color','white');
        break;
      default://通常
        $('#alarm_31').css('background','black').css('color','white');
        break;
    }//
    //(32)原料4過負荷
    switch(alarm_flag_32){
      case 1://警報発生中
        switch(blinkFlag){
        case 0:
          $('#alarm_32').css('background','red').css('color','white');
          break;
        case 1:
          $('#alarm_32').css('background','yellow').css('color','red');
          break;
      }
        break;
      case 2://警報確認済み         
        $('#alarm_32').css('background','red').css('color','white');
        break;
      default://通常
        $('#alarm_32').css('background','black').css('color','white');
        break;
    }//
    //(33)原料4過負荷
    switch(alarm_flag_33){
      case 1://警報発生中
        switch(blinkFlag){
        case 0:
          $('#alarm_33').css('background','red').css('color','white');
          break;
        case 1:
          $('#alarm_33').css('background','yellow').css('color','red');
          break;
      }
        break;
      case 2://警報確認済み         
        $('#alarm_33').css('background','red').css('color','white');
        break;
      default://通常
        $('#alarm_33').css('background','black').css('color','white');
        break;
    }//
    //(34)洗浄水ポンプ過負荷常
    switch(alarm_flag_34){
      case 1://警報発生中
        switch(blinkFlag){
        case 0:
          $('#alarm_34').css('background','red').css('color','white');
          break;
        case 1:
          $('#alarm_34').css('background','yellow').css('color','red');
          break;
      }
        break;
      case 2://警報確認済み         
        $('#alarm_34').css('background','red').css('color','white');
        break;
      default://通常
        $('#alarm_34').css('background','black').css('color','white');
        break;
    }//
    //(35)エア圧低下
    switch(alarm_flag_35){
      case 1://警報発生中
        switch(blinkFlag){
        case 0:
          $('#alarm_35').css('background','red').css('color','white');
          break;
        case 1:
          $('#alarm_35').css('background','yellow').css('color','red');
          break;
      }
        break;
      case 2://警報確認済み         
        $('#alarm_35').css('background','red').css('color','white');
        break;
      default://通常
        $('#alarm_35').css('background','black').css('color','white');
        break;
      }//

    //【4段目】
    //(40)逆相検出
    switch(alarm_flag_40){
      case 1://警報発生中
        switch(blinkFlag){
        case 0:
          $('#alarm_40').css('background','red').css('color','white');
          break;
        case 1:
          $('#alarm_40').css('background','yellow').css('color','red');
          break;
      }
        break;
      case 2://警報確認済み         
        $('#alarm_40').css('background','red').css('color','white');
        break;
      default://通常
        $('#alarm_40').css('background','black').css('color','white');
        break;
    }//
    //(41)給水弁1異常
    switch(alarm_flag_41){
      case 1://警報発生中
        switch(blinkFlag){
        case 0:
          $('#alarm_41').css('background','red').css('color','white');
          break;
        case 1:
          $('#alarm_41').css('background','yellow').css('color','red');
          break;
      }
        break;
      case 2://警報確認済み         
        $('#alarm_41').css('background','red').css('color','white');
        break;
      default://通常
        $('#alarm_41').css('background','black').css('color','white');
        break;
    }//
    //(42)給水弁2異常
    switch(alarm_flag_42){
      case 1://警報発生中
        switch(blinkFlag){
        case 0:
          $('#alarm_42').css('background','red').css('color','white');
          break;
        case 1:
          $('#alarm_42').css('background','yellow').css('color','red');
          break;
      }
        break;
      case 2://警報確認済み         
        $('#alarm_42').css('background','red').css('color','white');
        break;
      default://通常
        $('#alarm_42').css('background','black').css('color','white');
        break;
    }//
    //(43)ミキサ排出弁1異常
    switch(alarm_flag_43){
      case 1://警報発生中
        switch(blinkFlag){
        case 0:
          $('#alarm_43').css('background','red').css('color','white');
          break;
        case 1:
          $('#alarm_43').css('background','yellow').css('color','red');
          break;
      }
        break;
      case 2://警報確認済み         
        $('#alarm_43').css('background','red').css('color','white');
        break;
      default://通常
        $('#alarm_43').css('background','black').css('color','white');
        break;
    }//
    //(44)ミキサ排出弁2異常
    switch(alarm_flag_44){
      case 1://警報発生中
        switch(blinkFlag){
        case 0:
          $('#alarm_44').css('background','red').css('color','white');
          break;
        case 1:
          $('#alarm_44').css('background','yellow').css('color','red');
          break;
      }
        break;
      case 2://警報確認済み         
        $('#alarm_44').css('background','red').css('color','white');
        break;
      default://通常
        $('#alarm_44').css('background','black').css('color','white');
        break;
    }//
    //(45)原料4排出弁異常
    switch(alarm_flag_45){
      case 1://警報発生中
        switch(blinkFlag){
        case 0:
          $('#alarm_45').css('background','red').css('color','white');
          break;
        case 1:
          $('#alarm_45').css('background','yellow').css('color','red');
          break;
      }
        break;
      case 2://警報確認済み         
        $('#alarm_45').css('background','red').css('color','white');
        break;
      default://通常
        $('#alarm_45').css('background','black').css('color','white');
        break;
    }//

    //【5段目】
    //(50)原料5投入弁異常
    switch(alarm_flag_50){
      case 1://警報発生中
        switch(blinkFlag){
        case 0:
          $('#alarm_50').css('background','red').css('color','white');
          break;
        case 1:
          $('#alarm_50').css('background','yellow').css('color','red');
          break;
      }
        break;
      case 2://警報確認済み         
        $('#alarm_50').css('background','red').css('color','white');
        break;
      default://通常
        $('#alarm_50').css('background','black').css('color','white');
        break;
    }//
    //(51)原料4投入弁異常
    switch(alarm_flag_51){
      case 1://警報発生中
        switch(blinkFlag){
        case 0:
          $('#alarm_51').css('background','red').css('color','white');
          break;
        case 1:
          $('#alarm_51').css('background','yellow').css('color','red');
          break;
      }
        break;
      case 2://警報確認済み         
        $('#alarm_51').css('background','red').css('color','white');
        break;
      default://通常
        $('#alarm_51').css('background','black').css('color','white');
        break;
    }//
    //(52)水計量タイムオーバー
    switch(alarm_flag_52){
      case 1://警報発生中
        switch(blinkFlag){
        case 0:
          $('#alarm_52').css('background','red').css('color','white');
          break;
        case 1:
          $('#alarm_52').css('background','yellow').css('color','red');
          break;
      }
        break;
      case 2://警報確認済み         
        $('#alarm_52').css('background','red').css('color','white');
        break;
      default://通常
        $('#alarm_52').css('background','black').css('color','white');
        break;
    }//
     //(53)ベントナイト計量タイムオーバー
    switch(alarm_flag_53){
      case 1://警報発生中
        switch(blinkFlag){
        case 0:
          $('#alarm_53').css('background','red').css('color','white');
          break;
        case 1:
          $('#alarm_53').css('background','yellow').css('color','red');
          break;
      }
        break;
      case 2://警報確認済み         
        $('#alarm_53').css('background','red').css('color','white');
        break;
      default://通常
        $('#alarm_53').css('background','black').css('color','white');
        break;
    }//
    //(54)セメント計量タイムオーバー
    switch(alarm_flag_54){
      case 1://警報発生中
        switch(blinkFlag){
        case 0:
          $('#alarm_54').css('background','red').css('color','white');
          break;
        case 1:
          $('#alarm_54').css('background','yellow').css('color','red');
          break;
      }
        break;
      case 2://警報確認済み         
        $('#alarm_54').css('background','red').css('color','white');
        break;
      default://通常
        $('#alarm_54').css('background','black').css('color','white');
        break;
    }//
    //(55)原料4タイムオーバー
    switch(alarm_flag_55){
      case 1://警報発生中
        switch(blinkFlag){
        case 0:
          $('#alarm_55').css('background','red').css('color','white');
          break;
        case 1:
          $('#alarm_55').css('background','yellow').css('color','red');
          break;
      }
        break;
      case 2://警報確認済み         
        $('#alarm_55').css('background','red').css('color','white');
        break;
      default://通常
        $('#alarm_55').css('background','black').css('color','white');
        break;
    }//
    
    //【6段目】
    //(60)原料5タイムオーバー
    switch(alarm_flag_60){
      case 1://警報発生中
        switch(blinkFlag){
        case 0:
          $('#alarm_60').css('background','red').css('color','white');
          break;
        case 1:
          $('#alarm_60').css('background','yellow').css('color','red');
          break;
      }
        break;
      case 2://警報確認済み         
        $('#alarm_60').css('background','red').css('color','white');
        break;
      default://通常
        $('#alarm_60').css('background','black').css('color','white');
        break;
    }//
    //(61)原料4投入タイムオーバー
    switch(alarm_flag_61){
      case 1://警報発生中
        switch(blinkFlag){
        case 0:
          $('#alarm_61').css('background','red').css('color','white');
          break;
        case 1:
          $('#alarm_61').css('background','yellow').css('color','red');
          break;
      }
        break;
      case 2://警報確認済み         
        $('#alarm_61').css('background','red').css('color','white');
        break;
      default://通常
        $('#alarm_61').css('background','black').css('color','white');
        break;
    }//
    //(62)原料5投入タイムオーバー
    switch(alarm_flag_62){
      case 1://警報発生中
        switch(blinkFlag){
        case 0:
          $('#alarm_62').css('background','red').css('color','white');
          break;
        case 1:
          $('#alarm_62').css('background','yellow').css('color','red');
          break;
      }
        break;
      case 2://警報確認済み         
        $('#alarm_62').css('background','red').css('color','white');
        break;
      default://通常
        $('#alarm_62').css('background','black').css('color','white');
        break;
    }//
    //(63)ミキサ付着異常
    switch(alarm_flag_63){
      case 1://警報発生中
        switch(blinkFlag){
        case 0:
          $('#alarm_63').css('background','red').css('color','white');
          break;
        case 1:
          $('#alarm_63').css('background','yellow').css('color','red');
          break;
      }
        break;
      case 2://警報確認済み         
        $('#alarm_63').css('background','red').css('color','white');
        break;
      default://通常
        $('#alarm_63').css('background','black').css('color','white');
        break;
    }//
    //(64)原料4付着異常
    switch(alarm_flag_64){
      case 1://警報発生中
        switch(blinkFlag){
        case 0:
          $('#alarm_64').css('background','red').css('color','white');
          break;
        case 1:
          $('#alarm_64').css('background','yellow').css('color','red');
          break;
      }
        break;
      case 2://警報確認済み         
        $('#alarm_64').css('background','red').css('color','white');
        break;
      default://通常
        $('#alarm_64').css('background','black').css('color','white');
        break;
    }//
    //(65)原料5付着異常常
    switch(alarm_flag_65){
      case 1://警報発生中
        switch(blinkFlag){
        case 0:
          $('#alarm_65').css('background','red').css('color','white');
          break;
        case 1:
          $('#alarm_65').css('background','yellow').css('color','red');
          break;
      }
        break;
      case 2://警報確認済み         
        $('#alarm_65').css('background','red').css('color','white');
        break;
      default://通常
        $('#alarm_65').css('background','black').css('color','white');
        break;
    }//

    //【7段目】
    //(70)SDカード未装着
    switch(alarm_flag_70){
      case 1://警報発生中
        switch(blinkFlag){
        case 0:
          $('#alarm_70').css('background','red').css('color','white');
          break;
        case 1:
          $('#alarm_70').css('background','yellow').css('color','red');
          break;
      }
        break;
      case 2://警報確認済み         
        $('#alarm_70').css('background','red').css('color','white');
        break;
      default://通常
        $('#alarm_70').css('background','black').css('color','white');
        break;
    }//
    //(71)PLCバッテリ低下
    switch(alarm_flag_71){
      case 1://警報発生中
        switch(blinkFlag){
        case 0:
          $('#alarm_71').css('background','red').css('color','white');
          break;
        case 1:
          $('#alarm_71').css('background','yellow').css('color','red');
          break;
      }
        break;
      case 2://警報確認済み         
        $('#alarm_71').css('background','red').css('color','white');
        break;
      default://通常
        $('#alarm_71').css('background','black').css('color','white');
        break;
    }//
    //(72)予備
    switch(alarm_flag_72){
      case 1://警報発生中
        switch(blinkFlag){
        case 0:
          $('#alarm_72').css('background','red').css('color','white');
          break;
        case 1:
          $('#alarm_72').css('background','yellow').css('color','red');
          break;
      }
        break;
      case 2://警報確認済み         
        $('#alarm_72').css('background','red').css('color','white');
        break;
      default://通常
        $('#alarm_72').css('background','black').css('color','white');
        break;
    }//
    //(73)予備
    switch(alarm_flag_73){
      case 1://警報発生中
        switch(blinkFlag){
        case 0:
          $('#alarm_73').css('background','red').css('color','white');
          break;
        case 1:
          $('#alarm_73').css('background','yellow').css('color','red');
          break;
      }
        break;
      case 2://警報確認済み         
        $('#alarm_73').css('background','red').css('color','white');
        break;
      default://通常
        $('#alarm_73').css('background','black').css('color','white');
        break;
    }//
    //(74)予備
    switch(alarm_flag_74){
      case 1://警報発生中
        switch(blinkFlag){
        case 0:
          $('#alarm_74').css('background','red').css('color','white');
          break;
        case 1:
          $('#alarm_74').css('background','yellow').css('color','red');
          break;
      }
        break;
      case 2://警報確認済み         
        $('#alarm_74').css('background','red').css('color','white');
        break;
      default://通常
        $('#alarm_74').css('background','black').css('color','white');
        break;
      }//
      //(75)予備
    switch(alarm_flag_75){
      case 1://警報発生中
        switch(blinkFlag){
        case 0:
          $('#alarm_75').css('background','red').css('color','white');
          break;
        case 1:
          $('#alarm_75').css('background','yellow').css('color','red');
          break;
      }
        break;
      case 2://警報確認済み         
        $('#alarm_75').css('background','red').css('color','white');
        break;
      default://通常
        $('#alarm_75').css('background','black').css('color','white');
        break;
      }//
    }  
});