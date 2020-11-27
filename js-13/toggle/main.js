// Ricreare un titolo di un paragrafo che cliccato mostra il testo sottostante ma utilizzare toggle per la sua visualizzazione.

//Versione con toggle
$(function () { 
    var button = $('button');
    button.click(function(){
        $('p').toggle();
    });

});


//Versione manuale
$(function () {  

    var visibile = false;
    $('button').click(function () {  
        if(visibile) {
            $('p').hide();
            visibile = false;
        } else {
            $('p').show();
            visibile = true;
        }
    });

});

