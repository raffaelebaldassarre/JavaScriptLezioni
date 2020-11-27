// Creare una piccola sezione FAQ. Tante domande che quando cliccate visualizzano la risposta corrispondente.
// es. children, toggle, slideToggle


$(function () {
    $('.question').click(function () {
        //console.log($(this));
        //$(this).children('p').toggle();
        $(this).find('p').toggle();
    });
});

