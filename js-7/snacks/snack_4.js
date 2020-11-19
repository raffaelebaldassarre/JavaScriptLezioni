/* 
In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, 
chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
*/

var invitati = ["Fabio", "Michele", "Luca", "Raffaele"];
var nomeInvitato = prompt("Quale é il tuo nome");

var canJoin = false;
for (var i=0; i < invitati.length; i++ ) {
    if(nomeInvitato === invitati[i]) {
        canJoin = true;
    }
}

if (canJoin) {
    console.log("You can join the party");
} else {
    console.log("Sorry, you are not invited");
}