//console.log("Hello");
/*********************************************
* Recap Array, for loop e for loop con array *
**********************************************/
// Array sintassi
/* 
var nomi = ["Tommaso", "Alfredo", "Mirko"]; // Array stringhe

var numeri = [1, 2, 3, 4, 5, 6]; // Array di numeri

var arrayMista = ["Tommaso", 12, true, false, ["Tommaso", "Alfredo", "Mirko"]]; // array mista

console.log(arrayMista);
// Accedere elementi array
console.log(nomi[0]);
console.log(nomi[1]);
console.log(nomi[2]);

// Accedere elemento array in array
console.log(arrayMista[4][1]);

// Utilizzo lenght su array
console.log(arrayMista.length);

// Utilizzo Push 
numeri.push(7)
console.log(numeri);

 */
/* Ciclo For */
// Sintassi

/* for(EspIniziale; condizione; esprFinale) {
    // Codice da eseguire
} */

// var index = 1; EsprIniziale
// index < 10;  Condizione
// index++ // espFinale incremento variabile


// Numbers without for loop
/* console.log(0);
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6); */

// Numbers with for loop
/* for (var i = 0; i < 3; i++) {console.log(i);}
console.log("Fine");
//1. i = 0 | 0 < 3 ? TRUE | stampo 0 nella console | 0+ 1 = 1
//2. 1 < 3 ? TRUE  | stampo 1 nella console | 1 + 1 = 2
//3. 2 < 3 ? TRUE  | stampo 2 nella console | 2 + 1 = 3
//4. 3 < 3 ? FALSE | non faccio nulla ed esco dal ciclo.
// Stampo fine

// Loop con sequenza di caratteri
nome = "Tommaso Figlia";
for (var i = 0; i < nome.length; i++) {
    console.log(nome[i]);
}
 */
// Array without for loop
/* var nomi = ["Tommaso", "Alfredo", "Mirko"];
console.log(nomi[0]);
console.log(nomi[1]);
console.log(nomi[2]);

console.log(nomi);
console.log(nomi.length);
// Array con for loop
for (var index = 0; index < nomi.length; index++) {
    console.log(nomi[index]); // nomi[0] | nomi[1] | nomi[2] | nomi[3]
} */




/**********************
* Correzione Esercizi
***********************/

// Email
/* var emailUtente = prompt("Inserisci la tua email")
console.log(emailUtente);

var emails = ["michele@boolean.carrers", "luca@boolean.carrers", "fabio@boolean.carrers"]
var mailTrovata = false;

// Verificare se email presente nella lista
for (var i = 0; i < emails.length; i++ ) {

    var email = emails[i];

    // verifica se email utente é presente
    if (email === emailUtente) {
        mailTrovata = true;
    }

}

// Verificare accesso
if (mailTrovata) {
    console.log("Entra pure");
} else {
    console.log("sorry non puoi entrare");
} */

// Dadi

/* var player = Math.floor(Math.random() *6) + 1;


var pc = Math.floor(Math.random() *6) + 1;
//console.log(player, pc);

if (player > pc ) {
    console.log("Hai Vinto");
} else if (pc > player){
    console.log("You lose!");
} else {
    console.log("Pari, riprova");
} */

/*************************
* While Loop 
**************************/
// Sintassi loop while

// parola chiave while
// condizione 
// corpo del loop
// instruzione finale



/* while (condizione) {
    // Corpo del loop
    // instruzione per interrompere il loop
}

// while vs for

for (espInizale; condizione; espFinale) {

}
 */


// LIVE coding da for a while

 // loop for
/* var nomi = ["Tommaso", "Alfredo", "Mirko"];

 for (var i = 0; i < nomi.length; i++){
    console.log(nomi[i]);
} */

// while loop
/* var i = 0; // Inizializzare loop
while (i < nomi.length) {
    
    // Codice
    console.log(nomi[i]);
    // instruzione per cambiare 
    i++;
}

var playing = true; // Inizializzare loop
while (playing) {
    // codice 
    prompt("Insert a number");
    // Istruzione per terminare
    var keepPlaying = prompt(" Voui continuare a giocare? [Y/N]")
    if ( keepPlaying.toUpperCase() == "N") {
        playing = false;
    }
}

console.log("Bye"); */

// Loop do while vs altri
//////////////////////////

//var nomi = ["Tommaso", "Alfredo", "Mirko"];
/* 
 for (var i = 0; i < nomi.length; i++){
    console.log(nomi[i]);
} */

// while loop
//var i = 0; // Inizializzare loop
var nomi = ["Tommaso", "Alfredo", "Mirko"];
var i = 0;
 while (i < nomi.length) {
    
    // Codice
    console.log(nomi[i]);
    // instruzione per cambiare 
    i++;
} 

var j = 0;
do {

    // Codice
    console.log(nomi[j]);
    // instruzione per cambiare 
    j++;
} while (j > nomi.length);


console.log();
// 1. j = 0 | tommaso | 0 + 1 = 1
// 2. 1 > 3 ? false | Stop

/* ESERCIZIO */

/* 
Chiedi all’utente il cognome, 
inseriscilo in un array con altri cognomi,
stampa la lista ordinata alfabeticamente. 

Scrivi anche la posizione della lista in cui  
il nuovo utente si trova.
*/
