$(function(){
    'use strict'
// BANNER SLIDER
    $('#banner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows:false,
        dots:true,
      });
      // About video play
      $('.venobox').venobox({
          spinner: 'cube-grid'
      });

      // TESTIMONIAL SLIDER
    $('.test_slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true ,
        autoplaySpeed: 2000,
        arrows:false,
        dots:true,
        
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
    
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });
     

      // COUNTER UP FOR COUNTER SECTIOM
      $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    // LOGO SLIDER
    $('.logo-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: true,
        nextArrow: '<i class="fas fa-angle-right next-ar"></i>',
        prevArrow: '<i class="fas fa-angle-left prev-ar"></i>',
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              arrows:false,
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              arrows:false,
            }
          }
        ]
    });
  
    //   sticky manu
    var navOff = $('.navigation').offset().top;

    $(window).scroll(function () {

        var scrolling = $(this).scrollTop();
        
        if (scrolling > navOff) {
            $('.navigation').addClass('menu-fix');
        } else {
            $('.navigation').removeClass('menu-fix');
        }
    });

    // back to top

    $('.back-to-top').click(function () {
      $('html,body').animate({
          scrollTop: 0,
      });
  });

  $(window).scroll(function () {
      var scrolling2 = $(this).scrollTop();

      if (scrolling2 > 550) {
          $('.back-to-top').fadeIn();
      } else {
          $('.back-to-top').fadeOut()
      }
  });


});