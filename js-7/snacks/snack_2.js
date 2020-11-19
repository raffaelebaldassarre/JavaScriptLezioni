/* 
L’utente inserisce due parole in successione, con due prompt. 
Il software stampa prima la parola più corta, poi la parola più lunga.
*/

var parolaUno, parolaDue;
parolaUno = prompt("Inserisci una parola");
parolaDue = prompt("Inserisci un'altra parola");

if (parolaUno.length === parolaDue.length) {
    console.log("Non vale stessa lunghezza");
    
} else if(parolaUno.length  < parolaDue.length ){
    console.log(parolaUno, parolaDue);
} else {
    console.log(parolaDue, parolaUno);
}
