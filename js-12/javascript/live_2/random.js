// Al click di un pulsante, deve apparire un alert con un numero random

document.getElementById('bottone').addEventListener('click', function () {  

    alert(getRandomNumber(0, 100));

});

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min +1 ) + min );
}