/* jQuery Recap
 ***************/
/* ready function */
// Sintassi deprecata della versione 3.0
$(document).ready(function () {
 // Tutto il codice qui dentro viene eseguito solamente quando il DOM è stato
 // caricato completamente, a prescindere da dove sia posizionato nella pagina
});

// Sintassi corrente
$(function () { 


});


// toggle
/* $('button').toggle(); //unisce show e hide
$('button').slideToggle(); // unisce slideUp e slideDown

$('button').fadeToggle(); // unisce fadeIn e fadeOut
$('button').toggleClass(); // unisce addClass e removeClass

 */
// callback
// utilizzando una finzione anonima
/* $('.text').hide(1000, function () {
 alert('Testo nascosto');
});
// callback invocata con il nome
$('.text').hide(100, alertText);
function alertText() {
    alert('Testo nascosto' + name );
} */

// this


// DOM Manipulation

/* 
text() - Cambia o ritorna il testo di un selettore
html() - Cambia o ritorna l’html di un selettore, incluso il markup
val() - Cambia o ritorna il valore di un form input
attr() - Cambia o ritorna i valori di un attributo di un selettore. */

// Utilizzo di text
/* console.log($('h1').text()); // console.log(document.getElementById('h1').innerHTML);
$('h1').text("Hello classe #23") // document.getElementById('h1').innerHTML = "jQuery"
// utilizzo di html
var markup = "<span>Test</span>";
$('h1').html(markup); */

// mostra il markup 
/* console.log($('p').html());
// mostra solo testo
console.log($('p').text()); */

// attr()
/* console.log($('a').attr('rel')); // accedo
$('a').attr('href', "#") // modifico */

// css
/* console.log($('a').css('padding')); // lettura
$('a').css('padding', '3rem'); // scrittua singola
$('a').css(
    {
        'padding': '3rem',
        'background-color': 'blue'

    }
); */ // scrittura multipla


/* jQ Lezione  
*****************/

// each ( Mostrare anche versione JS)

var buttons = $('.buttons');
console.log(buttons);
for (var i = 0; i < buttons.length; i++) {
   $(buttons[i]).text('clickme');
}

buttons.each(function () {
    $(this).text('each click');
});

// each con attributi di default
buttons.each(function (index, element) {
    $(this).text('each click');
    console.log("test");
});

// each in JS
names = ["Fabio", "Andrea", "Mirko"];
names.forEach(function(val, index, array ) {
    console.log(val, index, array);
});

// append
var markup = "<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias doloremque omnis hic dicta, rerum ea quibusdam voluptatum consequuntur, eligendi obcaecati earum dolorem animi sint deleniti a dolores repellendus, molestias quas.</p>"
$('.section').append(markup);

$('.section').prepend(markup);


// insertAdjacentHTML
// https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML

/* Live 1 e 2 Quadratini  */


/* Live 3 Google Dropdown */

