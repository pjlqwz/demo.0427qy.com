/* global screenReaderText */
/**
 * Theme functions file.
 *
 * Contains handlers for navigation and widget area.
 */

(function($) {
    $(function() {
      var mySwiper = new Swiper(".swiper-container", {
        loop: true, // 循环模式选项
        centeredSlides: true,
        // 如果需要分页器
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        // 如果需要前进后退按钮
        // navigation: {
        //     nextEl: '.swiper-button-next',
        //     prevEl: '.swiper-button-prev',
        // },
  
        on: {
          transitionEnd: function() {
            $(".celebrity__banner__text")
              .children(".celebrity__banner__text__item")
              .removeClass("celebrity__banner__text__item--active");
            $(
              $(".celebrity__banner__text").children(
                ".celebrity__banner__text__item"
              )[this.activeIndex]
            ).addClass("celebrity__banner__text__item--active");
          }
        }
      });
  
      var secondarySwiper = new Swiper(".secondary__swiper-container", {
        loop: true, // 循环模式选项
        centeredSlides: true,
        slidesPerView: 2,
        effect: "coverflow",
        autoplay: true,
        coverflowEffect: {
          rotate: 0,
          stretch: 35,
          depth: 100,
          modifier: 2,
          slideShadows: false
        },
        // 如果需要分页器
        pagination: {
          el: ".secondary__swiper-pagination",
          clickable: true
        },
        // 如果需要前进后退按钮
        navigation: {
          nextEl: ".secondary__swiper-button-next",
          prevEl: ".secondary__swiper-button-prev"
        },
  
        on: {
          transitionEnd: function() {
            $(".celebrity__banner__text")
              .children(".celebrity__banner__text__item")
              .removeClass("celebrity__banner__text__item--active");
            $(
              $(".celebrity__banner__text").children(
                ".celebrity__banner__text__item"
              )[(this.activeIndex + 1) % 3]
            ).addClass("celebrity__banner__text__item--active");
          }
        }
      });
  
      var businessSwiper = new Swiper(".business__swiper-container", {
        autoplay: true,
        loop: true, // 循环模式选项
        // 如果需要分页器
        pagination: {
          el: ".business__swiper-pagination",
          clickable: true
        },
        // 如果需要前进后退按钮
        navigation: {
          nextEl: ".business__swiper-button-next",
          prevEl: ".business__swiper-button-prev"
        },
  
        on: {
          transitionEnd: function() {
            $(".business__banner__text")
              .children(".business__banner__text__item")
              .removeClass("business__banner__text__item--active");
            $(
              $(".business__banner__text").children(
                ".business__banner__text__item"
              )[(this.activeIndex + 3) % 4]
            ).addClass("business__banner__text__item--active");
          }
        }
      });
  
      // 全方位网红服务体系 mask 控制
  
      var celebritySystemDomArr = $(".online-celebrity .system__list .system");
  
      for (var i = 0; i < celebritySystemDomArr.length; i++) {
        $(celebritySystemDomArr[i]).mouseover(function() {
          $($(this).children(".system__mask")).show();
        });
        $(celebritySystemDomArr[i]).mouseleave(function() {
          $($(this).children(".system__mask")).hide();
        });
      }
  
      // 这些网红用了都说好 mask 控制
  
      var celebrityPortraitDomArr = $(
        ".online-celebrity .portrait__list .portrait"
      );
  
      for (var i = 0; i < celebrityPortraitDomArr.length; i++) {
        $(celebrityPortraitDomArr[i]).mouseover(function() {
          $($(this).children(".portrait__mask")).show();
        });
        $(celebrityPortraitDomArr[i]).mouseleave(function() {
          $($(this).children(".portrait__mask")).hide();
        });
      }
  
      // 直播生态下的完整供应商服务体系 hover 效果
  
      var businessSystemDomArr = $(".business .system__list .system");
  
      for (var i = 0; i < businessSystemDomArr.length; i++) {
        $(businessSystemDomArr[i]).mouseover(function() {
          $($(this).children(".system__image")).css("display", "none");
          $($(this).children(".system__image--active")).css("display", "flex");
        });
        $(businessSystemDomArr[i]).mouseleave(function() {
          $($(this).children(".system__image")).css("display", "flex");
          $($(this).children(".system__image--active")).css("display", "none");
        });
      }
  
      // 现已成功打造出多品类爆款 mask 控制
  
      var businessGoodDomArr = $(".business .good__list .good");
  
      for (var i = 0; i < businessGoodDomArr.length; i++) {
        $(businessGoodDomArr[i]).mouseover(function() {
          $($(this).children(".good__mask")).show();
        });
        $(businessGoodDomArr[i]).mouseleave(function() {
          $($(this).children(".good__mask")).hide();
        });
      }
  
      var indexVideo = document.getElementById("indexVideo");
      $('.videoinner .close').click(function() {
        $('.videobox').css('display', 'none');
        indexVideo.pause();
      })
  
      $('.play-box').click(function() {
        $('.videobox').css('display', 'block');
        indexVideo.play();
      })
  
      // modal 控制
      $(".homepage__mask").click(function() {
        $(this).css("display", "none");
        $("#image-open-immediately").css("display", "none");
        $("#image-in-supplier").css("display", "none");
        $("#image-download-product").css("display", "none");
      });
      $(".btn-open-immediately").click(function() {
        $(".homepage__mask").css("display", "flex");
        $("#image-open-immediately").css("display", "flex");
      });
      $(".btn-in-supplier").click(function() {
        $(".homepage__mask").css("display", "flex");
        $("#image-in-supplier").css("display", "flex");
      });
      $(".btn-download-product").click(function() {
        $(".homepage__mask").css("display", "flex");
        $("#image-download-product").css("display", "flex");
      });
  
      // 浮窗
      // $(".float-window").click(function() {
      //   ysf("config", {
      //     groupid: "397564209",
      //     robotShuntSwitch: 1,
      //     success: function() {
      //       ysf.open({
      //         templateId: "6182954"
      //       });
      //     }
      //   });
      // });
    });
  })(jQuery);
  