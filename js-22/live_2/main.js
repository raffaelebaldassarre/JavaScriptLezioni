/* Creiamo una pagina con all’interno un titolo di colore rosso. 
Al click di un bottone il titolo diventerà blu. */

let app = new Vue({
    el: "#app",
    data: {
        classColor: "red"
    },
    methods: {

        changeColor(){

            if(this.classColor === "red") {
                return this.classColor = "blue"
            }
            return this.classColor = "red"

        }

    }
});