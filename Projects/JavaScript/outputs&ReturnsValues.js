function getMilk(money) {
    return money % 2;
}

var change = getMilk(5.5);
console.log(change);