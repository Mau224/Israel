'use strict';

$(function () {
  $('#phone').mask('+ (999)9–999–9999');
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
