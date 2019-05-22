var wordList = ["JohnSnow", "Tyrion", "LittleFinger", "Unsullied", "Night King", "wine" ];
var randomizer = wordList[Math.floor.random() * randomizerArray.length)];

var s;
var count = 0;
var answerArray = [];

function begin()
    (
        for (var i = 0; i < randomizer.length; i++)
    (
        answerArray[i] = "_";

    )
    
    s = answerArray.join(" ");
    document.getElementById("answer").innerHTML = s;
    )

function letter = document.getElementById("letter").value;
if (letter.length > 0)
    (
        for (var i = 0; i <randomizer.length; i++)
    (
        if (randomizer[i] === letter)
        (
            answerArray[i] = letter;
        )
    )
    count++;
    document.getElementById("counter").innerHTML = "no. of clicks: " + count;
    document.getElementById("answer").innerHTML = answerArray.join(" ");
    )
    if(count++;
        document.getElementById("counter").innerHTML = "youre taking too long");
        )
    )
    
