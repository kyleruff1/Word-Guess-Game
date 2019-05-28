// create an array of words
const word = ['strike', 'spare', 'split', 'gutter', 'foul', 'polish', 'oil'];
// choose word randomly
let randomNumber = Math.floor(Math.random() * word.length);
let chosenWord = word[randomNumber];
let rightWord = [];
let wrongWord = [];
let underScore = [];



// dom manipulation

let docUnderscore = document.getElementsByClassName('underscores');
let docRightGuess = document.getElementsByClassName('rightguess');
let docWrongGuess = document.getElementsByClassName('wrongguess');
// testing
console.log(chosenWord);

// create underscores based on length of word
let generateUnderscore = () => {
    for(let i = 0; i < chosenWord.length; i++) {
        underScore.push('_');
        docUnderscore[0].innerHTML = generateUnderscore().join('');
        
    }
    return underScore;
}


// get user's guess
document.addEventListener('keypress', (event) => {
    let keyWord = String.fromCharCode(event.keyCode);
    // if user's guess is right

    if(chosenWord.indexOf(keyWord) > -1) {
        rightWord.push(keyWord);

        underScore[chosenWord.indexOf(keyWord)] = keyWord;
        docUnderscore[0].innerHTML = underScore.join(' ');
        docRightGuess[0].innerHTML = rightWord.join(' ');
        // checks to see if user word matches guesses
        if(underScore.join('') == chosenWord) {
            alert('you friggin win!')
        }
        console.log(rightWord);
    } 

        else {
        wrongWord.push(keyWord);
            docWrongGuess[0].innerHTML = wrongWord.join(' ');
        }


});


// check if guess is right
// if guess is right, add to correct array
// if wrong, push to wrong array
