function call_popup( title, content ) {
	const h = $(window).height();
	const w = $(window).width();

	let screen = $(`<div class="fullscreen"></div>`);
	let popup = $(
		`
			<div class="modal">
				<header class="modal__header">
					<h3 class="modal__header__title">${title}</h3>
					<div class="modal__close__container">
						<button class="modal__close">Закрыть</button>	
					</div>
				</header>
				<div class="modal__content">				
					<p class="modal__content__p">${content}</p>
				</div>
			</div>
		`
	);

	$("body").append(screen);
	$("body").append(popup);

	screen.css('top', 0);
	screen.css('left', 0);
	screen.fadeIn(500);

	popup.css('top', h/2 - popup.height()/2);
	popup.css('left', w/2 - popup.width()/2);

	$('.modal__close').click(function(){
		popup.css('display', 'none');
		screen.fadeOut(500)
	});
}