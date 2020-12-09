/* ES6 Intro 
********************/

// Let (mutable) and Const (immutable) | not hoisted
//var
/* console.log(username);
var username;
console.log(username); */

// let
//console.log(movie);
/* let movie;
console.log(movie); */

// const
/* console.log(user);
const user = "Federico";
console.log(user);
 */
// Mutabilitá

// var é mutabile
/* var user = "Mirko";
user = "Andrea";
console.log(user); */

// let é mutabile
/* let game = "Monkey island";
game = "Starwars";
console.log(game); */

// const é immutabile
/* const yearOfBirth = 1980;
//yearOfBirth = 1982;
console.log(yearOfBirth); */

// Con 'const' sono mutabili solo i suoi valori
/* const students = ["Mirko", "Andrea", "Raffaele"];
students.push("Alessandro");
console.log(students);

const Person = {
    name: "Luke",
    lastName: "Skywalker",
    job: "Yedi"
}
Person.father = "Darth"
console.log(Person); */


// Block scope (Global, Local, Block scopes "new")

// var function scope
/* var name = "Fabio";
function calcAge() {
    var age = 40;
    console.log(name, age);
}

calcAge(); */
//console.log(age); // referenceError

// Block scope non esite con 'var'
/* var age = 21;
var canDrink = false;
if(age > 18) {
    var message = "User age: " + age + " You can drink";
    canDrink = true;
} else {
    message = "User age: " + age + " You can't drink";
    canDrink = false;
}

console.log(canDrink, message); */

// Block scope con let
/* let age = 17;
let canDrink = false;
let yourName =""; // variabile
userName = ""; // proprieta oggetto globale.
if(age > 18) {
    let message = "User age: " + age + " You can drink";
    canDrink = true;
    console.log(canDrink, message);

} else {
    let message = "User age: " + age + " You can't drink";
    canDrink = false;
    console.log(canDrink, message);
} */
//console.log(window);
//console.log(canDrink, message);


// Block scope con i cicli

/* var arr = [12, 34, 5, 7, "Andrea", true] 
for (var index = 0; index < arr.length; index++) {
    var element = arr[index];
    console.log(index, element);
    
}
console.log(index, element); */



// Block scope con let e ciclo for
/* let arr = [12, 34, 5, 7, "Andrea", true] 

let element = false;

for (let index = 1; index < arr.length; index++) {
    const element = arr[index];

    console.log(element + "Qualcosa");
    console.log(index, element);
    
}
console.log(index, element);
console.log(window); */


/* for (let index = 0; index < 10; index++) {
 console.log(index);
}
if(index === 9) {
 console.log(index);
} */


// Template Literals (single/multi line + with expressions)
/*
let nome = "Fabio";
 let greeting = "Ciao" + " " + nome + " " +"benvenuto";

let greeting_2 = `Ciao ${nome} benvenuto`;

console.log(greeting);
console.log(greeting_2);


const userName = "Antonio";
const job = "Student";
const yob = 1985;

console.log("Mario\nRossi");

const summary = `Name: ${userName}
Job: ${job}
Year of Birth: ${yob}` 
console.log(summary);

const now = new Date().getFullYear();

console.log(`${userName} is ${now - yob} years old`);

console.log(`${userName} is ${ (now - yob) < 40 ? "still youngh" : "getting old" } `); */
//console.log(`${userName} is ${ if((now - yob) < 40) {  "still youngh" } else {  "getting old" } } `);


// Arrow functions

// sintassi arrow function anonima multilinea
/* () => {
    
} */

// sintassi arrow function anonima con unico parametro
/* str => {
    console.log(str);
} */
// sintassi arrow function anonima con piu parametri
/* (name, dob) => {
    console.log(name, dob);
} */

// sintassi funzione semplice senza return e senza parentesi {}
//() => console.log("hello");

// funzione con nome multilinea con return
/* 
const calcAge = (dob, name) => {
    const now = new Date().getFullYear();
    const age = now - dob;
    return `${name} is ${age} years old`;
}

console.log(calcAge(1980, "Fabio")); */


// funzione con nome unica riga senza return e parentesi
/* const sum = (num1, num2) => num1+num2;
console.log(sum(5,8)); */

// Utilizzo del this

/* document.querySelector('button').addEventListener('click', function() {
 console.log(this);  
 // qui otteniamo <button id="button">Click</button>
});*/

/* 
document.querySelector('button').addEventListener('click', () => console.log(this));  */
// qui otteniamo Window {}


/* JS Snacks Blocco 5  */

// snack 2
const reverseString = (text) => text.split("").reverse().join("");
console.log(reverseString("Learn es6"))

// snack 5
/** 
 * @param { array } arr an array
 * @param { number } a an integer less than b
 * @param { number } b an integer less than or equal the length of the array
 * 
 */
const newArray = (arr, a, b) => {
    if (a < b && b <= arr.length) {
        return arr.slice(a, b);
    } 
    return "Incorrect parameters"
}

console.log(newArray(["fabio", "Serena", "luke", "yoda", 12, true], 1, 4));

