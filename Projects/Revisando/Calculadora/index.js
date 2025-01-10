//display

// var display = document.querySelector(".display").innerHTML;



//lop para add um listener de botoes ao ser clicado
numberOfNumbers = document.querySelectorAll(".number").length;
numberaOfOperators = document.querySelectorAll(".operator").length;

for (let index = 0; index < numberOfNumbers; index++) {
    
    document.querySelectorAll(".number")[index].addEventListener("click",function () {
        document.querySelector(".display").innerHTML=(document.querySelectorAll(".number")[index].innerHTML);
        // alert(document.querySelector(".display").innerHTML);
    });   
}

for (let index = 0; index < numberaOfOperators; index++) {
    
    document.querySelectorAll(".operator")[index].addEventListener("click",function () {
        alert(document.querySelectorAll(".operator")[index].innerHTML);
    });   
}

document.querySelector(".clear").addEventListener("click",function () {
    alert(document.querySelector(".clear").innerHTML);

});

document.querySelector(".dot").addEventListener("click",function () {
    alert(document.querySelector(".dot").innerHTML);

});



// funcoes de operaoes aritimeticas
function plus(num1, num1) {
    return (num1 + num2)
}

function minus(num1, num1) {
    return (num1 - num2)
}

function multiple(num1, num1) {
    return (num1 * num2)
}

function divide(num1, num1) {
    return (num1 / num2)
}

function calculator(operator) {
    
}





