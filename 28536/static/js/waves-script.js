// Resize
jQuery(window).resize(function(){
    "use strict";
    resizeFullElement();

    // ThemeWaves Redraw
    jQuery('.tw-redraw').each(function() {
        var $curr = jQuery(this);
        if (!$curr.hasClass('not-drawed')) {
            $curr.trigger('tw-animate');
        }
    });
    // Seperator Resize
    jQuery('.waves-container-seperator svg.sep-brushed-top,.waves-container-seperator svg.sep-brushed-bottom').each(function(i,node){
        node.viewBox.baseVal.width = jQuery(this).width();
    });
    
    // Media Resize
    resizeMediaElement();
    
    // Mega Menu Resize
    try{
        var $megaHeader    =jQuery('#header>.container>.header');
        var $megaHeaderLeft=0;
        var $megaHeaderWidth=0;
        jQuery('.waves-mega-menu').each(function(){
            var $currMega=jQuery(this);
            var $currMegaWidth=0;
            var $liW=0;
            var $rem=0;
            var $currMegaLeft=0;
            var $colCnt  =parseInt($currMega.data('col').replace('column-', ''), 10);
            
            
            if(jQuery('body').hasClass('theme-boxed')){
                $megaHeaderLeft=jQuery('#theme-layout').offset().left;
                $megaHeaderWidth=jQuery('#theme-layout').width();
            }else{
                $megaHeaderLeft =$megaHeader.closest('.container').offset().left+parseInt($megaHeader.closest('.container').css('padding-left').replace('px', ''), 10);
                $megaHeaderWidth=$megaHeader.closest('.container').width();
            }
            $currMega.css({'display':'block','opacity':'0'});
            jQuery('>li',$currMega).each(function(){
                jQuery(this).css('width','');
                if(jQuery(this).width()>$liW){
                    $liW=jQuery(this).width();
                }
            }).promise().done(function(){
                $currMega.css('margin-left','0px').css('left','0px');
                $currMegaLeft=$currMega.offset().left;
                if($colCnt<=3){
                    $currMegaWidth=$liW*$colCnt;
                    $rem=($megaHeaderLeft+$megaHeaderWidth)-($currMegaLeft+$currMegaWidth);
                }else{
                    $currMegaWidth=$megaHeaderWidth;
                    $liW=$currMegaWidth/$colCnt;
                    $rem=$megaHeaderLeft-$currMegaLeft;
                }
                jQuery('>li',$currMega).width($liW);
                $currMega.width($currMegaWidth);
                
                if($rem<0){
                    $currMega.css('margin-left',$rem+'px');
                }else{
                    $currMega.css('margin-left','').css('left','');
                }
                
                $currMega.css({'display':'','opacity':'','visibility':''});
            });
        });
    }catch(err){}
    // Team Modal
    var $currModal=jQuery('#team-modal-container');
    if($currModal.attr('id')==='team-modal-container'){
        $currModal.children('.team-modal.container').css('margin-top','');
        $currModal.children('.team-modal.container').css({'margin-top':'-'+(($currModal.children('.team-modal.container').height()+twItemTB($currModal.children('.team-modal.container')))/2)+'px'});
    }
    // Search Modal
    var $currSearchModal=jQuery('.search-on-menu.search2');
    if($currSearchModal.hasClass('active')){
        $currSearchModal.find('#searchform>.input').css('margin-top',parseInt(jQuery(window).height()/3,10)+'px');
    }
    // bg video horizontal
    jQuery('.bg-video-container.bg-video-horizontal h2').each(function(){
        jQuery(this).css('margin-top','-'+parseInt((jQuery(this).height()/2),10)+'px');
    });
    //-------
    headerMTS();
});
jQuery(document).ready(function($){
    "use strict";
    jQuery(document).bind('keydown', function (e){
        if(jQuery('#team-modal-container').attr('id')==='team-modal-container'){
            switch(e.which){
                case 27:{jQuery('#team-modal-container .team-actions-container>.team-close').click();break;}
                case 37:{jQuery('#team-modal-container .team-actions-container>.team-prev').click();break;}
                case 39:{jQuery('#team-modal-container .team-actions-container>.team-next').click();break;}
            }
        }
    });
    jQuery('html').click(function(e){if(e.target.id==='team-modal-container'){jQuery('#team-modal-container .team-actions-container>.team-close').click();}});
    
    jQuery('.search-on-menu>i').click(function(){
        if(jQuery(this).parent().hasClass('active')){
            jQuery(this).parent().removeClass('active');
            jQuery('body').removeClass('with-modal');
        }else{
            jQuery(this).parent().addClass('active');
            if(jQuery(this).parent().hasClass('search2')){
                jQuery('body').addClass('with-modal');
                jQuery(window).resize();
            }
        }
    });
    jQuery('.search-on-menu i.fa-close').click(function(){
        jQuery(this).closest('.search-on-menu').removeClass('active');
        jQuery('body').removeClass('with-modal');
    });
    
    // Main Menu Fix for LION THEME
    jQuery('.sf-menu>li>a').each(function(){
        jQuery(this).append('<span class="before" style="width:'+jQuery(this).width()+'px;"></span><span class="after" style="width:'+jQuery(this).width()+'px;"></span>');
    });
    // Animated Background Colors
    jQuery('.waves-team.style_4>.team-member').click(function(e){e.preventDefault();
        var $currTeam=jQuery(this); //jQuery(this).closest('.team-member');
        var $currTeamHiddenContent=$currTeam.find('.hidden-content'); //jQuery(this).closest('.team-member');
        var $currTabContainer=$currTeam.siblings('.team-tab-content');
        $currTabContainer.html($currTeamHiddenContent.html()).show();
        $currTeam.addClass('active').siblings('.team-member').removeClass('active');
        $currTeam.find('.team-tab-close').unbind('click').bind('click',function(e){e.preventDefault();
            $currTeam.removeClass('active');
            $currTabContainer.hide();
            return false;
        });
    });
    // Animated Background Colors
    jQuery('.btn-border').hover(function(){
        var $bg = $(this).css('border-color');
            $(this) .css('color',$(this).hasClass('white-button')?'#000000':'#ffffff');
            $(this).css('background-color', $bg);
        },function(){
            var $color = jQuery(this).css('background-color');
            $(this).css('color', $color);
            $(this).css('background-color', 'transparent');
        }
    );
    $(".btn-flat").hover(
        function() {
            var $color = jQuery(this).css('border-color');
            $(this).css('color', $color);
            $(this).css('background-color', 'transparent');
        },
        function() {
            var $bg = $(this).css('border-color');
            $(this).css('background-color', $bg);
            $(this).css('color', '#fff');                
        }
    );
    
    // Accordion And Toggle
    $('.waves-accordion,.waves-toggle').each(function() {
        var $currAccCont = $(this);
        $('>.accordion-group>.accordion-heading>.accordion-toggle', $currAccCont).live('click', function(e) {
            e.preventDefault();
            var $currGroup = $(this).closest('.accordion-group');
            if ($currGroup.hasClass('active') && !$currGroup.hasClass('closing')) {
                $currGroup.removeClass('active').addClass('closing').children('.accordion-body').stop().slideUp("fast", function() {
                    $currGroup.removeClass('closing');
                });
            } else {
                $currGroup.removeClass('closing');
                $currGroup.addClass('active').children('.accordion-body').css({'display': 'none'}).stop().slideDown("fast");
                if ($currAccCont.hasClass('waves-accordion')) {
                    $currGroup.siblings('.accordion-group.active').addClass('closing').removeClass('active').children('.accordion-body').stop().slideUp("fast", function() {
                        $currGroup.removeClass('closing');
                    });
                }
            }
        });
    });
    
    // Accordion Blog
    $('.acc-blog-filter').live('click', function(e){e.preventDefault();
        //-----------------Closing
        var $currGroup = $(this).closest('.acc-blog-group');
        $currGroup.siblings('.acc-blog-group.opened').each(function(){
            var $siblingsGroup=jQuery(this);
            var $siblingsGroupInner=$siblingsGroup.children('.acc-blod-inner');
            var $siblingsGroupInnerHeight=0;
            var $siblingsGroupMinH=0;
            $siblingsGroup.removeClass('opened').removeClass('acc-blog-video-playing');
            if($siblingsGroupInner.hasClass('acc-blod-inner')){
                $siblingsGroupInnerHeight=$siblingsGroupInner.height();
                $siblingsGroupInner.css('height','');
            }
            $siblingsGroupMinH=$siblingsGroup.height();
            $siblingsGroup.addClass('opened');
            if($siblingsGroupInner.hasClass('acc-blod-inner')){
                $siblingsGroupInner.height($siblingsGroupInnerHeight);
            }
            $siblingsGroup.stop().animate({height: $siblingsGroupMinH+"px"}, 300, function(){
                $siblingsGroup.removeClass('opened').children('.acc-blod-inner').css('height','');
                $siblingsGroup.css('height','');
            });
        });
        //-----------------Opening
        var $currGroupMinH=$currGroup.height();
        var $currGroupMaxH=0;
        $currGroup.addClass('opened');
        resizeMediaElement();
        $currGroupMaxH=$currGroup.height();
        $currGroup.height($currGroupMinH);
        $currGroup.stop().animate({height: $currGroupMaxH+"px"}, 301, function(){
            $currGroup.css('height','');
            scrollTopItem($currGroup);
            if($currGroup.hasClass('format-video')){
                $currGroup.children('.acc-blog-video-play').unbind('click').bind('click',function(e){e.preventDefault();
                    $currGroup.addClass('acc-blog-video-playing');
                    var $currPlayer=$currGroup.find('.entry-media>.jp-jplayer-video');
                    $currPlayer.jPlayer("play").unbind('click').bind('click',function(e){e.preventDefault();
                        if($currPlayer.data().jPlayer.status.paused){
                            $currPlayer.jPlayer("play");
                            $currGroup.addClass('acc-blog-video-playing');
                        }else{
                            $currPlayer.jPlayer("pause");
                            $currGroup.removeClass('acc-blog-video-playing');
                        }
                        resizeMediaElement();
                    });
                    resizeMediaElement();
                });
            }
        });
    });
    jQuery('.acc-blog-group .entry-title').live('click', function(e){
        var $curr=jQuery(this);
        var $currGrp=$curr.closest('.acc-blog-group');
        if(!$currGrp.hasClass('format-quote')&&!$currGrp.hasClass('opened')){
            e.preventDefault();
            $currGrp.children('.acc-blog-filter').click();
        }
    });

    // Tab
    $('.waves-tab').each(function() {
        var $currTabCont=$(this);
        $currTabCont.find(">li").each(function($i) {
            $(this).appendTo($(this).closest('.waves-tab').find('ul.nav-tabs'));
            if ($i === 0) {
                $(this).addClass('active');
            }
        });
        $currTabCont.find(".tab-pane").each(function($in) {
            jQuery(this).appendTo(jQuery(this).closest('.waves-tab').find('div.tab-content'));
            if ($in === 0) {
                $(this).addClass('active');
            }else{
                $(this).css('display','none');
            }
        });
        $('>ul>li',$currTabCont).each(function($i){
            var $currLi  = $(this);
            var $currCon = $('>.tab-content>.tab-pane',$currTabCont).eq($i);
            $currLi.on('click', function(e) {e.preventDefault();
                if($currLi.not('.active')){
                    $currLi.addClass('active').siblings('.active').removeClass('active');
                    $currCon.siblings('.active').fadeOut().removeClass('active');
                    $currCon.addClass('active').fadeIn();
                }                
            });
        });
        $currTabCont.removeClass('tab-init');
    });
    
    // ThemeWaves Animate General - Init
    jQuery('.tw-animate-gen').each(function() {
        var $curr = jQuery(this);
        var $currChild = $curr.children().eq(-1);
        if ($currChild.attr('id') === 'sidebar' || $currChild.hasClass('tw-pricing') || $currChild.hasClass('tw-our-team') || $currChild.hasClass('tw-blog')) {
            $currChild.children().addClass('tw-animate-gen').attr('data-animation', $curr.attr('data-animation')).attr('data-animation-delay', $curr.attr('data-animation-delay')).attr('data-animation-offset', $curr.attr('data-animation-offset')).css('opacity', '0');
            $curr.removeClass('tw-animate-gen').attr('data-animation', '').attr('data-animation-delay', '').attr('ddata-animation-offset', '').css('opacity', '');
        }
        if ($currChild.hasClass('carousel-anim')) {
            $currChild.find('ul.waves-carousel>li').css('opacity', '0');
            $curr.css('opacity', '');
        }
    });
    jQuery(window).resize();
});
jQuery(window).load(function() {
    "use strict";
    /* Google Map Style */
    /*jQuery('.waves-map.styled').each(function(i){
        var $currMap=jQuery(this);
        var $currMapStyle=$currMap.data('style');
        var $currMapMouse=$currMap.data('mouse');
        var $currMapLat=$currMap.data('lat');
        var $currMapLng=$currMap.data('lng');
        var $currMapZoom=$currMap.data('zoom');
        var $currMapAdministrativeColor=$currMap.data('administrativecolor');
        var $currMapLandscapeColor=$currMap.data('landscapecolor');
        var $currMapPoiColor=$currMap.data('poicolor');
        var $currMapRoadColor=$currMap.data('roadcolor');
        var $currMapTransitColor=$currMap.data('transitcolor');
        var $currMapWaterColor=$currMap.data('watercolor');
        var $currMapArea=$currMap.children('.map').attr('id','waves-map-styled-'+i);
        
        var $map;
        var $center = new google.maps.LatLng($currMapLat,$currMapLng);
        var MY_MAPTYPE_ID = 'custom_style_'+i;
        $map = new google.maps.Map(
            document.getElementById('waves-map-styled-'+i),
            {
                zoom: $currMapZoom,
                center: $center,
                mapTypeControlOptions:{
                    mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
                },
                mapTypeId: MY_MAPTYPE_ID
            }
        );
        $map.setOptions({scrollwheel:$currMapMouse});
        var $featureOpts = [];
        //administrative
        if($currMapAdministrativeColor){
            $featureOpts.push({
                featureType: 'administrative',
                elementType: "geometry",
                stylers: [
                    { color: $currMapAdministrativeColor }
                ]
            });
        }
        //landscape
        if($currMapLandscapeColor){
            $featureOpts.push({
                featureType: 'landscape',
                elementType: "geometry",
                stylers: [
                    { color: $currMapLandscapeColor}
                ]
            });
        }
        //poi
        if($currMapPoiColor){
            $featureOpts.push({
                featureType: 'poi',
                elementType: "geometry",
                stylers: [
                    { color: $currMapPoiColor}
                ]
            });
        }
        //road
        if($currMapRoadColor){
            $featureOpts.push({
                featureType: 'road',
                elementType: "geometry",
                stylers: [
                    { color: $currMapRoadColor}
                ]
            });
        }
        //transit
        if($currMapTransitColor){
            $featureOpts.push({
                featureType: 'transit',
                elementType: "geometry",
                stylers: [
                    { color: $currMapTransitColor}
                ]
            });
        }
        //water
        if($currMapWaterColor){
            $featureOpts.push({
                featureType: 'water',
                elementType: "geometry",
                stylers: [
                    { color: $currMapWaterColor}
                ]
            });
        }
        $map.mapTypes.set(MY_MAPTYPE_ID, new google.maps.StyledMapType($featureOpts,{name: $currMapStyle}));
        // markers
        $currMap.waypoint(function() {
            $currMapArea.siblings('.map-markers').children('.map-marker').each(function(j){
                var $currMar=jQuery(this);
                var $currMarTitle=$currMar.data('title');
                var $currMarLat=$currMar.data('lat');
                var $currMarLng=$currMar.data('lng');
                var $currMarIconSrc=$currMar.data('iconsrc');
                var $currMarIconWidth=$currMar.data('iconwidth');
                var $currMarIconHeight=$currMar.data('iconheight');

                var markerOp={
                    position: new google.maps.LatLng($currMarLat,$currMarLng),
                    map: $map,
                    title: $currMarTitle,
                    animation: google.maps.Animation.DROP,
                    zIndex: j
                };
                if($currMarIconSrc&&$currMarIconWidth&&$currMarIconHeight){
                    markerOp.icon={
                        url: $currMarIconSrc,
                        size: new google.maps.Size($currMarIconWidth, $currMarIconHeight),
                        origin: new google.maps.Point(0,0),
                        anchor: new google.maps.Point(parseInt($currMarIconWidth,10)/2,$currMarIconHeight)
                    };
                }
                setTimeout(function() {
                    var marker = new google.maps.Marker(markerOp);
                    var infowindow = new google.maps.InfoWindow({content: $currMar.html()});
                    google.maps.event.addListener(marker, 'click', function() {
                        if(infowindow.getMap()){
                            infowindow.close();
                        }else{
                            infowindow.open($map,marker);
                        }
                    });
                }, j * 300);
            });
        }, {triggerOnce: true, offset: 'bottom-in-view'});
    });*/
    //----------------------------Initial Functions-----------------------------------------------
    wavesReInit(jQuery('#theme-layout'));
    waves_carousel();
    jQuery('.waves-portfolio .overlay-container img').each(function(){
        if(!jQuery(this).closest('.waves-portfolio').hasClass('list_carousel')){
            twPortImgResize(jQuery(this));
        }
    });
    // ThemeWaves Animate Custom
    jQuery('.tw-animate').each(function() {
        var $curr = jQuery(this);
        var $currOffset = $curr.attr('data-animation-offset');
        if ($currOffset === '' || $currOffset === 'undefined' || $currOffset === undefined) {
            $currOffset = 'bottom-in-view';
        }
        if ($currOffset === 'none') {
            $curr.trigger('tw-animate');
        } else {
            $curr.waypoint(function() {
                $curr.trigger('tw-animate');
            }, {triggerOnce: true, offset: $currOffset});
        }
    });
    // ThemeWaves Animate General - Bind
    jQuery('.tw-animate-gen').each(function() {
        var $curr = jQuery(this);
        var $currChild = $curr.children().eq(-1);
        var $removeClass = true;
        if ($curr.data('animation') === 'pulse' || $curr.data('animation') === 'floating' || $curr.data('animation') === 'tossing') {
            $removeClass = false;
        }
        $curr.bind('tw-animate', function() {
            var $currDelay = parseInt($curr.attr('data-animation-delay'), 10);
            if($currDelay<0){$currDelay=0;}
            setTimeout(function(){
                if ($currChild.hasClass('carousel-anim')) {
                    $currChild.find('ul.waves-carousel>li').each(function(i) {
                        var $currLi = jQuery(this);
                        setTimeout(function() {
                            $currLi.css('opacity', '');
                            $currLi.addClass('animated ' + $curr.data('animation'));
                            if ($removeClass) {
                                setTimeout(function() {
                                    $currLi.removeClass('animated');
                                    $currLi.removeClass($curr.data('animation'));
                                }, 3000);
                            }
                        }, 300 * i);
                    });
                } else {
                    $curr.css('opacity', '');
                    $curr.addClass('animated ' + $curr.data('animation'));
                    if ($removeClass) {
                        setTimeout(function() {
                            $curr.removeClass('animated');
                            $curr.removeClass($curr.data('animation'));
                        }, 3000);
                    }
                }
            },$currDelay);
        });
    });
    // ThemeWaves Animate General
    jQuery('.tw-animate-gen').each(function() {
        var $curr = jQuery(this);
        var $currOffset = $curr.attr('data-animation-offset');
        if ($currOffset === '' || $currOffset === 'undefined' || $currOffset === undefined) {
            $currOffset = 'bottom-in-view';
        }
        $curr.waypoint(function() {
            $curr.trigger('tw-animate');
        }, {triggerOnce: true, offset: $currOffset});
    });
    jQuery(window).resize();
    jQuery(window).scroll();
});
jQuery(window).scroll(function() {
    "use strict";
    //-------
    headerMTS();
});


function waves_carousel() {
    "use strict";
    jQuery('.list_carousel').each(function() {
        var $items = 1;
        var $itemsDesktop = false;     //[1199,4]
        var $itemsDesktopSmall = [979,3];//[979,3]
        var $itemsTablet = [768,2];      //[768,2]
        var $itemsTabletSmall = false; //false or [768,2]
        var $itemsMobile = [479,1];      //[479,1]
        var $itemsCustom = false;      //false or [479,1]
        var $singleItem = false;
        var $auto = false;
        var $navigation = true;
        var $pagination = false;
        var $duration = 200;
        var $timeoutDuration = 200;
        var $currentCrsl = jQuery(this).children('div.waves-carousel');
        var $navigationText = ["",""];
        //artHoverAnimateCSS($currentCrsl.children('li'));
        if (jQuery(this).hasClass('waves-carousel-team')) {
            $auto  = jQuery(this).data('autoplay');
            $items = 4;
            $pagination = true;
            $itemsDesktopSmall = [979,3];
            $itemsTablet = [768,2];
			$itemsMobile = [430,1];
        } else if (jQuery(this).hasClass('waves-carousel-portfolio')) {
            $pagination = true;
            $auto  = jQuery(this).data('autoplay');
            $items = parseInt(jQuery(this).data('items'),10);
        } else if (jQuery(this).hasClass('waves-carousel-partner')) {
            $navigation = false;
            $pagination = true;
            $auto  = jQuery(this).data('autoplay');
            $items = 6;
            $itemsDesktopSmall = [979,4];
            $itemsTablet = [768,3];
			$itemsMobile = [480,2];
        } else if (jQuery(this).hasClass('waves-carousel-post')) {
            $pagination = true;
            $auto  = jQuery(this).data('autoplay');
            $items = parseInt(jQuery(this).data('items'),10);
        } else if (jQuery(this).hasClass('waves-carousel-twitter')) {
            $singleItem = true;
            $navigation = false;
            $pagination = true;
            $auto  = jQuery(this).data('autoplay');
        } else if (jQuery(this).hasClass('waves-carousel-testimonial')) {
            $singleItem = true;
            $auto  = jQuery(this).data('autoplay');
            if (jQuery(this).hasClass('without-avatar')){
                $navigation = false;
                $pagination = true;
            }
            $itemsDesktopSmall = [979,1];
        } else if (jQuery(this).hasClass('image-slide-container')) {
            $itemsDesktopSmall = [979,1];
            $navigationText = ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"];
        }
        
        $currentCrsl.owlCarousel({
            items : $items,
            itemsDesktop :     $itemsDesktop,
            itemsDesktopSmall :$itemsDesktopSmall,
            itemsTablet:       $itemsTablet,
            itemsTabletSmall:  $itemsTabletSmall,
            itemsMobile :      $itemsMobile,
            itemsCustom :      $itemsCustom,
            autoPlay: $auto,
            singleItem:$singleItem,
            slideSpeed:$duration,
            pagination:$pagination,
            paginationSpeed:$timeoutDuration,
            navigationText : $navigationText,
            autoHeight : false,
            navigation : $navigation,
            afterAction : function(elem){
//              Waves Custom Auto Height
                var $max=0;
                var $visItems=this.owl.visibleItems;
                var n=$visItems.length;
                jQuery('>.owl-wrapper-outer>.owl-wrapper>.owl-item',elem).removeClass('owl-visible-first').removeClass('owl-visible').removeClass('owl-visible-last');
                setTimeout(function(){
                    for (var i = 0; i < n; i++) {
                        var $curr=jQuery('>.owl-wrapper-outer>.owl-wrapper>.owl-item',elem).eq($visItems[i]).addClass('owl-visible');
                        if($curr.height()>$max){$max=$curr.height();}
                        if(i===0){$curr.addClass('owl-visible-first');}
                        if((i+1)===n){$curr.addClass('owl-visible-last');}
                    }
                    jQuery('>.owl-wrapper-outer',elem).animate({height:$max},500);
                },500);
            },
            afterInit : function(elem){
                if(elem.closest('.waves-carousel-testimonial').hasClass('style_2')){
                    elem.children('.owl-wrapper-outer').append(elem.children('.owl-controls'));
                }
            }
        });
    });
}

/* Item Right Left Width */
/* ------------------------------------------------------------------- */
function wavesReInit($selector){
    "use strict";
    // Team Modal
    /*jQuery('.team-member .hover-container>h2',$selector).unbind('click').bind('click',function(e){e.preventDefault();
        jQuery('#team-modal-container').remove();
        jQuery('.team-member.modaled').removeClass('modaled');
        var $curTeam=jQuery(this).closest('.team-member');
        var $curTeamModal=$curTeam.addClass('modaled').children('.modal-container').clone();
        jQuery('body').addClass('with-modal').append('<div id="team-modal-container"><div class="team-modal container">'+$curTeamModal.html()+'</div></div>');
        //Team Modal Actions
        var $currModal=jQuery('#team-modal-container');
        $currModal.find('.team-actions-container>div').unbind('click').bind('click',function(){
            var $currBtn=jQuery(this);
            var $currModalChange=false;
            if($currBtn.hasClass('team-close')){
                jQuery('.team-member.modaled').removeClass('modaled');
                $currModal.remove();
                jQuery('body').removeClass('with-modal');
            }else if($currBtn.hasClass('team-prev')){
                if($curTeam.closest('.owl-item').hasClass('owl-item')){
                    if($curTeam.closest('.owl-item').prev('.owl-item').hasClass('owl-item')){
                       $currModalChange=$curTeam.closest('.owl-item').prev('.owl-item').find('.team-member');
                    }else{
                       $currModalChange=$curTeam.closest('.owl-item').siblings('.owl-item').eq(-1).find('.team-member');
                    }
                }else{
                    if($curTeam.prev('.team-member').hasClass('team-member')){
                       $currModalChange=$curTeam.prev('.team-member');
                    }else{
                       $currModalChange=$curTeam.siblings('.team-member').eq(-1);
                    }
                }
            }else if($currBtn.hasClass('team-next')){
                if($curTeam.closest('.owl-item').hasClass('owl-item')){
                    if($curTeam.closest('.owl-item').next('.owl-item').hasClass('owl-item')){
                       $currModalChange=$curTeam.closest('.owl-item').next('.owl-item').find('.team-member');
                    }else{
                       $currModalChange=$curTeam.closest('.owl-item').siblings('.owl-item').eq(0).find('.team-member');
                    }
                }else{
                    if($curTeam.next('.team-member').hasClass('team-member')){
                       $currModalChange=$curTeam.next('.team-member');
                    }else{
                       $currModalChange=$curTeam.siblings('.team-member').eq(0); 
                    }
                }
            }
            if($currModalChange){
                $currModalChange.find('.hover-container>h2').click();
            }
        });
        jQuery(window).resize();
    });
    // Grid Blog Share
    jQuery(".waves-sharebox-container",$selector).each(function(){
        var $curr = jQuery(this);
        var $currBtn = $curr.children('.share-btn');
        var $currShareBox = $curr.children('.waves-sharebox');
        if($currBtn.hasClass('share-btn')){
            $currBtn.unbind('click').bind('click',function(e){e.preventDefault();
                if($curr.hasClass('active')){
                    $curr.removeClass('active');
                    $currShareBox.fadeOut();
//                    $curr.stop().animate({width:$currBtn.width()+'px'},800);
                }else{
                    $curr.addClass('active');
                    $currShareBox.fadeIn();
//                    $curr.stop().animate({width:($currBtn.width()+$currShareBox.width())+'px'},800);
                }
            });
        }
    });*/
    // PrettyPhoto
    jQuery("a[rel^='prettyPhoto']",$selector).prettyPhoto({
        deeplinking: false
    });
    // Milestones
    jQuery('.tw-milestones-box',$selector).each(function() {
        var $curr = jQuery(this);
        var $delay = 1000;
        if($curr.attr('data-animation-delay')!==''){
            $delay += parseInt($curr.attr('data-animation-delay'), 10);
        }
        $curr.bind('tw-animate', function() {
            jQuery('>.tw-milestones-content>.tw-milestones-count>.tw-milestones-show>ul', $curr).each(function() {
                jQuery(this).css('bottom', '-' + jQuery(this).height() + 'px');
            });
            setTimeout(function() {
                jQuery('>.tw-milestones-content>.tw-milestones-count>.tw-milestones-show>ul', $curr).each(function() {
                    jQuery(this).animate({bottom: '5px'}, 800).animate({bottom: '0px'}, 'slow');
                });
            }, $delay);
        });
    });
    // jPlayer
    /*if (jQuery().jPlayer||jQuery().jPlayer!==undefined||jQuery().jPlayer!=='undefined') {
        jQuery('.jp-jplayer-audio',$selector).each(function() {
            jQuery(this).jPlayer({
                ready: function() {
                    jQuery(this).jPlayer("setMedia", {
                        mp3: jQuery(this).data('mp3')
                    });
                },
                swfPath: "",
                cssSelectorAncestor: "#jp_interface_" + jQuery(this).data('pid'),
                supplied: "mp3, all"
            });
        });

        jQuery('.jp-jplayer-video',$selector).each(function(i) {
            jQuery(this).attr('id',"jquery_jplayer_" + i).attr('data-pid',i).siblings('.jp-video-container').find('.jp-interface').attr('id',"jp_interface_" + i);
            jQuery(this).jPlayer({
                ready: function() {
                    jQuery(this).jPlayer("setMedia", {
                        m4v: jQuery(this).data('m4v'),
                        poster: jQuery(this).data('thumb')
                    });
                },
                play: function() {jQuery(this).jPlayer("pauseOthers", 0);setTimeout(function(){resizeMediaElement();},3000);},
                size: {
                    width: '100%',
                    height: 'auto'
                },
                swfPath: "",
                cssSelectorAncestor: "#jp_interface_" + i,
                supplied: "m4v, all"
            });
        });
        jQuery('.jp-jplayer-bgvideo',$selector).each(function() {
            var $bgPlayer=jQuery(this);
            var $bgPauseBtn=$bgPlayer.closest('.row-container');
            var $bgPlayBtn =$bgPauseBtn.children('.container').find('.bg-video-play').hasClass('bg-video-play')?$bgPlayer.closest('.row-container').children('.container').find('.bg-video-play'):false;
            $bgPlayer.jPlayer({
                ready: function() {
                    $bgPlayer.jPlayer("setMedia", {
                        m4v: $bgPlayer.data('m4v'),
                        poster: $bgPlayer.data('thumb')
                    });
                    if($bgPlayBtn===false){
                        $bgPlayer.jPlayer("play");
                    }
                },
                size: {
                    width: '100%',
                    height: 'auto'
                },
                muted: true,
                loop: true,
                swfPath: "",
                cssSelectorAncestor: "#jp_interface_" + $bgPlayer.data('pid'),
                supplied: "m4v, all"
            });
            if($bgPlayBtn){
                if($bgPlayBtn.data('pattern')){
                    $bgPlayer.closest('.background-video').siblings('.video-mask').css('background-image','url('+$bgPlayBtn.data('pattern')+')');
                }
                if($bgPlayBtn.data('size')){
                    $bgPlayer.closest('.background-video').siblings('.video-mask').css('background-size',$bgPlayBtn.data('size'));
                }
                if($bgPlayBtn.data('color')){
                    $bgPlayer.closest('.background-video').siblings('.video-mask-color').css('background-color',$bgPlayBtn.data('color'));
                }
                if($bgPlayBtn.data('opacity')){
                    $bgPlayer.closest('.background-video').siblings('.video-mask-color').css('opacity','0.'+$bgPlayBtn.data('opacity'));
                }
                $bgPlayBtn.unbind('click').bind('click',function(){
                    if($bgPauseBtn.hasClass('paused')){
                        $bgPlayer.jPlayer("play");
                        $bgPauseBtn.removeClass('paused').css({height:$bgPauseBtn.height()+'px',cursor: 'pointer'}).children('.container').fadeOut();
                        return false;
                    }
                });
                $bgPauseBtn.unbind('click').bind('click',function(){
                    if(!$bgPauseBtn.hasClass('paused')){
                        $bgPlayer.jPlayer("pause");
                        $bgPauseBtn.addClass("paused").css({height:'',cursor: ''}).children('.container').fadeIn();
                    }
                });
                $bgPauseBtn.click();
            }
        });
    }*/
    // Video Responsive
    /*jQuery('#main iframe').each(function(){
        if(!jQuery(this).closest('.ls-slide').hasClass('ls-slide')&&!jQuery(this).hasClass('fluidvids-elem')){
            jQuery(this).addClass('makeFluid');
        }
    });
    Fluidvids.init({
        selector: '#main iframe.makeFluid',
        players: ['www.youtube.com', 'player.vimeo.com']
    });
    jQuery('#main iframe').removeClass('makeFluid');*/
}

/* Item Top Bottom Height */
/* ------------------------------------------------------------------- */
function twItemTB($item) {
    "use strict";
    $item = jQuery($item);
    var $itemMarginTB = parseInt($item.css('margin-top').replace('px', ''), 10) + parseInt($item.css('margin-bottom').replace('px', ''), 10);
    var $itemPaddingTB = parseInt($item.css('padding-top').replace('px', ''), 10) + parseInt($item.css('padding-bottom').replace('px', ''), 10);
    var $itemBorderTB  = parseInt($item.css('border-top-width').replace('px',''),10) + parseInt($item.css('border-bottom-width').replace('px',''),10);
    var $itemTB = $itemMarginTB + $itemPaddingTB + $itemBorderTB;
    return $itemTB;
}
/* Item Right Left Width */
/* ------------------------------------------------------------------- */
function twItemRL($item) {
    "use strict";
    $item = jQuery($item);
    var $itemMarginRL  = parseInt($item.css('margin-left').replace('px', '')      ,10) + parseInt($item.css('margin-right').replace('px', '')      ,10);
    var $itemPaddingRL = parseInt($item.css('padding-left').replace('px', '')     ,10) + parseInt($item.css('padding-right').replace('px', '')     ,10);
    var $itemBorderRL  = parseInt($item.css('border-left-width').replace('px', ''),10) + parseInt($item.css('border-right-width').replace('px', ''),10);
    var $itemRL = $itemMarginRL + $itemPaddingRL + $itemBorderRL;
    return $itemRL;
}
/* Full Element Resize */
/* ------------------------------------------------------------------- */
function resizeFullElement(){
    "use strict";
    jQuery('.waves-full-element').each(function(){
        var $currentWavesFullElement=jQuery(this);
        var $w=jQuery(window).width();
        if(jQuery('body').hasClass('theme-full') || (1183<=$w && $w<=1242) || $w<=974){
            $currentWavesFullElement.css('margin-left','0px').css('margin-right','0px').css('padding-left','0px').css('padding-right','0px').css('width','');
            var $currLayoutWidth = jQuery(window).width();
            var $marginLeft=$currentWavesFullElement.offset().left*-1;
            $currentWavesFullElement.css('margin-left',$marginLeft+'px');
            $currentWavesFullElement.css('width',($currLayoutWidth-1)+'px');
        }else{
            $currentWavesFullElement.css('margin-left','').css('margin-right','').css('padding-left','').css('padding-right','').css('width','');
        }
    });
}
/* Media Resize */
/* ------------------------------------------------------------------- */
function resizeMediaElement() {
    "use strict";
    // Twitter Post Resize
    jQuery('iframe.twitter-tweet.twitter-tweet-rendered').each(function() {setTimeout(function(){try{jQuery(this).height(jQuery(this).contents().find('html').height());}catch(err){}},1000);});
    // jPlayer Resize
    jQuery('.jp-audio-container, .jp-video-container').each(function() {
        jQuery(this).find('.jp-progress-container').width((jQuery(this).width() - 149 < 0) ? 0 : (jQuery(this).width() - 149));
        jQuery(this).find('.jp-progress').width((jQuery(this).width() - 152 < 0) ? 0 : (jQuery(this).width() - 152));
    });
    // Isotope
    jQuery('.isotope .entry-media.image-slide-container').each(function(){
        var $curr=jQuery(this);
        var $maxH=1000;
        $curr.find('.image-item').each(function(){
           jQuery(this).width($curr.width());
           if($maxH>jQuery(this).height()){$maxH=jQuery(this).height();}
        });
        $curr.css('max-height',$maxH+'px');
    });
    // Accordion Blog
    var $currGroup=jQuery('.acc-blog-group.format-video.opened');
    if($currGroup.hasClass('opened')&&$currGroup.children('.entry-media').hasClass('entry-media')&&$currGroup.children('.acc-blod-inner').hasClass('acc-blod-inner')){
        $currGroup.children('.acc-blod-inner').height($currGroup.children('.entry-media').height()-twItemTB($currGroup.children('.acc-blod-inner')));
    }
}
/* Header Mobile Top Space */
/* ------------------------------------------------------------------- */
function headerMTS(){
    "use strict";
    if(jQuery('body').hasClass('admin-bar')){
        if(jQuery('#wpadminbar').css('position')==='absolute'&&jQuery(window).scrollTop()>30){
            jQuery('header').css('top','0px');
        }else{
            jQuery('header').css('top','');
        }
    }
}
/* Scroll Top Item */
/* ------------------------------------------------------------------- */
function scrollTopItem($currItem){
    "use strict";
    $currItem=jQuery($currItem);
    var $scrollTo=$currItem.offset().top;
    if(jQuery('body').hasClass('menu-fixed')){
        var $headerTop=parseInt(jQuery('#header').css('top'),10);
        if(!isNaN($headerTop)){
            $scrollTo -=  $headerTop;
        }
        $scrollTo -=  jQuery('#header').height();
    }else if(jQuery('#wpadminbar').attr('id')==='wpadminbar'){
        $scrollTo-=jQuery('#wpadminbar').height();
    }
    jQuery("html, body").animate({scrollTop: $scrollTo}, 500);
}