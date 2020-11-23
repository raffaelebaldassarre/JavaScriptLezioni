/* 



se è dispari inseriscilo nell’array.

*/

//Crea un array vuoto. 
var numbers = [];


// Chiedi per 6 volte all’utente di inserire un numero, 

for( var i = 0; i < 6; i++){
    var numeroUtente = Number(prompt("inserisci un numero"));

    if (numeroUtente % 2 !== 0) {
        numbers.push(numeroUtente);
    } 
}
console.log(numbers);