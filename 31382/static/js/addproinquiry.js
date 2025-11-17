function showCompare() {
  $(window).width() > 800 && "none" == $(".compare-panel").css("display") && $(".compare-panel").slideDown();
  pronumshow();
}

function addproinquiry(e) {
  $(e).toggleClass("pro-checked");
  var t = $(e).parent().parent(),
    r = parseInt(t.attr("class").split("proid")[1]);
  $(e).hasClass("pro-checked") ? addproArr.length < 10 ? (addproArr.unshift({
    id: r,
    url: t.find(".pro-img a").attr("href"),
    image: t.find("img").attr("src"),
    name: t.find(".pro-info .title a").text(),
    price: t.find(".pro-info .data-price span").text(),
    priceText: t.find(".pro-info .data-price").text()
  }), localStorage.setItem("productCachePC", JSON.stringify(addproArr)), getproinquiry(), showCompare()) : ($(e).removeClass("pro-checked"), toastr.warning("The number of products is limited to ten or less!")) : (addproArr.forEach(function (e, t) {
    e.id == r && addproArr.splice(t, 1)
  }), localStorage.setItem("productCachePC", JSON.stringify(addproArr)), getproinquiry())
  pronumshow();
}

function removeproinquiry(e) {
  var t = parseInt($(e).attr("class").split("item-clear proid")[1]);
  addproArr.forEach(function (e, r) {
    e.id == t && addproArr.splice(r, 1)
  }), localStorage.setItem("productCachePC", JSON.stringify(addproArr)), getproinquiry();
  pronumshow();
}

function IspcShow() {
  $(window).width() > 768 ? $(".rfixed-sc").show() : $(".mobile-bottom").hasClass("mobbotact") || $(".mobile-bottom").addClass("mobbotact")
}

function IspcHide() {
  $(window).width() > 768 && $(".rfixed-sc").hide(), $(window).scrollTop() < 100 && $(".mobile-bottom").removeClass("mobbotact")
}

function getproinquiry() {
  $(".selected-list").html("");
  var e = localStorage.getItem("productCachePC");
  null !== e && (addproArr = JSON.parse(e)), 0 < addproArr.length ? IspcShow() : (IspcHide(), $(".compare-panel").slideUp()), $(".pro-list li").removeClass("pro-item-checked"), $(".products-add-inquirl").removeClass("pro-checked"), $(".addToCart").removeClass("added"), addproArr.forEach(function (e) {
    $("#productID").val() == e.id && $(".addToCart").addClass("added"), $("li.proid".concat(e.id)).addClass("pro-item-checked").find(".products-add-inquirl").addClass("pro-checked"), (e = '<div class="selected-item"><a class="item-content" href="'.concat(e.url, '"><div class="item-img"><img src="').concat(e.image, '" alt="').concat(e.name, '"></div><div class="item-c"><p class="item-title">').concat(e.name, '</p><p class="item-price">').concat(e.priceText, '</p></div></a><button class="item-clear proid').concat(e.id, '" onclick="removeproinquiry(this)"></button></div>')), $(".selected-list").append(e)
  }), $(".compare-checked").text("(" + addproArr.length + "/10)"), $(".rfixed-scnum").text(addproArr.length)
  pronumshow();
}
var addproArr = [];
$(function () {
  $(".rfixed-sc i").attr("class", $(".products-add-inquirl i").attr("class")), setTimeout(function () {
    "" == $(".compareorder").html() && ($(".rfixed-sc i").attr("class", "iconfont icon-inquiry"), $(".mobile-bottom-bag a").html('<i class="iconfont icon-inquiry"></i>Inquiry')), $(".compare-panel").length || $("footer").after('<div class="compare-panel"><div class="compare-t"><button class="compare-close"></button><p class="compare-tit"><span class="compare-inquiry">Inquiry</span><span class="compare-checked"></span></p></div><div id="productChache_list"><div class="selected-list"></div></div><div class="compare-b"><button class="clear-all">Clear All</button><a href="/inquiry" class="compare-inquire">Inquire</a></div></div><div class="orderlayer" style="display:none"></div>'), $(".compare-b").append($(".orderNow"));
    if ($(".orderNow").length != 0) {
      $(".compare-inquiry").html("Shopping Bags")
    } else {
      $(".mobile-bottom-bag div").html('<em class="iconfont icon-message"></em>Inquiry');
    };
    getproinquiry(), $(".compare-t").click(function () {
      $(".compare-panel").slideUp()
    }), $(".clear-all").click(function () {
      (addproArr = []), localStorage.clear("productCachePC"), getproinquiry()
    }), $(".addToCart span").append('<i class="iconfont icon-cart"></i>'), $(".addToCart").click(function () {
      var e = [],
        t = parseInt($("#productID").val()),
        r = "";
      0 == $(".singglepic").length ? $(".thumbnail-box .list .swiper-slide img").each(function (e) {
        0 == e && (r = $(this).attr("src"))
      }) : (r = $(".singglepic img").attr("src"));
      var i = {
          id: t,
          url: window.location.href,
          image: r,
          name: $(".prodetails-name").text(),
          price: $(".prodetails-price .price:first-child span").text(),
          priceText: $(".prodetails-price>span:first-child").text()
        },
        a = localStorage.getItem("productCachePC");
      if ((null != a && (e = JSON.parse(a)), $(".addToCart").hasClass("added"))) e.forEach(function (e, r) {
        e.id == t && addproArr.splice(r, 1)
      }), localStorage.setItem("productCachePC", JSON.stringify(addproArr)), getproinquiry();
      else {
        if (!(e.length < 10)) return void toastr.warning("The number of products is limited to ten or less!");
        e.unshift(i), localStorage.setItem("productCachePC", JSON.stringify(e)), getproinquiry(), showCompare()
      }
      proBagshow();
    }), $(".orderNow").click(function () {
      var e = JSON.parse(localStorage.getItem("productCachePC")),
        t = [];
      (e = e.filter(function (e) {
        return "" != e.price
      })).forEach(function (e) {
        "" !== e.price && t.push(e.id)
      }), t.length > 0 ? ($(".orderlayer").fadeIn(), setTimeout(function () {
        (window.location.href = "/payment"), $(".orderlayer").fadeOut()
      }, 1e3)) : toastr.warning("There is no price for the products in the shopping cart, so we can't place an order!")
    }), $(".rfixed-sc,.mobile-bottom-bag").click(function () {
      $(".compare-panel").slideDown()
    }), $(window).width() <= 768 && $(".mobile-bottom-bag").show().prev().hide()
  }, 200)
});

function proBagshow() {
  const inquirylist = JSON.parse(localStorage.getItem("productCachePC"));
  if (inquirylist) {
    if (inquirylist.length != 0) {
      $(".bottom-btn").addClass("bottom-btn-keep")
    } else {
      $(".bottom-btn").removeClass("bottom-btn-keep")
    }
  }
}
proBagshow();
$(".products-add-inquirl").click(function () {
  proBagshow()
})

function pronumshow() {
  var num = $('.rfixed-scnum').html();
  num = Number(num);
  if (num == 0) {
    $('.rfixed-scnum').hide();
  } else {
    $('.rfixed-scnum').show();
  }
}
pronumshow();