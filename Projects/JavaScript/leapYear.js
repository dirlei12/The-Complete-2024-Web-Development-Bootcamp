function isLeap(year) {
    
    if (year%4 === 0) {
        if (year%100 !== 0 || year%400 === 0) {
            return console.log("Leap year.")
            
        }else{
            
            return console.log("Not a leap year.")
        }
    }else{
        return console.log("Not a leap year.")
    }

}

isLeap(2100);