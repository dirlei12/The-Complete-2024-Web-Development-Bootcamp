// document.querySelector("button").addEventListener("click", function handleClick() {
//     alert("I got clicked!")
// });
for (
  let index = 0;
  index < document.querySelectorAll(".drum").length;
  index++
) {
  document
    .querySelectorAll(".drum")
    [index].addEventListener("click", function () {
      
        var audio = new Audio('tom-1.mp3');
        audio.play();
    });
}
