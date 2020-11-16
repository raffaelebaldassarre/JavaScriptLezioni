//alert("Hello JS");


/********************************** 
* CORREZIONE ESERCIZIO BIGLIETTO TRENO
************************************/
/* var kmDaPercorrere, etaPasseggero, costoPerKm, prezzoBiglietto, sconto, message;
var bigliettoElement =  document.getElementById('biglietto_info');
 */
// 1. chiedere all’utente il numero di chilometri che vuole percorrere
/* kmDaPercorrere = parseInt(prompt("Inserisci i kilometri da percorrere"));
console.log(kmDaPercorrere);  */
// 2. chiedere età del passeggero.
/* etaPasseggero = parseInt(prompt("Inserisci la tua etá"));
console.log(etaPasseggero);  */
// 3. calcolare il prezze del biglietto, definito in base ai km (0.21 € al km), 
/* costoPerKm = 0.21;
prezzoBiglietto = costoPerKm * kmDaPercorrere;
console.log(prezzoBiglietto); */
// 4. Applicare sconto 20 % ai minori di 18 anni
/* message = "Il prezzo del biglietto é £ ";

if(isNaN(kmDaPercorrere) || isNaN(etaPasseggero)) {
    alert("Devi inserire dei numeri");
    message = "";
}
if ( etaPasseggero < 18) {
    //console.log("Applica Sconto 20%");
    sconto =  (prezzoBiglietto * 20) / 100;
    prezzoBiglietto = prezzoBiglietto - sconto;
    message = "Hai ottenuto il 20% di sconto! Il prezzo del biglietto é £ ";
    //console.log(prezzoBiglietto);
} else if ( etaPasseggero > 65) {
    //console.log("Applica Sconto 40%");
    sconto =  (prezzoBiglietto * 40) / 100;
    prezzoBiglietto = prezzoBiglietto - sconto;
    message = "Hai ottenuto il 40% di sconto! Il prezzo del biglietto é £ ";
    //console.log(prezzoBiglietto);
}

bigliettoElement.innerHTML = message + prezzoBiglietto.toFixed(2); */


// 5. Applicare sconto 40% agli over 65



/********************************
 * LEXIONE 4
 *******************************/


// Recap condizionali
// Recap operatori logici

/* Math.ceil(12.59)
Math.random() */
// toFixed() per arrotondare i numeri decimali

// DOM manipulation 
///////////////////
/* var element = document.getElementById("biglietto_info");
console.log(element, typeof(element)); */


// element.classList + metodi .add() e .remove() + accesso singlolo elemento con [].
/* console.log(element.classList); // Lista con active par valori
console.log(element.classList[0]);
console.log(element.classList[1]); */

/* element.classList.add("info");
element.classList.remove("par");
console.log(element.classList);
//element.className
element.className = element.classList + " navbar";
console.log(element.classList);

// element.innerHTML
element.innerHTML = "Biglietti treno";

// element.style
element.style.backgroundColor = "black";
//element.style.display = "none";
element.style.color = "red";

// element.value
var inputName = document.getElementById('name'); */


// LIVE: Ciao visitatore
//var userName = document.getElementById('name');
/* Option 1 con .style */
//userName.style.color = "red";
/* Option 2 con classList */
//userName.classList.add("red_text");


// CLICK ME
////////////////////
// Intro base sulle Funzioni
//definizione funzione
/* function name() {
    // codice da eseguire
    
} */

// invoco funzione
/* name() */

// Funzioni Anonime
/* function () {

} */


// element.addEventListener()
// LIVE: click button and show alert with random number
/* var btnElement = document.getElementById('click_me');
btnElement.addEventListener("click", function () { 
    // Codice da eseguire al click
    alert("Il tuo numero random é: " + Math.ceil(Math.random() * 10));
}); */


// LIVE: Male or Female?
/* // Il software deve chiedere all’utente il suo nome 
var userName = prompt("What's Your name?");
// e il sesso con due prompt diversi.
var gender = prompt("What's your gender? [M/F] ");
// Sulla pagina html deve apparire “Ciao <nome>”, 
//il colore del nome deve essere azzurro o rosa a seconda del sesso inserito
var user = document.getElementById('name');
user.innerHTML = userName;

if(gender == "M"){
    user.style.color = "blue"; 
} else if (gender == "F") {
    user.style.color = "pink"; 
} */




/************************
 * LIVE ESERCIZIO Form biglietto
 **********************************/
