
var numbers = [];
var count = 0;
var f = "Fizz";
var b = "Buzz";
var fb = "FizzBuzz";
function fizzBuzz() {

    for (let index = 1; index < 101; index++) {

        if (index%3==0 || index%5==0 ) {
            if (index%3 == 0) {
                
                numbers.push(f+" "+index)
            } 
            if (index%5 == 0) {
                numbers.push(b+" "+index)
                
                
            }if(index%3 == 0 && index%5 == 0) {
                numbers.push(fb+" "+index)
                 
            }
        }
        else{
        count = index;
        numbers.push(count);
        }
        
    }
    
    


    console.log(numbers);
}

fizzBuzz();


