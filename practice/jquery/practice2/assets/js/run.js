var _post = 0;
$('.js-slide').on('click', function() {
  _post = $(this).hasClass('js-next') ? _post + 320 : _post - 320;
  // if ($(this).hasClass('slide-next')) {
  //   _post += 400;
  // } else {
  //   _post -= 400;
  // }
  $('.slide__box').animate({
    left: '-' + _post + 'px'
  }, 'slow');
});