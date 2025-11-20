$(function () {
  var nav = $(".header");
  var win = $(window);
  var sc = $(document);
  win.scroll(function () {
    if (sc.scrollTop() >= 80) {
      nav.addClass("fixednav");
    } else {
      nav.removeClass("fixednav");
    }
  });
  $("").hover(
    function () {
      $(this).find("").show();
    },
    function () {
      $(this).find("").hide();
    }
  );
});
$(function () {
  if ($(window).width() > 769) {
    $(".navbar").addClass("navbar-custom");
  } else {
    $(".navbar").removeClass("navbar-custom");
  }
  $(".navbar-custom ul li").hover(
    function () {
      $(this).find("p a").animate({ "margin-top": "-32px" }, 350);
    },
    function () {
      $(this).find("p a").animate({ "margin-top": "0" }, 350);
    }
  );
});
$(function () {
  $(document).on("click", ".mapbtns", function () {
    $(".fixd-box").stop().slideDown(400);
  });
  $(document).on("click", ".close", function () {
    $(".fixd-box").slideUp(400);
  });
  $(".nav-menu").click(function () {
    $(".navbar").slideDown("slow");
    $(".navbarlogo").delay(500).animate({ opacity: "1" });
    $(".navbar ul").css("display", "none");
    $(".navbar ul").delay(500).fadeIn("slow");
    $(".menuclos").delay(500).slideDown("slow");
  });
  $(".menuclos").click(function () {
    $(".navbar").delay(500).slideUp("slow");
    $(".navbarlogo").animate({ opacity: "0" });
    $(".navbar ul").fadeOut("slow");
    $(".menuclos").slideUp("slow");
  });
  $(".bussiness-body .item").mouseover(function () {
    $(this).addClass("on").siblings().removeClass("on");
  });
  $(".footer_fl").on("click", function () {
    $(this).toggleClass("active");
  });
});
function Bmove(oBtn, oImg) {
  this.btn = $(oBtn).find("li");
  this.img = $(oImg).find(".solution-slide-item");
  this.show();
}
Bmove.prototype = {
  show: function () {
    var thb = this;
    this.btn.each(function (i) {
      $(this).mouseenter(function () {
        thb.btn.find("span").stop().animate({ width: "0" });
        $(this).find("span").stop().animate({ width: "100%" });
        thb.img.eq(i).stop().css({ display: "block" });
        thb.img
          .eq(i)
          .siblings(".solution-slide-item")
          .stop()
          .css({ display: "none" });
        return false;
      });
    });
  },
};
$(document).ready(function () {
  $("a[href*=#]").click(function () {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var $target = $(this.hash);
      $target =
        ($target.length && $target) || $("[name=" + this.hash.slice(1) + "]");
      if ($target.length) {
        var targetOffset = $target.offset().top;
        $("html,body").animate({ scrollTop: targetOffset }, 700);
        return false;
      }
    }
  });
});
$(
  (function ($, window, document, undefined) {
    Slider = function (container, options) {
      if (!container) {
        return;
      }
      var options = options || {},
        currentIndex = 0,
        cls = options.activeControllerCls,
        delay = options.delay,
        isAuto = options.auto,
        controller = options.controller,
        event = options.event,
        interval,
        slidesWrapper = container.children().first(),
        slides = slidesWrapper.children(),
        length = slides.length,
        childWidth = container.width(),
        totalWidth = childWidth * slides.length;
      function init() {
        var controlItem = controller.children();
        mode();
        event == "hover"
          ? controlItem
              .mouseover(function () {
                stop();
                var index = $(this).index();
                play(index, options.mode);
              })
              .mouseout(function () {
                isAuto && autoPlay();
              })
          : controlItem.click(function () {
              stop();
              var index = $(this).index();
              play(index, options.mode);
              isAuto && autoPlay();
            });
        isAuto && autoPlay();
      }
      function mode() {
        var wrapper = container.children().first();
        options.mode == "slide"
          ? wrapper.width(totalWidth)
          : wrapper
              .children()
              .css({ position: "absolute", left: 0, top: 0 })
              .first()
              .siblings()
              .hide();
      }
      function autoPlay() {
        interval = setInterval(function () {
          triggerPlay(currentIndex);
        }, options.time);
      }
      function triggerPlay(cIndex) {
        var index;
        cIndex == length - 1 ? (index = 0) : (index = cIndex + 1);
        play(index, options.mode);
      }
      function play(index, mode) {
        slidesWrapper.stop(true, true);
        slides.stop(true, true);
        mode == "slide"
          ? (function () {
              if (index > currentIndex) {
                slidesWrapper.animate(
                  {
                    left:
                      "-=" + Math.abs(index - currentIndex) * childWidth + "px",
                  },
                  delay
                );
              } else {
                if (index < currentIndex) {
                  slidesWrapper.animate(
                    {
                      left:
                        "+=" +
                        Math.abs(index - currentIndex) * childWidth +
                        "px",
                    },
                    delay
                  );
                } else {
                  return;
                }
              }
            })()
          : (function () {
              if (slidesWrapper.children(":visible").index() == index) {
                return;
              }
              slidesWrapper.children().fadeOut(delay).eq(index).fadeIn(delay);
            })();
        try {
          controller.children("." + cls).removeClass(cls);
          controller.children().eq(index).addClass(cls);
        } catch (e) {}
        currentIndex = index;
        options.exchangeEnd &&
          typeof options.exchangeEnd == "function" &&
          options.exchangeEnd.call(this, currentIndex);
      }
      function stop() {
        clearInterval(interval);
      }
      function prev() {
        stop();
        currentIndex == 0
          ? triggerPlay(length - 2)
          : triggerPlay(currentIndex - 2);
        isAuto && autoPlay();
      }
      function next() {
        stop();
        currentIndex == length - 1
          ? triggerPlay(-1)
          : triggerPlay(currentIndex);
        isAuto && autoPlay();
      }
      init();
      return {
        prev: function () {
          prev();
        },
        next: function () {
          next();
        },
      };
    };
  })(jQuery, window, document)
);
$(document).ready(function () {
  var $line_top = '<span class="line line_top"></span>';
  var $line_bottom = '<span class="line line_bottom"></span>';
  var $line_left = '<span class="line line_left"></span>';
  var $line_right = '<span class="line line_right"></span>';
  $(".news_list li").hover(
    function () {
      $(this).append($line_top, $line_bottom, $line_left, $line_right);
      var wd = $(this).outerWidth(true);
      var hg = $(this).height();
      var time = 1000;
      $(this)
        .find(".line_top")
        .css({ left: -wd, top: 0, width: wd, height: 1, opacity: 0 })
        .animate({ left: 0, opacity: 1 }, time);
      $(this)
        .find(".line_bottom")
        .css({ left: wd, bottom: 0, width: wd, height: 1, opacity: 0 })
        .animate({ left: 0, opacity: 1 }, time);
      $(this)
        .find(".line_right")
        .css({ right: 0, top: -hg, width: 1, height: hg, opacity: 0 })
        .animate({ top: 0, opacity: 1 }, time);
      $(this)
        .find(".line_left")
        .css({ left: 0, top: -hg, width: 1, height: hg, opacity: 0 })
        .animate({ top: 0, opacity: 1 }, time);
    },
    function () {
      $(this).find(".line").remove();
    }
  );
});
function t_delay(html, timer) {
  var time = timer ? timer : 3000;
  if ($("#tips").size() == 0) {
    $('<div id="tips"></div>').appendTo($("body"));
  }
  $("#tips")
    .html("<div>" + html + "</div>")
    .show()
    .delay(time)
    .fadeOut();
}
function trimStr(str) {
  return str.replace(/(^\s*)|(\s*$)/g, "");
}
