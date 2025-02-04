//audios of the game

//array where the colour buttons are
let buttonCoulors = ["red", "blue", "green", "yellow"];

//array to save the pattern
let gamePattern = [];
let userPattern = [];

// here to start the game
//You'll need a way to keep track of whether if the game has started or not, so you only call nextSequence() on the first keypress.
var started = false;

var level = 0;

$(document).keydown(function () {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

//1. Inside game.js create a new function called nextSequence()
function nextSequence() {
  //6. Once nextSequence() is triggered, reset the userClickedPattern to an empty array ready for the next level.
  userPattern = [];

  //4. Inside nextSequence(), increase the level by 1 every time nextSequence() is called.
  level++;

  //5. Inside nextSequence(), update the h1 with this change in the value of level.
  $("#level-title").text("Level " + level);

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonCoulors[randomNumber];

  gamePattern.push(randomChosenColour);

  var selectedBtn = $("#" + randomChosenColour);
  selectedBtn.fadeOut(100).fadeIn(100);

  playSound(randomChosenColour);

  // var selectedBtn = $("#"+randomChosenColour);
  // selectedBtn.fadeOut(100).fadeIn(100);
  // var audio = new Audio("sounds/"+randomChosenColour+".mp3");
  // audio.play();
  console.log("gamePattern: " + gamePattern);
  return gamePattern;
}

//button cliked by user
$(".btn").on("click", function () {
  var userChosenColour = $(this).attr("id");
  userPattern.push(userChosenColour);

  animatePress(userChosenColour);
  playSound(userChosenColour);

//   console.log("userPattern: " + userPattern);
//   console.log(userPattern.length - 1);

  checkAnswer(userPattern.length - 1);
});

function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userPattern[currentLevel]) {
    console.log("Sucess");

    if (gamePattern.length === userPattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    startOver();
  }
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColour) {
  var selectedBtn = $("#" + currentColour);
  selectedBtn
    .addClass("pressed")
    .delay(100)
    .queue(function (next) {
      $(this).removeClass("pressed");
      next();
    });
}

// Call this function when the user gets an answer wrong
function triggerGameOverEffect() {
  document.body.classList.add("game-over"); // Add the class
  setTimeout(() => {
    document.body.classList.remove("game-over"); // Remove the class after 200ms
  }, 200);
}

function startOver() {
  console.log("Wrong");
  var wrongAudio = new Audio("sounds/wrong.mp3");
  wrongAudio.play();
  triggerGameOverEffect();

  $("#level-title").text("Game Over, Press Any Key to Restart");

  started = false;
  gamePattern = [];
  userPattern = [];
  level = 0;
}
