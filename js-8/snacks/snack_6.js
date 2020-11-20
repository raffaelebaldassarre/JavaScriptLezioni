/* 
Stampa il cubo dei primi N numeri, 
dove N è un numero indicato dall’utente.

*/

var numeroUtente = Number(prompt("Inserisci un numero"));

for (var i = 0; i <= numeroUtente; i++){
    var cubo = Math.pow(i, 3);
    console.log(cubo);
}

