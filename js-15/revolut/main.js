$(function () {
    var dropdown = $('.dropdown');
    dropdown.hover(function () {
            // over
            $(this).children('ul').removeClass('d_none');
            
        }, function () {
            // out
            $(this).children('ul').addClass('d_none');

        }
    );
});