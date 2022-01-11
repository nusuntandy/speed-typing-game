window.addEventListener('load', loadGame);

let timeLeft = 5;
let userScore = 0;
let isPlaying;

const words = [
    'example',
    'example1',
    'javascript',
    'language',
    'developer',
    'soda'
];

function loadGame() {
    isPlaying = true;
    document.getElementById('gameTime').innerHTML = timeLeft;
    
    showWord();

    setInterval(countdown, 1000);
    setInterval(gameStatus, 50);
    return true;
}

const showWord = () => {
    const currentWord = document.getElementById('currentWord'), 
        index = Math.floor(Math.random() * words.length);
    
    currentWord.innerHTML = words[ index ];
    return true;
}

const countdown = () => {
    timeLeft = timeLeft > 0 ? (timeLeft-1) : (0);

    if( isPlaying && !timeLeft )
        isPlaying = false;

    document.getElementById('gameTime').innerHTML = timeLeft;
    return true;
}

const gameStatus = () => {
    if( !isPlaying && !timeLeft  )
    {
        userScore = 0;
        timeLeft = -1;

        document.getElementById('gameInput').value = '';
        document.getElementById('gameScore').innerHTML = userScore;
        document.getElementById('message').innerHTML = `<span class="text-danger">Game Over!!</span>`
    }
    
    if(document.getElementById('gameInput').value.length > 0 && !isPlaying )
    {
        isPlaying = true;
        timeLeft = 6;

        document.getElementById('message').innerHTML = `<br>`;
    }

    if(document.getElementById('gameInput').value === currentWord.innerHTML)
    {
        userScore++;
        timeLeft = 6;
    
        showWord();

        document.getElementById('gameInput').value = '';
        document.getElementById('gameScore').innerHTML = userScore;
        document.getElementById('message').innerHTML = `<span class="text-success">Correct!!</span>`
        setTimeout(hideMessage, 500);
    }
    
    return true;
}

const hideMessage = () => {    
    return document.getElementById('message').innerHTML = `<br>`;
}
