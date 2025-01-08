// PLAYER ONE
var randonNumber1 = Math.floor(Math.random()*6)+1; //Create a number between 1 - 6

var randonDiceSrc1 = "images/dice"+randonNumber1+".png"; //Create a string to change de picture source

var image1 = document.querySelectorAll("img")[0];//selecting the dice img of player one

image1.setAttribute("src",randonDiceSrc1);//changing the dice one picture 

//PLAYER TWO
var randonNumber2 = Math.floor(Math.random()*6)+1; //Create a number between 1 - 6

var randonDiceSrc2 = "images/dice"+randonNumber2+".png"; //Create a string to change de picture source

var image2 = document.querySelectorAll("img")[1];//selecting the dice img of player one

image2.setAttribute("src",randonDiceSrc2);//changing the dice one picture 
 

 