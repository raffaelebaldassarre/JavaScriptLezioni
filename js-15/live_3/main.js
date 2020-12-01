//Simulare un countdown di 10 secondi che alla fine dice buon anno


var seconds = 10;

var interval = setInterval(function () {  

    document.getElementById('secondi').innerHTML = seconds;
    if ( seconds === 0) {
        alert("Buon Anno!!🎊🥳");
        clearInterval(interval);
    } else {
        seconds--;
    }

}, 1000);