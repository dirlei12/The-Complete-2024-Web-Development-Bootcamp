function bmiCalculator(weight, heigth) {
    var bmi = weight/ Math.pow(heigth,2);
    return Math.round(bmi,5);
}

var bmi =  bmiCalculator(65,1.8);
console.log(bmi);




