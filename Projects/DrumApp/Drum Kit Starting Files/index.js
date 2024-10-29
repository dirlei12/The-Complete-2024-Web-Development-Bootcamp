// document.querySelector("button").addEventListener("click", function handleClick() {
//     alert("I got clicked!")
// });


 // Carrega o som
 const tom1 = new Audio('sounds\\tom-1.mp3');
 const tom2 = new Audio('sounds\\tom-2.mp3');
 const tom3 = new Audio('sounds\\tom-3.mp3');
 const tom4 = new Audio('sounds\\tom-4.mp3');
 const crash = new Audio('sounds\\crash.mp3');
 const kickbass = new Audio('sounds\\kick-bass.mp3');
 const snare = new Audio('sounds\\snare.mp3');

 // Função para reproduzir o som ao pressionar uma tecla
 document.addEventListener('keydown', (event) => {
     const keyName = event.key;
     
     // Exemplo: reproduzir som quando a tecla "a" é pressionada
     if (keyName === 'w') {
        tom1.currentTime = 0; // Reinicia o som caso esteja tocando
        tom1.play();
    }
     if (keyName === 'a') {
         tom2.currentTime = 0; // Reinicia o som caso esteja tocando
         tom2.play();
     }
     if (keyName === 's') {
         tom3.currentTime = 0; // Reinicia o som caso esteja tocando
         tom3.play();
     }
     if (keyName === 'd') {
         tom4.currentTime = 0; // Reinicia o som caso esteja tocando
         tom4.play();
     }
     if (keyName === 'j') {
         crash.currentTime = 0; // Reinicia o som caso esteja tocando
         crash.play();
     }
     if (keyName === 'k') {
         kickbass.currentTime = 0; // Reinicia o som caso esteja tocando
         kickbass.play();
     }
     if (keyName === 'l') {
        snare.currentTime = 0; // Reinicia o som caso esteja tocando
        snare.play();
    }
     
 });



// for (
//   let index = 0;
//   index < document.querySelectorAll(".drum").length;
//   index++
// ) {
//   document.querySelectorAll(".drum")[0].addEventListener("click", function () {
//     var tom1 = new Audio("sounds\\tom-1.mp3");
//     tom1.play();
//   });

//   document.querySelectorAll(".drum")[1].addEventListener("click", function () {
//     var tom2 = new Audio("sounds\\tom-2.mp3");
//     tom2.play();
//   });

//   document.querySelectorAll(".drum")[2].addEventListener("click", function () {
//     var tom3 = new Audio("sounds\\tom-3.mp3");
//     tom3.play();
//   });

//   document.querySelectorAll(".drum")[3].addEventListener("click", function () {
//     var tom4 = new Audio("sounds\\tom-4.mp3");
//     tom4.play();
//   });

//   document.querySelectorAll(".drum")[4].addEventListener("click", function () {
//     var crash = new Audio("sounds\\crash.mp3");
//     crash.play();
//   });

//   document.querySelectorAll(".drum")[5].addEventListener("click", function () {
//     var kickbass = new Audio("sounds\\kick-bass.mp3");
// kickbass.play();
//   });

//   document.querySelectorAll(".drum")[6].addEventListener("click", function () {
//     var snare = new Audio("sounds\\snare.mp3");
//     snare.play();
//   });
// }
