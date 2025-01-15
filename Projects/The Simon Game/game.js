let gamePattern = [];

let buttonCoulors = ["red", "blue", "green", "yellow"];

var randomChosenColour = buttonCoulors[nextSequence()];

function nextSequence() {
    var randonNumber = Math.floor(Math.random() * 4);

    return randonNumber;
}

gamePattern.push(randomChosenColour);

console.log(nextSequence());