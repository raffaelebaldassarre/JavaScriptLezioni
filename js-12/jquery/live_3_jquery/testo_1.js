// mostra testo quando utente clicca pulsante
var bottone = $('#bottone');
/* 
bottone.click(function () {  
    $('p').show();
    $('p').fadeIn();

}); */



// versione plus - mostra e nascondi testo quando utente clicca e riclicca 

var open = false;
bottone.click(function () {  
    if(open) {
        $('p').fadeOut();
        bottone.text("Visializza testo");
        open = false;

    } else {
        $('p').fadeIn();
        bottone.text("Nascondi testo");
        open = true;
    }

});
