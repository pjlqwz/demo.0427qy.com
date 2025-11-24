// JavaScript Document
//按需写入所需的函数名
$(function() {
   // browserRedirect();
	$("select.relselet").customSelect();
	isMobile();
	/*导航*/
	/*$('.search').hover(function() {
        $(this).find('.searchBox').stop(0, 0).animate({
            opacity: 1,
            width: '171px'
        });
    }, function() {
        $(this).find('.searchBox').stop(0, 0).animate({
            opacity: 0,
            width: 0
        });
    });*/
	$('.nav ul li').hover(function(){
		$(this).find('.navMenu').stop(true, true).slideDown();
	}, function() {
		$(this).find('.navMenu').stop(true, true).hide();
	});
	
	var len = $('.nav ul li').length - 2;
	//console.log(len);
	$('.nav ul li:last-child').find('.navMenu').css({'left':'auto','right':'-33px'});	
	$('.nav ul li').eq(len).find('.navMenu').css({'left':'auto','right':'-33px'});
	/*服务*/
	$('.serviceDiv dt').click(function() {
       var self = $(this);
        if (!self.parent('dl').hasClass('on')) {
            self.parent('dl').addClass('on');
			self.parent('dl').siblings().removeClass('on');
        } else{
			self.parent('dl').removeClass('on')	
		}
    });
		
	/*$('.headRig dd').click(function() {
       var self = $(this);
        if (!self.hasClass('open')) {
            self.addClass('open').siblings().removeClass('open');
        } else{
			self.removeClass('open')	
		}
    });
	*/
	
	$('.rightBtn').click(function() {
       var self = $(this);
        if (!self.parent('dd').hasClass('open')) {
            self.parent('dd').addClass('open');
			self.parent('dd').siblings().removeClass('open');
        } else{
			self.parent('dd').removeClass('open')	
		}
    });
	
	var menuTop;
	if ($('#menuLineCon').length > 0){
		menuTop = $('#menuLineCon').position().top;
	}
	$(window).scroll(function(){
		var scrollTop = $(window).scrollTop();
		if (scrollTop > menuTop) {
			$('#menuLineCon .mainNav').addClass('posfixed');
		} else {
			$('#menuLineCon .mainNav').removeClass('posfixed');
		}
	});
	
	
	
});

$(function() {	
    // 导航添加信息
    $('.nav li').each(function() {
        var self = $(this);
        var nav = $('#mobileNavTit a');
        if (self.hasClass('on')) {
            var cur = $(this).find('a').html();
            nav.html(cur);
            return false;
        } else {
            nav.html("首页");
        };
    });
	showSlideMenu('#mobileNavTit', '#sideNavCon', '#sideNavScroll');
})

// 展开侧边栏
// @param showdom [点击展开侧边栏的节点]
// @param contains [侧边栏的最外层包裹框]
// @param scroller [生成iscroll的节点]
function showSlideMenu(showdom, contains, scroller) {
    var mobileScroll;

    $(scroller + ' .sideNav li').each(function() {
        if ($(this).find('.sub').length > 0) {
            $(this).children('a').append('<i>+</i>');
        };
    });
    // 展开移动端导航
    $(showdom).click(function(event) {
        document.addEventListener('touchmove', func, false);
        var wh = $(window).height();
        var st = $(window).scrollTop();
        $(contains).height(wh);
		
        $(contains).css({
            'display': 'block',
            top: st
        });
        setTimeout(function() {
            $(scroller).addClass('on');
        }, 0);
        mobileScroll = new IScroll(scroller, {
            click: true,
            scrollY: true
        });

        $(scroller + ' .sideNav li i').off();

        // 移动端导航子类展开
        $(scroller + ' .sideNav li i').on('click', function(ev) {
            // debugger;
            ev.preventDefault();
            if ($(this).hasClass('on')) {
                $(this).removeClass('on');
                $(this).parent().next('.sub').css('height', '0');
                mobileScroll.refresh();
            } else {
                $(this).addClass('on');
                $(this).parent().next('.sub').css('height', 'auto');
                mobileScroll.refresh();
            };
        });
    });
    // 关闭移动端导航
    var closeNav = function() {
        $(scroller).removeClass('on');
        setTimeout(function() {
            $(contains).css('display', 'none');
        }, 500);
        document.removeEventListener('touchmove', func, false);
        mobileScroll.destroy();
    };
    // touch.on(contains, 'swipeleft', function() {
    //     closeNav();
    // });
    $(contains + ' .bg').click(function() {
        closeNav();
    });
}

/**
 * [menuScroll 菜单栏滚动]
 * @param dom [节点id]
 */
function menuScroll(dom) {
    var menuScrollLi = $('#' + dom + ' li');
    var menuScrollUlW = 0;
    var oLeft = 0;
    var oW = $('#' + dom).width();
    var x = 0;

    menuScrollLi.each(function() {
        var WIDTH = $(this).outerWidth()+3;
        menuScrollUlW += WIDTH;
        //console.log(menuScrollUlW);
    });

    $('#' + dom + ' ul').width(menuScrollUlW);

    var len = $('#' + dom + ' ul').width();
    menuScrollLi.each(function() {
        var _this = $(this);
        if (_this.hasClass('on')) {
            oLeft = _this.position().left;

            if (oLeft + oW > len && len > oW) {
                x = -(len - oW);
            } else if (len <= oW) {
                x = 0;
            } else {
                x = -oLeft;
            }
        }
    });

    var menuScrollScroll = new IScroll('#' + dom, {
        click: true,
        scrollX: true,
        eventPassthrough: true,
        startX: x
    });
}

function func(e) {
    e.preventDefault();
}

//设备判断
var isMobile = function () {

    var sUserAgent = navigator.userAgent.toLowerCase();
    var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
    var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
    var bIsMidp = sUserAgent.match(/midp/i) == "midp";
    var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
    var bIsAndroid = sUserAgent.match(/android/i) == "android";
    var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
    var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
	var sw = $(window).width();

    if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM || sw<=1024) {
		
		$('.indexProductDiv .owl-carousel').owlCarousel({
			items:1,
			smartSpeed:450,
			autoplay:true
		});	/*新品推荐*/
		
		imgscroll('.content img');
		
		var heig = $('.caseImg').height();
		//console.log(heig);
		$('.caseText').height(heig);
		//if(sw<=900){
			//$('.indexCaseLeft li:first-child .caseText').css({'bottom':'auto','top':heig+'px'});
		//}
		if(sw<=640){
			$(".group1").colorbox({rel:'group1', innerWidth:'60%', innerHeight:'62%'});
			if(sw<=480){				
				$(".group1").colorbox({rel:'group1', innerWidth:'80%', innerHeight:'55%'});
			}
		}	
		
		/*二维码*/
		$('.shareBox li').click(function(){
			 $(this).find('.wx').fadeToggle();
		});
		
		/* toggle nav */
		$('.categorytit a').click(function(e){
			$('.categoryBox').stop(true,true).slideToggle();
			var evt = e|| window.event;
			evt.stopPropagation ?evt.stopPropagation() : (evt.cancelBubble=true);//阻止事件冒泡
		});
				
		return true;			

   } else {
        // PC
		
		/*二维码*/
		$('.shareBox li').hover(function(){
			$(this).find('.wx').stop(true, true).fadeIn();
		}, function(){
			$(this).find('.wx').stop(true, true).fadeOut();
		});
		$(".group1").colorbox({ rel: 'group1', innerWidth: '99%', innerHeight: '99%' });
		
		/*新品推荐*/
		jQuery(".indexProductBox").slide({ titCell:'.productTab li',mainCell:".indexProductDiv .owl-carousel",effect:"left",autoPlay:true });
		
		return false;
		
		
    }
}

// 弹出图片
function imgscroll(box){
	var myScroll;
	$(box).click(function() {
		var hh = $(window).height();
		var top = $(window).scrollTop();
		//$('.imgdiv').height(hh);
		$('.imgdiv').css({'top':top+'px','height':hh+'px'});
		$('.imgdiv').show();
		document.addEventListener('touchmove', func, false);
		var str = $(this).attr('src');
		$('.imgdiv img').attr('src',str);
		myScroll = new iScroll('wrapper', { zoom:true,zoomMax:2,wheelAction:'scroll',hScrollbar:false,vScrollbar:false,hScroll:true,vScroll:true});
    });
	
	$('.close').click(function() {
		$('.imgdiv').hide();
		document.removeEventListener('touchmove', func, false);
    });		
}

// 打开视频
var openVideo = function(dom) {
	var url = $(dom).find('img').attr('alt');
	$('.index_videoWp .index_videoBox iframe').attr('src',url);
    $('#index_videoWp').show();
    $('video').mediaelementplayer({
        features: ['playpause', 'progress', 'current', 'duration', 'tracks', 'volume', 'fullscreen']
    });
    openVideo.close = function() {
        console.log($('iframe'));
//        $('iframe')[0].player.pause();
        $('#index_videoWp').hide();
           location.reload(); 
    }
}

// 返回顶部
var goToTop = function() {
	$('html,body').stop(true, true).animate({
		'scrollTop': 0
	}, 800);
}

function prosearch_sub() {
    if (document.getElementById("keyword").value == "" || document.getElementById("keyword").value == "请输入关键字") {
        alert("请输入关键词");
        return false;
    }
    return true;
}

function prosearch_sub2() {
    if (document.getElementById("keyword2").value == "" || document.getElementById("keyword2").value == "请输入关键字") {
        alert("请输入关键词");
        return false;
    }
    return true;
}

function searchsub() {
    if (document.getElementById("keyser").value == "") {
        alert("请输入查询关键字");
        return false;
    }
}

