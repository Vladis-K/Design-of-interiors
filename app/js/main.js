jQuery(function($) {
  "use strict";

  var owlPricing;
  var ratio = 2;

  $(window).scroll(function() {
    $(".appearance").each(function(){
      var positionElements = $(this).offset().top;
      var windowTop = $(window).scrollTop();
      if (positionElements < windowTop + 600) {
        $(this).addClass("slide");
      }
    });
  });
  
  $(window).load(function() {

    $('.intro-tables, .parallax, header').css('opacity', '0');
    $('.preloader').addClass('animated fadeOut').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
      $('.preloader').hide();
      $('.parallax, header').addClass('animated fadeIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $('.intro-tables').addClass('animated fadeInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend');
      });
    });


    // Sliders Init
    $('.owl-schedule').owlCarousel({
      singleItem: true,
      pagination: true
    });
    $('.owl-testimonials').owlCarousel({
      singleItem: true,
      pagination: true
    });
    $('.owl-twitter').owlCarousel({
      singleItem: true,
      pagination: true
    });



  
});





