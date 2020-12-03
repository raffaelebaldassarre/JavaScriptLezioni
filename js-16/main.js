/* 
Recap breve timing functions 
⏳ max 45m 
⏰ 8:30 - 9:15
*****************************************/
/* setTimeout(function () {
    alert("Timing functions")
}, 4000); */


// set interval
/* var clock = setInterval(myFunction, 500);

function myFunction() {
    console.log('Hello');
} */


/* 
Correzione Simon Says 
⏳ max 45m 
⏰ 9:15 - 10:00)
**********************************/

/*  
Snacks Mancati Blocchi 1 e 2 🍫
⏳ 4 * 20 minuti x studenti | 4 * 5 min correzione
⏰ 10:15 - 12:00
********************************/

// 20min Snack 7 Blocco 1 (Stampa le potenze di 2 fino a 1000.)
/* for (let index = 2; index < 10; index++) {
    console.log(Math.pow(index, 2));
    console.log(index**2);
} */


// 20min Snack 9 Blocco 1 (Calcola la somma e la media dei primi 10 numeri.)
/* var sum = 0;
var avg = 0;
for(var i = 1; i <= 10; i++ ) {
    sum += i
    console.log(sum, i);
}
avg = sum / 10;
console.log(sum);
console.log(avg); */
// 0 + 1 = 1 | 1 + 2 = 3| 3 + 3 = 3 | 6 + 4 = 7 ...


// 20 min Snack 4 Blocco 2 
// (Crea due array che hanno un numero di elementi diversi. 
// Aggiungi elementi casuali all’array che ha meno elementi, fino a quando ne avrà tanti quanti l’altro.)


/*function match_array(arr1, arr2) {
    
     if (arr1.length  === arr2.length) {
        console.log("Array uguali");
    } else if(arr1.length  < arr2.length ) {
        var diff = arr2.length - arr1.length;
        console.log("Array uno minore di " + diff);
        for (var index = 1; index <= diff; index++) {
           arr1.push(Math.floor(Math.random() * 10 ));
            
        }

    } else {
        var diff = arr1.length - arr2.length;
        console.log("Array due minore di " + diff);
        for (var index = 1; index <= diff; index++) {
           arr2.push(Math.floor(Math.random() * 10 ));
            
        }
        
    }
 */

    // fattibile anche con swith
/*     switch(true) {
        case arr1.length  === arr2.length:
            console.log("Array uguali");
            break;
        case arr1.length  < arr2.length:
            var diff = arr2.length - arr1.length;
            console.log("La prima array contiene meno elementi! no." + diff);
            for (var index = 1; index <= diff; index++) {
                arr1.push(Math.floor(Math.random() * 10 ));    
            }
            break;
        default:
            var diff = arr1.length - arr2.length;
            console.log("La prima array contiene meno elementi! no." + diff);
            for (var index = 1; index <= diff; index++) {
                arr2.push(Math.floor(Math.random() * 10 ));
                
            }

    } 
    console.log(arr1, arr2);
}
var arr1 = [1, 3, 5, 6, 7]
var arr2 = [1, 3, 5,9,10,22,44]
match_array(arr1, arr2); */

// 20min Snack 5 Blocco 2 (Scrivi una funzione per stabilire se un numero è primo. Chiedi un numero all’utente e utilizza la funzione per comunicargli se il numero inserito è primo oppure no.)
// Un numero é primo se maggiore di 1 e non se la divisione del numero per un numero inferiore non lascia una rimanenza
/* 
 function isPrime(number) {
   for(var i = 2; i < number; i++) {
       if(number % i === 0) return false;
    }
    return number !== 1;      
   
}
console.log(isPrime(0));  */


