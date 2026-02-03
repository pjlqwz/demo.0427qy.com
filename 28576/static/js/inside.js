$(function(){  
    // 返回顶部，当滚动条的位置处于距顶部100像素以下时，跳转链接出现，否则消失  
    $(function () {  
        // 当点击跳转链接后，回到页面顶部位置  
        $('.gotop').click(function(){  
            $('body, html').animate({scrollTop:0},500);  
            return false;  
        });  
    });  
});

$(window).scroll(function(event) {
	var iTop = $(window).scrollTop();//鼠标滚动的距离

	if (iTop > 30) {
		$('.fix-bg-inside i').css('opacity', '1');
	} else {
		$('.fix-bg-inside i').css('opacity', '0');
	}
});