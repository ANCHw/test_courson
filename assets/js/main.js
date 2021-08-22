$(document).ready(function () {
  $('a[href*="#"]').click(function() {
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
    return false;
  });
  
  $('.burger').click( function () {
    $('.sidemenu').toggleClass('active');
    $('body').toggleClass('fixed');
  });
  
  $('.owl-carousel').owlCarousel({
    items:1,
    nav:true,
    dots: false,
    loop: true,
    center:true,
    margin: 0,
    URLhashListener:true,
    startPosition: 'URLHash'
  });
  
  let link = '#' + $('.owl-item.active').find('.slider__item').data('hash');
  $(".slider-links__item[href='" + link + "']").addClass('active');
  
  $('.owl-carousel').on('changed.owl.carousel', function(event) {
    setTimeout(function () {
      link = '#' + $('.owl-item.active').find('.slider__item').data('hash');
      $('.slider-links__item').removeClass('active');
      $(".slider-links__item[href='" + link + "']").addClass('active');
    }, 500);
  });
  
  $('.password-lock').click( function () {
    $(this).toggleClass('active');
    
    let type = $(this).siblings('.password__input').attr('type');
    if (type == 'password') {
      $(this).siblings('.password__input').attr('type', 'text');
    } else {
      $(this).siblings('.password__input').attr('type', 'password');
    }
  })
  
  $('.faq__button').click( function () {
    $('.faq__item').removeClass('active');
    console.log($(this).parents('.faq__item'));
    $(this).parents('.faq__item').addClass('active');
  });

});
