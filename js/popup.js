function call_popup( title, content, buttons ) {
	const h = $(window).height();
	const w = $(window).width();

	let screen = $(`<div class="fullscreen"></div>`);
	let popup = $(
		`
			<div class="modal">
				<header class="modal__header">
					<h3 class="modal__header__title">${title}</h3>
					<div class="modal__close__container">
						<button id="modal__close" class="modal__button__base">Закрыть</button>
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

	if (buttons) {
		for (let i = 0; i < buttons.length; i++) {
			let button = $(`<button id="${buttons[i][0]}" class="modal__button__base modal__button">${buttons[i][1]}</button>`)
			$(".modal__content").append(button);

			$(`#${buttons[i][0]}`).bind("click", function(){
				eval(buttons[i][2]);
			});
		}
	}

	screen.css('top', 0);
	screen.css('left', 0);
	screen.fadeIn(500);

	popup.css('top', h/2 - popup.height()/2);
	popup.css('left', w/2 - popup.width()/2);

	$('#modal__close').bind("click", function(){
		popup.remove();
		screen.fadeOut(500);
	});
}