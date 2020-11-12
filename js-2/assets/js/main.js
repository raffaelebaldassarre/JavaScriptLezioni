// Variabili con valore
var userName = "Fabio";
var year = 2020;

// Inizializzo Variabile senza valore
var age;
// Assegno valore alla variabile.
age = "30";

//Print numbers to the screen
document.getElementById('year').innerHTML = year;
document.getElementById('age').innerHTML = age;


// Esempio variabili con alert
var greeting; // variabile undefined

//alert(greeting);

greeting = "Hello";
//alert("greeting");

greeting = 1244;
//alert(greeting);


// Stringhe
// Stringa con virgolette in mezzo
var question = 'what is you age "fabio" ';
// stringa con apice in mezzo
var questio2 = "what's your age"

// Concatenazione stringhe
var coloreLacci = "Rosso" + " " + "Acceso";

var numberStringa = "8"; // Stringa
var numberInt = 8; // Number


// Operazioni matematiche
console.log(5+5); // addizione
console.log(5-2); // sottrazioni
console.log(5*5); // moltiplicazioni
console.log(6/2); // divisioni

var somma = 5+5;
var sottrazione = somma - 3;
var divisione = somma / 2;
var moltiplicazione = sottrazione * 10;

var totale = "Fabio";
console.log( totale * 10 ); // NaN


console.log("Ciao JavaScript");


// Prompt
var userName = prompt("Come ti chiami?");
//console.log(userName);

document.getElementById('name').innerHTML = "Ciao " + userName;


var userAge = parseInt(prompt("Quanti anni hai?"));

var currentYear = 2020;
var yearOfBirth = currentYear - userAge;

document.getElementById('yob').innerHTML = "Allora sei nato nel " + yearOfBirth;


