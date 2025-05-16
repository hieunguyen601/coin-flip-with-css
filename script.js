const scores = JSON.parse(localStorage.getItem('scores')) || {
    wins: 0,
    losses: 0
};

function playGame(guess) {
    const randomNumber = Math.random();
    let result;

    if (randomNumber < 0.5) {
        result = 'heads';
    } else {
        result = 'tails';
    }

    if (guess === result) {
        console.log('You win!');
    }
    else {
        console.log('You lose!');
    }

    if (guess === result) {
        scores.wins++;
    } else {
        scores.losses++;
    }

    console.log(scores);
    localStorage.setItem('scores', JSON.stringify(scores));
}
