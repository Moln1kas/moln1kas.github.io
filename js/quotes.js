let quotes = [
	['"Блин, мне нужна маленькая, тоненькая и плоская отверточка"', 'Moln1kas'],
	['"Я сначала написал... Дурак онал"', 'MixDev'],
	['"Пракьическм сплю"', 'Moln1kas'],
	['"@MixDev, проснись. Помоги с камшотом"', 'Moln1kas'],
	['"Мы закопали Монако в песке!"', 'Omori'],
	['"Электрический удар по шарам!"', 'MixDev'],
	['"Ставим :skull:ы"', 'Moln1kas']
]

$(document).ready(function () {
	let quote = Math.floor(Math.random() * quotes.length)
	$(".main__header__quote__content").html(`${quotes[quote][0]}`);
	$(".main__header__quote__author").html(`${quotes[quote][1]}`);
});