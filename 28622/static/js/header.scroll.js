$(window).scroll(function() {
    if ($(this).scrollTop() > 30){  // 向下滚动多少像素时执行
        $('header.navbar-default').addClass("sticky");  // 向下滚动添加添加CSS
    }
    else{
        $('header.navbar-default').removeClass("sticky");  // 向上移动移除CSS样式
    }
});  // 放置body前