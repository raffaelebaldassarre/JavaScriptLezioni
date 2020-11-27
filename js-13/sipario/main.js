// Ricreare un titolo di un paragrafo che cliccato mostra il testo sottostante ma utilizzare toggle per la sua visualizzazione.
$(function () {
$('#bottone').click(function () { 
    $('#sipario').slideToggle(5000);
    });
});