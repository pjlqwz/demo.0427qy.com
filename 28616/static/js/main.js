$(function(){

	/*导航触发*/
	$(".header-menu > ul > li").hover(function() {
        $(this).find(".sub-menu-ul").slideDown(600, 'easeOutBack');
    },function() {
        $(this).find(".sub-menu-ul").slideUp(500, 'easeInOutBack');
    });


    /*search*/
    $('.header-share ul li').eq(0).hover(function(){
    		$(this).find('.search').stop().animate({'width':'159px','border-width':'1px'},325);
    	},function(){
    		$(this).find('.search').stop().animate({'width':'0px','border-width':'0px'},325);
    });


    $('.menu-icon').click(function() {
        if ($(".header-right").css('display') == 'none') {
            $(".header-right").stop().slideDown(650, 'easeOutQuart');
            $('.header-menu > ul > li').addClass('header-li-show');
            $(this).addClass('on');
        } else {
            $(".header-right").stop().slideUp(350, 'easeInQuad');
            $('.header-menu > ul > li').removeClass('header-li-show');
            $(this).removeClass('on');
        }
    });
    var winW = $(window).width();
    if (winW < 768) {
        $(".footer-menu > ul > li").click(function(){
            if ($(this).find(".menu-warp").css('display') == 'none') {
                $(this).find(".menu-warp").stop().slideDown(600, 'easeOutBack');
                $(this).addClass('move');
            } else {
                $(this).find(".menu-warp").stop().slideUp(800, 'easeInOutBack');
                $(this).removeClass('move');
            }
        });

        $('.code-txt').click(function(){
            if($(this).parent().find('.code-img').css('display') == 'none'){
                $(this).parent().find('.code-img').fadeIn();
            }else{
                $(this).parent().find('.code-img').hide();
            }
        });
    }



});
var top = window.screen.height / 2 - 250;  
var left = window.screen.width / 2 - 300;  
var winW = $(window).width(),
    winH = $(window).height(); 
/*title是标题，rLink链接，summary内容，site分享来源，pic分享图片路径,分享到新浪微博*/  
function shareTSina(title, rLink, site, pic) {
    title = "保合电力，我想了解更多！";
    // pic = $(".p-img img").attr("src");  
    rLink = window.location.href;
    site = window.location.href;

    window.open("http://service.weibo.com/share/share.php?&title=" + encodeURIComponent(title.replace(/&nbsp;/g, " ").replace(/<br \/>/g, " ")) + "&url=" + encodeURIComponent(rLink), "分享至新浪微博", "height=500,width=600,top=" + top + ",left=" + left + ",toolbar=no,menubar=no,scrollbars=no, resizable=no,location=no, status=no");

}

/*分享到facebook*/  
function shareFB(title, rLink, summary, site, pic) {
    title = "保合电力，我想了解更多！";
    rLink = window.location.href;
    site = window.location.href;
    window.open('http://www.facebook.com/sharer.phpu=' + encodeURIComponent(location.href) + '&site=' + encodeURIComponent(site), '_blank', 'scrollbars=no,width=600,height=450,left=' + left + ',top=' + top + ',status=no,resizable=yes');

}

// 腾讯微博  
function shareToWb(title, rLink, site, pic) {
    title = "保合电力，我想了解更多！";
    rLink = window.location.href;
    site = window.location.href;
    window.open('http://v.t.qq.com/share/share.php?url=' + encodeURIComponent(rLink) + '&title=' + encodeURI(title) + '&appkey=' + encodeURI(site), '_blank', 'scrollbars=no,width=600,height=450,left=' + left + ',top=' + top + ',status=no,resizable=yes');
}

/*分享到qq空间*/  
function shareQzone(title, rLink, summary, site, pic) {
    title = "保合电力，我想了解更多！";
    rLink = window.location.href;
    summary = "保合电力，我想了解更多！";
    site = window.location.href;
    window.open('http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?title=' + encodeURIComponent(title) + '&url=' + encodeURIComponent(rLink) + '&summary=' + encodeURIComponent(summary) + '&site=' + encodeURIComponent(site), '_blank', 'scrollbars=no,width=600,height=450,left=' + left + ',top=' + top + ',status=no,resizable=yes');

}


// QRcode
$(function() {
    var str = window.location.href;

    $('#code').qrcode(str);

    $('.share-wx').click(function() {
        if ($('#code').css('display') == 'none') {
            $('#code').show();
        } else {
            $('#code').hide();
        };
    });

    $('.code-close').click(function() {
        $('#code').hide();
    });
    $(".mobiSearch button").click(function() {
        $(".mobiSearch").submit();
    });
});