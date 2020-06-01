$(document).ready(function($) {
  var body = document.querySelector('body');
  $('.popup-open').click(function() {
    $('.popup-fade').fadeIn();
    $('#name').focus();
    body.classList.add('hidden');
    return false;
  });

  $('.popup-close').click(function() {
    $(this).parents('.popup-fade').fadeOut();
    body.classList.remove('hidden');
    return false;
  });

  $(document).keydown(function(e) {
    if (e.keyCode === 27) {
      e.stopPropagation();
      $('.popup-fade').fadeOut();
      body.classList.remove('hidden');
    }
  });

  $('.popup-fade').click(function(e) {
    if ($(e.target).closest('.popup').length === 0) {
      $(this).fadeOut();
      body.classList.remove('hidden');
    }
  });
});

$(document).ready(function($) {
  var body = document.querySelector('body');
  $('.modal-open').click(function() {
    $('.modal').fadeIn();
    $('#name').focus();
    body.classList.add('hidden');
    return false;
  });

  $('.close').click(function() {
    $(this).parents('.modal').fadeOut();
    body.classList.remove('hidden');
    return false;
  });

  $(document).keydown(function(e) {
    if (e.keyCode === 27) {
      e.stopPropagation();
      $('.modal').fadeOut();
      body.classList.remove('hidden');
    }
  });

  $('.modal').click(function(e) {
    if ($(e.target).closest('.modal__container').length === 0) {
      $(this).fadeOut();
      body.classList.remove('hidden');
    }
  });
});

$(document).ready(function () {
  $('body').children().each(function() {
    document.body.innerHTML = document.body.innerHTML.replace(/\u2028/g, ' ');
  });
})

$(function () {
  $('#phone').mask('+7 (999)9–999–9999');
  $('#tel').mask('+7 (999) 99_____');
});

$('#name').on('keypress', function() {
  var that = this;

  setTimeout(function() {
    var res = /[^а-я ]/g.exec(that.value);
    console.log(res);
    that.value = that.value.replace(res, '');
  }, 0);
});


$('body').on('click', '.tab__navitem', function (event) {
  var eq = $(this).index();
  if ($(this).hasClass('parent')) {
    var eq = $(this).parent().index();
  }
  if (!$(this).hasClass('active')) {
    $(this).closest('.tab').find('.tab__navitem').removeClass('active');
    $(this).addClass('active');
    $(this).closest('.tab').find('.tab__item').removeClass('active').eq(eq).addClass('active');
    if ($(this).closest('.tab').find('.slick-slider').length > 0) {
      $(this).closest('.tab').find('.slick-slider').slick('setPosition');
    }
  }
});

$(document).ready(function() {
  $('.faq__item-title').click(function(event) {
    if($('.faq__block').hasClass('one')){
      $('.faq__item-title').not($(this)).removeClass('active');
      $('.faq__item-text').not($(this).next()).slideUp(300);
    }
    $(this).toggleClass('active').next().slideToggle(300);
  });
});

$(document).ready(function(){
	$('.slider__block').slick({
		arrows: true,
		dots: true,
		slidesToShow: 3,
		autoplay: false,
		speed: 1000,
		autoplaySpeed: 800,
		responsive: [
      {
        breakpoint: 3500,
        settings: "unslick"
      },
			{
				breakpoint: 767,
				settings: {
          dots: true,
          arrows: false,
          autoplay: false,
          speed: 1000,
          autoplaySpeed: 800,
					slidesToShow: 1
				}
			},
		]
	});

// $('.reviews__slider').on('afterChange', function(event, slick, currentSlide){
//   $('#cp').text(currentSlide + 1);
// });
});
$(function(){
$('.reviews__slider').slick({
  arrows: true,
  dots: false,
  slidesToShow: 1,
  autoplay: false,
  speed: 10,
  autoplaySpeed: 800,
  swipe: false,
  initialSlide: 2,
  prevArrow: '.reviews__navigation-left',
  nextArrow: '.reviews__navigation-right'
});

  $(".reviews__slider").on('afterChange', function(event, slick, currentSlide){
    $("#cp").text(currentSlide + 1);
  });
});


// $(window).on('load resize', function() {
//   if ($(window).width() < 767) {
//     $('#items:not(.slick-initialized)').slick({
//       centerMode: true,
//       dots: true,
//       infinite: true,
//       speed: 100,
//       slidesToShow: 1
//     });
//   } else {
//     $("#items.slick-initialized").slick("unslick");
//   }
// });


if (window.localStorage) {
  var elements = document.querySelectorAll('[name]');

  for (var i = 0, length = elements.length; i < length; i++) {
    (function(element) {
      var name = element.getAttribute('name');

      element.value = localStorage.getItem(name) || '';

      element.onkeyup = function() {
        localStorage.setItem(name, element.value);
      };
    })(elements[i]);
  }
}
