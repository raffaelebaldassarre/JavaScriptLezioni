/* 
1.Un alert espone 5 numeri casuali diversi.
2.Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
3.Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.
*/

// 1. Cinque Numeri casuali in array:
// Creare funzione per generare numeri random
function randomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Genera 5 numeri random e mettili in un array
numbersArr = [];
while (numbersArr.length < 5) {
    var number = randomNumber(1, 10);
    //console.log(number);
    // verifica se numero generato é gia inclusi in array
    // se numero non incluso in array aggiungilo
    if(! numbersArr.includes(number)){
    
        numbersArr.push(number)
    }
    ``
}
alert(`[${numbersArr}]`);

//2.Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.

// eseguire funzione dopo 30 secondi

setTimeout(function(){
    userNumbers = []
    // chiedere di inserire numbero con prompt 5 volte
    for (let index = 0; index < 5; index++) {
        var userNumber = parseInt(prompt("Inserisci uno dei numeri che ricordi di aver visto"));
        if(! userNumbers.includes(userNumber)) {
            userNumbers.push(userNumber)
        }
    }
    // 3. Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.
    // Individua quali numeri inseriti dall'utente sono presenti tra quelli generati
    guessedCount = 0;
    guessedList = [];
    for (const n in userNumbers) {
        if (numbersArr.includes(userNumbers[n])) {
            const element = userNumbers[n];
            console.log(element);
            guessedCount++
            guessedList.push(userNumbers[n])            
        }
    }
    // Mostra un allerta contenente i numeri indovinati 
    alert(`Indovinati... ${ guessedCount }`)
    guessedList.forEach(function(val) {
        alert(`Hai azzeccato! ${val} era nell'elenco`);
    });
    if (guessedCount < 2) {
        alert("Ammazza che sega! Riprova, e non distrarti!")
    } else if (guessedCount > 3 && guessedCount < 5) {
        alert("Bravo, Ma puoi fare di meglio! prova ad indovinare tutti i numeri");
    } else {
        alert("Genio!")
    }
    
}, 3000);
