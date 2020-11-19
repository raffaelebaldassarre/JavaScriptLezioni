/***************************************************
Correzione esercizio aggiunta e organizzazione array
*****************************************************/

/* //1. Chiedere all’utente il cognome
var cognomeUtente = prompt("Type your last name");
//2. inserirlo in un array con altri cognomi
var cognomi = ['Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Verdi'];
cognomi.push(cognomeUtente);
console.log(cognomeUtente, cognomi);

var listaOriginale = cognomi.slice();
//3.stampa la lista ordinata alfabeticamente
cognomi.sort();
console.log(cognomi);

//4.scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova

var posizioneCognomeUtente = cognomi.indexOf(cognomeUtente) + 1;

console.log("Lista originale:", listaOriginale);
console.log("Lista ordinata:", cognomi);
console.log("Posizione del " + posizioneCognomeUtente);
*/



/****************************
 Recap While e Do While loops 
*/

// while loop
// Sintassi
/* 
while (condition) {
    
} 
*/
/* 
var nomi = ['Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Verdi'];
// Coversione for in while
for (var i = 0; i < nomi.length; i++){
    console.log(nomi[i]);
}

var i = 0;
while (i < nomi.length) {
    //console.log(i);
    // Your code here
    console.log(nomi[i]);
    
    // istruzione per interrompere cicli
    i++; 
    console.log(i);
} */

// 1. nomi[0] = Bianchi
// 2. nomi[1] = Rossi
// 3. nomi[2] = Duzioni
// 4. nomi[3] = Balsano
// 5. nomi[4] = Verdi
// 6. nomi[5] = ""

// do while loop

//Sintassi

/* do {
 // codice da eseguire
 // istruzioni per terminare il ciclo
} while (condizione); */

/* var nomi = ['Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Verdi'];
var i = 0; */
/* do {

    console.log(nomi[i]);    
    // istruzione per interrompere cicli
    i++; 
} while (i < nomi.length); */

// Con la condizione che é false

/* do {
    console.log(nomi[i]);    
    // istruzione per interrompere cicli
    i++; 
} while (i > nomi.length);
console.log("Ho finito"); */



/*******************************
* Blocco Snacks 1 
*/
