jQuery(function($) {


  $(window).scroll(function () {
    $(".appearance").each(function () {
      var positionElements = $(this).offset().top;
      var windowTop = $(window).scrollTop();
      if (positionElements < windowTop + 600) {
        $(this).addClass("slide");
      }
    });
  });



});



