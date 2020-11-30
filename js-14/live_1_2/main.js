$(function () {  
    // Creare 10 quadrati vuoti. Con jQuery, dentro ognuno scrivere un numero random al click
    for (let index = 0; index < 10; index++) {
        $('.squares').append('<span class="square"></span>');
    }
    $('.square').click(function () {
        $(this).text(randomNumber(1, 100));
    });

    // Live 2 Quadratini colorati

    $(".square").each(function (index, val) {

        if(index % 2 === 0) {
            $(this).addClass('bg_red');
        } else {
            $(this).addClass('bg_green');
        }

    });

});

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}