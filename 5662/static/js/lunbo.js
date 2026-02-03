    $(function () {
        var article_li = $("#article-nl>.w-adNews3").find(".w-adNews-imgs>ul>li");
        var article_prev = $("#article-nl>.w-adNews3").find(".w-adNews-imgs>.adNews3prev");
        var article_next = $("#article-nl>.w-adNews3").find(".w-adNews-imgs>.adNews3next");
        var article_image = $("#article-nl>.w-adNews3").find(".w-adNews-imgs>ul");

        if (article_li.length > 0 && article_prev.length > 0 && article_next.length > 0) {
            article_prev.click(function () {
                if (article_image.find("li:visible").prev("li").length > 0) {
                    article_image.find("li:visible").hide(0, function () {
                        $(this).prev("li").show(0, function () {
                        });
                    })
                }
            });
            article_next.click(function () {
                if (article_image.find("li:visible").next("li").length > 0) {
                    article_image.find("li:visible").hide(0, function () {
                        $(this).next("li").show(0, function () {
                        });
                    })
                }
            });
        }


        if ($("#article-nl>.w-adNews11").length > 0) {
            $("#article-nl>.w-adNews11").listRow({
                row:3,
                rowList: ".w-adNews-in ul>li",
                rowFind: ".news-sum"
            });
        }

        if ($("#article-nl>.w-adNews12").length > 0) {
            var htmlnl = $("#article-nl>.w-adNews12").find('.w-adNews-in').html();
            var slideXnl = function () {
                $("#article-nl>.w-adNews12").slideNew({
                    mainCell: ".w-adNews-in ul",
                    autoPage: false,
                    effect: "topMarquee",
                    interTime: 50,
                    delayTime: 0,
                    autoPlay: true,
                    scroll: 1,
                    vis: 5
                });
            };
            slideXnl();
            $(window).resize(function () {
                setTimeout(function(){
                    $("#article-nl>.w-adNews12").find('.w-adNews-in').html(htmlnl);
                    slideXnl();
                },500);
            });
        }

        if ($("#article-nl>.w-adNews13").length > 0) {
            var htmlnl = $("#article-nl>.w-adNews13").find('.w-adNews-in').html();
            var slideXnl = function () {
                $("#article-nl>.w-adNews13").slideNew({
                    mainCell: ".w-adNews-in ul",
                    autoPage: false,
                    effect: "topLoop",
                    interTime: 3000,
                    delayTime: 500,
                    autoPlay: true,
                    scroll: 1,
                    vis: 1
                });
            };
            slideXnl();
            $(window).resize(function () {
                setTimeout(function(){
                    $("#article-nl>.w-adNews13").find('.w-adNews-in').html(htmlnl);
                    slideXnl();
                },500);
            });
        }

        if ($("#article-nl>.w-adNews14").length > 0) {
            var htmlnl = $("#article-nl>.w-adNews14").find('.w-adNews-in').html();
            var slideXnl = function () {
                $("#article-nl>.w-adNews14").slideNew({
                    mainCell: ".w-adNews-in ul",
                    autoPage: false,
                    effect: "topLoop",
                    interTime: 3000,
                    delayTime: 500,
                    autoPlay: true,
                    scroll: 1,
                    vis: 8
                });
            };
            slideXnl();
            $(window).resize(function () {
                setTimeout(function(){
                    $("#article-nl>.w-adNews14").find('.w-adNews-in').html(htmlnl);
                    slideXnl();
                },500);
            });
        }

        if ($("#article-nl>.w-adNews15").length > 0) {
            var obj = $("#article-nl>.w-adNews15").find('.w-adNews-in');
            var htmlnl = obj.html();
            var slideXnl = function () {
                $("#article-nl>.w-adNews15").slideNew({
                    mainCell: ".w-adNews-in ul",
                    autoPage: false,
                    effect: "fold",
                    interTime: 5000,
                    delayTime: 500,
                    autoPlay: true,
                    scroll: 1,
                    vis: 1
                });
            };
            slideXnl();
            $(window).resize(function () {
                $("#article-nl>.w-adNews15").find('.w-adNews-in').html(htmlnl);
                slideXnl();
                $("#article-nl>.w-adNews15").find('.w-adNews-in').find("img").each(function () {
                    $.AutoImageSize($(this));
                });
            });
        }
    });
