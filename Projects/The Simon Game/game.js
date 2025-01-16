//array to save the pattern
let gamePattern = [];

//array where the colour buttons are
let buttonCoulors = ["red", "blue", "green", "yellow"];



//function to get a randon number from 0 to 3
function nextSequence() {
    var randonNumber = Math.floor(Math.random() * 4);

    return randonNumber;
}






$(".play").on("click", function(){

    nextSequence();
    //variable to save the randon chosen colour
    var randomChosenColour = buttonCoulors[nextSequence()];

   // add the randon chosen colour to the array gamePatern
    gamePattern.push(randomChosenColour);  
});

// event to check the game patern
$(".ma").on("click", function(){
    
    for (let index = 0; index < gamePattern.length; index++) {
        alert(gamePattern)[index];   
        
    }
       
});



