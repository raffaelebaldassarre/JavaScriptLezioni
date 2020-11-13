// CORREZIONE ESERCIZIO

//1. Chiedi all’utente il suo nome, 
//var userName = prompt("What's your name?");
//2. poi chiedi il suo cognome, 
//var userLastName = prompt(userName + " " + "What's your last Name?");
//3. poi chiedi il suo colore preferito
//var userColor = prompt("What's your favourite color?");
//4. Infine scrivi sulla pagina nomecognomecolorepreferito20
//var password = userName + userLastName + userColor + "20";
//var message = "La tua password 'super sicura' é: ";
//document.getElementById('password').innerHTML = message + password;

// RECAP LEZIONE 2 + Bonus
// Recap Variabili
var myVariable = "qualcosa";
var user;
user = "Fabio";

////////////////////////
//Recap Stringhe e utilizzo String() e number.toString() 
///////////////////////////////////////////////

// stringhe in virgolette con apici nel mezzo
console.log("What's your name");

// Concatenare due stringe
console.log("Stringa 1" + "Stringa 2");

// Escape a string
console.log('What\'s your name');
console.log("What's \"your\" name");

// Strings methods //
var number = 1230;
console.log(number);

// Utilizzo funzione String() 
var numberString = String(number);
console.log(numberString);

// Utilizzo metodo toString()
console.log(number.toString());


// proprieta lenght per contare caratteri nelle stringhe
console.log("Fabio Pacifici".length);
// metodo to upper case per trasformare stringa lettere maiuscole
console.log("Fabio Pacifici".toUpperCase());
// metodo to lower case per trasformare stringa lettere minuscole
console.log("Fabio Pacifici".toLowerCase());
// Rimovere spazi prima e dopo stringa
console.log("          Fabio Pacifici   ".trim());


// Recap Numeri e utilizzo Number() e parseInt() 
//////////////////////////////////////////////////
// Operatore modulo da come risultato il resto di una divisione
console.log(12 % 5);

// Type Coercion (Inplicit/Explicit)
//Coversione implicita del number col l'operatore +
console.log("10" + 2); // 102
// coversione implicitia della stringa con operatore *
console.log("10" * 2); //20
// coversione esplicita
console.log("10" + String(2)) //102
console.log( Number("10") * 2 );

// Recap Prompt
//var typeNumber = prompt("Type a number");
//console.log(Number(typeNumber));

// Can I omit document.getElementById()? Meglio di no.


// LEZIONE 3

// Condizionali (if/else if / else)
/* if (condizione) {
    // blocco di codice
}
 */

// Operatori Relazionali e Valori Boolean
// Operatori logici ( And && e OR || e ! not)

var x = 2;
if (x > 3 || x < 3) {
    console.log("X uguale a 2");
} else if (x != 3) {
    console.log("X é inferiore a 3");
} else {
   console.log("Hello");
}
// not !
if ( !(x > 3)) {
    console.log( "Il valore di x é" + x);
}

// Utilizzo di lenght
console.log("Nome".length);

// Live Coding due parole
/* var parolaUno = prompt("Inserisci una parola");
var parolaDue = prompt("Inserisce un altra parola");
 */
//console.log(parolaUno.length, parolaDue.length);

/* if (parolaUno.length > parolaDue.length) {  
    alert("Parola uno é piu lunga della parola due");
} else if (parolaUno.length == parolaDue.length) {
    alert("Le due parole hanno la stessa lunghezza");
}
else {
    alert("Parola due é piu lunga della parola uno");
} */


// isNan



// The Date() object.
///////////////////////////////
var now = new Date();

var year = now.getFullYear();
var minuti = now.getMinutes();
var ora = now.getHours();
var day = now.getDay();

console.log(now);
console.log(year);
console.log(minuti);
console.log(ora);
console.log(day);


// The Math object and the random method.
console.log(Math.random()); // numero a caso tra 0 e 1 (uno escluso) 
console.log(Math.floor(Math.random() * 10) + 1 ); // numri random da 0 a 10;


// LIVE Pari o Dispari PCvsGiocatore
    // chiedere all'giocatore se sceglie pari o dispari
    //var playerSelection = prompt("Scegli pari o dispari");
    // chiedere all'giocatore di inserire un numero da 1 a 9
    //var playerNumber = Number(prompt("Scegli numero da 1 a 9"));
    // generare un numero random da 1 a 9 per il PC 
    //var pcNumber = Math.floor((Math.random() * 8) + 1);
    // Sommare il numero dell'utente al numero del PC
    //var somma = playerNumber + pcNumber;
/*     console.log(playerSelection, playerNumber, pcNumber, somma );
    
    if (isNaN(playerNumber)) {
        alert("You must insert a number");

    } else {
        // Se il numero é pari e il giocatore ha scelto pari, il giocatore ha vinto.
        if (somma % 2 == 0 && playerSelection.toLowerCase() == 'pari' ) {
            alert("You win!");
        } 
        // Se il numero é dispari e il giocatore ha scelto pari, il giocatore ha perso.
        else if (somma % 2 != 0 && playerSelection.toLowerCase() == 'pari' ) {
            alert("You Trump!");
        }
        // Se il numero é pari e il giocatore ha scelto dispari, il giocatore ha perso.
        else if (somma % 2 == 0 && playerSelection.toLowerCase() == 'dispari') {
            alert("You Trump!");
        } 
        // Se il numero é dispari e il giocatore ha scelto dispari, il giocatore ha vinto.
        else if (somma % 2 != 0 && playerSelection.toLowerCase() == 'dispari' ) {
            alert("You win!");
        }
    }
     */


// LIVE Quanti min alla fine dell'ora
    var now = new Date();
    var minutes = now.getMinutes();
    var minInHours = 60;
    var minLeft = minInHours - minutes;
    console.log(minLeft);

// LIVE stampa eta piu grande
var etaUno, etaDue;

etaUno = Number(prompt("Quanti anni hai utente uno?"));
etaDue = Number(prompt("Quanti anni hai utente due?"));

if (etaUno > etaDue) {
    console.log("Utenete uno maggiore");
} else if (etaUno == etaDue) {
    console.log("Stessa eta");
} else {
    console.log("Utenete due maggiore");
}


// Il programma dovrà chiedere all’utente il numero di chilometri che vuole 
// percorrere e l’età del passeggero. 
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio.
// Il prezzo del biglietto è definito in base ai km (0.21 € al km), 
// ma va applicato uno sconto del 20% per i minorenni e del 40% per gli over 65.
