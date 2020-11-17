/* Corr Esercizio form   
***********************/


/* Array + array.push()
*********************/

// Creare un array
/* var utenti = ["Andrea", "Antonio", "Alfredo"];
var arrayMix = ["Fabio", true, 40, 15.5 ]; */
// output array completa
/* console.log(utenti);  */
// Accedere agli elementi dell'array con sintassi []
// estrarre elemnto
/* console.log(utenti[0]);
console.log(utenti[1]);
console.log(utenti[2]); */

// Aggiungere elemento alla fine di un array con .push()
//utenti.push("Romina");
// ["Andrea", "Antonio", "Alfredo", "Romina"]
//console.log(utenti);
//console.log(utenti[3]);

// Misurare lunghezza array
//console.log(utenti.length);
// Aggiungere elemento all'inizio con .unshift (bonus)
//utenti.unshift("Diego");
///console.log(utenti);

// Rimuovere elemento dalla fine con .pop (bonus)
//console.log(utenti.pop());

// Rimuovere elemento dall'inizio con .shift()

//console.log(utenti.shift());


// Incrementa e decrementa
/* var x = 2;
// 2 = 2 + 1
x = x + 1;
console.log(x); // x == 3
x++; // 3 + 1
console.log(x); // x == 4
x--; // 4 -1
console.log(x); // x == 3 */

// Pre-posizione
/* var z = 2;
y = ++z; 
console.log(z);
console.log(y); */
// x = 3, y = 3

// Post posizione
/* var z = 3;
y = z++;
console.log(z);
console.log(y);
 */

// Live Coding 1 Numero successivo

/* var userNumber = Number(prompt("Type a number")); */
//console.log(userNumber);
/* console.log(userNumber++);
console.log(++userNumber); */

// Live 2 Stampa nome
/* 
Crea un array contenente 3 nomi. 
Chiedi un numero da 0 a 2 all’utente 
e stampa l’elemento dell’array corrispondente.
*/
//var names = ["Andrea", "Antonio", "Alfredo"];
/* 
var userNumber = Number(prompt("Type a number tra 0 e 2"));
console.log(userNumber);
console.log(names[userNumber]);
 */

/* For Loop 
*************/

/* console.log("Ciao " + names[0] + " Vieni al mio compleanno");
console.log("Ciao " + names[1] + " Vieni al mio compleanno");
console.log("Ciao " + names[2] + " Vieni al mio compleanno");

 */
/* for( EspIniziale; condizione; EspFinale) {

    // codice da eseguire

} */

/* for(var i = 1; i < 10; i++){
    // codice da eseguire
    console.log(i);
    break;
}
console.log("Fine"); */
// 1. i = 1 | TRUE |  1 | i = 1 + 1
// 2. TRUE | 2 | 2 + 1 = 3
// 3. TRUE | 3 | 3 + 1 = 4
// 4. ....
// 9. TRUE | 9 | 9 + 1 = 10
// 10. é 10 inferiore a 10? FALSE | STOP

/* LOOP INFINITO

for(var i = 1; i < 10; ){
    // codice da eseguire
    console.log(i);
}
// 1
// 1
// 1
// 1
console.log("Fine"); 

*/


/* for(var i = 0; i <= 1000; i++){
    console.log(i);
}
 */
/* for(var i = 1000; i >= 0; i--){
    console.log(i);
}
 */
// Loop for con array
var names = ["Andrea", "Antonio", "Alfredo"];
for (var i = 0; i < names.length; i++) {
 console.log("Ciao " + names[i] + " vieni al mio compleanno");
}

