function add(num1, num2) {
    return num1 + num2;
}
function sub(num1, num2) {
    return num1 - num2;
}
function mult(num1, num2) {
    return num1 * num2;
}
function divd(num1, num2) {
    return num1 / num2;
}

function calculator (num1, num2, operator) {
    return operator (num1,num2);
}



alert(calculator(2,2,mult));