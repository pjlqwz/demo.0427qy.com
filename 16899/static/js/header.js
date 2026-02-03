/* global screenReaderText */
/**
 * Theme functions file.
 *
 * Contains handlers for navigation and widget area.
 */

(function ($) {
    $(function () {
        var currentWidth = '';
        var currentLeft = '';
        $.each($('.header__main__right a.header__right__item'), function (i, item) {
            var path = location.pathname;
            var href = $(item).attr('href')
            if (path == href) {
                currentWidth = $(item).width()
                currentLeft = $(item).position().left;
                $('.m-nav-act').css({
                    width: currentWidth + 'px',
                    left: currentLeft + 'px'
                })
                $('.m-nav-act').show();
            }
        })

        $('.header__main__right a.header__right__item').mousemove(function () {
            var left = $(this).position().left;
            var width = $(this).width();
            $('.m-nav-act').css({
                width: width + 'px',
                left: left + 'px'
            })
        })

        $('.header__main__right a.header__right__item').mouseout(function () {
            $('.m-nav-act').css({
                width: currentWidth + 'px',
                left: currentLeft + 'px'
            })
        })
    });
})(jQuery);