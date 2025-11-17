var SetMoreCasePage = false
    , SetMoreNewsPage = false
    , lpt_index = false
    , jylm_page = false
    , index_page_is = false;
$(function () {
    $('.moreA')
        .mouseover(function () { $(this)
                .stop()
                .animate({ right: 0 }, 300); })
        .mouseleave(function () { $(this)
                .stop()
                .animate({ right: -30 }, 300); })
    $('.indexHonorItem')
        .mouseover(function () { $(this)
                .stop()
                .animate({ height: 169, paddingTop: 24 })
                .find('figcaption')
                .show(); })
        .mouseleave(function () { $(this)
                .stop()
                .animate({ height: 159, paddingTop: 34 })
                .find('figcaption')
                .hide(); })
    $('#rightScrollBar_a5')
        .mouseover(function () { $(this)
                .find('#erweima')
                .fadeIn(100) })
        .mouseleave(function () { $(this)
                .find('#erweima')
                .fadeOut(100) })
    $('#rightScrollBar_a44')
        .mouseover(function () { $(this)
                .addClass('a5_hover');
            $(this)
                .find('.nav_huodong')
                .fadeIn(100) })
        .mouseleave(function () { $(this)
                .removeClass('a5_hover');
            $(this)
                .find('.nav_huodong')
                .fadeOut(100) })
    setNav();
    var body_width = $('.wrap')
        .eq(1)
        .width();
    var resizeTimer = null;
    $(window)
        .resize(function () {
            if (resizeTimer) { clearTimeout(resizeTimer) }
            resizeTimer = setTimeout(function () { LoadPageSize();
                body_width = $('.wrap')
                    .eq(1)
                    .width(); }, 30);
        });
    var resizeTimer2 = null;
    $('#foothelp a')
        .each(function (i) { $(this)
                .click(function () { help_type = i; var b = i + 1;
                    temp_HelpText_index = i;
                    $('.foothelp' + b)
                        .eq(0)
                        .show(0)
                        .siblings('.foothelp')
                        .hide(); }) })
   
});
var temp_HelpText_index = 0;
var help_type = null;
var help_stact = true;
function setNav() { $('.navlist li')
        .each(function () { var s = false; var body_width = $('.wrap')
                .eq(1)
                .width(); var m = $(this)
                .find('menu'); var a = $(this)
                .children('a'); if (body_width <= 640 && $(this)
                .find('menu')
                .length > 0) { var old_href = a.attr('href');
                a.attr('bsrc', old_href);
                a.attr('href', 'javascript:void(0)');
                a.attr('target', '_self');
                $(this)
                    .unbind('mouseover')
                    .unbind('mouseleave')
                    .click(function () { s == false ? m.show(0, function () { s = true; return false; }) : m.hide(0, function () { s = false; return false; }); }) } else if (body_width > 640) { a.attr('bsrc') == null ? '' : a.attr('bsrc', a.attr('href'))
                    .attr('href', 'javascript:void(0)');
                $(this)
                    .mouseover(function () { $(this)
                            .addClass('hover');
                        m.show(0); })
                    .mouseleave(function () { $(this)
                            .removeClass('hover');
                        m.hide(); }) } }) }

function showFlink() { $('#friendLink')
        .css('display') == 'block' ? $('#friendLink')
        .hide(500) : $('#friendLink')
        .show(500);
    $("html,body")
        .animate({ scrollTop: $('#friendLink')
                .offset()
                .top }, 1200) }

function showRightBar() { $('#rightScrollBar')
        .removeClass('rightScrollBarHide'); return true; }

function hideRightBar() { $('#rightScrollBar')
        .addClass('rightScrollBarHide'); return true; }
var MapShow_state = true;;

function showMap() { if (MapShow_state) { $('#webSiteMap')
            .stop()
            .animate({ height: 240 }, 400, 'easeOutExpo', function () { MapShow_state = false; }) } else { $('#webSiteMap')
            .stop()
            .animate({ height: 33 }, 400, 'easeOutExpo', function () { MapShow_state = true; }) } }

function showOtherCp() { $('.webSite')
        .show(1000); }

function closeOtherCp() { $('.webSite')
        .hide(1000); }
var sub_shejishi_id = null;

function showOA(t, t2, t3) {
    var bheight = $('body')
        .height();
    $('#lyBoxBg')
        .css('height', bheight)
        .show();
    $("html,body")
        .animate({ scrollTop: 550 }, 400)
    $('#lyBox')
        .show();
    $('#OATitle')
        .html(t);
    $('#OATitle2')
        .html(t2);
    if (t3 > 0) { sub_shejishi_id = t3; }
}

function hidelyBox() { $('#lyBoxBg')
        .hide();
    $('#lyBox')
        .hide(); }

function show_search() { $('.search')
        .fadeIn(500);
    $('.searchPut')
        .focus(); var seachTime = null;
    $('.search')
        .mouseleave(function () { seachTime = setTimeout(function () { $('.search')
                    .fadeOut(500) }, 700); })
        .mouseover(function () { clearTimeout(seachTime); }) }

function SetCaseListWidht(index) { $('.js_check_width_list')
        .each(function () { $(this)
                .find('.indexCaseItem')
                .each(function (i) { if ((i + 1) % index == 0 && i > 0) { $(this)
                            .addClass('no_nr') } else { $(this)
                            .removeClass('no_nr'); } }) }) }

function SetCaseListWidht2(index) { $('.indexGoldDesigner')
        .each(function () { $(this)
                .find('.indexCaseItem')
                .each(function (i) { if ((i + 1) % index == 0 && i > 0) { $(this)
                            .addClass('no_nr') } else { $(this)
                            .removeClass('no_nr'); } }) }) }

function SetNewsListWidth(index) { $('.NewsList li')
        .each(function (i) { if ((i + 1) % index == 0 && i > 0) { $(this)
                    .addClass('no_mr') } else { $(this)
                    .removeClass('no_mr'); } }) }
var js_check_width_list = 0;
var newsIndexPage = false;
var menu_ul = false;
var CaseDetail = false;
var CaseDetailSet = 0;

function LoadPageSize() {
    setNav();
    var body_width = $('.wrap')
        .eq(1)
        .width();
    if (js_check_width_list == 4 && body_width == 980) { SetCaseListWidht(3); return false; }
    if (body_width < 980) { $('#headerTop')
            .css('margin-bottom', 0); }
    if (body_width >= 1200 && js_check_width_list == 4) { SetCaseListWidht(4); return false; }
    if (body_width == 640 && js_check_width_list == 4) { SetCaseListWidht(2); return false; }
    if (body_width == 980) { SetCaseListWidht(4);
        SetCaseListWidht2(3);
        $('#navlist')
            .show(0);
        menu_ul = false; }
    if (body_width >= 1200) { SetCaseListWidht(5);
        SetCaseListWidht2(3);
        menu_ul = false;
        $('#navlist')
            .show(0); }
    if (body_width == 640) { SetCaseListWidht(3);
        SetCaseListWidht2(2); if (!menu_ul) { $('#navlist')
                .hide(0); } }
    if (newsIndexPage) {
        if (body_width == 640) { SetNewsListWidth(2); }
        if (body_width == 980) { SetNewsListWidth(3); }
        if (body_width >= 1200) { SetNewsListWidth(4); }
    }
    if (CaseDetail) {
        if (body_width < 640) { SetSrcollLList(2);
            CaseDetailSet = 2; }
        if (body_width == 640) { SetSrcollLList(3);
            CaseDetailSet = 3; }
        if (body_width == 980) { SetSrcollLList(2);
            CaseDetailSet = 2; }
        if (body_width == 1200) { SetSrcollLList(2);
            CaseDetailSet = 2; }
        if (body_width > 1200) { SetSrcollLList(3);
            CaseDetailSet = 2; }
    }
    if (SetMoreCasePage) {
        if (body_width <= 640) { SetMoreCase(0, 0); }
        if (body_width == 640) { SetMoreCase(219, 3); }
        if (body_width == 980) { SetMoreCase(254, 4); }
        if (body_width == 1200) { SetMoreCase(247, 5); }
        if (body_width > 1200) { SetMoreCase(271, 5); }
    }
    if (SetMoreNewsPage) {
        if (body_width <= 640) { SetMoreNews(body_width, 1); }
        if (body_width == 640) { SetMoreNews(336, 2); }
        if (body_width == 980) { SetMoreNews(336, 4); }
        if (body_width == 1200) { SetMoreNews(271, 4); }
        if (body_width > 1200) { SetMoreNews(346, 4); }
    }
    if (lpt_index) {
        if (body_width >= 640)
            if (body_width > 979) { $('#indexbannerWrap')
                    .height($('#indexbanner li.hover')
                        .find('img')
                        .eq(0)
                        .height() + 116); } else { $('#indexbannerWrap')
                    .height($('#indexbanner li.hover')
                        .find('img')
                        .eq(0)
                        .height() + 0); }
        if (body_width >= 640) { $('#mrtj_2')
                .hide(0) } else { $('#mrtj_2')
                .show(0) }
    }
    if (jylm_page) { if (body_width < 640) { var td_w = body_width - $('.jylm_submit_box_left .td_left')
                .eq(0)
                .width() - 30;
            $('.jylm_moblie_input_width')
                .width(td_w);
            $('#city_select3')
                .unbind('mouseover')
                .click(function () { $(this)
                        .find('.city_box')
                        .fadeIn(50); }) } else { $('.jylm_moblie_input_width')
                .removeAttr('style'); } }
}

function show_moblie_menu() { menu_ul = true; if ($('.navlist')
        .css('display') == "block") { $('.navlist')
            .hide(500) } else { $('.navlist')
            .show(500, function () { menu_ul = true; }); } }



function Dd(i) { return document.getElementById(i); }

function Ds(i) { Dd(i)
        .style.display = ''; }

function Dh(i) { Dd(i)
        .style.display = 'none'; }

function Dsh(i) { Dd(i)
        .style.display = Dd(i)
        .style.display == 'none' ? '' : 'none'; }

function Df(i) { Dd(i)
        .focus(); }
var tID = 0;

function Tab(ID) { var tTab = Dd('Tab' + tID); var tTabs = Dd('Tabs' + tID); var Tab = Dd('Tab' + ID); var Tabs = Dd('Tabs' + ID); if (ID != tID) { tTab.className = 'tab';
        Tab.className = 'tab_on';
        tTabs.style.display = 'none';
        Tabs.style.display = '';
        tID = ID; try { Dd('tab')
                .value = ID; } catch (e) {} } }

function checkall(f, t) { var t = t ? t : 1; for (var i = 0; i < f.elements.length; i++) { var e = f.elements[i]; if (e.type != 'checkbox') continue; if (t == 1) e.checked = e.checked ? false : true; if (t == 2) e.checked = true; if (t == 3) e.checked = false; } }

function stoinp(s, i, p) {
    if (Dd(i)
        .value) {
        var p = p ? p : ',';
        var a = Dd(i)
            .value.split(p);
        for (var j = 0; j < a.length; j++) { if (s == a[j]) return; }
        Dd(i)
            .value += p + s;
    } else { Dd(i)
            .value = s; }
}

function select_op(i, v) { var o = Dd(i); for (var i = 0; i < o.options.length; i++) { if (o.options[i].value == v) { o.options[i].selected = true; break; } } }

function Inner(i, s) { try { Dd(i)
            .innerHTML = s; } catch (e) {} }

function InnerTBD(i, s) { try { Dd(i)
            .innerHTML = s; } catch (e) { Dd(i)
            .parentNode.outerHTML = Dd(i)
            .parentNode.outerHTML.replace(Dd(i)
                .innerHTML, s); } }

function Go(u) { window.location = u; }

function confirmURI(m, f) { if (confirm(m)) Go(f); }

function showmsg(m, t) { var t = t ? t : 5000; var s = m.indexOf(L['str_delete']) != -1 ? 'delete' : 'ok'; try { Dd('msgbox')
            .style.display = '';
        Dd('msgbox')
            .innerHTML = m + sound(s);
        window.setTimeout('closemsg();', t); } catch (e) {} }

function closemsg() { try { Dd('msgbox')
            .innerHTML = '';
        Dd('msgbox')
            .style.display = 'none'; } catch (e) {} }


function Eh(t) { var t = t ? t : 'select'; if (isIE) { var arVersion = navigator.appVersion.split("MSIE"); var IEversion = parseFloat(arVersion[1]); if (IEversion >= 7 || IEversion < 5) return; var ss = document.body.getElementsByTagName(t); for (var i = 0; i < ss.length; i++) { ss[i].style.visibility = 'hidden'; } } }

function Es(t) { var t = t ? t : 'select'; if (isIE) { var arVersion = navigator.appVersion.split("MSIE"); var IEversion = parseFloat(arVersion[1]); if (IEversion >= 7 || IEversion < 5) return; var ss = document.body.getElementsByTagName(t); for (var i = 0; i < ss.length; i++) { ss[i].style.visibility = 'visible'; } } }

function FCKLen(i) {
    var i = i ? i : 'content';
    var o = FCKeditorAPI.GetInstance(i);
    var d = o.EditorDocument;
    var l;
    if (document.all) { l = d.body.innerText.length; } else { var r = d.createRange();
        r.selectNodeContents(d.body);
        l = r.toString()
            .length; }
    return l;
}
function FCKXHTML(i) { var i = i ? i : 'content'; return FCKeditorAPI.GetInstance(i)
        .GetXHTML(true); }

function Tb(d, t, p, c) { for (var i = 1; i <= t; i++) { if (d == i) { Dd(p + '_t_' + i)
                .className = c + '_2';
            Ds(p + '_c_' + i); } else { Dd(p + '_t_' + i)
                .className = c + '_1';
            Dh(p + '_c_' + i); } } }

function is_captcha(v) { if (v == L['str_captcha']) return false; if (v.match(/^[a-z0-9A-Z]{1,}$/)) { return v.match(/^[a-z0-9A-Z]{4,}$/); } else { return v.length > 1; } }

function ext(v) { return v.substring(v.lastIndexOf('.') + 1, v.length)
        .toLowerCase(); }
function set_cookie(n, v, d) { var e = ''; var f = d ? d : 365;
    e = new Date((new Date())
        .getTime() + f * 86400000);
    e = "; expires=" + e.toGMTString();
    document.cookie = CKPrex + n + "=" + v + ((CKPath == "") ? "" : ("; path=" + CKPath)) + ((CKDomain == "") ? "" : ("; domain=" + CKDomain)) + e; }

function get_cookie(n) {
    var v = '';
    var s = CKPrex + n + "=";
    if (document.cookie.length > 0) { o = document.cookie.indexOf(s); if (o != -1) { o += s.length;
            end = document.cookie.indexOf(";", o); if (end == -1) end = document.cookie.length;
            v = unescape(document.cookie.substring(o, end)); } }
    return v;
}
function substr_count(str, exp) { if (str == '') return 0; var s = str.split(exp); return s.length - 1; }
function lang(s, a) { for (var i = 0; i < a.length; i++) { s = s.replace('{V' + i + '}', a[i]); } return s; }
document.onkeydown = function (e) { var k = typeof e == 'undefined' ? event.keyCode : e.keyCode; if (k == 37) { try { if (Dd('destoon_previous')
                .value && typeof document.activeElement.name == 'undefined') Go(Dd('destoon_previous')
                .value); } catch (e) {} } else if (k == 39) { try { if (Dd('destoon_next')
                .value && typeof document.activeElement.name == 'undefined') Go(Dd('destoon_next')
                .value); } catch (e) {} } else if (k == 38 || k == 40 || k == 13) { try { if (Dd('search_tips')
                .style.display != 'none' || Dd('search_tips')
                .innerHTML != '') { SCTip(k); return false; } } catch (e) {} } }
