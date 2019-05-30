// create an array of words
const word = ['line', 'spare', 'split', 'bowl', 'foul', 'polish', 'game', 'lane', 'strike', 'turkey', 'double', '300'];
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
let docCountScore = document.getElementsByClassName('score');


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
    // if user's guess is right push to right array

    if(chosenWord.indexOf(keyWord) > -1) {
        rightWord.push(keyWord);

        underScore[chosenWord.indexOf(keyWord)] = keyWord;
        
        docUnderscore[0].innerHTML = underScore.join('  ');
        docRightGuess[0].innerHTML = rightWord.join(',');
        // checks to see if user word matches guesses
        if(underScore.join('') == chosenWord) {
            window.location.href = "../index.html";
            confirm('you friggin win!, play again?')
            
            
        }

    } 
// if wrong, push to wrong array
        else {
        wrongWord.push(keyWord);
            docWrongGuess[0].innerHTML = wrongWord.join(',');
        }


});





