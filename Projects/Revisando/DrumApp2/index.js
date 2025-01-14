var numbersOfDrumBtn = document.querySelectorAll(".drum").length;

var audioW = new Audio("sounds/tom-1.mp3");
var audioA = new Audio("sounds/tom-2.mp3");
var audioS = new Audio("sounds/tom-3.mp3");
var audioD = new Audio("sounds/tom-4.mp3");
var audioJ = new Audio("sounds/crash.mp3");
var audioK = new Audio("sounds/kick-bass.mp3");
var audioL = new Audio("sounds/snare.mp3");


//detecting button press
for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var btnInnerHTML = this.innerHTML;

    makeSound(btnInnerHTML);
    buttonAnimation(btnInnerHTML);
  });
}

// detecting keybord press
document.addEventListener("keydown", function (event) {
    console.log(event);
    makeSound(event.key);
    buttonAnimation(event.key);
  
});

function makeSound(key) {
    switch (key) {
        case "w":
          audioK.play();
          break;
        case "a":
          audioA.play();
          break;
        case "s":
          audioS.play();
          break;
        case "d":
          audioD.play();
          break;
        case "j":
          audioJ.play();
          break;
        case "k":
          audioK.play();
          break;
        case "l":
          audioL.play();
          break;
    
        default:
          alert("This key is not available");
          break;
      } 
}

function buttonAnimation(currentKey) {
  var activeBtn = document.querySelector("."+currentKey);
  activeBtn.classList.add("pressed");
  
  setTimeout(function () {
    activeBtn.classList.remove("pressed");
  },100);
}
