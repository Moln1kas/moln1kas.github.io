$('.calculator__input').bind('input', function(){
	const first = $('#first');
	const second = $('#second');
	const action = $('#action');

	let result = 0;

	if (action.val() === 'plus') {
		result = parseInt(first.val()) + parseInt(second.val());
	} else if (action.val() === 'minus') {
		result = parseInt(first.val()) - parseInt(second.val());
	} else if (action.val() === 'multiply') {
		result = parseInt(first.val()) * parseInt(second.val());
	} else if (action.val() === 'split') {
		result = parseInt(first.val()) / parseInt(second.val());
	}

	if (first.val() === '1.404' && action.val() === 'split' && second.val() === '2.077') {
		call_popup('New Civilization', 'Итак, кажется вы разгадали небольшие загадки оставленные мною, это хорошо!<br>')
	}

	$('.calculator__result').html(`= ${result}`);
});