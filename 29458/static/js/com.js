// 入场动画函数
function animateDIY() {
  var hh = $(window).height();
  var a = $(this).scrollTop();
  //滚动到b-a<hh/1.1 && a-b<hh这个范围展示效果
  $('.teaser,.lefter,.righter,.downer,.lter,.rter, .riser, .emerge').each(
    function () {
      var b = $(this).offset().top;
      if (b - a < hh / 1.05 && a - b < hh) {
        $(this).addClass('is-visible');
      }
    }
  );
}

$(document).ready(function () {
  animateDIY();
  // 入场动画
  $(window).scroll(function (e) {
    animateDIY();
  });
});

$(document).ready(function () {
  //让IE9支持placeholder
  $('input, textarea').placeholder();
});

$(function () {
  // 显示 移动端侧边导航
  $('.md-head  .head_2 .more').click(function () {
    $('.md-head ').addClass('m_show');
  });

  // 影藏 移动端侧边导航
  $('.md-head .mob_mask').click(function () {
    $('.md-head ').removeClass('m_show');
  });

  // 移动端侧边导航 点击显示 二级导航
  $('.md-mob_sideNav  .ul1 .li1 ').click(function () {
    if ($(this).hasClass('show')) {
      $(this).removeClass('show');

      $(this).find('.ul2').slideUp('300');
    } else {
      $(this).addClass('show');
      $(this).find('.ul2').slideDown('300');
    }
  });

  $('.md-head .mob_show .search').click(function () {
    $('.md-search_form ').addClass('show');
  });

  $('.md-search_form  .mask').click(function () {
    $('.md-search_form ').removeClass('show');
  });

  $('#agree').click(function () {
    $(this).toggleClass('on');
  });

  $('.md-foot_dialog .fd_j').click(function () {
    $('.md-foot_dialog .fd_bb').slideToggle(500);

    if ($('.md-foot_dialog').hasClass('on')) {
      $('.md-foot_dialog').removeClass('on');
    } else {
      $('.md-foot_dialog').addClass('on');
    }
  });

  $('#goTop').click(function () {
    $('html, body').animate(
      {
        scrollTop: 0,
      },
      500
    );
  });

  $('.com_page .com_le .dd1').click(function () {
    if ($(window).width() < 900) {
      if ($(this).parent().hasClass('on')) {
        $(this).parent().removeClass('on');
        $(this).parent().find('.le_ul2').slideUp();
      } else {
        $(this).parent().addClass('on');
        $(this).parent().find('.le_ul2').slideDown();
      }
    }
  });
});

$(document).ready(function () {
  animateDIY();
  // 入场动画
  $(window).scroll(function (e) {
    animateDIY();
  });
});
$(function(){
	//所有图片加载完后再引入第三方字体
var loadedNum = 0
	var imgs = document.querySelectorAll("img")
	for(var i=0;i<imgs.length;i++){
			if(imgs[i].complete){
					addOne()
			}else{
					imgs[i].addEventListener("load",addOne)
					imgs[i].addEventListener("error",addOne)
			}
	}
	function addOne(){
			loadedNum++
			if(loadedNum == imgs.length){
					//加个setTimeout可以让浏览器的刷新按钮不转
					setTimeout(function(){
							loadFont()
					},100)
			}
	}
function loadFont(){
	$('<link href="/template/pc/skin/css/font.css" type="text/css" rel="stylesheet" />').appendTo($("head"))
}
})
// 弹出层相关
var hn = {
    dragging: false,
    dragX: 0,
    dragY: 0,
    dragEl: null,
    dragBox: null,
    dragMaxX: 0,
    dragMaxY: 0,
    dragHasSet: false,
    msg: function(text, el, fn) {
        var hnTip = $("#hnTip")
        if (!hnTip.length) {
            hnTip = $('<div class="hn-tip" id="hnTip"><div class="hn-mask"></div><div class="hn-msg"></div></div>')
            $("body").append(hnTip)
        }
        hnTip.find(".hn-msg").html(text || '')
        setTimeout(function() {
            hnTip.addClass("show")
        }, 1)
        el = el || {}
        var time = el.time || 1500
        setTimeout(function() {
            hnTip.removeClass("show")
            typeof el == 'function' && el()
            typeof fn == 'function' && fn()
        }, time)
    },
    load: function(text, el, fn) {
        var hnLoad = $("#hnLoad")
        if (!hnLoad.length) {
            hnLoad = $('<div class="hn-load" id="hnLoad"><div class="hn-mask"></div><div class="hn-load-cont"><div class="hn-load-icon"></div><div class="hn-load-title"></div></div></div>')
            $("body").append(hnLoad)
        }
        hnLoad.find(".hn-load-title").html(text || '')
        setTimeout(function() {
            hnLoad.addClass("show")
        }, 1)
        el = el || {}
        var time = el.time || 360000
        setTimeout(function() {
            hnLoad.removeClass("show")
            typeof el == 'function' && el()
            typeof fn == 'function' && fn()
        }, time)
    },
    hideLoad: function() {
        $("#hnLoad").removeClass("show")
    },
    confirm: function(el) {
        var hnConfirm = $("#hnConfirm")
        if (!hnConfirm.length) {
            hnConfirm = $('<div class="hn-confirm" id="hnConfirm"><div class="hn-mask"></div><div class="hn-confirm-dialog"><div class="hn-confirm-title"></div><div class="hn-confirm-close" onclick="hn.hideConfirm()">✕</div><div class="hn-confirm-cont"></div><div class="hn-confirm-btns"></div></div></div>')
            $("body").append(hnConfirm)
        }
        hn.dragEl = hnConfirm.find(".hn-confirm-title")
        hn.dragBox = hnConfirm.find(".hn-confirm-dialog")
        hn.setDrag()
        hn.dragEl.text(el.title || '')
        hnConfirm.find(".hn-confirm-cont").text(el.content || '')
        var btns = hnConfirm.find(".hn-confirm-btns")
        btns.html('')
        if (el.btn.length) {
            for (var i = 0; i < el.btn.length; i++) {
                if (i == 0) {
                    $('<a class="c-btn c-blue">' + el.btn[i] + '</a>').appendTo(btns)
                } else {
                    $('<a class="c-btn c-white">' + el.btn[i] + '</a>').appendTo(btns)
                }
            }
        }
        if (el.callback.length) {
            var cbtn = btns.find(".c-btn")
            for (var i = 0; i < el.callback.length; i++) {
                cbtn.eq(i).on("click", el.callback[i])
            }
        }
        hn.dragBox.css({
            left: ($(window).width() - hn.dragBox.outerWidth()) / 2,
            top: ($(window).height() - hn.dragBox.outerHeight()) / 2
        })
        setTimeout(function() {
            hnConfirm.addClass("show")
        }, 1)
    },
    hideConfirm: function() {
        $("#hnConfirm").removeClass("show")
    },
    open: function(el) {
        var hnHtml = $("#hnHtml")
        if (!hnHtml.length) {
            hnHtml = $('<div class="hn-html" id="hnHtml"><div class="hn-mask"></div><div class="hn-html-dialog"><div class="hn-html-title"></div><div class="hn-html-close" onclick="hn.hideOpen()">✕</div><div class="hn-html-cont"></div></div></div>')
            $("body").append(hnHtml)
        }
        hn.dragEl = hnHtml.find(".hn-html-title")
        hn.dragBox = hnHtml.find(".hn-html-dialog")
        hn.setDrag()
        hn.dragEl.text(el.title || '')
        var cont = hnHtml.find(".hn-html-cont")
        cont.html(el.content || '')
        var area = el.area || [600, 338]
        cont.css({
            width: area[0],
            height: area[1] - hn.dragEl.outerHeight()
        })
        hn.dragBox.css({
            left: ($(window).width() - hn.dragBox.outerWidth()) / 2,
            top: ($(window).height() - hn.dragBox.outerHeight()) / 2
        })
        setTimeout(function() {
            hnHtml.addClass("show")
        }, 1)
    },
    hideOpen: function() {
        $("#hnHtml").removeClass("show")
    },
    //让弹窗可拖动
    setDrag: function() {
        hn.dragEl.off("mousedown").on("mousedown", function(e) {
            hn.dragX = e.offsetX
            hn.dragY = e.offsetY
            hn.dragMaxX = $(window).width() - hn.dragBox.outerWidth()
            hn.dragMaxY = $(window).height() - hn.dragBox.outerHeight()
            hn.dragging = true
        })
        if (hn.dragHasSet) {
            return
        } else {
            hn.dragHasSet = true
        }
        $(document).on("mousemove", function(e) {
            if (hn.dragging) {
                var x = e.pageX - hn.dragX - $(window).scrollLeft()
                var y = e.pageY - hn.dragY - $(window).scrollTop()
                x = x < 0 ? 0 : x
                y = y < 0 ? 0 : y
                x = x > hn.dragMaxX ? hn.dragMaxX : x
                y = y > hn.dragMaxY ? hn.dragMaxY : y
                hn.dragBox.css({
                    left: x,
                    top: y
                })
            }
        })
        $(document).on("mouseup", function(e) {
            hn.dragging = false
        })
    }
}