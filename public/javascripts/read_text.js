'use strict'
$(function(){
  setInterval(function(){
    var bit_data,bit_data2;
    var alm_data,alm_data2;
    var mgr_data,mgr_data2;
    var st1_data,st1_data2;
    var st2_data,st2_data2;
    var st3_data,st3_data2;
    var st4_data,st4_data2;
    var st5_data,st5_data2;
    var kr1_data,kr1_data2;
    var kr2_data,kr2_data2;
    var kr3_data,kr3_data2;
    var kr4_data,kr4_data2;
    var kr5_data,kr5_data2;
    var mix_juryo,mix_juryo2;
    var gn4_juryo,gn4_juryo2;
    var gn5_juryo,gn5_juryo2;
    var bts_data,bts_data2;
    var btp_data,btp_data2;
    
    var dataArray=[];
    $.getJSON('/ajax',function(json){
      // console.log(json);
      var obj = JSON.parse(json);

      bit_data = obj.substr(2,11);
      alm_data = obj.substr(16,11);
      mgr_data = obj.substr(30,11);
      st1_data = obj.substr(44,11);
      st2_data = obj.substr(58,11);
      st3_data = obj.substr(72,11);
      st4_data = obj.substr(86,11);
      st5_data = obj.substr(100,11);
      kr1_data = obj.substr(114,11);
      kr2_data = obj.substr(128,11);
      kr3_data = obj.substr(142,11);
      kr4_data = obj.substr(156,11);
      kr5_data = obj.substr(170,11);
      mix_juryo = obj.substr(184,11);
      gn4_juryo = obj.substr(198,11);
      gn5_juryo = obj.substr(212,11);
      bts_data = obj.substr(226,11);
      btp_data = obj.substr(240,11);

      bit_data2 = bit_data.substr(4,7);
      alm_data2 = alm_data.substr(4,7);
      mgr_data2 = mgr_data.substr(4,7);
      st1_data2 = st1_data.substr(4,7);
      st2_data2 = st2_data.substr(4,7);
      st3_data2 = st3_data.substr(4,7);
      st4_data2 = st4_data.substr(4,7);
      st5_data2 = st5_data.substr(4,7);
      kr1_data2 = kr1_data.substr(4,7);
      kr2_data2 = kr2_data.substr(4,7);
      kr3_data2 = kr3_data.substr(4,7);
      kr4_data2 = kr4_data.substr(4,7);
      kr5_data2 = kr5_data.substr(4,7);
      mix_juryo2 = mix_juryo.substr(4,7);
      gn4_juryo2 = gn4_juryo.substr(4,7);
      gn5_juryo2 = gn5_juryo.substr(4,7);
      bts_data2 = bts_data.substr(4,7);
      btp_data2 = btp_data.substr(4,7);
      
      /*以下データ確認時に復活させること
      console.log(bit_data);
      console.log(alm_data);
      console.log(mgr_data);
      console.log(st1_data);
      console.log(st2_data);
      console.log(st3_data);
      console.log(st4_data);
      console.log(st5_data);
      console.log(kr1_data);
      console.log(kr2_data);
      console.log(kr3_data);
      console.log(kr4_data);
      console.log(kr5_data);
      console.log(mix_juryo);
      console.log(gn4_juryo);
      console.log(gn5_juryo);
      console.log(bts_data);
      console.log(btp_data);
      console.log('------');
      
      console.log(bit_data2);
      console.log(alm_data2);
      console.log(mgr_data2);
      console.log(st1_data2);
      console.log(st2_data2);
      console.log(st3_data2);
      console.log(st4_data2);
      console.log(st5_data2);
      console.log(kr1_data2);
      console.log(kr2_data2);
      console.log(kr3_data2);
      console.log(kr4_data2);
      console.log(kr5_data2);
      console.log(mix_juryo2);
      console.log(gn4_juryo2);
      console.log(gn5_juryo2);
      console.log(bts_data2);
      console.log(btp_data2);
      console.log('------');
      */
      //設定値
      $('#haigo_settei_10').text(st1_data2);
      $('#haigo_settei_11').text(st2_data2);
      $('#haigo_settei_12').text(st3_data2);
      $('#haigo_settei_13').text(st4_data2);
      $('#haigo_settei_14').text(st5_data2);
      
      //計量値
      $('#h1_keiryo').text(kr1_data2);
      $('#h2_keiryo').text(kr2_data2);
      $('#h3_keiryo').text(kr3_data2);
      $('#h4_keiryo').text(kr4_data2);
      $('#h5_keiryo').text(kr5_data2);
      
      //計量値
      $('#mixer_juryo').text(mix_juryo2);
      $('#genryo4_juryo').text(gn4_juryo2);
      $('#genryo5_juryo').text(gn5_juryo2);
      
      //バッチ
      $('#settei_batch').text(bts_data2);
      $('#sokutei_batch').text(btp_data2);
    });
  },3000);
//$(function())終了  
});