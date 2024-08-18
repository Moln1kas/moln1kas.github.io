$(document).ready(function () {
	const quotes = init();
	let quote = Math.floor(Math.random() * quotes.length);

	$(".main__header__quote__content").html(`${quotes[quote][0]}`);
	$(".main__header__quote__author").html(`${quotes[quote][1]}`);

	if (quote === 11) {
		$(".main__header__quote__author").bind("click", function(){
			load_true();
		});
	}
});

function init() {
	return [
		['"Блин, мне нужна маленькая, тоненькая и плоская отверточка."', 'Moln1kas'],
		['"Я сначала написал... Дурак онал."', 'MixDev'],
		['"Пракьическм сплю."', 'Moln1kas'],
		['"@MixDev, проснись. Помоги с камшотом."', 'Moln1kas'],
		['"Мы закопали Монако в песке!"', 'Omori'],
		['"Электрический удар по шарам."', 'Crowdin Translate'],
		['"Ставим :skull:ы."', 'Moln1kas'],
		['"Ну, ты их отвлекай, а я... ай!"', 'MixDev'],
		['"КРАСНЫЙ! КРАСНЫЙ! СТРАСТНЫЙ!"', 'Язык Moln1kas\'a'],
		['"Будем вместе делать игру, не откладывать, жестко работать. Это же раба... имба."', 'Т9 MixDev\'а'],
		['"НЕТ! Я НАЖАЛ НА DON\'T SAVE!!!"', "Moln1kas"],
		['"Здравствуйте, это вы хотите теов делать?"', 'Аноним'],
		['"Да!"', 'Shepelius'],
		['"РАБОТАТЬ, ОГРЫЗКИ!"', 'Shepelius'],
	];
}