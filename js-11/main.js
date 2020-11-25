/* Snack Block 2 */
// Snack 1
//Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo
var userNumber = parseInt(prompt('Inserisci un numero'));

if (userNumber % 2 == 0)
{
    console.log(userNumber);
}
else {
    var userNumberPlusOne = userNumber + 1;

    console.log(userNumberPlusOne);
}


// Snack 2
//Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di invitati.

var names = ['Michele', 'Fabio', 'Roberto'];
var lastnames = ['Forghieri', 'Papagni', 'Marazzini'];

var fullnameList = [];

for (var i = 0; i < 5; i++)
{
    //Questa è il classico metodo di generazione di numeri random con js che troverano ovunque. Si devono abituare da subito a cercare.
    //Math.floor(Math.random()*(max-min+1)+min);
    var randomNameNumber = Math.floor(Math.random()*((names.length - 1) - 0 + 1) + 0);
    var randomLastnameNumber = Math.floor(Math.random()*((lastnames.length - 1) - 0 + 1) + 0);

    var newFullName = names[randomNameNumber];
    newFullName += ' ' + lastnames[randomNameNumber];

    fullnameList.push(newFullName);
}

console.log(fullnameList);

// Snack 3
//Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari
var numbers = [1, 4, 2, 15, 120, 17, 3];
var sum = 0;

for (var i = 0; i < numbers.length; i++)
{
    if (i % 2 != 0)
    {
        sum += numbers[i];
    }
}

console.log(sum);