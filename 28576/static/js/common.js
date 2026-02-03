var winW = $(window).width(),
	winH = $(window).height();

$(function() {
    // 手机判断
    var MobileUA = (function() {  
        var ua = navigator.userAgent.toLowerCase();  
        var mua = {  
            IOS: /ipod|iphone|ipad/.test(ua), //iOS  
            IPHONE: /iphone/.test(ua), //iPhone  
            IPAD: /ipad/.test(ua), //iPad  
            ANDROID: /android/.test(ua), //Android Device  
            WINDOWS: /windows/.test(ua), //Windows Device  
            TOUCH_DEVICE: ('ontouchstart' in window) || /touch/.test(ua), //Touch Device  
            MOBILE: /mobile/.test(ua), //Mobile Device (iPad)  
            ANDROID_TABLET: false, //Android Tablet  
            WINDOWS_TABLET: false, //Windows Tablet  
            TABLET: false, //Tablet (iPad, Android, Windows)  
            SMART_PHONE: false //Smart Phone (iPhone, Android)  
        };  

        mua.ANDROID_TABLET = mua.ANDROID && !mua.MOBILE;  
        mua.WINDOWS_TABLET = mua.WINDOWS && /tablet/.test(ua);  
        mua.TABLET = mua.IPAD || mua.ANDROID_TABLET || mua.WINDOWS_TABLET;  
        mua.SMART_PHONE = mua.MOBILE || mua.TABLET; // 响应式
        // mua.SMART_PHONE = mua.MOBILE && !mua.WINDOWS_TABLET; // iPad也显示PC效果
        // mua.SMART_PHONE = false;  // 改成手机也显示PC效果

        return mua;  
    }());

    // 客服手机与PC的切换
    if (MobileUA.SMART_PHONE) {
        //从url中获取参数值
        function qqPC2M(sel, source, target) {
            var reg = new RegExp("(^|\\?|&)"+ target +"=([^&]*)(\\s|&|$)", "i");
            if (reg.test($(sel).attr(source))) {
                var val = unescape(RegExp.$2.replace(/\+/g, " "));
            } 

            $(sel).attr(source, 'mqqwpa://im/chat?chat_type=wpa&uin=' + val + '&version=1&src_type=web&web_src=oicqzone.com');
        }

        qqPC2M('.ser_1', 'href', 'uin');
        qqPC2M('.ser_2', 'href', 'uin');
        qqPC2M('.ser_3', 'href', 'uin');
    }

    // fix-nav-all
    $('.fix-nav-close-click').click(function() {
        if ($('.fix-nav-all').hasClass('on')) {
            $('.fix-nav-all').removeClass('on')
        } else {
            $('.fix-nav-all').addClass('on')
        }
    });

    $('.fix-qq-one-first').click(function(event) {
    	if ($('.fix-qq-all').not('.fix-share-all').hasClass('show')) {
    		$('.fix-qq-all').not('.fix-share-all').removeClass('show');
            $('.fix-qqimg-h i, .fix-qqimg i').css('opacity', '0');
    	} else {
    		$('.fix-qq-all').not('.fix-share-all').addClass('show');
            $('.fix-qqimg-h i, .fix-qqimg i').css('opacity', '1');
    	}
    });

    // 如果没有友情链接就隐藏
    if (!$('.footer-friend').find('a').length) {
        $('.footer-friend').hide();
    }

});

$(window).load(function() {
    // 手机导航初加载体验
    if (winW < 993) {
        setTimeout(function() {
            $('.fix-nav-all').css('opacity', '1');
        }, 300);
    }
});

var top = window.screen.height / 2 - 250;
var left = window.screen.width / 2 - 300;

/*title是标题，rLink链接，summary内容，site分享来源，pic分享图片路径,分享到新浪微博*/
function shareTSina(title, rLink, site, pic) {
    // title = "木立方·定制屋，我想了解更多！";
    // pic = $(".p-img img").attr("src");  
    rLink = window.location.href;
    site = window.location.href;

    window.open("http://service.weibo.com/share/share.php?&title=" + encodeURIComponent(title.replace(/&nbsp;/g, " ").replace(/<br \/>/g, " ")) + "&url=" + encodeURIComponent(rLink), "分享至新浪微博", "height=500,width=600,top=" + top + ",left=" + left + ",toolbar=no,menubar=no,scrollbars=no, resizable=no,location=no, status=no");
}

