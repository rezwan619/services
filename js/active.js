(function ($) {
    "use strict";
 
    jQuery(document).ready(function($){
                          
        $(".homepage-slides").owlCarousel({
           items: 1,
            nav:true,
            dots: false,
            autoplay : false,
            loop: true,
            navText:["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
        });
    });
                          
       jQuery(window).load(function(){
           
       });                   
                          
 }(jQuery));