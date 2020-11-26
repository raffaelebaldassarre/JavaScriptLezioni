// Con il doppio click cambio il testo in “cliccato”.
// Con un click solo non fa niente

// add class new-color on mouseenter


// remove class new-color on mouseleave


var bottone = $("button");

bottone.dblclick(function() {
   bottone.text('Cliccato'); 
});

bottone.mouseenter(function () { 
    bottone.addClass("new-color");
 });

bottone.mouseleave(function () { 
    bottone.removeClass("new-color");
 });