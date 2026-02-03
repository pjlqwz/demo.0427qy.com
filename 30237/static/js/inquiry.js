/* 产品列表弹窗留言提取标题 */
jQuery(document).ready(function($){

    if( $('.inquiry-buttons .open-popup-link').length > 0 ) {

        $('.inquiry-buttons').on('click', '.open-popup-link', function() {
            var inquiryTitle = $(this).data('inquiry-title');
            $(".product-inquiry-subject input").val(inquiryTitle);
        });
    }

});