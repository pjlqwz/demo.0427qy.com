var banner = new Swiper('.banner', {
    pagination: '.banner .swiper-pagination',
    paginationClickable: true,
    loop: true,
    autoplay: 5000,
    speed:1000,
    autoplayDisableOnInteraction: false
});
var snlist = new Swiper('.snlist', {
    prevButton: '.snmain .snlist-prev',
    nextButton: '.snmain .snlist-next',
    slidesPerView :"auto",
	spaceBetween :'2%',
    paginationClickable: true,
    loop: true,
    autoplay: 5000,
    speed:1000,
    autoplayDisableOnInteraction: false
});
var eyindex = new Swiper('.eyindex', {
    prevButton: '.eyindex .eyou-prev',
    nextButton: '.eyindex .eyou-next',
    pagination: '.eyindex .swiper-pagination',
    paginationClickable: true,
    loop: true,
    autoplay: 5000,
    speed:1000,
    autoplayDisableOnInteraction: false,
    onSlideChangeStart : function(eyindex) {
        var index=eyindex.realIndex;
        $('.eyou_nav li').removeClass('on').eq(index).addClass('on');
    }
});
$('.eyou_nav li').on('click', function (e) {
      e.preventDefault();
      var num=$(this).index();
      var i=num+1;
      $('.eyou_nav li').removeClass('on').eq(num).addClass('on');
      eyindex.slideTo(i,1000,false);
});