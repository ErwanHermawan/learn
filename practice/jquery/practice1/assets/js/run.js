$('.js-effect').on('click', function() {
  if ($('.image:visible').length) {
    $('.image').hide(500);
    $(this).text('Show');
  } else {
    $('.image').show(500);
    $(this).text('Hide');
  }
});


// $('.js-show-hide').on('click', function() {
//   $('js-show-hide + img')
//   .slideUp(300, function() {
//     $(this).attr('src' 'file-path');
//   });
//   .slideDown(300);
// });
