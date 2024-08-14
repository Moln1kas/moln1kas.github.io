function call_popup( title, content ) {
	const h = $(window).height();
	const w = $(window).width();

	const element = $('.modal');
	const screen  = $('.fullscreen')

	element.css('top', h/2 - element.height()/2);
	element.css('left', w/2 - element.width()/2);
	element.css('display', 'block')

	screen.css('top', 0);
	screen.css('left', 0);
	screen.fadeIn(500)

	$('.modal__header__title').html( title );
	$('.modal__content__p').html( content );

	$('.modal__close').click(function(){
		const element = $('.modal');
		const screen  = $('.fullscreen')

		element.css('display', 'none');
		screen.fadeOut(500)
	});
}