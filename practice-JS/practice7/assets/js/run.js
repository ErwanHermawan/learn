$('.js-effect').on('click', function() {
	if ($('.image:visible').length) {
		$('.image').hide(500);
		$(this).text('Show');
	} else {
		$('.image').show(500);
		$(this).text('Hide');
	}
});