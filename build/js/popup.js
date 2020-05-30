'use strict';

var body = document.querySelector('body');

$(document).ready(function($) {
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
