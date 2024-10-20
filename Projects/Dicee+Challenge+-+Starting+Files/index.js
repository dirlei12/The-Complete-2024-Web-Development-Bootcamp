// var image1 = document.querySelectorAll("img")[0];
// image1.setAttribute("src",randomDiceImage1);

// var image2 = document.querySelectorAll("img")[1];
// image2.setAttribute("src",randomDiceImage2);

// alert(image1.getAttribute("src"));
var point = 1;
var p1 = 0;
var p2 = 0;
var winner = 5;

function play() {
  var randonNumber1 = Math.floor(Math.random() * 6) + 1;
  var randonNumber2 = Math.floor(Math.random() * 6) + 1;

  var randomDiceImage1 = "images/dice" + randonNumber1 + ".png";
  var randomDiceImage2 = "images/dice" + randonNumber2 + ".png";

  var image1 = document.getElementsByClassName("img1")[0];
  image1.setAttribute("src", randomDiceImage1);
  var image2 = document.getElementsByClassName("img2")[0];
  image2.setAttribute("src", randomDiceImage2);

  if (p1 === winner) {
    alert("PLAYER1 WINS");
    // var player1 = (document.querySelector("h1").innerHTML = "Player1 wins!!");
    window.location.reload();
  } else if (p2 === winner) {
    alert("PLAYER2 WINS");
    // var player2 = (document.querySelector("h1").innerHTML = "Player2 Wins!!");
    window.location.reload();
  }

  if (randonNumber1 > randonNumber2) {
    var player1 = (document.querySelector("h1").innerHTML = "Player1 Score!");
    p1 = p1 + point;
    var player1Point = (document.querySelector(".player1Points").innerHTML =
      "Points =  " + p1);
  } else if (randonNumber2 > randonNumber1) {
    var player2 = (document.querySelector("h1").innerHTML = "Player2 Score!");
    p2 = p2 + point;
    var player2Point = (document.querySelector(".player2Points").innerHTML =
      "Points =  " + p2);
  } else {
    document.querySelector("h1").innerHTML = "Draw";
  }
}

// var n = 10;
// var m = document.getElementsByClassName("player1Points")[0];
// alert(m.innerHTML = "Points = "+n);
