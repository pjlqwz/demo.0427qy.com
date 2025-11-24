$(function() {
    var imgSrc = '',
        imgDesc = '',
        imgIndex = 0,
        imgsNum = $('.photos-list > ul > li').length;

    $('.photos-list > ul > li').click(function() {
        imgSrc = $(this).find('.photos-list-one-img').data('img');
        imgDesc = $(this).find('.img-one-desc').html();
        imgIndex = $(this).index();

        $('.fixed-img-cntr').css({
            'opacity': '1', 
            'visibility': 'visible', 
            'overflow': 'visible'
        });
        $('.fixed-img-show').addClass('fixed-img-show-scale');
        $('.fixed-img-show').find('.fixed-img img').attr('src', imgSrc).hide().fadeIn(500);
        $('.fixed-img-show').find('.p-img-desc').html(imgDesc);
    });

    $('.photos-next').click(function() {
        if (imgIndex < imgsNum - 1) {
            imgIndex += 1;
            imgSrc = $('.photos-list > ul > li').eq(imgIndex).find('.photos-list-one-img').data('img');
            imgDesc = $('.photos-list > ul > li').eq(imgIndex).find('.img-one-desc').html();
            $('.fixed-img-show').find('.fixed-img img').attr('src', imgSrc).hide().fadeIn(500);
            $('.fixed-img-show').find('.p-img-desc').html(imgDesc);
        }
    });

    $('.photos-prev').click(function() {
        if (imgIndex > 0) {
            imgIndex -= 1;
            imgSrc = $('.photos-list > ul > li').eq(imgIndex).find('.photos-list-one-img').data('img');
            imgDesc = $('.photos-list > ul > li').eq(imgIndex).find('.img-one-desc').html();
            $('.fixed-img-show').find('.fixed-img img').attr('src', imgSrc).hide().fadeIn(500);     
            $('.fixed-img-show').find('.p-img-desc').html(imgDesc);
        }
    });

    $('.fixed-img-close, .fixed-img-cntr-shadow').click(function() {
        $('.fixed-img-cntr').css({
            'opacity': '0', 
            'visibility': 'hidden'
        });
        $('.fixed-img-show').removeClass('fixed-img-show-scale');
    });
});
