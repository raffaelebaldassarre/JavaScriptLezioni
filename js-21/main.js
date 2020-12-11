/* JavaScript Recap 
*********************/

/* DOM */
/* const el = (document.querySelector('section'));
console.log(el);
const el_2 = (document.getElementById('demo'));
console.log(el_2);
const el_3 = document.getElementsByTagName('section');
console.log(el_3);
const el_4 = document.getElementsByClassName('section');
console.log(el_4);
console.log(el_4[0]); */

/* ❗❓ Switch case ❗❓ */

// syntax

// example


/*🔧 Functions (Funzioni)  🔧
Presentazioe Slide: https://docs.google.com/presentation/d/1AlpTsJ0LNBkxjXQZAnU6N51M6i04wNhDMjmGw91fH9Q/edit#slide=id.g352c78c303_0_80
Blocco di codice auto-contenente, riutilizzabile.
*/

// syntax: function declaration 
/* function functionName(parametri){
    // your code
    // return 
} */

// example: function declaration
/**
 * ## Conta alla rovescia da un dato numero
 * passare un numero alla funzione per fare il conto alla rovescia
 * @param {number} number Il numero da cui partire
 */
/* function countBackwards(number) {
    for(let index = number; index >=1; index--){
        console.log(index);
    }
} */
/* countBackwards(100);
countBackwards(10);
countBackwards(20);
countBackwards(30); */


// syntax: function expression 
/* const functionName = function(parametri){
    // your code here
    // return
} */

// example: function expression
/* const countForward = function(number) {
    let i = 1;
    while (i <= number) {
        console.log(i);
    i++;
    }
}
countForward(10); */

// sintax: anonymous function 
/* function(parametri){
    // your code here
    // return
} */

// example: anonymous function
//const movies = ["starwars", "ritorno al futuro", "inception"];
/* ["starwars", "ritorno al futuro", "log"].forEach(function (movie) {
        if(movie.toLowerCase() === "starwars") console.log(movie + " is my favourite movie");
        console.log("I like " + movie);        
    }

);
 */

/*📐 arrow function [ES6] 📐*/

// syntax: arrow function (anonymous + named)
/* () => {

}

const functionName = () => {

} */
// example: arrow function
/* ["starwars", "ritorno al futuro", "log"].forEach(movie => {
        if(movie.toLowerCase() === "starwars") console.log(movie + " is my favourite movie");
        console.log("I like " + movie);        
    }

); */


// this e le arrow functions
/* var person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    console.log(this);
    return this.firstName + " " + this.lastName;
  }
};

console.log(person);
console.log(person.fullName());

console.log(this); */


/* function calcAge() {
    console.log(this);
}
calcAge() */

/* const section = document.querySelector('section');
section.innerHTML = "<button>Click here</button>";
const btn = document.querySelector('button');
/* 
btn.addEventListener('click', function(e){
    console.log(e);
    console.log(this);
}) 

section.addEventListener('click', function(e){
    //console.log(this); // <section>Recap</section>
    btn.addEventListener('click', ()=> {
        console.log(this);    
    });
    
});
*/


/* 👀 Variable Scope 👀 
Presentazioe Slide: https://docs.google.com/presentation/d/1AlpTsJ0LNBkxjXQZAnU6N51M6i04wNhDMjmGw91fH9Q/edit#slide=id.g355151f621_0_49
*/

// Global scope
//let users = ["Lorenzo", "Marco", "Luis", "Maria"]; // variabile in ambito globale
//bicycle = ["Bianchi", "Cannondale", "Kink","Colony"]; // non variabile ma prop oggetto window globale.
/* const bicycle = ["Bianchi", "Cannondale", "Kink","Colony"]; // non variabile ma prop oggetto window globale.
 */

// Function scope
/* function name(bike){
    let users = ["Marco", "Luis"]
    console.log(users);
    //console.log(bike);
}
name();

console.log(users); */

// Block scope [ES6 const / let]
/* for (let index = 0; index < 10; index++) {
    console.log(index);
    
} */

let x = 10;
if (x > 10) {
    let message = "x maggiore di 10"; /// block scope variable
    console.log(message);
} else {
   let message = "x minore o uguale a 10"; // block scope var
    console.log(message);

}
var user = "Fabio";
var user = "Fabio";

console.log(window);
console.log(message);
/* ⏲ Timing Functions ⏲ 
Presentazioe Slide: https://docs.google.com/presentation/d/1AlpTsJ0LNBkxjXQZAnU6N51M6i04wNhDMjmGw91fH9Q/edit#slide=id.g3d467e642b_1_35
*/

// syntax: setTimeout 
// example


// syntax: setInterval
// example

// syntax: clearInterval
// example


/* Array Vs Objects
https://docs.google.com/presentation/d/1AlpTsJ0LNBkxjXQZAnU6N51M6i04wNhDMjmGw91fH9Q/edit#slide=id.g6e1001cd36_0_23
*/


/* ES6 [Fabiola] */

/* Rest & Spread */

/* Destructuring */

/* Map */

/* Filter */

