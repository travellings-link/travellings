function travelling(fromUrl){

    var url=new Array();

    url[0]="https://github.com/volfclub/travelling";
    url[1]="https://www.volf.club";
    url[2]="https://sonic.volf.club";
    url[3]="https://blog.luhe.xyz";
    url[4]="https://guguga.cn";
    url[5]="https://mQAQm.com";
    url[6]="https://www.yamdr.cn";
    url[7]="https://www.inspire2030.cn";
    url[8]="https://ryanc.cc";
    url[9]="https://seija.me";
    url[10]="https://blog.uniartisan.com";
    url[11]="https://jinqimu.xyz";
    url[12]="https://crowndaisy.com";
    url[13]="https://heycmm.cn";
    url[14]="https://wp.remudaisuki.top";
    url[15]="https://jinjis.cn";

      //修正概率
    url[16]="https://github.com/volfclub/travelling";
    
  
    do{
      var ints=parseInt(Math.random()*(url.length));
    }while(url[ints]==fromUrl);

    window.location=url[ints];
   }
  
   function get_fromUrl(){
    var aUrl=document.referrer;   
    return aUrl;
}  //获取来源地址