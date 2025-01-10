var numbersOfDrumBtn = document.querySelectorAll(".drum").length;


for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
    
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        alert("I ve got cliked");
    });
    
}



