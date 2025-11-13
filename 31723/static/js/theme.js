;
"use strict";
document.addEventListener("DOMContentLoaded", function () {

    function debounce(func, wait, immediate) {
        var timeout;
        return function () {
            var context = this,
                args = arguments;
            var later = function () {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    };
    function throttle(func, limit) {
        var lastFunc, lastRan;
        return function () {
            var context = this,
                args = arguments;
            if (!lastRan) {
                func.apply(context, args)
                lastRan = Date.now()
            } else {
                clearTimeout(lastFunc)
                lastFunc = setTimeout(function () {
                    if ((Date.now() - lastRan) >= limit) {
                        func.apply(context, args)
                        lastRan = Date.now()
                    }
                }, limit - (Date.now() - lastRan))
            }
        }
    }

    /* ====================
     * @Description: 更多菜单
    ==================== */
    function priorityNav() {
        if (document.documentElement.clientWidth < 768) {
            return;
        }
        var navContainer = document.querySelector('.nav-left .nav-list');
        var navElements = document.querySelectorAll('.nav-left > .nav-list > li:not(.more-link)');
        var dropDown = document.querySelector(".more-link > ul");
        var dropdownEl = dropDown.querySelectorAll('li');
        var navWidth = 0;
        navElements.forEach(function (el) {
            el.setAttribute('data-width', el.offsetWidth);
            navWidth += el.offsetWidth;
        })
        var moreBtn = navContainer.getElementsByClassName('more-link')[0];
        var moreBtnWidth = moreBtn.offsetWidth;
        var availableSpace = navContainer.offsetWidth;
        if (availableSpace > navWidth && dropdownEl.length < 1) {
            return;
        }
        if (navWidth + moreBtnWidth > availableSpace && navElements.length > 0) {
            var lastItem = navElements[navElements.length - 1];
            navContainer.removeChild(lastItem)
            dropDown.insertAdjacentElement('afterbegin', lastItem);
            priorityNav();
        } else {
            var firstItem = dropdownEl[0];
            if (dropdownEl.length > 0 && availableSpace > navWidth + moreBtnWidth + parseInt(firstItem.getAttribute('data-width'))) {
                dropDown.removeChild(firstItem);
                navContainer.insertBefore(firstItem, moreBtn);
                priorityNav();
            }
        }
        if (moreBtn.querySelectorAll('li').length > 0) {
            moreBtn.style.display = 'list-item';
            navContainer.style.overflow = 'visible';
            moreBtn.classList.add('visible');
        } else {
            moreBtn.classList.remove('visible');
            moreBtn.style.display = 'none';
        }
    };
    priorityNav();
    window.addEventListener('resize', debounce(priorityNav, 100));

    var navType = document.documentElement.getAttribute('data-navbar');
    var fullHeader = document.querySelector('.site-header');
    var header = document.querySelector('.header-bottom');
    var headerTop = window.pageYOffset + header.getBoundingClientRect().top;
    if (typeof (header) !== 'undefined' && header !== null && navType === 'sticky') {
        function stickyNav() {
            // window.addEventListener('scroll', function(){
            var currScroll = window.pageYOffset;
            if (currScroll > 0) {
                fullHeader.style.height = document.querySelector('.header-top').offsetHeight + document.querySelector('.header-middle').offsetHeight + header.offsetHeight + 'px';
            }
            if (currScroll >= headerTop + header.offsetHeight) {
                header.classList.add("sticky");
            } else {
                header.classList.remove("sticky");
            };
            // });
        }
        stickyNav()
        window.addEventListener('scroll', throttle(stickyNav, 50));
    }

    var tBtn = document.getElementById('js-menu-toggle');
    tBtn.onclick = function (e) {
        e.preventDefault();
        document.body.classList.toggle('js-mobile-menu-opened');
        tBtn.classList.toggle('menu-icon-close');
    };
    document.getElementById('backdrop').onclick = function () {
        document.body.classList.toggle('js-mobile-menu-opened');
        tBtn.classList.toggle('menu-icon-close');
    };

    


    btnScrollTop = document.querySelector('#back-to-top');
    window.addEventListener('scroll', function () {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            btnScrollTop.style.opacity = 1;
        } else {
            btnScrollTop.style.opacity = 0;
        }
    });
    btnScrollTop.addEventListener('click', function (e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    });


    var tables = document.querySelectorAll('table');
    if (tables.length > 0) {
        tables.forEach(function (table) {
            var wrapper = document.createElement('div')
            wrapper.classList.add('table-responsive');
            table.parentNode.insertBefore(wrapper, table);
            wrapper.appendChild(table);
        })
    }


    

   

    var searchOpen = document.getElementById('js-search-button');
    var searchPopup = document.querySelector('.js-search-popup');
    var searchClose = document.getElementById('search-close');
    var searchInput = document.getElementById('bit_search_keywords');
    var searchResult = document.getElementById('bit_search_results');
    var posts = [];
    searchOpen.addEventListener('click', function () {
        searchPopup.classList.add('visible');
        document.body.classList.add('search-opened');
        window.setTimeout(function () {
            searchInput.focus();
        }, 200);
        document.querySelector('html').style.overflow = "hidden";
    });
    document.addEventListener('keyup', function (e) {
        document.body.classList.toggle('abcdefgh', true)
        if (e.keyCode == 27 && searchPopup.classList.contains('visible') && document.body.classList.contains('search-opened')) {
            closeSearch();
            searchOpen.focus();
        }
    });
    searchInput.addEventListener('keyup', function (e) {
        if (e.keyCode == 27) {
            closeSearch();
            searchOpen.focus();
        }
    });
    searchClose.addEventListener('keyup', function (e) {
        if (e.keyCode == 13) {
            closeSearch();
            searchOpen.focus();
        }
    });
    searchClose.addEventListener('keyup', function (e) {
        if (e.keyCode == 13) {
            closeSearch();
            searchOpen.focus();
        }
    });
    searchClose.onclick = closeSearch;
    function closeSearch() {
        searchPopup.classList.toggle('visible');
        document.body.classList.toggle('search-opened');
        searchInput.value = '';
        searchResult.innerHTML = '';
        document.querySelector('html').style.overflow = "";
    }
});

