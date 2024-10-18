function fibonacciGenerator(n) {
  //Do NOT change any of the code above 👆

  //Write your code here:
  var output = [];
  var i = 0;
  var secondLastNumber;
  var lastNumber;
  var fibonacci;

  // Here is the logic if the n number is 1 or 2.
  if (n === 1 || n === 2) {
    if (n === 1) {
      output.push(0);
    } else if (n === 2) {
      while (i < n) {
        output.push(i);
        i++;
      }
    }
  }

  // Here is the logic if the number is more then 2.
  if (n > 2) {
    while (i < n) {
      if (i === 0) {
        fibonacci = 0;
        output.push(fibonacci);
      }
      else if (i === 1) {
        secondLastNumber = 0;
        lastNumber = 1;
        fibonacci = 1;

        output.push(fibonacci);
      } else {
        fibonacci = secondLastNumber + lastNumber;
        secondLastNumber = lastNumber;
        lastNumber = fibonacci;
        output.push(fibonacci);
      }
      i++;
    }
  }

  return console.log(output);
  //Return an array of fibonacci numbers starting from 0.

  //Do NOT change any of the code below 👇
}

fibonacciGenerator(10);
