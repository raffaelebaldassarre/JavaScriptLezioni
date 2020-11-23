/* Recap Functions 
 ***************************/

// Sintassi

/* 
function calcola_eta(params) {
    
} */


/* function sommaNumeri(num1, num2) {
 console.log(num1 + num2);
}
sommaNumeri(5,5);


function sommaNumeri_2(num1, num2) {
    return num2, num1;
} */

// Variabili nelle funzioni
/* var risultato = "Ciao";

function sommaNumeri(num1, num2) {
 var risultato = num1 + num2; 
 return risultato;
}

var somma = sommaNumeri(49, 2);
console.log(somma); // 51
console.log(risultato); // "ReferenceError: risultato is not defined */



// Function declaration (callable before or after) [bonus]


/* askAge("Fabio"); // invocata prima della dichiarazione
function askAge(name) {
    return "Hi" + name  + " ...";
}

askAge("Fabio"); // Dopo la dichiarazione
 */

// Function expression (Anonymous function) - callable only after [bonus]

//ask_age("Fabio"); // non funziona se invocata prima dell'espressiona


/* var ask_age = function (name) {
    return "Hi" + name  + " ...";
}

ask_age("Fabio"); // funziona solo se invocata dopo!!
 */
// Funzioe anonima in event listener
/* element.addEventListener("click", function () {
    
}); */


// Funzione anonima

/* function () {
    // Blocco di codice
} */ 
// Manca identificativo - non puó essere usata da sola 


// Concatenazione Stringhe di testo 
/* console.log(" Fabio " + "Stringa due" + "Stringa 3");
 */
// Ciclo e stringhe
/* var testo = "Fabio " + "Stringa due" + "Stringa 3";
 */
/* console.log(testo.length);
 */
/* for (var index = 0; index < testo.length; index++) {
    console.log(testo[index]);
} */

// testo[0] | F
// testo[1] | a
/* console.log(testo[6]);
 */

/* console.log("Fabio".split("").reverse().join("")); */




/* Correzione Esercizi (Palindromi e Pari/Dispari) 
**************************************************/

// Palindromi


// Pari e dispari



/*  Variable Scope (o ambito)
*********************/

// Global scope & Local ( or function) scope
/* name = "Andrea"; // variabile globale (definita nell'ambito globale)
var lastName = "Gaggia"; // variabile globale;
// Esempio


function miaFunzione() {
 var i = 0; //questa variabile si vede solo qui dentro
 c = 10; //ma se dichiaro una variabile senza var...
 console.log(i, c);
} */


/* miaFunzione();
console.log(i); //ReferenceError: i is not defined
console.log(c); //...si vede anche fuori */


// Function scope

/* var saluto = 'Ciao';
saluta();
//10 k LOCs dopo…

function saluta() {
 alert(saluto);
} */

// 
/* var saluto = 'Ciao';

function saluta() {
 alert(saluto);
}

saluta(saluto); */


// Esempio 2

a = 0;
b = "buongiorno"
var c = "ciao";

saluta();

console.log("a is " + a); // 0
console.log("b is " + b); // buongiorno

function saluta() {
 var d = "asd";
 console.log("a is " + a); // 0
 var b = a + 1;
 console.log("b is " + b); // 1
 console.log(c); // ciao
}





/* Switch case 
********************/


/* switch (espressione) {
    case value:
        //blocco di codice
        break;
    case value:
        //blocco di codice
        break;

    default:
        // blocco di codice 
        break;
} */



/* switch (espressione) {
    case value:
    case value:
        //blocco di codice
        break;

    default:
        // blocco di codice 
        break;
}
 */



/* LIVE: operazioni con switch case 
***********************************/

var firstNumber = Number(prompt("Type one number"))
var secondNumber = Number(prompt("Type another number"))
var operazione = prompt("che tipo di operazione vuoi eseguire? [sum/subt/div/mult]")

switch (operazione) {
    case "sum": // operazione === "sum"
        var sum = firstNumber + secondNumber;
        alert("Risultato Somma: " + sum);
        break;
    case "subt":
        var subt = firstNumber - secondNumber;
        alert("Risultato Sottrazione: " + subt )
        break;
    case "div":
        var div = firstNumber / secondNumber;
        alert("Risultato divisione: " + div )
        break;
    case "mult":
        var mult = firstNumber * secondNumber;
        alert(`Risultato moltiplicazione: ${firstNumber} * ${secondNumber} =` + mult )
        break;
    default:
        alert("Non ho capito! Riprova.");
        break;
}

console.log("test");


