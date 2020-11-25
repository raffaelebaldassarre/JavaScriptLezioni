/* Campo minato */


/* 
Il computer deve generare 16 numeri casuali tra 1 e 100.
I numeri non possono essere duplicati
In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
L’utente non può inserire più volte lo stesso numero.
Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.


BONUS: (da fare solo se funziona tutto il resto)
all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
con difficoltà 0 => tra 1 e 100
con difficoltà 1 =>  tra 1 e 80
con difficoltà 2 => tra 1 e 50
Consigli del giorno: :party_wizard:
Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
*/


/* Step 1 
*/
// Crea funzione per generare numeri random
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati 
var numeriPc = [];
while (numeriPc.length !== 16) {
    var number = getRandomNumber(1, 100);
    if(! inArray(numeriPc, number)) {
        numeriPc.push(number);
    }
}
console.log(numeriPc, numeriPc.length);

// crea funzione per verificare se numero presente in array

/** descrizione
* @param array array  
*/

function inArray(array, number) {
    var i = 0;
    while ( i < array.length) {
        if (number === array[i]) {
            return true;
        }
        i++;
    }
}

/* 
In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
L’utente non può inserire più volte lo stesso numero.
Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
*/

/* 
La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
*/
var numeriUtente = [];
var possibilita = 100 - 16;

for (var i = 0; i <= possibilita; i++) {
    var numeroUtente = Number(prompt("Inserisci un numero compreso tra 1 e 100"));
    if (inArray(numeriPc, numeroUtente )) {
        console.log("💣💥 Game over");
        break;
    }
    while (inArray(numeriUtente, numeroUtente)) {
        alert("Hai gia usato questo numero! non puoi usare due volte lo stesso numero! premi ok e riprova");
        numeroUtente = Number(prompt("Inserisci un numero compreso tra 1 e 100"));
    }
    numeriUtente.push(numeroUtente);

}
console.log(numeriUtente);

// 1. i = 0 | 0 < 5 true | numero utente = 12 | verifica se 12 é una mina === false | verifico se 12 in numeriUtente === false | agg 12 a numeriUtente
// 2. i = 1 | true | numero utente 12 |  verifica se 12 é una mina === false | verifico se 12 in numeriUtente === false  | agg 13 a numeriUtente




/* 
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
*/

var arr  = [1, 3, 5, 6, 7]

console.log(arr.includes(3))