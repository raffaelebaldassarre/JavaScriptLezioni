
/* Timing functions */
//set timeout

/* setTimeout(myFunction, 3000); // funzione setTimeOut
 
function myFunction() {
alert('Hello');
}
myFunction();
console.log("Timing functions are cool"); */


// Set Interval Function

/*   var clock = setInterval(myFunction, 1000);
 
function myFunction() {
    console.log('Hello');
} */


  // Clear Interval Function
/* var clock = setInterval(myFunction, 3000);
console.log(clock);
function myFunction() {
    console.log('Hello');
}
clearInterval(clock); */


// Programmazione Sincrona

/* var array = [1, 2, 3, 4];
for (var i = 0; i < array.length; i++) {
 console.log(array[i]); //stampa un elemento alla volta
}
console.log('Ciao');//viene stampato dopo il for
 */
// Programmazione Asincrona
/* setTimeout(myFunction, 3000); //stampa dopo 3 secondi
console.log('Ciao');//viene stampato per primo


function myFunction() {
   console.log('Ciao Asincrono');
} */

// Programmazione Asincrona es 2
/* setTimeout(myFunction, 3000); 
console.log('Ciao');
console.log('Ancora un evento sincrono');

function myFunction() {
   console.log('Ciao Asincrono');
} */


// Esempio sincrono
setTimeout(myFunction, 0); 
console.log('Ciao');
console.log('Ancora un evento sincrono');
console.log('Ancora un evento sincrono');
console.log('Ancora un evento sincrono');
console.log('Ancora un evento sincrono');
console.log('Ancora un evento sincrono');
console.log('Ancora un evento sincrono');
console.log('Ancora un evento sincrono');
console.log('Ancora un evento sincrono');
console.log('Ancora un evento sincrono');
console.log('Ancora un evento sincrono');
function myFunction() {
   console.log('Ciao Asincrono');
   console.log('Ciao Asincrono');
   console.log('Ciao Asincrono');
}