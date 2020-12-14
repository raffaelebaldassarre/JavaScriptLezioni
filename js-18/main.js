/* Correzione Esercizio Oggetti 
********************************/

/* student = {
    nome: "Luke",
    cognome: "Skywalker",
    eta: 30
}
for (const key in student) {
  
        const element = student[key];    
  
    console.log(element);

}

studenti = [
    {
    nome: "Luke",
    cognome: "Skywalker",
    eta: 30
},
{
    nome: "Luke",
    cognome: "Skywalker",
    eta: 30
},
{
    nome: "Luke",
    cognome: "Skywalker",
    eta: 30
}
];
studenti.forEach(element => {
    console.log(element.nome, element.cognome);
});

studenti.push({
    nome: prompt("type a name"),
    cognome: prompt("type a lastname"),
    eta: prompt("type a age"),

}) 
console.log(studenti); 
*/



/* 
jQuery Remove
**************/

/* 
$(".close").click(function () {
    $(this).parent().remove();    
}) */



/*  Keypress
*******************/

// Keypress 
/* $('input').keypress(function (e) { 
    console.log(e.keyCode);    
}); */

/* $('input').keyup(function (e) { 
    console.log(e.keyCode);    
});  */

/* $('input').keydown(function (e) { 
    console.log(e.keyCode);    
}); */
/* 
$('input').keyup(function(e){
    console.log(e.which);  
    if(e.keyCode === 13) {
        var value = $('input').val();
        var markup = `<li>${value}<span class="close">X</span></li>`;
        $('.section_todo > ul').append(markup);
    }

});  */

/* $(".close").click(function () {
    $(this).parent().remove();    
}); */
/*  JSnacks Blocchi 4 e 5
*************************/

// snack 1a
/* var palla = {
    name: "palla",
    peso: 125
} */
// snack 1b
/* palla.peso = Number(prompt("type a peso"));
console.log(palla); */

// snack 2
/* var biciclette = [
    {name:"kink", peso: 12},
    {name:"kink 2", peso: 11},
    {name:"kink 3", peso: 10},

]
var biciLeggera = biciclette[0];
biciclette.forEach(function(bici){
    if(bici.peso < biciLeggera.peso){
        biciLeggera = bici
    }
    
});
console.log(biciLeggera); */

// snack 3
/* var rectangle = {
    altezza: 20,
    base: 40,
}
// calcolare area
rectangle.area = rectangle.base * rectangle.altezza / 2
console.log(rectangle);
// calcolare perimetro
rectangle.ipotenusa = Math.sqrt(Math.pow(rectangle.base, 2) + Math.pow(rectangle.altezza, 2))
rectangle.perimetro = rectangle.altezza + rectangle.base + rectangle.ipotenusa;
*/

// Snack 4 Squadre di calcio
var squadre = [
    { nome: "milan", punti: 0, falli : 0},
    { nome: "juve", punti: 0, falli : 0},
    { nome: "parma", punti: 0, falli : 0},
    { nome: "sampdoria", punti: 0, falli : 0},

];
function randomN(min, max) {
    return( Math.floor(Math.random() * (max - min +1) + min ));
    
}
squadre.forEach(el => {
    el.punti = randomN(1, 20);
    el.falli = randomN(1, 10);
});
console.log(squadre);


// SNACKS Blocco 5



/* Recap JavaScript Objects 
****************************/



// Create a new object literal


// Access Object properties


// Add Object properties


// Add object's methods


// Access object's methods


// Add a new property via a method


// Create a Class Object and Instantiate a new object [ES6]


// Add a constructor method



