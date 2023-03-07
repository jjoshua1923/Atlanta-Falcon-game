let buttons = document.getElementById('btn');
let nGuess = 1;
let rightAns = 17;

buttons.addEventListener('click', function() {
    event.preventDefault();
    buttons.style.backgroundColor = 'black';
    buttons.style.color = 'red';
    let userGuess = document.getElementById('guessField').value;
    if (userGuess == rightAns) {
        alert('congrats, you guessed correctly');
    } else {
        if (rightAns > userGuess) {
            nGuess++;
            alert('Sorry, try again');
        }
    }
})