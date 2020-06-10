$(document).ready(function () {
  $('body').children().each(function() {
    document.body.innerHTML = document.body.innerHTML.replace(/\u2028/g, ' ');
  });
})

$(function () {
  $('#phone').mask('+7 (999)9–999–9999'), {placeholder: "+7(___)___-__-__"};
  $('#tell').mask('+7 (999)9–999–9999') , {placeholder: "+7(___)___-__-__"};
  $('#tel').mask('+7 (999)9–999–9999') , {placeholder: "+7(___)___-__-__"};
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
