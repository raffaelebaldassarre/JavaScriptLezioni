/* 
Il software deve chiedere per 5 volte all’utente di inserire un numero. 
Il programma stampa la somma di tutti i numeri inseriti. 
Esegui questo programma in due versioni, con il for e con il while.

*/

var sum = 0;

/* for(var i = 0; i < 5; i++){
    var numeroUtente = Number(prompt("Insert a number"));
    sum += numeroUtente;
    //sum = sum + numeroUtente; versione estesa
} */

var counter = 0;
while (counter < 5) {
    var numeroUtente = Number(prompt("Insert a number"));
    sum += numeroUtente; 
    //sum = sum + numeroUtente; //versione estesa
    counter++;
}

console.log(sum);