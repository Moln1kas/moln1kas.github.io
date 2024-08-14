function play_note(note){
    let notes = new Audio;
    notes.src = `sound/piano/${note}.mp3`;
    notes.play();
}

$('#q').mousedown(function(){
    play_note('C4');
});

$('#w').mousedown(function(){
    play_note('D4');
});

$('#e').mousedown(function(){
    play_note('E4');
});

$('#r').mousedown(function(){
    play_note('F4');
});

$('#t').mousedown(function(){
    play_note('G4');
});

$('#y').mousedown(function(){
    play_note('A4');
});

$('#u').mousedown(function(){
    play_note('B4');
});

$(document).keydown(function(e) {
    if(e.which == 81) {
        play_note('C4');
    }
    if(e.which == 87) {
        play_note('D4');
    }
    if(e.which == 69) {
        play_note('E4');
    }
    if(e.which == 82) {
        play_note('F4');
    }
    if(e.which == 84) {
        play_note('G4');
    }
    if(e.which == 89) {
        play_note('A4');
    }
    if(e.which == 85) {
        play_note('B4');
    }
});