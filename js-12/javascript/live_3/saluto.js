// Il software deve chiedere all’utente il suo nome e il sesso con due prompt diversi.
// Sulla pagina html deve apparire “Ciao <nome>”, il colore del nome deve essere azzurro o rosa a seconda del sesso inserito

var name = prompt("Inserisci il tuo nome");
var gender = prompt("inserisci il tuo sesso [M o F]");

document.getElementById('saluto').innerHTML = "Ciao " + name;

if (gender == "M") {
    document.getElementById('saluto').style.color = "blue";
} else {
    document.getElementById('saluto').style.color = "pink";

}