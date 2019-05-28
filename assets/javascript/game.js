// create an array of words
const word = ['strike', 'spare', 'split', 'bowl', 'foul', 'polish', 'oil'];
const maxTries = 10;
// choose word randomly
var randomNumber = Math.floor(Math.random() * word.length);
var chosenWord = word[randomNumber];
var rightWord = [];
var wrongWord = [];
var underScore = [];
var guessesLeft = 0;
var gameStarted = false;
var hasFinished = false;
var wins = 0;



// dom manipulation

let docUnderscore = document.getElementsByClassName('underscores');
let docRightGuess = document.getElementsByClassName('rightguess');
let docWrongGuess = document.getElementsByClassName('wrongguess');
let remaingLetters = document.getElementsByClassName('remaining');
let resetGame = document.getElementsByClassName('reset');


// testing
console.log(chosenWord);

// create underscores based on length of word
var generateUnderscore = () => {
    for(var i = 0; i < chosenWord.length; i++) {
        underScore.push('_');
        
    }
    return underScore;
}

console.log(generateUnderscore());

// get user's guess
document.addEventListener('keypress', (event) => {
    let keyWord = String.fromCharCode(event.keyCode);
    // if user's guess is right

    if(chosenWord.indexOf(keyWord) > -1) {
        rightWord.push(keyWord);

        underScore[chosenWord.indexOf(keyWord)] = keyWord;
        docUnderscore[0].innerHTML = underScore.join('  ');
        docRightGuess[0].innerHTML = rightWord.join(',');
        // checks to see if user word matches guesses
        if(underScore.join('') == chosenWord) {
            confirm('you friggin win!, play again?')
        }

    } 

        else {
        wrongWord.push(keyWord);
            docWrongGuess[0].innerHTML = wrongWord.join(',');
        }


});


// check if guess is right
// if guess is right, add to correct array
// if wrong, push to wrong array
