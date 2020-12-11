$(function () {
  // Creiamo array di oggetti per le icone con le seguenti proprieta: name, prefix, type, family 
  const icons = [
      {name: 'user-secret', prefix: "fa-", family: "fas", type: "user"},
      {name: 'cat', prefix: "fa-", family: "fas", type: "animal"},
      {name: 'dog', prefix: "fa-", family: "fas", type: "animal"},
      {name: 'apple-alt', prefix: "fa-", family: "fas", type: "vegetable"},
      {name: 'carrot', prefix: "fa-", family: "fas", type: "vegetable"},
      {name: 'user-ninja', prefix: "fa-", family: "fas", type: "user"},
      {name: 'cat', prefix: "fa-", family: "fas", type: "animal"},
      {name: 'dog', prefix: "fa-", family: "fas", type: "animal"},
      {name: 'apple-alt', prefix: "fa-", family: "fas", type: "vegetable"},
      {name: 'carrot', prefix: "fa-", family: "fas", type: "vegetable"},
      {name: 'user-ninja', prefix: "fa-", family: "fas", type: "user"}
    ]  
  // Semezioniamo il container icons
    const container = document.querySelector('.icons');

  //inseriamo le icone nel container (possiamo creare una funzione tipo print() per inserire gli elementi e richiamarla qui)
    printIcons(container, icons)


});


/* ---- FUNCTIONS ----*/
// Creiamo una funzione per iterare nell'array e che appenda al container le icone.
// tip: possiamo usare un ciclo foreach qui e destrutturare gli le proprieta degli elementi di un array

/**
 * Stampa icone in un dato container
 * @param { Element } container Il tag html
 * @param { array } iconsArray un array di icone
 * */ 
function printIcons(container, iconsArray) {

    iconsArray.forEach((icon) => {
      /* Senza destructuring 
        const name = icon.name;
        const prefix = icon.prefix;
        const family = icon.family; 
        */
       // con object destructuring
        const {name, prefix, family} = icon;

        // tip: il template literal ci puo aiutare con il markup
        const markup = `
            <div>
                <i class="${family} ${prefix + name}"></i>
                <h5>${name}</h5>
            </div>
        `;
        container.insertAdjacentHTML('beforeend', markup);
    });

}