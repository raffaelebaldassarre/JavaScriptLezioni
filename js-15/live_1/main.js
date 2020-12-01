// Creare una To do List. 
// On click su un item verrà cancellata la riga. 
//Una volta che l’item è nascosto, far comparire un modal: 
// “Item Cancellato” e farlo scomparire subito dopo.
$(function () {  
    $('.delete').click(function(){

        $(this).parent().hide();
        $('#modal').addClass('active');
        setTimeout(function () { 
            $('#modal').removeClass('active');
         }, 2000);
    });
});