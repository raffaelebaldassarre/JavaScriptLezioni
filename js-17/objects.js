/* Objects Vs Arrays */

// Objects syntax (object literal)

/* var persona = {
    firstName : "Alessio",
    lastName : "Di Giacomo",
    nationality: "Italian",
    age:  25,
    dob:  2020,
    gender: "Male",
    eyeColor: "Brown",
    job: "sudent",
    favMovies: ["ritorno al futuro", "inception", "seven"]
}
console.log(persona); */


// Accedere alle proprietá di un Oggetto(dot notation e sintassi parentesi quadre [] )

// Utilizzo dot notation
/* console.log(persona.firstName, persona.job, persona.age);
console.log(persona['firstName'], persona['job'], persona['age']); */

/* var name = "Name"; */
//console.log(persona."first" + name);
/* console.log("first" + name);
console.log(persona["first" + name]); */

// Quando usare la dot.notation e quando le parentesi quadre


// For In Loop
/* for (var prop in persona) {
    console.log(persona[prop]);
} */


// Add properties
/* persona.precedenti = false;
persona["piatto"] = "Pizza";

console.log(persona); */


// accedere array element in object
/* console.log(persona.favMovies[0]);
persona.favMovies.push("Lost");
console.log(persona);


persona.job = [persona.job, "programmatore"];
console.log(persona); */
// Multi dimentional array


var product = {
    name : "",
    price : 19.99,
    desc : "lorem lorem lorem",
    sku : 1234454,
    qty: 10,
    color: ["Red", "blue", "green"]
}


/* var products =  [
    {
    name : "destop pc",
    price : 19.99,
    desc : "lorem lorem lorem",
    sku : 2324,
    qty: 10,
    color: ["Red", "blue", "green"]
    },
    {
    name : "laptop",
    price : 19.99,
    desc : "lorem lorem lorem",
    sku : 44,
    qty: 10,
    color: ["Red", "blue", "green"]
    },
    {
    name : "mouse",
    price : 19.99,
    desc : "lorem lorem lorem",
    sku : 454,
    qty: 10,
    color: ["Red", "blue", "green"]
    },
    {
    name : "keybord",
    price : 19.99,
    desc : "lorem lorem lorem",
    sku : 123,
    qty: 10,
    color: ["Red", "blue", "green"]
    }
]
console.log(products); */

// Objects with objects
var products =  {
    "2324": {
    name : "destop pc",
    price : 19.99,
    desc : "lorem lorem lorem",
    sku : 2324,
    qty: 10,
    color: ["Red", "blue", "green"]
    },
    44:{
    name : "laptop",
    price : 19.99,
    desc : "lorem lorem lorem",
    sku : 44,
    qty: 10,
    color: ["Red", "blue", "green"]
    },
    "454":{
    name : "mouse",
    price : 19.99,
    desc : "lorem lorem lorem",
    sku : 454,
    qty: 10,
    color: ["Red", "blue", "green"]
    },
    "123": {
    name : "keybord",
    price : 19.99,
    desc : "lorem lorem lorem",
    sku : 123,
    qty: 10,
    color: ["Red", "blue", "green"]
    }
}
console.log(products);

for (var sku in products) {
    var productName = products[sku].name;
    var productPrice = products[sku].price;
    var productDesc = products[sku].desc;
    
    var productMarkup = 
    `
        <div class="card">
            <h2>${productName}</h2>
            <p>
                ${productPrice}, ${productDesc}
            </p>

        </div>
        `
    document.getElementById('products').insertAdjacentHTML('beforeend', productMarkup )


}


/* Bonus */
// Object methods [bonus]
var Persona = {
    name: "Fabio",
    calcAge: function () {
        return 2020 - 1980
    }
}

// How to access methods [bonus]

console.log(Persona.calcAge())



class Person {
    constructor(name, age, job) {
        this.name = name,
        this.age = age,
        this.job = job
    }
}
var alex = new Person("Alessando", 40, "full-stack dev");
var romina = new Person("Romina", 25, "full-stack dev");

var studenti = [
    new Person("Alessando", 40, "full-stack dev"),
    new Person("Alessando", 40, "full-stack dev"),
    new Person("Alessando", 40, "full-stack dev"),
    new Person("Alessando", 40, "full-stack dev"),
]

/* OOP Introduction (se c'é tempo) 
***********************************/

// trova i nomi (oggetti nel mondo reale)

// definire una classe [ES6]

// class constructor

// instanciating a new object

