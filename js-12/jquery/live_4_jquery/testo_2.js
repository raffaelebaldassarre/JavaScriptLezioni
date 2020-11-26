// Rendere visibile la scritta “Live Coding” dentro il cerchio arancione quando passo con il mouse sul cerchio.

$('div').mouseenter(function (){
    $('span').fadeIn(1000);
});


// Rendere invisibile la scritta quando esco dal cerchio arancione 

$('div').mouseleave(function (){
    $('span').fadeOut(1000);
});