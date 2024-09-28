// function getMilk(money) {
//     var bottles = 2;
//     var bottlesBouth = parseInt(money/bottles); 
//     var yourChange = money%bottles;  
//     console.log("Buy $"+money+" bottles of milk.");
//     console.log("You bouth "+ bottlesBouth + " bottles of milk, and you change is $+"+yourChange+".");
//   }

//   getMilk(9);
var dinheiro = 10.45;
var valor = 1.5;
var qtdLiteral = dinheiro/valor;
var qtdProduto = parseInt(dinheiro/valor);
var troco =dinheiro-(qtdProduto*valor);


console.log("Qtd literal: "+qtdLiteral);
console.log("Qtd real: "+qtdProduto);
console.log("Troco: $"+troco.toFixed(2));





