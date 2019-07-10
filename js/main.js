(function ($) {
 "use strict";

/*----------------------------
 jQuery MeanMenu
------------------------------ */
	jQuery('#dropdown').meanmenu();	
	

/*----------------------------
 jQuery MeanMenu
------------------------------ */
	$('.carousel').carousel({
		interval: 2500,
		pause : false
	});	
	
/*----------------------------
 wow js active
------------------------------ */
 new WOW().init();
 
/*----------------------------
 promo area counters active
------------------------------ */ 
jQuery(document).ready(function(){
	$('.blog-video').fitVids();
});
/*----------------------------
 partners area owl-carousel active
------------------------------ */  
$('.partner-owl').owlCarousel({
    autoPlay: true, 
	slideSpeed:1000,
	pagination:false,
	navigation:false,	  
	items : 5,
	/* transitionStyle : "fade", */    /* [This code for animation ] */
	navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
	itemsDesktop : [1199,4],
	itemsDesktopSmall : [980,3],
	itemsTablet: [768,2],
	itemsMobile : [479,1],
});

$('.portfolio-mixitup').mixItUp({
    animation: {
        enable: true,
        effects: 'fade stagger',
        duration: 600,
        easing: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        perspectiveDistance: '100px',
        perspectiveOrigin: '75% 50%',
        queue: true,
        queueLimit: 4,
        animateChangeLayout: true,
        animateResizeContainer: false,
        animateResizeTargets: true,
        reverseOut: true,
    },
    controls:{
        enable: true,
        live: true,
        activeClass: 'on',
    },
    layout: {
        display: 'inline-block',
    }
});

	   
/*--------------------------
 scrollUp
---------------------------- */	
	$.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    }); 	   
 
})(jQuery); 