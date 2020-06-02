$(document).ready(function(){
	$('.slider__block').slick({
		arrows: false,
		dots: true,
		autoplay: false,
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

  $(window).on('resize', function(e){
    // Переменная, по которой узнаем запущен слайдер или нет.
    // Храним её в data
    var init = $(".slider__block").data('init-slider');
    // Если мобильный
    if(window.innerWidth < 768){
      // Если слайдер не запущен
      if(init != 1){
        // Запускаем слайдер и записываем в data init-slider = 1
        $('.slider__block').slick({
          dots: true,
          arrows: false,
          autoplay: false,
          speed: 1000,
          autoplaySpeed: 800,
          slidesToShow: 1
        }).data({'init-slider': 1});
      }
    }
    // Если десктоп
    else {
      // Если слайдер запущен
      if(init == 1){
        // Разрушаем слайдер и записываем в data init-slider = 0
        $('.slider__block').slick('unslick').data({'init-slider': 0});
      }
    }
  }).trigger('resize');
});

$(document).ready(function () {
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
});


// addDomListener(window, 'resize', function () {
//   if ($(window).width() < 767) {
//     $('.slider__block').slick({
//       dots: true,
//       arrows: false,
//       autoplay: false,
//       speed: 1000,
//       autoplaySpeed: 800,
//       slidesToShow: 1
//   });
//   }
