/* Intro Vue 
*****************/

// Import VueJs

// Create a new vue instance
/* 
let app = new Vue({
    // options object
    el: "#app",


}) */

// Data object

/* let app = new Vue({
    // options object
    el: "#app",
    data: {
        message: "Hello VueJS",
    }
    

})
 */


// Declaratively render data

// Directives: v-model (Two way data binding)

/* Live 1 
Utilizzare due input, in cui inseriremo Nome e Cognome.
In un paragrafo utilizzare Nome e Cognome per salutare l’utente
*/


// Directives: v-bind (Data binding)

/* let app = new Vue({
    // options object
    el: "#app",
    data: {
        message: "Hello VueJS",
        classeDinamica: "blue"
    }
    

}) */

// Methods

/* let app = new Vue({
    // options object
    el: "#app",
    data: {
        message: "Hello VueJS",
        classeDinamica: "blue"
    },
    methods: {
        // sintassi es5
        saluta: function(){
            return "ciao";
        },
        // sintassi es6
        sayHi() {

        }


    }
    

}) */

var vm = new Vue({
    el: "#app",
    data: { 
        number: 1 
    },
    methods: {
        plus: function () {
        this.number++
    }
  }
})




// Directives: v-on (Events)


/* LIVE 2 
Creiamo una pagina con all’interno un titolo di colore rosso. 
Al click di un bottone il titolo diventerà blu.
*/


/* Esercizio (Istallazione (con CDN) e hello world) */
//Stampare a schermo un h1 centrato con un messaggio a piacere
//Bonus: aggiungere un'immagine come logo sempre tramite vue, di default in html 

