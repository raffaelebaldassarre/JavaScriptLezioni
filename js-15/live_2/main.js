//Il programma chiede all’utente quanti secondi mancano alla cottura della pasta.
//Dopo il tempo indicato, appare un alert()

var numberOfSeconds = Number(prompt("Quanti secondi mandano alla cottura della pasta?"));


setTimeout(function () { 
    alert("Pasta Cotta");
}, numberOfSeconds * 1000);