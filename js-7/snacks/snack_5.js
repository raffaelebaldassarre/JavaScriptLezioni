/* 

Crea un array vuoto. 
Chiedi per 6 volte all’utente di inserire un numero, 
se è dispari inseriscilo nell’array.

*/

var numbers = [];

for( var i = 0; i < 6; i++){
    var numeroUtente = Number(prompt("inserisci un numero"));

    if (numeroUtente % 2 !== 0) {
        numbers.push(numeroUtente);
    } 
}
console.log(numbers);