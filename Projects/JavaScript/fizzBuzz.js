var output = [];
var count = 1;

function fizzBuzz(params) {
  while (count <= 100) {

    if (count % 3 === 0 && count % 5 === 0) {
      output.push("FizzBuzz");
    } else if (count % 3 === 0) {
      output.push("Fizz");
    } else if (count % 5 === 0) {
      output.push("Buzz");
    } else {
      output.push(count);
    }

    count++;
  }

  console.log(output);
}

fizzBuzz();

// var numbers = [];
// var count = 0;
// var f = "Fizz";
// var b = "Buzz";
// var fb = "FizzBuzz";
// function fizzBuzz() {

//     for (let index = 1; index < 101; index++) {

//         if (index%3==0 || index%5==0 ) {
//             if (index%3 == 0) {

//                 numbers.push(f+" "+index)
//             }
//             if (index%5 == 0) {
//                 numbers.push(b+" "+index)

//             }if(index%3 == 0 && index%5 == 0) {
//                 numbers.push(fb+" "+index)

//             }
//         }
//         else{
//         count = index;
//         numbers.push(count);
//         }

//     }

//     console.log(numbers);
// }

// fizzBuzz();
