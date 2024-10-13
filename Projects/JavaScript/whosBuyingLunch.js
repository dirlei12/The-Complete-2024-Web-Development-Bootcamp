// Who's Buying Lunch? Code Challenge
// You are going to write a function which will select a random name from a list of names. The person selected will have to pay for everybody's food bill.

// Important: The output should e returned from the function and you do not need alert, prompt or console.log. The output should match the example output exactly, including capitalisation and punctuation.

// Example Input

// ["Angela", "Ben", "Jenny", "Michael", "Chloe"]
// Example Output

// Michael is going to buy lunch today!


// Hint

// 1. You might need to think about Array.length.

// 2. Remember that Arrays start at position 0!
var names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];

function whosPaying(names) {
    var numberOfPeople = names.length;
    var randonNumber = Math.floor(Math.random() * numberOfPeople);
    // let x = Math.floor((Math.random() * names.length) + 1);
    var randonPerson = names[randonNumber];

    
    return randonPerson +" is going to buy lunch today!";
    // console.log(names[x]+" is going to buy lunch today!");
}

whosPaying();