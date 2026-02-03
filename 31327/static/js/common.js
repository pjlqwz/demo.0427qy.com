function nav(father, son, bor, del) { //判断导航栏，如果太长自动隐藏  参数:父元素,子元素,border的大小,是否延迟
    var delay = del ? del : 0;
    var func = function () {
        var chd = $(son);
        var nav = $(father)
            .width();
        var chd_width = 0;
        var border = bor ? bor : 0;
        chd.show();
        chd.each(function () {
            var w = $(this)
                .width();
            var pl = $(this)
                .css("padding-left");
            var pr = $(this)
                .css("padding-right");
            var ml = $(this)
                .css("margin-left");
            var mr = $(this)
                .css("margin-right");
            var width = parseInt(w) + parseInt(pl) + parseInt(pr) + parseInt(ml) + parseInt(mr) + border;
            chd_width += width;
            if (chd_width > nav) {
                $(this)
                    .hide();
            } else {
                $(this)
                    .show();
            }
        });
    }
    func();
    $(window)
        .resize(function () {
            if (delay) {
                setTimeout(func, 210);
            } else {
                func();
            }
        });
}

function showthis(o1, o2, i, c) {
    $(o1)
        .eq(i)
        .addClass(c)
        .siblings(o1)
        .removeClass(c);
    $(o2)
        .eq(i)
        .show()
        .siblings(o2)
        .hide();
}

function SetEditorContents(ContentsId) { //PC版编辑器设置
    var _this = $(ContentsId);
    var _img = _this.find("img");
    _img.each(function () {
        var _float = $(this)
            .css("float");
        if (_float == 'left') {
            $(this)
                .css("margin-right", "20px");
        } else if (_float == 'right') {
            $(this)
                .css("margin-left", "20px");
        }
    });
    _this.find('td')
        .css('word-break', 'normal');
}
$(function () { SetEditorContents("#global_editor_contents"); })

function product_gallery() { //产品详细页放大镜
    if ($('body')
        .hasClass('mode_horizontal')) {
        var node_name = 'horizontal'
            , pic_num = 1;
    } else {
        var node_name = 'vertical'
            , pic_num = 4;
    }
    if ($('.ey_pro_detail .gallery .left_small_img .pic_box')
        .length > pic_num) {
        $('.left_small_img_inner')
            .bxSlider({
                mode: node_name
                , auto: false
                , slideWidth: 90
                , minSlides: 4
                , maxSlides: 4
                , moveSlides: 1
                , slideMargin: 20
            });
    }
    
    $('.ey_pro_detail .products_img ul')
        .bxSlider({
            slideWidth: $('.ey_pro_detail .products_img ul')
                .width()
            , pager: false
            , auto: false
            , minSlides: 1
            , maxSlides: 1
            , moveSlides: 1
            , slideMargin: 0
        });
    
    $('#small_img .small_img_list .bd , .left_small_img')
        .on('click', 'span', function () {
            $bigPic = $('.gallery .bigimg');
            if ($(this)
                .attr('pos') == 'video') { //视频
                $bigPic.find(".zoom_out")
                    .hide();
                $bigPic.find(".video_container")
                    .show();
                $(this)
                    .addClass('on')
                    .siblings('span')
                    .removeClass('on');
                $('#zoom')
                    .css('width', 'auto');
                var_j(document)
                    .a('domready', MagicZoom.refresh);
                var_j(document)
                    .a('mousemove', MagicZoom.z1);
            } else {
                $bigPic.find(".zoom_out")
                    .show();
                $bigPic.find(".video_container")
                    .hide()
                    .find('.ytp-chrome-bottom .ytp-play-button')
                    .click();
                var img = $(this)
                    .attr('pic');
                var big_img = $(this)
                    .attr('big');
                if ($('#bigimg_src')
                    .length) {
                    $('#bigimg_src')
                        .attr('src', img)
                        .parent()
                        .attr('href', big_img);
                } else {
                    $('#zoom')
                        .find('img')
                        .attr('src', img)
                        .parent()
                        .attr('href', big_img);
                }
                $(this)
                    .addClass('on')
                    .siblings('span')
                    .removeClass('on');
                $('#zoom')
                    .css('width', 'auto');
                var_j(document)
                    .a('domready', MagicZoom.refresh);
                var_j(document)
                    .a('mousemove', MagicZoom.z1);
            }
        });
    var_j(document)
        .a('domready', MagicZoom.refresh);
    var_j(document)
        .a('mousemove', MagicZoom.z1);
}

function case_gallery() { // 案例详细页
    $('#small_img .small_img_list .bd')
        .delegate('span', 'click', function () {
            var img = $(this)
                .attr('pic');
            var big_img = $(this)
                .attr('big');
            $('#bigimg_src')
                .attr('src', img)
                .parent()
                .attr('href', big_img);
            $(this)
                .addClass('on')
                .siblings('span')
                .removeClass('on');
        });
}
$(function () {
    
    
    $('.description .global_mtitle')
        .click(function () {
            var _this = $(this)
                , obj = _this.siblings('.editor_cnt')
                , content = obj.find('#global_editor_contents')
                , height = content.outerHeight(true)
                , cur = _this.hasClass('cur');
            if (cur) {
                _this.removeClass('cur');
                height = 0;
            } else {
                _this.addClass('cur');
            }
            obj.height(height);
            var sib = _this.parents('.contents')
                .siblings('.contents');
            sib.find('.global_mtitle')
                .removeClass('cur');
            sib.find('.editor_cnt')
                .height(0);
        })
    
    if ($(window)
        .width() < 768) {
        $('.description .global_mtitle')
            .eq(0)
            .click();
    }
    
    /*社交媒体*/
    $("#chat_window .chat_box.is_respon .chat_box_menu .more")
        .click(function () {
            $("#chat_window .chat_box .box")
                .toggleClass("show");
        });
    $("#chat_window .chat_box .box .chat_close")
        .click(function () {
            $("#chat_window .box_area .chat_item .item .relimg")
                .slideUp();
            $("#chat_window .chat_box .box")
                .removeClass("show");
        });
    
    $("#chat_window .box_area .chat_item .item")
        .click(function () {
            $(this)
                .find('.relimg')
                .stop()
                .slideToggle();
        });
    
    $(window)
        .scroll(function () {
            if ($(window)
                .scrollTop() > 0) {
                $('#go_top')
                    .addClass("show");
            } else {
                $('#go_top')
                    .removeClass("show");
            }
        });
    $('#go_top')
        .click(function () {
            $("html, body")
                .animate({ "scrollTop": 0 }, 700);
        });
    
    //添加包裹class；处理响应式时table宽度超出内容区的问题
    $("#global_editor_contents table")
        .wrap("<div class='editor_table_wrap'></div>");
    
    $('.dark')
        .css({ opacity: "0.5" }); //透明公共样式
    
    
    
    
    //关闭搜索框
    $('body')
        .on('click', '#default_search_box i', function () {
            //判断 是否在关闭过程中
            if ($('#default_search_box')
                .is(":animated")) { return false; }
            $('#default_search_box')
                .fadeOut("slow", function () {
                    $('#default_search_box')
                        .remove();
                });
        });
    
    
    
    
    $('.ey_pro_lb .color_list .color_item')
        .click(function () {
            $(this)
                .addClass('cur')
                .siblings('.color_list .color_item')
                .removeClass('cur');
            $(this)
                .parents('.item')
                .find('.img img')
                .attr('src', $(this)
                    .data('img'));
        });
    $('.ey_pro_lb .color_list .color_item:eq(0)')
        .click();
    
    if ($('.loading_img')
        .length > 0) {
        function scr_img() {
            var viewHeight = $(window)
                .height();
            var scrollHeight = $(window)
                .scrollTop();
            var cut_height = scrollHeight + viewHeight - 50;
            $('.loading_img')
                .each(function (index, elem) {
                    if (cut_height > $(elem)
                        .offset()
                        .top && !$(elem)
                        .hasClass('loaded_img')) {
                        $(elem)
                            .attr('src', $(elem)
                                .attr('data-src'));
                        $(elem)
                            .addClass('loaded_img');
                    }
                });
        }
        scr_img();
        $(window)
            .scroll(function () {
                scr_img();
            });
    }
    
});
//main.js
$(function () {
    //导航隐藏
    nav('.eyou_header_nav ul', '.eyou_header_nav ul li');
    //首页产品滑动
    if ($('#eyou_pro')
        .length >= 1) {
        var myProSwiper = new Swiper('#eyou_pro', {
            slidesPerView: 4
            , slidesPerGroup: 1
            , spaceBetween: 40
            , autoHeight: true
            , prevButton: '.swiper-button-prev'
            , nextButton: '.swiper-button-next'
            , breakpoints: {
                1000: {
                    slidesPerView: 2
                    , slidesPerGroup: 1
                    , spaceBetween: 15
                , }
                , 1200: {
                    spaceBetween: 25
                , }
                , 1500: {
                    spaceBetween: 30
                , }
            }
        , });
    }
    //首页图文模块滑动
    if ($('#eyou_variou')
        .length >= 1) {
        new Swiper('#eyou_variou', {
            slidesPerView: 1
            , spaceBetween: 30
            , autoHeight: true
            , prevButton: '.swiper-button-prev'
            , nextButton: '.swiper-button-next'
            , pagination: '.swiper-pagination'
            , paginationType: 'fraction'
            , paginationFractionRender: function (swiper, currentClassName, totalClassName) {
                return '<span class="' + currentClassName + '"></span>' +
                    ' of ' +
                    '<span class="' + totalClassName + '"></span>';
            }
        });
    }
    //底部 手机版上下拉动
    $('.eyou_foot_menu .eyou_menu_list dl dt')
        .click(function () {
            if ($(window)
                .width() >= 1000) {
                return false;
            }
            if ($(this)
                .hasClass('on')) {
                $(this)
                    .removeClass('on');
                $(this)
                    .nextAll('dd')
                    .stop()
                    .hide(300);
            } else {
                $(this)
                    .addClass('on');
                $(this)
                    .nextAll('dd')
                    .stop()
                    .show(300);
            }
        });
    //底部 手机版上下拉动
    $('.eyou_foot_contact_title')
        .click(function () {
            if ($(window)
                .width() >= 1000) {
                return false;
            }
            if ($(this)
                .hasClass('on')) {
                $(this)
                    .removeClass('on');
                $(this)
                    .next('.eyou_foot_contact_text')
                    .stop()
                    .hide(300);
            } else {
                $(this)
                    .addClass('on');
                $(this)
                    .next('.eyou_foot_contact_text')
                    .stop()
                    .show(300);
            }
        });
    
    //内页（产品列表页）HOT PRODUCTS 滑动
    if (typeof ($('.slider')
            .bxSlider) == 'function') {
        $('.slider')
            .bxSlider({
                slideWidth: 288
                , minSlides: 2
                , maxSlides: 4
                , slideMargin: 16
                , controls: false
            });
    };
});
