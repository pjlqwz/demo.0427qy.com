$(function() {
    // 动态数字动画函数
    hasAninum = false;

    $(window).scroll(function(){
        var winW = $(window).width(),
            winH = $(window).height(),//可视窗口高度
            scrollT = $(window).scrollTop(),//鼠标滚动的距离
            pu = $(window).width()/1920;

        if (winH + scrollT - $('.nums').offset().top > winH*(1/5) && scrollT < $('.nums').height() + $('.nums').offset().top && !hasAninum) {

            // 动态数字 —— 我们的客户
            $('#aninum-1').prop('number', 0).animateNumber({ 
                number: 23
            }, 2500);
            $('#aninum-2').prop('number', 800).animateNumber({ 
                number: 1000
            }, 3000);
            $('#aninum-3').prop('number', 9).animateNumber({ 
                number: 3
            }, 5000);
            $('#aninum-4').prop('number', 1000000).animateNumber({ 
                number: 20000000,
                numberStep: $.animateNumber.numberStepFactories.separator(',', 3)
            }, 3500);

            hasAninum = true;
        }
    });

    // 出场效果
    var winW = $(window).width(),
        winH = $(window).height(),//可视窗口高度
        scrollT = $(window).scrollTop(),//鼠标滚动的距离
        pu = $(window).width()/1920;

    $(window).scroll(function(){
        winW = $(window).width(),
        winH = $(window).height(),//可视窗口高度
        scrollT = $(window).scrollTop(),//鼠标滚动的距离
        pu = $(window).width()/1920;

        divMove('.pros');
        divMove('.news');
        divMove('.serv');

        function divMove(sel) {
            if (winH + scrollT - $(sel).offset().top > winH*(3.3/5) && scrollT < $(sel).height() + $(sel).offset().top) {
                $(sel).addClass('move');
                $(sel).find('.letmove').addClass('move');
            }
        }
    });

});
