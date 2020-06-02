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

  $('.modal').click(function (e) {
    if ($(e.target).closest('.modal__container').length === 0) {
      $(this).fadeOut();
      body.classList.remove('hidden');
    }
  });
});
