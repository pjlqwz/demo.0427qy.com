$(function(){
	//下拉菜单	
	$('.mainlevel').hover(function() {
		var wei = $('.menu li').index($(this));
		//$(this).prev("li").addClass("nobg");
		$(".menu li").eq(wei).find('.lbul').slideDown();
		$(".menu li").eq(wei).prev().addClass("nobg");
		$(".menu li").eq(wei).addClass("hover");
	},
	function() {
		//$(this).prev("li").removeClass("nobg");
		var wei = $('.menu li').index($(this));
		$(".menu li").eq(wei).find('.lbul').slideUp();
		$(".menu li").eq(wei).prev().removeClass("nobg");
		$(".menu li").eq(wei).removeClass("hover");
	});	
	//产品分类
	$(".shohide").click(function(){			
			var hh = $(this).parents("h3");
			var hhp = hh.parents(".subnav");
			var ul = hh.next(".sub-menu");
　　		  　ul.slideToggle("400").siblings(".sub-menu").slideUp("400").removeClass("sub-menu-show");
			hh.toggleClass("active");
			ul.toggleClass("sub-menu-show").siblings(".sub-menu-show").removeClass("sub-menu-show");
			hh.siblings(".active").removeClass("active");
　　});
	//关注我们
	$('#floatmenu_weixin').hover(function(){
		$('#weixin_show').show();
	},function(){
		$('#weixin_show').hide();
	});
	//返回顶部
	$('#floatmenu_fanhui').click(function(){
		$("html ,body").animate({scrollTop :0},1000);
	})
	//滑块hover
 
});



 //  加入收藏 <a onclick="AddFavorite(window.location,document.title)">加入收藏</a>

    function AddFavorite(sURL, sTitle) {
        try {
            window.external.addFavorite(sURL, sTitle);
        }
        catch (e) {
            try {
                window.sidebar.addPanel(sTitle, sURL, "");
            }
            catch (e) {
                alert("加入收藏失败，请使用Ctrl+D进行添加");
            }
        }
    }
    //设为首页 <a onclick="SetHome(this,window.location)">设为首页</a>
    function SetHome(obj, vrl) {
        try {
            obj.style.behavior = 'url(#default#homepage)'; obj.setHomePage(vrl);
        }
        catch (e) {
            if (window.netscape) {
                try {
                    netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
                }
                catch (e) {
                    alert("此操作被浏览器拒绝！\n请在浏览器地址栏输入“about:config”并回车\n然后将 [signed.applets.codebase_principal_support]的值设置为'true',双击即可。");
                }
                var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch);
                prefs.setCharPref('browser.startup.homepage', vrl);
            } else {
                alert("您的浏览器不支持，请按照下面步骤操作：1.打开浏览器设置。2.点击设置网页。3.输入：" + vrl + "点击确定。");
            }
        }
    } 
