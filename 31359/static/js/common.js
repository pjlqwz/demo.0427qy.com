function AsideSearch() { $("#SidebarSearch")
        .keypress(function (event) { var keycode = event.keyCode ? event.keyCode : event.which; if (keycode == "13") { if ($("#SidebarSearch")
                    .val() == "") { toastr.warning("Please enter search content!"); return false } PSearchSidebar() } });
    $(".sidebar-search .search-btn")
        .click(function () { if ($("#SidebarSearch")
                .val() == "") { toastr.warning("Please enter search content!") } }) } AsideSearch();

function sidebarCate() { $(".sidebar-cate .menu-item .sub-menu")
        .before('<em class="iconfont icon-right1"></em>');
    $(".sidebar-cate .menu-item>a")
        .prepend('<em class="iconfont icon-cate1"></em>');
    $(".sidebar-cate .menu-item .sub-menu a")
        .prepend('<em class="iconfont icon-cate2"></em>'); var Accordion = function (el, multiple) { this.el = el || {};
        this.multiple = multiple || false; var links = this.el.find("em");
        links.on("click", { el: this.el, multiple: this.multiple }, this.dropdown) };
    Accordion.prototype.dropdown = function (e) { var $el = e.data.el;
        ($this = $(this)), ($next = $this.next());
        $next.slideToggle();
        $this.parent()
            .toggleClass("active"); if (!e.data.multiple) { $el.find(".sub-menu")
                .not($next)
                .slideUp()
                .parent()
                .removeClass("active") } };
    new Accordion($(".sidebar-cate"), false) } sidebarCate();

function AsideCateActive() { var breadcrumbsHref = $(".banner-breadcrumbs>a:last-child")
        .attr("href");
    $(".sidebar-cate>li>a")
        .each(function () { if (breadcrumbsHref == $(this)
                .attr("href")) { $(this)
                    .parents("li")
                    .addClass("active")
                    .children(".sub-menu")
                    .show() } });
    $(".sidebar-cate .menu-item .sub-menu li a")
        .each(function () { if (breadcrumbsHref == $(this)
                .attr("href")) { $(this)
                    .parents("li")
                    .addClass("active");
                $(this)
                    .parents(".sidebar-cate .menu-item")
                    .children(".sub-menu")
                    .show() } }) } AsideCateActive();
if ($(".inquiry-prolist")
    .length) { const inquirylist = localStorage.getItem("productCachePC"); const arr = JSON.parse(inquirylist); }

function proDetailsVideo() { var mediaSrc = $("#media source")
        .attr("src"); if (mediaSrc != "") { $(".small-box")
            .hide();
        $(".vPlay")
            .hide();
        $(".preview-container .thumbnail-box .item")
            .click(function () { $("#media")
                    .hide();//不要视频把这注释,第一张图显示
                $(".small-box")
                    .show();
                $(".vPlay")
                    .show() });
        $(".vPlay")
            .click(function () { $("#media")
                    .show();
                $(".small-box")
                    .hide();
                $(".vPlay")
                    .hide() }) } else { $(".vPlay")
            .hide() //不要视频把这注释,第一张图显示
			} }
if (window.innerWidth > 768) { proDetailsVideo() }

function proDetailSwiper() { if (window.innerWidth > 768) { $("#gallery")
            .addClass("swiper-no-swiping") } else { var mediaSrc = $("#media source")
            .attr("src"); if (mediaSrc != "") { $("#media")
                .show();
            $(".thumbnail-box .wrapper")
                .prepend('<div class="swiper-slide media"></div>');
            $(".swiper-slide.media")
                .html($("#media")) } $(".thumbnail-box .item .imgalt")
            .each(function () { if ($(this)
                    .html() == "") { $(this)
                        .hide() } }) } if ($("#gallery")
        .length) { var gallery = new Swiper("#gallery", { slidesPerView: 4, spaceBetween: 10, navigation: { nextEl: ".prodetails-button-next", prevEl: ".prodetails-button-prev" }, breakpoints: { 0: { slidesPerView: 1 }, 768: { slidesPerView: 3 }, 1280: { slidesPerView: 4 } }, on: { init: function () { setTimeout(function () { var activeNum = $(".thumbnail-box .swiper-slide-active")
                            .index() + 1; var slideNum = $(".thumbnail-box .swiper-slide")
                            .length;
                        $(".page-now")
                            .html(activeNum);
                        $(".page-all")
                            .html(slideNum) }, 1) }, slideChange: function () { setTimeout(function () { var activeNum = $(".thumbnail-box .swiper-slide-active")
                            .index() + 1;
                        $(".page-now")
                            .html(activeNum) }, 1) } } }) } } proDetailSwiper();

function pageseobox() { if ($(".pro-bottom")
        .text() == "") { $(".pro-bottom")
            .hide() } } pageseobox();
$(function () { if (isMob()) { $(".inquiry-pc")
            .append($(".inquiry-wrap"));
        $(".inquiry-pc")
            .after($(".sidebar-item.maylike")) } $(".pro-btn.send,.newsendinquiry")
        .click(function () { $("html,body")
                .animate({ scrollTop: $("#toinquiry")
                        .offset()
                        .top - 100 }, 500) }) });
$(function () { $("table")
        .wrap('<div class="table-wrap"></div>') });

function aboutcompany() { $("#pagecompany .tabs li")
        .each(function () { $(this)
                .click(function () { var index = $(this)
                        .index() + 1;
                    $("#pagecompany .tabs li")
                        .removeClass("active");
                    $("#pagecompany .tabs li:nth-child(" + index + ")")
                        .addClass("active");
                    $("#pagecompany .slide .item")
                        .removeClass("act");
                    $("#pagecompany .slide .item:nth-child(" + index + ")")
                        .addClass("act") }) }) } aboutcompany();

function pageadvantages() { if ($("#pageadvantages")
        .length) { var pageadvantages = new Swiper("#pageadvantages", { slidesPerView: 4, spaceBetween: 20, pagination: { el: ".pageadvantages-pagination" }, breakpoints: { 0: { slidesPerView: 1 }, 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 }, 1280: { slidesPerView: 4 } } }) } } pageadvantages();

function pageteam() { if ($("#pageteam")
        .length) { var pageteam = new Swiper("#pageteam", { slidesPerView: 3, spaceBetween: 30, pagination: { el: ".pageteam-pagination" }, breakpoints: { 0: { slidesPerView: 1 }, 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } } }) } } pageteam();

function prodTabs() { $(".prodetails-tabs-item")
        .each(function () { $(this)
                .click(function () { $(".prodetails-tabs-item")
                        .removeClass("act");
                    $(this)
                        .addClass("act"); var index = $(this)
                        .index() + 1;
                    $(".tagContent")
                        .removeClass("act");
                    $("#tagContent" + index)
                        .addClass("act") }) }) } prodTabs();

function solutionsSlide() { $(".pagesolutions .solutions2 .item .show")
        .each(function () { $(this)
                .click(function () { $(".pagesolutions .solutions2 .item")
                        .removeClass("act");
                    $(this)
                        .parents(".item")
                        .addClass("act") }) }) }
if (!isMob()) { solutionsSlide() }
