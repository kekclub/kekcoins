$(".coin img").click(function () {

	$(this).css({
		'transform': 'rotateY(180deg)',
	});

	setTimeout(function() {
		$(".coin img").css({
			'transform': 'scale(0)',
		});
	}, 400);
	setTimeout(function() {
		$(".coin img").css({
			'display': 'none',
		});
		$(".rotator, .rotator p").css({
			'display': 'inline',
		});
	}, 800);



});
