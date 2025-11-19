jQuery(document).ready(function($){
    
    var ulChildren = '.widget ul.children,.widget ul.sub-menu';
    var angleSpan = '<span class="angle down-arrow"></span>';

    if( $(ulChildren).length > 0 ) {
        
        $(ulChildren).parent().prepend(angleSpan);
        
        var angleU1 = '.widget > ul > li > .angle, .widget > div > ul > li > .angle';
        
        $(angleU1).on('click', function(event) {
            event.preventDefault();
            
            if( $(this).hasClass('active') ) {
                $(this).removeClass('active');
            } else {
                $(this).addClass('active');
            }
            $(this).siblings('ul').toggle(200);
            $(angleU1).not(this).siblings('ul').hide(200);
            $(angleU1).not(this).removeClass('active');
        });
        
        var angleU2 = '.widget ul ul > li > .angle';
        
        $(angleU2).on('click', function(event) {
            event.preventDefault();
            
            if( $(this).hasClass('active') ) {
                $(this).removeClass('active');
            } else {
                $(this).addClass('active');
            }
            $(this).siblings('ul').toggle(200);
            $(angleU2).not(this).siblings('ul').hide(200);
            $(angleU2).not(this).removeClass('active');
        });
    }

});