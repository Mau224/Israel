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
        breakpoint: 2500,
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
