// JavaScript Document
//按需写入所需的函数名
$(function() {
    browserRedirect();
	forms();
	$("select.relselet").customSelect();
	
	$('.searchBtn').click(function() {
        if ($(this).hasClass('on')) {
            $('.mobileSearchCon').stop(true, true).slideUp();
            $(this).removeClass('on');
        } else {
            $('.mobileSearchCon').stop(true, true).slideDown();
            $(this).addClass('on');
        };
    });
	$(".pathdiv a:not(':first-child')").before("<span>&gt;</span>");
	$(".pathdiv a:last-child").addClass('on');
	$(".footLink a:not(':first-child')").before("<span>丨</span>");
	
	/*左侧导航*/
	$('.sideMenuNav li').each(function() {
		var len =  $('.sideMenuNav li .sideDiv');
		//console.log(len);
		if(len.length>0){
			len.parent().find('i').addClass('ibg');
		}
		else{
			len.parent().find('i').removeClass('ibg');
		}
    });
	
});

$(function() {	
    // 导航添加信息
    $('.nav li').each(function() {
        var self = $(this);
        var nav = $('#mobileNavTit');
        if (self.hasClass('on')) {
            var cur = $(this).find('a').html();
            nav.html(cur);
            return false;
        } else {
            nav.html("首页");
        };
    });

    showSlideMenu('#menuBtn', '#sideNavCon', '#sideNavScroll');
    showProMenu('#mobileSideMenuTit', '#sideMenuCon', '#sideMenuScroll');

})

// 导航展开侧边栏
// @param showdom [点击展开侧边栏的节点]
// @param contains [侧边栏的最外层包裹框]
// @param scroller [生成iscroll的节点]
function showSlideMenu(showdom, contains, scroller) {
    var mobileScroll;
    var mobileChlidScroll;

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
            ev.preventDefault();
            var childIndex = $(this).parent('li').index();

            $('.sideChildNav > li').eq(childIndex - 1).show().siblings().hide();

            setTimeout(function() {
                $('#sideChildNavScroll').addClass('on');
            }, 0);

            mobileChlidScroll = new IScroll('#sideChildNavScroll', {
                click: true,
                scrollY: true
            });
        });
    });

    $('#sideChildNavScroll .backBtn').click(function() {
        $('#sideChildNavScroll').removeClass('on');
        mobileChlidScroll.destroy();
    });

    $(scroller + ' .closeSideNavCon').click(function() {
        closeNav();
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
}

// 产品分类展开侧边栏
// @param showdom [点击展开侧边栏的节点]
// @param contains [侧边栏的最外层包裹框]
// @param scroller [生成iscroll的节点]
function showProMenu(showdom, contains, scroller) {
    var mobileScroll;
    var mobileChlidScroll;

    $(contains).find('dd').each(function() {
        if ($(this).find('.sub').length > 0) {
            $(this).find('h5').append('<i></i>');
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

        $(scroller + ' .mobileSideMenu dd i').off();

        // 移动端导航子类展开
        $(scroller + ' .mobileSideMenu dd i').on('click', function(ev) {
            ev.preventDefault();
            var html = $(this).parent().next().html();

            $('#sideChildMenuScroll .sideChildList').html(html);
            setTimeout(function() {
                $('#sideChildMenuScroll').addClass('on');
            }, 0);

            mobileChlidScroll = new IScroll('#sideChildMenuScroll', {
                click: true,
                scrollY: true
            });
        });
    });

    $('#sideChildMenuScroll .backBtn').click(function() {
        $('#sideChildMenuScroll').removeClass('on');
        mobileChlidScroll.destroy();
        $('#sideChildMenuScroll .sideChildList').html('');
    });

    $(scroller + ' .closeSideMenuCon').click(function() {
        closeNav();
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
}

//设备判断
function browserRedirect() {

    var sUserAgent = navigator.userAgent.toLowerCase();
    var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
    var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
    var bIsMidp = sUserAgent.match(/midp/i) == "midp";
    var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
    var bIsAndroid = sUserAgent.match(/android/i) == "android";
    var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
    var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
	//var sw = $(window).width();

    if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
		
		imgscroll('.popImg img');/*弹出图片*/
		imgscroll('.content img');/*弹出图片*/
		
		/* toggle nav */
		var aboutWord,columnWord;
		$('.sideMenuNav li').each(function(){
			if($(this).hasClass('on')){
				aboutWord = $(this).find('a').html();
			}
		});
		$('.mobileTit a').html(aboutWord);

		//导航点击
		$('.mobileTit').click(function(e){
			$('.sideMenuNav').stop(true,true).slideToggle();
			var evt = e|| window.event;
			evt.stopPropagation ?evt.stopPropagation() : (evt.cancelBubble=true);//阻止事件冒泡
		});
		
		$('.columnMenu li').each(function(){
			if($(this).hasClass('on')){
				columnWord = $(this).find('a').html();
			}
		});
		$('.columnMenuTit').html(columnWord);

		//导航点击
		$('.columnMenuTit').click(function(e){
			$('.columnMenu ul').stop(true,true).slideToggle();
			var evt = e|| window.event;
			evt.stopPropagation ?evt.stopPropagation() : (evt.cancelBubble=true);//阻止事件冒泡
		});
		
		
		
		return true;

   } else {
        // PC
		 return false;
    }
}

function func(e) {
    e.preventDefault();
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

//表单相关
function forms(){

	//输入框文字清空还原，控制value
	// <input type="text" value="请输入关键字" />
	$('.search input[type="text"]').focus(function(){
		if($(this).val() ==this.defaultValue){  
			$(this).val("");	
		} 
	}).blur(function(){
		if ($(this).val() == '') {
			$(this).val(this.defaultValue);
		}
	});
	
}
