function hideMsgPop() { $('.inquiry-pop-bd')
        .fadeOut('fast') }
if ($('body .inquiry-form-wrap')
    .length > 0) {
    var webTop = $('body .inquiry-form-wrap')
        .offset()
        .top - 80
    $('.company_subscribe .button')
        .click(function () { $("html, body")
                .animate({ scrollTop: webTop }, 1000);
            $(".ad_prompt")
                .show()
                .delay(3000)
                .hide(300); })
} else { $('.company_subscribe .button')
        .click(function () { $('.inquiry-pop-bd')
                .fadeIn('fast') }) }
$('.inquiry-pop,.company_subscribe .button')
    .click(function (e) { e.stopPropagation(); })
$(document)
    .click(function () { hideMsgPop() })
//右下角留言弹窗
$(document)
    .ready(function () {
        //底部留言
        $(document)
            .click(function () {
                $(".ey_message .message-form")
                    .slideUp("fast");
            });
        $(".ey_message")
            .click(function (event) {
                event.stopPropagation();
            });
        $(".message-header")
            .click(function () {
                $(".ey_message .message-form")
                    .slideToggle("fast");
                $(".ey_message")
                    .toggleClass("ey_message-toggle");
                $(".ey_message .message-header .arrow-toggle i")
                    .toggleClass("fa-angle-up fa-angle-down");
            });
    });
//右下角留言弹窗end