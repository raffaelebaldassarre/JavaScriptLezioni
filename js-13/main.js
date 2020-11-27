/* jQuery Intro */

// Selettori jQuery vs JS
/* var btn = $('button');
var button = document.getElementsByTagName("button");
var btn_click = document.getElementById("click_btn");

console.log(btn);
console.log(button);
console.log(btn_click);
 */
// Eventi 
// funzione anonima
/* btn.click(function () {  
    console.log("Cliccato");
}); */

// funzione normale
/* btn.click(function cliccato () {  
    console.log("Cliccato");
}); */

//callback
/* btn.click(cliccato);

function cliccato () {  
    console.log("Cliccato");
}  */

// doppio click
/* btn.dblclick(function () {
    console.log("doppio click");
}); */



// Show / Hide
/* var button = $('button');
button.click(function(){
    $('p').show(2000, hide_me);
});

function hide_me() {
     $('p').hide();
}
 */
// jQuery 2

// ready() method deprecata da jQ 3.0
// codice viene eseguito solo quando documento é carico

/* $(document).ready(function () { 
    // codice jQuery 

 }); */

// optione due (piu recente)
$(function () { 
    // codice jQuery va qui
    
    // hasClass
    /*     var btn = $("button");
    if (btn.hasClass("new_color")) {
        btn.removeClass("new_color");
    } else {
        btn.addClass("new_color");
    } */


    var button = $('button');
    button.click(function(){
        $('p').slideToggle();
    });

});







