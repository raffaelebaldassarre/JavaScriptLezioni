/* 
L’utente inserisce due numeri in successione, con due prompt. 
Il software stampa il maggiore.

*/

var numberOne = Number(prompt("Insert a number"));
var numberTwo = Number(prompt("Insert another number"));

//console.log(numberOne, numberTwo);

if (numberOne  === numberTwo) {
    console.log("Stesso numero");
} else if (numberOne  > numberTwo) {
    console.log(numberOne);
} else {
    console.log(numberTwo);
}