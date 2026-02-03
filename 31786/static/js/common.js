$('.m-header').click(function() {
    $('.m-header-menu').css("right", "0px");
    $('.m-shadow').show();
});
$('.m-header-menu .m-menu-top .close, .m-shadow').click(function() {
    $('.m-header-menu').css("right", "-100%");
    $('.m-shadow').hide();
});

$('.m-header-menu .m-header-list li').click(function() {
    var index = $(this).index();
    $('.m-header-menu .m-header-menu-sub .boxs').eq(index).addClass('show');
});
$('.m-header-menu .m-header-menu-sub .return-fir').click(function() {
    $('.m-header-menu .m-header-menu-sub .boxs').removeClass('show');
});

// 返回顶部
window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        document.getElementById("go-top").style.display = "block";
    } else {
        document.getElementById("go-top").style.display = "none";
    }
}
// 返回顶部
$("#go-top").click(function() {
    $('body,html').animate({
        scrollTop: 0
    }, 500);
});