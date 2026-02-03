$(function () {
    //弹出视频https://v.qq.com/x/page/x0313kr74jh.html
    $('body').on('click', '.fancybox-media', function () {
        var hrefs = $(this).prop('href');
        var htmls = '<iframe id="fancybox-frame33" name="fancybox-frame33" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" src="' + hrefs + '"></iframe>';
        var video = '<video id="my-video" class="video-js" controls preload="auto" width="700" height="264" poster="" data-setup="{}"><source src="' + hrefs + '" type="video/mp4"></video>';
        
        if (hrefs.toLowerCase().indexOf('.mp4') < 0) {
            //网址
            $.fancybox({
                maxWidth	: 800,
                maxHeight	: 600,
                fitToView	: false,
                width		: '70%',
                height		: '70%',
                autoSize	: false,
                closeClick	: false,
                openEffect	: 'none',
                closeEffect	: 'none',
                content: htmls
            });
        }
        else {

            

            //视频地址
            $.fancybox({
                maxWidth: 800,
                maxHeight: 460,
                fitToView: false,
                width: '70%',
                height: '70%',
                autoSize: false,
                closeClick: false,
                openEffect: 'none',
                closeEffect: 'none',
                content: video,
                afterShow: function () {
                    
                    $.getScript('/Scripts/video.js/video.js', function () {
                        videojs.options.flash.swf = "/Scripts/video.js/video-js.swf"
                        window.player = videojs('my-video', {
                            fluid: true,
                            plugins: {
                                mux: {
                                    data: {
                                        property_key: 'VJSISBEST',
                                        video_title: 'The Boids!',
                                        video_id: 1
                                    }
                                }
                            }
                        });
                    })
                    return false;
                }
            });
        }
        
        
        return false;
    })


    var windowsWidth = $(window).outerWidth(true);
    //手机版面，底部收，点击展开的
    if(windowsWidth<768)
    {
        try {
            $(".footer-nav li").on('click', function () {
                if ($(this).hasClass('active'))
                {
                    $(this).removeClass('active');

                }
                else {
                    $(this).addClass("active");
                }
                
            })
        } catch (e) {

        }
    }
    //弹出导行
    if (windowsWidth < 768) {
        try {
            $(".pc-menu>ul>li>a").on('click', function () {
                var thiss = $(this).parent();
                if ($(this).next('ul').length > 0)
                {
                    if (thiss.hasClass('active')) {
                        thiss.removeClass('active');
                    }
                    else {
                        thiss.addClass("active");
                    }
                    return false;
                }
                else {
                    return true;
                }

                

            })

        } catch (e) {

        }
    }
    $(".pc-menu").niceScroll({ touchbehavior: false, cursorcolor: "#c8c8c8", cursoropacitymax: 0.7, cursorwidth: 12, background: "none", autohidemode: true });


    //开关
    try {
        $(".nav-menu button").on('click', function () {
            if ($(this).parent().hasClass('active'))
            {
                $(this).parent().removeClass('active');
                $(".pc-menu").removeClass('active')
            }
            else {
                $(this).parent().addClass('active');
                $(".pc-menu").addClass('active')
            }
        })
    } catch (e) {

    }

    //可删 生成二微码
    $(".pagehelper").on('click', 'h2', function () {
        
        if ($(".pagehelper").hasClass('off')) {
            $(".pagehelper").removeClass("off");
        }
        else {
            $(".pagehelper").addClass("off");
        }
    })
    $(".pagehelper a").each(function () {
        $(this).on('mousemove', function () {
            var hh = $(this).prop('href');
            var tt = $(this).html();
            $(".pagehelper a").removeClass('active');
            $(this).addClass('active');
            $(".pagehelper a").find('span').html('').hide();
            $(this).find('span').html('')
            $(this).find('span').qrcode({ width: 164, height: 164, text: hh }).show();
        })
    })


    //物业服务平台
    $("body").on('mouseover', '#tznav a', function () {
        var index = $(this).index();
        $("#tznav a").removeClass('active');
        $(this).addClass('active');

        var navimg = $("#tznavimg div.img");
        navimg.removeClass('active');
        navimg.eq(index).addClass('active');

    })

    //案例滚动加载
    //获取滚动条当前的位置 
    function getScrollTop() {
        var scrollTop = 0;
        if (document.documentElement && document.documentElement.scrollTop) {
            scrollTop = document.documentElement.scrollTop;
        }
        else if (document.body) {
            scrollTop = document.body.scrollTop;
        }
        return scrollTop;
    }

    //获取当前可是范围的高度 
    function getClientHeight() {
        var clientHeight = 0;
        if (document.body.clientHeight && document.documentElement.clientHeight) {
            clientHeight = Math.min(document.body.clientHeight, document.documentElement.clientHeight);
        }
        else {
            clientHeight = Math.max(document.body.clientHeight, document.documentElement.clientHeight);
        }
        return clientHeight;
    }

    //获取文档完整的高度 
    function getScrollHeight() {
        return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    }
    var bools = true;
    window.onscroll = function () {
        if (getScrollTop() + getClientHeight() == getScrollHeight()) {
            //alert("到达底部");
            if (bools) {
                $("#loadings").show();
                $.ajax({
                    type: "POST",
                    cache: false,
                    url: "/ajax/anlilist",
                    dataType: "html",
                    success: function (dd) {
                        if (dd == "")
                        {
                            bools = false;
                        }
                        setTimeout(function () {
                            $("#loadings").hide();
                            $("#anli").append(dd);
                        }
                        , 1000)
                        
                        return false;
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        //alert(jqXHR.responseText);
                        return false;
                    }
                });
            }
        }
    }

})