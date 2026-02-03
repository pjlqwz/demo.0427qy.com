var tme={};
tme.init=$(function(){

    var browser = (function(){
        var ua = window.navigator.userAgent.toLowerCase(), sys = null, s;
        if(s = ua.match(/rv:([\d.]+)\) like gecko/)){sys = {type:'ie',version:s[1]};}
        else if(s = ua.match(/msie ([\d.]+)/)){sys = {type:'ie',version:s[1]};}
        else if(s = ua.match(/firefox\/([\d.]+)/)){sys = {type:'firefox',version:s[1]};}
        else if(s = ua.match(/chrome\/([\d.]+)/)){sys = {type:'chrome',version:s[1]};}
        else if(s = ua.match(/opera.([\d.]+)/)){sys = {type:'opera',version:s[1]};}
        else if(s = ua.match(/version\/([\d.]+).*safari/)){sys = {type:'safari',version:s[1]};}
        else if(s = ua.match(/ucbrowser\/([\d.]+)/)){sys = {type:'uc',version:s[1]};}
        else if(s = ua.match(/micromessenger\/([\d.]+)/)){sys = {type:'wx',version:s[1]};}
        else{sys = {type:'unknown',version:'unknown'};}
        sys.isMobile = !!ua.match(/AppleWebKit.*Mobile.*!/) || !!ua.match(/(iPhone|iPod|Android|ios|iPad)/i);
        return sys;
    })();
    
    /*检测IE*/
    if(browser.type =="ie" && browser.version < 10){
        location.href="http://www.jltech.cn/upgradeBrowser/";
    }

    /*判断谷歌27*/
    if(browser.type == 'chrome' && browser.version <= 27){
        $('.font_scale8, .font_scale10').addClass('font_adjust');
    }  
    if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))){
        new WOW().init();
    };
    //手机端导航
    $('#menu').mmenu();
    //返回顶部
    $('.to_top').click(function(){
        $('body,html').animate({scrollTop:0},300);
    })

    //PC导航
    $(".nav_pc li").hover(
      function(){
        $(this).children('.nav-2nd').stop(true,true).slideDown('fast');
    },
      function(){
        $(this).children('.nav-2nd').stop(true,true).slideUp('fast');
      } 
    )
    
})
$(document).ready( tme.init );

