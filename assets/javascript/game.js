// create an array of words
const word = ['strike', 'spare', 'split', 'gutter', 'foul', 'polish', 'oil'];
// choose word randomly
let randomNumber = Math.floor(Math.random() * word.length);
let chosenWord = word[randomNumber];
let rightWord = [];
let wrongWord = [];
let underScore = [];



// dom manipulation

let underScoreDiv = document.getElementById(.underscores)
// testing
console.log(chosenWord);

// create underscores based on length of word
let generateUnderscore = () => {
    for(let i = 0; i < chosenWord.length; i++) {
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
        if(underScore.join('') == chosenWord) {
            alert('you friggin win!')
        }
        console.log(rightWord);
    } 

        else {
        wrongWord.push(keyWord);
            console.log(wrongWord);
}
       
});
// check if guess is right
// if guess is right, add to correct array
// if wrong, push to wrong array
