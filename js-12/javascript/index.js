/* JavaScript general recap
**********************/

// Data Types 
////////////////////////////

// Variables (Variabili) 💾
/* var nome;
var nomeUtente  = "Fabio"; */
// Strings (stringhe di testo) e template string
/* "Fabio";
'Fabio';
'Pacifici';
var nome = "Fabio";
console.log("Fabio", nome);
console.log("Fabio" + " Pacifici");

console.log(`Il mio nome ${nome}`); */

// Numbers (numeri) e operazioni
/* console.log(2 + 2); // 4 
console.log(2 * 2); // 4 
console.log(2 / 2); // 1
console.log(2 - 2); // 0
console.log(12 % 3); // 0 */

// Booleans (valori booleani)
// true
// false
/* var x = 10;
console.log(x < 1); // false
console.log(x > 1); // true
console.log(x == "10"); // true
console.log(x === "10"); // false */


// DOM Manipulation (manipolazione DOM)
///////////////////////////////////////


// select an element by it con getElementById()
/* var divTest = document.getElementById('test'); */


// classList and className (aggiungi classe css con classList o className) 
/* console.log(divTest.classList.add("new_color"));
console.log(divTest.classList);
console.log(divTest.className = "visibile"); */


// change css con style (cambio proprieta css con  .style.property = "")
/* divTest.style.backgroundColor = "red"; */
// use innerHTML (ottenere l'inner html di un tag)
/* console.log(divTest.innerHTML);
divTest.innerHTML = "Welcome";
console.log(divTest.innerHTML); */



// Conditionals ❓
/////////////////
// syntax (sintassi) 
/* if (condition) {
    // codice da eseguite
} else {
    // codice da eseguire se condizione é falsa;
} */
 
/* if (condition) {
    // codice da eseguite
} else if (condition) {
    // codice da eseguite
} else if (condition) {
    // codice da eseguite
} else if (condition) {
    // codice da eseguite
} else {
    // codice da eseguire se condizione é falsa;
} */



// if else 
/* var x = "10"; */
// se condizione nell'if é true | blocco di codice eseguito.
/* if (x > 10 ) {
    // messaggio se x é maggiore di 10;
    console.log("X é maggiore di 10");
} else {
    console.log("X non é maggiore di 10");
} */

// else if
/* if (x > 10 ) {
    // messaggio se x é maggiore di 10;
    console.log("X é maggiore di 10");
} else if (x === 10) {
    console.log("X é 10");
} else {
    console.log("X non é maggiore di 10");
} */

// switch
/* switch (espressione) {
    case valore_da_verificare:
        
        break;

    case valore_da_verificare:
        
        break;
    
    case valore_da_verificare:
        
        break;

    default:
        break;
}
 */

// Esempio
/* var day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
} */


//fruits === "banana"
/* var fruits = "banana";
fruits = prompt("Insirisci un frutto"); // mela */
/* switch (fruits) {
    case "banana":
        console.log("Indovinato, banana");
        break;

    case "mela":
        console.log("Indovinato, mela");
        break;

    case "pesca":
        console.log("Indovinato, pesca");
        break;

    case "arancio":
        console.log("Indovinato, arancio");
        break;

    default:
        console.log("Riprova");
        break;
} */

/* switch (true) {
    case fruits === "banana":
        console.log("Indovinato, banana");
        break;

    case fruits === "mela":
        console.log("Indovinato, mela");
        break;

    default:
        console.log("Riprova");
        break;
} */


 
// 4 === 0? | 4 === 1 | 4 === 2 | .. | 4 === 4 ? true - eseguo codice.


// Arrays (liste) 💿
////////////////////

// syntax ( sintassi )
/* var lista = ["ripassare html", "ripassare css", "studiare js"];
var listaNumeri = [1, 3, 5, 6, 7, 7 ];
var listaMista = ["antonio", 30, true]; */

// access an element ( accedere elemento )
/* console.log(lista[0]);
console.log(lista[1]);
console.log(lista[2]); */

// add elements ( aggiungere elementi )
/* lista.push("studiare jq"); */
//console.log(lista);

// remove elements ( rimuovere elementi )
/* lista.pop();
console.log(lista); */

// Loops (cicli) 🔁
////////////////////

// For Loop
/* for(esp_iniziale; condizione; esp_finale) {
    // codice da ripetere
} */

for(var index = 0; index < 10; index++) {
    console.log(index);
}
// While loop
/* while (condition) {
    // blocco di codice da eseguire
    
} */
var index = 0;
while (index < 10) {
    // blocco di codice da eseguire
    console.log(index);
    index++;
}

var play = true;
while (play == true) {
    console.log("Stai giocando");
    var scegliNumero = prompt("vuoi continuare? [Y/N]");

    var userChoice = prompt("vuoi continuare? [Y/N]");
    if(userChoice === "N") {
        play = false;
    }
}
console.log("Fine");
// Do while
var x = 100;
do { 
    // codice eseguito almeno una volta
    console.log("Vengo eseguito almeno una volta");
} while (x < 10);


// Functions (Funzioni)  🔧
/////////////////////////

// syntax ( sintassi )

// creare una funzione

// function declaration

// function expression

// anonymous function




/* Live Coding JavaScript 💻
****************************/

// Js + Html | Hello (hello.html + hello.js) [live_1]

// Js + Html | click random (random.html + random.js) [live_2]

// Js + Html | gender (saluto.html + saluto.js) [live_3]
