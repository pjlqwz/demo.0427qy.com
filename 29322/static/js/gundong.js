function gundong() {
    //banner轮播图
    var mybanner = new Swiper('.swiper-banner', {
        //direction: 'vertical' ,   // 竖向切换
        autoHeight: true,           //高度随内容变化
        speed: 1000,                //切换速度
        //effect: 'fade',             //切换效果
        roundLengths : true, 
        autoplay: {                 //自动播放
            delay: 8000,
            stopOnLastSlide: false,
            disableOnInteraction: true,
        },
        // 分页器
        pagination: {
            el: '.banner .swiper-pagination',
            clickable: true,
        },
        // 前进后退按钮
        navigation: {
            nextEl: '.next-banner',
            prevEl: '.prev-banner',
        },
    })

    var mySwiper = new Swiper('.swiper-pro', {
        slidesPerColumn:2,    //行数
        slidesPerColumnFill : 'row',  //排序
        //slidesPerGroup:2,     //滚动几张
        slidesPerView: 3,       //张数
        spaceBetween:30,       //间距
        speed: 1000,            //切换速度
        autoplay: {
            delay: 5000,
            stopOnLastSlide: false,
            disableOnInteraction: true,
        },  
        breakpoints: {
            991: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
        }
    })

}
gundong();