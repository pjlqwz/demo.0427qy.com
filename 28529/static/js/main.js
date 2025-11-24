var swiper1 = new Swiper('.swiper-container1', {
    pagination: '.swiper-pagination',
    //nextButton: '.swiper-button-next',
    //prevButton: '.swiper-button-prev',
    paginationClickable: true,
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: 2500,
    speed:1000,
    autoplayDisableOnInteraction: false
});
var swiper2 = new Swiper('.swiper-container2', {
    pagination: '.swiper-pagination',
    //nextButton: '.swiper-button-next',
    //prevButton: '.swiper-button-prev',
    slidesPerView: 1,
    observer:true,
    paginationClickable: true,
    loop: true,
    autoplay: 2500,
    speed:1000
});
var swiper2 = new Swiper('.swiper-container3', {
    pagination: '.swiper-pagination',
    //nextButton: '.swiper-button-next',
    //prevButton: '.swiper-button-prev',
    slidesPerView: 3,
    observer:true,
    paginationClickable: true,
    loop: true,
    autoplay: 2500,
    speed:1000
});




$(".h-nav ul>li").hover(function () {
   $(this).find("ol").stop(true,true).slideToggle();
});
//nav
$(function () {
   $(".i_sch").click(function () {
       $(".f-mask").toggleClass("m_show")
   })

    $(".btn_i").click(function(){
        $(this).toggleClass("btn_i_click");
        $(".h-nav-g").toggleClass("translate");
        $(".ul-small").toggleClass("translate2");
    })
});

$(function () {
    function rotatex(a){
        var str=$(a).find("b").text();
        var array=str.split("");
        for(var i=0;i<array.length;i++){
            $(a).prepend('<span></span>');
            $(a).find("span").each(function(i){
                $(this).text(array[i])
            });
            $(a).find("b").remove();
        }
    }

    $(".indexcoo .list li p").each(function () {
        rotatex($(this));
    })

    $(".indexcoo .list li span").each(function (i) {
        $(this).css("animation-delay","0.1"*i*1.5+"s");
    });
})



//gotp
$(".gtop").click(function () {
   $("body").animate({"scrollTop":0})
});

$(document).ready(function (){
    $("#form1").submit(function (){
        if($("#name").val() == ''){
            alert('请添加姓名');
            $("#name").focus();
            return false;
        }
        if($("#tel").val() == ''){
            alert('请添加电话');
            $("#tel").focus();
            return false;
        }
        if(!$("#tel").val().match(/^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/) && !$("#tel").val().match(/^(([0\+]\d{2,3}-)?(0\d{2,3})-)?(\d{7,8})(-(\d{3,}))?$/))
        {
            alert("电话格式错误！");
            return false;
        }
        if($("#add").val() == ''){
            alert('请添加地址');
            $("#add").focus();
            return false;
        }
        if($("#email").val() == ''){
            alert("请添加邮箱！");
            return false;
        }
        if(!$("#email").val().match(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/))
        {
            alert("邮箱格式错误！");
            return false;
        }
        if($("#content").val() == ''){
            alert('请添加内容');
            $("#content").focus();
            return false;
        }
        if($("#captcha").val() == ''){
            alert('请添加验证码');
            $("#captcha").focus();
            return false;
        }

    })
})