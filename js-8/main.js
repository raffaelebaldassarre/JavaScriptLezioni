/************************************
 * 👉 Correzione FIZZBUZZ 👈
************************************/

/* 

Scrivi un programma che stampi i numeri da 1 a 100, 
ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz. 
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per?
Abbiamo visto qualcosa di particolare che possiamo usare?

*/



/* for (var i = 1; i <= 100; i++) {
    if(i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
} */



/*******************
🍫 SNACKS 1  da 5 a 9 
********************/




/*************************
* 😎 FUNZIONI 
*/


// La sintassi
////////////////
// 1. parola chiave "function"
// 2. nome funzione
// 3. parentesi () e parametri
// 4. parentesi {} e corpo funzione
// 5. parola chiave return


/* function nomeFunzione () {
    // blocco di codice da eseguire
} */


//Funzione senza argomenti
//////////////////////////

/* function alertUser(){
    alert("Hello world");
} */

//alertUser();



// LIVE: Somma numeri
///////////////////////

// Funzione con argomenti
///////////////////////////
/* function sommaNumeri(num1, num2) {
 alert(num1 + num2);
}
sommaNumeri(3, 4); */


/* var risultato = "Bravo"; */

// Utilizzo della parola chiave return
/* function sommaNumeri2(num1, num2) {
 var risultato = num1 + num2;
 return risultato;
 //tutto quello che sta dopo return 
 //non viene eseguito
} */
// 
/* var number1 = Number(prompt("type a number")); */

// Invocare la funzione
/* var sum1 = sommaNumeri2(number1, 4);
var sum2 = sommaNumeri2(6, 7); */
/* var sum3 = sommaNumeri2(2, 7);
console.log(sum3);
console.log(risultato); */

// LIVE: Frasi fortuna
///////////////////////


/** 
 * Mostra frasi fortunate
 * @param array listaFrasi - Lista di frasi 
 * @return string - La frase selezionata
 */
function frasiFortunate(listaFrasi) {

    return listaFrasi[Math.floor(Math.random() * listaFrasi.length )];
}

var frasi = [
    "Buona fortuna",
    "Vincerai alla lotteria",
    "Daje forte",
    "Che la forza sia con te",
];

console.log(frasiFortunate(frasi));


var frasiUk = [
    "Goodluck",
    "Vincerai alla lotteria",
    "Daje forte",
    "Che la forza sia con te",
];

console.log(frasiFortunate(frasiUk));


// Live Numeri random
/////////////////////

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

console.log(getRandomInteger(10, 20));
var randNumb = getRandomInteger(10, 20);
var randNumb2 = getRandomInteger(25, 50);

console.log( randNumb, randNumb2 );


// Live verifica se numero utente é pari o dispari
//////////////////////////////////////////////////

function isEven(number) {
    if(number % 2 === 0) {
        return true;
    }
}

var userNumber = Number(prompt("Type a number"));

if(isEven(userNumber)){
    console.log("Pari");
} else {
    console.log("Dispari");
}
//isEven(userNumber)


// Documentare una funzione (Bonus !important)
//////////////////////////////////////////////


/** Somma due numeri  
 * @param int n1 - Il primo numero da sommare
 * @param int n2 - Il secondo numero da sommare
 * @return int - La somma dei due numeri
*/
function sommaNumeri3(n1, n2){
    return n1 + n2;
}

sommaNumeri3(3, 5);

