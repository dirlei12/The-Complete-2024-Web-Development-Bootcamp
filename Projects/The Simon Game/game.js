//audios of the game

//array where the colour buttons are
let buttonCoulors = ["red", "blue", "green", "yellow"];

//array to save the pattern
let gamePattern = [];
let userPattern = [];

//1. Inside game.js create a new function called nextSequence()
function nextSequence() {
   
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonCoulors[randomNumber];
    
    gamePattern.push(randomChosenColour);

    var selectedBtn = $("#"+randomChosenColour);
    selectedBtn.fadeOut(100).fadeIn(100);

    playSound(randomChosenColour);
    // var selectedBtn = $("#"+randomChosenColour);
    // selectedBtn.fadeOut(100).fadeIn(100);
    // var audio = new Audio("sounds/"+randomChosenColour+".mp3");
    // audio.play();

    return gamePattern;

}

//button cliked by user
$(".btn").on("click", function(){
    var userChosenColour = $(this).attr("id");
    userPattern.push(userChosenColour);
    console.log(userPattern);

    playSound(userChosenColour);
    animatePress(userChosenColour);

    // var selectedBtn = $("#"+userChosenColour);
    // selectedBtn.fadeOut(100).fadeIn(100);
    // var audio = new Audio("sounds/"+userChosenColour+".mp3");
    // audio.play();
});

function playSound(name) {
    
    var audio = new Audio("sounds/"+name+".mp3");
    audio.play();
}

function animatePress(currentColour) {
    var selectedBtn = $("#"+currentColour);
    selectedBtn.addClass("pressed").delay(100).queue(function(next){
        $(this).removeClass('pressed');
        next();
      });
    
}

// here to start the game
var started = false;
var level;
$(document).keydown(function() {
    if (!started) {
        nextSequence();
        started = true;
        
        


    }
});
















