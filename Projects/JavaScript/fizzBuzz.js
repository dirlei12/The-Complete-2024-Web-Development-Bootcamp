
var numbers = [];
var count = 0;

function fizzBuzz() {

    for (let index = 1; index < 101; index++) {

        if (index%3===0) || (index%5===0) {
            count = "fizz";
        }
        if (index%5===0) {
            count = "buzz";
        }
        else{
            count = index;
        numbers.push(count);
        }
        
    }
    
    


    console.log(numbers);
}

fizzBuzz();