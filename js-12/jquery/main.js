/* jQuery */

// download jQ

// syntax (sintassi) 


// selectors and actions (selettori e azioni)
////////////////////////////////////////////
// solo sintassi
/* $(selettore).action(); */


// Live 1 (welcome.js / welcome.html)
/////////////////////////////////////

/* $('p').action(); // Seleziona tutti i <p>
$('p.intro').action(); // Seleziona tutti i <p> con classe intro
$('p:first').action(); // Seleziona il primo elemento <p>
$('[href]').action(); // Seleziona tutti gli elementi con un attributo href

$('#prova').action(); */

// tutti gli h1 
$('h1').addClass('test');
// l'Id prova
$('#prova').addClass('test');
// Tutti i li con classe active
$('ul li.active').addClass('test');
// tutti gli strong dentro un p con classe big
$("p.big strong").addClass('test');
//Tutti gli small figli (solo figli) di una section
$('section > small').addClass('test');
// aggiungiamo una classe agli h3 e h4
$('h3, h4').addClass('test');


// Events (eventi) [soli sintassi]
//////////////////
$(selector).click();
$(selector).dblclick();
$(selector).mouseenter();
$(selector).mouseleave();


// Live 2 (events.js / events.html)
///////////////////////////////////


// Show, Hide, Fade
///////////////////
$('button').show();    
$('button').hide();

$('button').fadeIn();    
$('button').fadeOut();


// Live 3 
////////////////////////////


// Live 4
///////////

// Esercizio
