function call_popup( title, content ) {
	const h = $(window).height();
	const w = $(window).width();

	const element = $('.modal');

	element.css('top', h/2 - element.height()/2);
	element.css('left', w/2 - element.width()/2);
	element.css('display', 'block')

	$('.modal__header__title').html( title );
	$('.modal__content__p').html( content );

	$('.modal__close').click(function(){
		const element = $('.modal');
		element.css('display', 'none');
	});
}