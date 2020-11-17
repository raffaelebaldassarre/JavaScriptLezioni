var btnGenera = document.getElementById('btn-genera');
var btnAnnulla = document.getElementById('btn-annulla');


btnGenera.addEventListener("click", function () {
    
    // Genera ticket
    console.log("Genera il Ticket");
    
    var offer = "Standard Ticket";
    // Selezionare valore degli input 
    var fullNameInput = document.getElementById('full-name');
    var kmInput = document.getElementById('km');
    var fasciaInput = document.getElementById('fascia');
    
    // Seleziona i valori
    var fullName = fullNameInput.value;
    var km = kmInput.value;
    var fascia = fasciaInput.value;
    console.log(fullName, km, fascia);

    // Calcolo biglietto treno
    var costPerKm = 0.21;
    var ticketPrice = costPerKm * km;
    console.log(ticketPrice);

    if(fascia == "minorenne"){
        console.log("Applica 20% di sconto");
        offer = "Sconto Minorenni";
    } else if (fascia == "over65") {
        console.log("Applica 40% di sconto");
        offer = "Sconto Silver";
    }

    // Seleziona Elementi del biglietto  
    var elName = document.getElementById('nome-passeggero');
    var elSconto = document.getElementById('sconto');
    var elCarrozza = document.getElementById('carrozzza');
    var elCodice = document.getElementById('codice-cp');
    var elTicket = document.getElementById('ticket-price');

    // Genara numero carrozza
    var numberCarrozza = Math.floor(Math.random() * 9 ) + 1 ;
    var codiceCp = Math.floor(Math.random() * (100000 - 90000) ) + 90000;
    // Inserire dati nel biglietto
    elName.innerHTML = fullName;
    elSconto.innerHTML = offer;
    elTicket.innerHTML = "£" + ticketPrice; 
    elCarrozza.innerHTML =  numberCarrozza;
    elCodice.innerHTML = codiceCp;

    //document.getElementById('biglietto').classList.add("visible");


});

btnAnnulla.addEventListener("click", function () {
    // Annulla
    console.log("Annulla operazione");
    
    //document.getElementById('biglietto').classList.remove("visible");
    document.getElementById('biglietto').classList.add("hidden");
    
    
    document.getElementById('full-name').value = "";
    document.getElementById('km').value = "";
    document.getElementById('fascia').value = "";

});

