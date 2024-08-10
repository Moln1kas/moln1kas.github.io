$('.calculator__input').bind('input', function(){
	const first = $('#first');
	const second = $('#second');
	const action = $('#action');

	let result = 0;

	if (action.val() === 'plus') {
		result = parseInt(first.val()) + parseInt(second.val());
	} else if (action.val() == 'minus') {
		result = parseInt(first.val()) - parseInt(second.val());
	} else if (action.val() == 'multiply') {
		result = parseInt(first.val()) * parseInt(second.val());
	} else if (action.val() == 'split') {
		result = parseInt(first.val()) / parseInt(second.val());
	}

	$('.calculator__result').html(`= ${result}`);
});