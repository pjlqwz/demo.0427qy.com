jQuery(document).ready(function($){

    if( $('.ey-inquiry .ey-open').length > 0 ) {

        $('.ey-inquiry').on('click', '.ey-open', function() {
            var inquiryTitle = $(this).data('inquiry-title');
            $(".ey-inmx-subject input").val(inquiryTitle);
        });
    }

});