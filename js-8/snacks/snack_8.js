
/* 
Chiedi un numero di 4 cifre all’utente e 
calcola la somma di tutte le cifre che compongono il numero.

*/

var number = prompt('Type a 4 digit number'); 

//var number = "1234";

var sum = 0;
for (var i = 0; i < number.length; i++) {
    var n = Number(number[i]);

    sum = sum + n;
}
console.log(sum);