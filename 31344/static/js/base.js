//选项卡
$(function(){
    $('.tit-switch').children().children("li").mouseover(function(){
        $(this).addClass('u-active').siblings().removeClass('u-active');
        $(this).parent().parent().siblings('.list-switch').hide().eq($(this).index()).show();
    });
})
//返回顶部
$(function(){
    $('.j-goTop').click(function(){
        $('body,html').animate({scrollTop:0},800);
        return false;
    });
})
//友情连接
$(function(){
    $('.m-links').hover(function(){
        $(this).children('.m-linkbox').show();
        $(this).children('p').addClass('u-active');
    },function(){
        $(this).children('.m-linkbox').hide();
        $(this).children('p').removeClass('u-active');
    });
});
//页头部门选择
$(function(){
    $('.m-branch').hover(function(){
        $('.g-branch').show();
        $('.u-branch').addClass('u-active');
    },function(){
        $('.g-branch').hide();
        $('.u-branch').removeClass('u-active');
    });
});
//列表页左侧栏目显示隐藏
$(function(){
    $('.g-listlf h2').click(function(){
        $('.g-listlf ul').toggle(500);
    });
});
//首页二级导航显示隐藏
$(function(){
	$('.u-yjnav').hover(function(){
		$(this).addClass('u-active');
		$('.m-ejnavs .m-navmenu').eq($(this).index()).show();
	},function(){
		$(this).removeClass('u-active');
		$('.m-ejnavs .m-navmenu').hide();
	})
	$('.m-ejnavs .m-navmenu').hover(function(){
		$(this).show();
		$('.g-nav li').eq($(this).index()).addClass('u-active');
	},function(){
		$(this).hide();
		$('.g-nav li').eq($(this).index()).removeClass('u-active');
	});
})
// 表格选项卡
$(function(){
    $('.tit-switch-1').children().children("li").mouseover(function(){
        $(this).addClass('u-active').siblings().removeClass('u-active');
        $(this).parent().parent().siblings('.list-switch-1').hide().eq($(this).index()).show();
    });
})
// 选项卡2
$(function(){
    $('.tit-switch-2').children().children("li").mouseover(function(){
        $(this).addClass('u-active').siblings().removeClass('u-active');
        $(this).parent().parent().siblings('.list-switch-2').hide().eq($(this).index()).show();
    });
})
// 选项卡2
$(function(){
    $('.g-radio').children().children("li").click(function(){
        $(this).addClass('u-active').siblings().removeClass('u-active');
    });
})
