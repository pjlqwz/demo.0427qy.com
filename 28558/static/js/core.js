// JavaScript Document
/*切换*/
//$(document).ready(function () {
//    $("#div2").css("display", "none");
//});
//$(".li").click(function () {

//    var self = this.id.substring(2);
//    $(".tab_child").css("display", "none");
//    $("#div" + self).css("display", "block");
//    $(".li").children("a").removeClass("cu");
//    $("#li" + self).children("a").addClass("cu");
//});
/*==============productShowPic================
 ============================================*/
$('.productShowPic-carousel').jCarouselLite({
    btnPrev: '.productShowPic-prev',
    btnNext: '.productShowPic-next',
    visible: 4,
    circular: false
});
$('.productShowPic-carousel-2').jCarouselLite({
    btnPrev: '.productShowPic-prev-2',
    btnNext: '.productShowPic-next-2',
    visible: 4,
    circular: false
});
var currentImage;
var currentIndex = -1;
function showImage(index) {                    //显示大图(参数index从0开始计数)
    $(".CounterCurrent").html(index + 1);      //更新当前图片页码
    //隐藏或显示向左向右鼠标手势
    var len = $('#OriginalPic img').length;
    if (index == len - 1) {
        $("#aNext").hide();
    } else {
        $("#aNext").show();
    }
    if (index == 0) {
        $("#aPrev").hide();
    } else {
        $("#aPrev").show();
    }           
    if (index < $('#OriginalPic img').length) {    //显示大图 
        var indexImage = $('#OriginalPic p')[index];
        if (currentImage) {                        //隐藏当前的图
            if (currentImage != indexImage) {
                $(currentImage).css('z-index', 2);
                $(currentImage).fadeOut(0, function () {
                    $(this).css({ 'display': 'none', 'z-index': 1 })
                });
            }
        }
        //显示用户选择的图
        $(indexImage).show().css({ 'opacity': 0.4 });
        $(indexImage).animate({ opacity: 1 }, { duration: 200 });
        //更新变量
        currentImage = indexImage;
        currentIndex = index;
        //移除并添加高亮
        $('#ThumbPic img').removeClass('active');
        $($('#ThumbPic img')[index]).addClass('active');

        //设置向左向右鼠标手势区域的高度                        
        //var tempHeight = $($('#OriginalPic img')[index]).height();
        //$('#aPrev').height(tempHeight);
        //$('#aNext').height(tempHeight);                        
    }
}

//下一张
function ShowNext() {
    var len = $('#OriginalPic img').length;
    var next = currentIndex < (len - 1) ? currentIndex + 1 : 0;
    showImage(next);
}

//上一张
function ShowPrep() {
    var len = $('#OriginalPic img').length;
    var next = currentIndex == 0 ? (len - 1) : currentIndex - 1;
    showImage(next);
}

//下一张事件
$("#aNext").click(function () {
    ShowNext();
    if ($(".active").position().left >= 144 * 6) {
        $(".productShowPic-next").click();
    }
});

//上一张事件
$("#aPrev").click(function () {
    ShowPrep();
    if ($(".active").position().left <= 144 * 6) {
        $(".productShowPic-prev").click();
    }
});

//初始化事件
$(".OriginalPicBorder").ready(function () {
    ShowNext();

    //绑定缩略图点击事件
    $('#ThumbPic li').bind('click', function (e) {
        var count = $(this).attr('rel');
        showImage(parseInt(count) - 1);
    });
});

/*++++++++++222222++++++++++*/
var currentImage2;
var currentIndex2 = -1;
function showImage2(index) {

    //更新当前图片页码
    $(".CounterCurrent2").html(index + 1);

    //隐藏或显示向左向右鼠标手势
    var len = $('#OriginalPic2 img').length;
    if (index == len - 1) {
        $("#aNext2").hide();
    } else {
        $("#aNext2").show();
    }

    if (index == 0) {
        $("#aPrev2").hide();
    } else {
        $("#aPrev2").show();
    }

    //显示大图            
    if (index < $('#OriginalPic2 img').length) {
        var indexImage2 = $('#OriginalPic2 p')[index];

        //隐藏当前的图
        if (currentImage2) {
            if (currentImage2 != indexImage2) {
                $(currentImage2).css('z-index', 2);
                $(currentImage2).fadeOut(0, function () {
                    $(this).css({ 'display': 'none', 'z-index': 1 })
                });
            }
        }

        //显示用户选择的图
        $(indexImage2).show().css({ 'opacity': 0.4 });
        $(indexImage2).animate({ opacity: 1 }, { duration: 200 });

        //更新变量
        currentImage2 = indexImage2;
        currentIndex2 = index;

        //移除并添加高亮
        $('#ThumbPic2 img').removeClass('active');
        $($('#ThumbPic2 img')[index]).addClass('active');

        //设置向左向右鼠标手势区域的高度                        
        //var tempHeight = $($('#OriginalPic img')[index]).height();
        //$('#aPrev').height(tempHeight);
        //$('#aNext').height(tempHeight);                        
    }
}

//下一张
function ShowNext2() {
    var len = $('#OriginalPic2 img').length;
    var next = currentIndex2 < (len - 1) ? currentIndex2 + 1 : 0;
    showImage2(next);
}

//上一张
function ShowPrep2() {
    var len = $('#OriginalPic2 img').length;
    var next = currentIndex2 == 0 ? (len - 1) : currentIndex2 - 1;
    showImage2(next);
}

//下一张事件
$("#aNext2").click(function () {
    ShowNext2();
    if ($(".active").position().left >= 144 * 6) {
        $(".productShowPic-next-2").click();
    }
});

//上一张事件
$("#aPrev2").click(function () {
    ShowPrep2();
    if ($(".active").position().left <= 144 * 6) {
        $(".productShowPic-prev-2").click();
    }
});

//初始化事件
$(".OriginalPicBorder2").ready(function () {
    ShowNext2();

    //绑定缩略图点击事件
    $('#ThumbPic2 li').bind('click', function (e) {
        var count = $(this).attr('rel');
        showImage2(parseInt(count) - 1);
    });
});


/*==============nav===============*/
var PUBLIC,APP,ROOT;
var ie = $.browser.msie && $.browser.version <= 8.0,
    ie6 = $.browser.msie && $.browser.version == 6.0;
function ClearContent(txt)
{
    txt.value="";
}
function EnterPress(e){
    var e = e || window.event;
    if(e.keyCode == 13){
        document.getElementById("button").click();
    }
}
//search
$('a').bind("focus", function(){
    $(this).blur();
})
//dashline
if($(".nav-list > li").hasClass("nav-at")) {
    var now = $(".nav-at").find("a").offset().left;
    $(".nav-under").stop().animate({
        "left":now+30,
        "width":$(".nav-at").find("a").width(),
        "opacity":1
    },500)
}
$(".nav-list > li.subli").mouseenter(function () {
    var aIndex = $(this).index();
    var aWidth = $(this).find("a").width();
    var aLeft = $(this).find("a").offset().left;
    $(".nav-under").stop().animate({
        "left": aLeft + 30,
        "width": aWidth,
        "opacity": 1
    }, 500);
$(".nav-bg").slideDown(250);
});
$("#nav").mouseleave(function(){
    if($(".nav-list > li").hasClass("nav-at")) {
        var now = $(".nav-at").find("a").offset().left;
        $(".nav-under").stop().animate({
            "left":now+30,
            "width":$(".nav-at").find("a").width(),
            "opacity":1
        },500);
    } else {
        $(".nav-under").stop().animate({
            "left":0,
            "width":0,
            "opacity":0
        },500);
    }
})
$(".nav-list").mouseleave(function(){
    $(".nav-bg").slideUp(250);
})

$('.nav-carousel-01').jCarouselLite({
    btnPrev: '.nav-prev-01',
    btnNext: '.nav-next-01',
    visible:3,
    circular: true
});
$('.nav-carousel-02').jCarouselLite({
    btnPrev: '.nav-prev-02',
    btnNext: '.nav-next-02',
    visible:3,
    circular: true
});
$('.nav-carousel-03').jCarouselLite({
    btnPrev: '.nav-prev-03',
    btnNext: '.nav-next-03',
    visible:4,
    circular: true
});
$('.nav-carousel-04').jCarouselLite({
    btnPrev: '.nav-prev-04',
    btnNext: '.nav-next-04',
    visible:3,
    circular: true
});
$('.nav-carousel-05').jCarouselLite({
    btnPrev: '.nav-prev-05',
    btnNext: '.nav-next-05',
    visible:3,
    circular: true
});
$('.nav-carousel-06').jCarouselLite({
    btnPrev: '.nav-prev-06',
    btnNext: '.nav-next-06',
    visible:3,
    circular: true
});
$('.nav-carousel-07').jCarouselLite({
    btnPrev: '.nav-prev-07',
    btnNext: '.nav-next-07',
    visible:3,
    circular: true
});
$('.nav-carousel-08').jCarouselLite({
    btnPrev: '.nav-prev-08',
    btnNext: '.nav-next-08',
    visible:3,
    circular: true
});


/*==========banner============*/
/********
var l = $(".banner ul li").length;
var btn="";
for(var i=0;i<l;i++){
    if(i==0){
        btn+='<a data-index="'+i+'" href="#" class="cu"><span class="bannerBtn"></span><span class="bannerBtnHover"></span></a>';
    }
    else{
        btn+='<a data-index="'+i+'" href="#"><span class="bannerBtn"></span><span class="bannerBtnHover"></span></a>';
    }
}
$("#btn").html(btn);
var glume = function(banners_id, focus_id){
    this.$ctn = $('#' + banners_id);
    this.$focus = $('#' + focus_id);
    this.$adLis = null;
    this.$btns = null;
    this.switchSpeed = 3;//自动播放间隔(s)
    this.defOpacity = 1;
    this.crtIndex = 0;
    this.adLength = 0;
    this.timerSwitch = null;
    this.init();
};
glume.prototype = {
    fnNextIndex:function(){
        return (this.crtIndex >= this.adLength-1)?0:this.crtIndex+1;
    },
    //动画切换
    fnSwitch:function(toIndex){
        if(this.crtIndex==toIndex){return;}
        this.$adLis.css('zIndex', 0);
        this.$adLis.filter(':eq('+this.crtIndex+')').css('zIndex', 11);
        this.$adLis.filter(':eq('+toIndex+')').css('zIndex', 10).css('display', '');
        this.$btns.removeClass('cu');
        this.$btns.filter(':eq('+toIndex+')').addClass('cu');
        var me = this;

        $(this.$adLis[this.crtIndex]).animate({
            opacity: 0
        }, 1000, function() {
            me.crtIndex = toIndex;
            $(this).css({
                opacity: me.defOpacity,
                zIndex: 0
            });
        });
    },
    fnAutoPlay:function(){
        this.fnSwitch(this.fnNextIndex());
    },
    fnPlay:function(){
        var me = this;
        me.timerSwitch && clearInterval(me.timerSwitch);
        me.timerSwitch = window.setInterval(function() {
            me.fnAutoPlay();
        },me.switchSpeed*1000);
    },
    fnStopPlay:function(){
        clearInterval(this.timerSwitch);
        this.timerSwitch = null;
    },
    init:function(){
        this.$adLis = this.$ctn.children();
        this.$btns = this.$focus.children();
        this.adLength = this.$adLis.length;

        var me = this;
        //点击切换
        this.$focus.on('click', 'a', function(e) {
            e.preventDefault();
            var index = parseInt($(this).attr('data-index'), 10)
            me.fnSwitch(index);
        });
        this.$adLis.filter(':eq('+ this.crtIndex +')').css('zIndex', 11);
        this.fnPlay();

        //hover时暂停动画
        this.$ctn.hover(function() {
            me.fnStopPlay();
        }, function() {
            me.fnPlay();
        });

        if($.browser.msie && $.browser.version < 7) {
            this.$btns.hover(function() {
                $(this).addClass('hover');
            },function() {
                $(this).removeClass('hover');
            });
        }
    }
};
var player = new glume('banner ul', 'btn');
/*var banner, bannerImg, li, windowWidth, windowHeight;
banner = $(".banner,.banner ul li a img"),
bannerImg = $(".banner ul li a img"),
li = $(".banner ul li"),
windowWidth = $(window).width(),
windowHeight = $(window).height(),
len = li.length;
var css3Effect = [
    "fadeInLeft",
    "fadeInLeftBig",
    "fadeInRight",
    "fadeInRightBig",
    *//*"flipInX",*//*
    *//*"flipInY",*//*
    "rotateInUpLeft",
    "fadeInUp",
    "rollIn",
    *//*"rotateIn",*//*
    "rotateInDownLeft",
    *//*"lightSpeedIn",*//*
    *//*"wiggle",*//*
    "fadeInDownBig",
    "fadeInUpBig",
    "bounceInRight",
    "rotateIn",
    "rotateInDownLeft",
    "rotateInDownRight",
    "rotateInUpLeft",
    "rotateInUpRight",
    "random"
];
var btn="";
for(var i=0;i<l;i++){
    if(i==0){
        btn+='<a data-index="'+i+'" href="#" class="cu"><span class="bannerBtn"></span><span class="bannerBtnHover"></span></a>';
    }
    else{
        btn+='<a data-index="'+i+'" href="#"><span class="bannerBtn"></span><span class="bannerBtnHover"></span></a>';
    }
}
$("#btn").html(btn);
    var scrollBanner = function(banner_id,btn_id){
    this.$banner = $('#' + banners_id);
    this.$focus = $('#' + btn_id);
    this.$adLis = null;
    this.$btns = null;
    this.switchSpeed = 5;//自动播放间隔(s)
    this.defOpacity = 1;
    this.crtIndex = 0;
    this.adLength = 0;
    this.timerSwitch = null;
    this.init();
};

    scrollBanner.prototype = {
        fnNextIndex:function(){
            return(this.crtIndex >= this.adLength-1)?0:this.crtIndex+1;
        },
        fnSwitch:function(toIndex){
            if(this.crtIndex==toIndex){return;}
            this.$adlis.css('zIndex',0);
            this.$adlis.filter(':eq()')
        }
    }*/
/*li.eq(0).css({"opacity": "1", "z-index": 9999}).addClass("");*/

/*=============main CeramicSort===========*/
$('.Ceramic-carousel').jCarouselLite({
    btnPrev: '.Ceramic-prev',
    btnNext: '.Ceramic-next',
    visible:6,
    circular: true
});


/*=================backTop=================*/
$(function(){
    $(window).scroll(function(){
        if($(window).scrollTop()> 300){
            $("#goTop").fadeIn(1000);//一秒渐入动画
        }else{
            $("#goTop").fadeOut(1000);//一秒渐隐动画

        }

    });

    $("#goTop").click(function(){
        $('body,html').animate({scrollTop:0},1000);
    });
});

/*===============百度分享=============
  ===================================*/
window._bd_share_config = {
    "common": {
        "bdSnsKey": {},
        "bdText": "",
        "bdMini": "2",
        "bdPic": "",
        "bdStyle": "0",
        "bdSize": "16"
    }, "share": {}
}; 
with (document) 0[(getElementsByTagName('head')[0] || body).appendChild(createElement('script')).src = 'http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion=' + ~(-new Date() / 36e5)];
with (document) 0[(getElementsByTagName('head')[0] || body).appendChild(createElement('script')).src = 'http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion=' + ~(-new Date() / 36e5)];

