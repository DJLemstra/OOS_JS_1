////////////////////////// DEFINING GLOBAL VARIABLES  \\\\\\\\\\\\\\\\\\\\\\\\\\\\

let animalsInWorld = [];


///////////////////////////// DEFINING ANIMALS  \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

function ZooAnimals() { 

}

ZooAnimals.prototype = {
    constructor: ZooAnimals,

    eat: function() {
        console.log("nom nom nom");
    },

    die: function() {
        console.log("I died?!?");
    },

    describe: function() {
        console.log("My name is " + this.name + " and im a " + this.sex + " " + this.species);
    }
};

function Birds(uid, type, species, sex, age, name) { 

    this.uid = uid;
    this.type = Birds;
    this.species = species
    this.sex = sex;
    this.age = age;
    this.name = name;
    this.numLegs = 2;
    this.canFly = true;
          
};

Birds.prototype = Object.create(ZooAnimals.prototype);
Birds.prototype.constructor = Birds;

//for (let animal in animalsInWorld) {...};


function Mamals() { };

Mamals.prototype = Object.create(ZooAnimals.prototype);
Mamals.prototype.constructor = Mamals;


function Fish() { };

Fish.prototype = Object.create(ZooAnimals.prototype);
Fish.prototype.constructor = Fish;


function Reptiles() { };

Reptiles.prototype = Object.create(ZooAnimals.prototype);
Reptiles.prototype.constructor = Reptiles;


//console.log(Birds.constructor === ZooAnimals); // => true

 
function ZooObjects() { }

ZooObjects.prototype = {
    constructor: ZooObjects,

    describe: function() {
        console.log("My name is " + this.name + " and im a " + this.sex + " " + this.species);
    }
};

function ZooPersonel() { }

ZooPersonel.prototype = {
    constructor: ZooPersonel,

    describe: function() {
        console.log("My name is " + this.name + " and im a " + this.sex + " " + this.species);
    }
};



////////////////////////////////// CODE EXECUTION \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
CreateAnimal("1", Birds, "Gull", "Male", "2", "Bob");
CreateAnimal("2", Birds, "Gull", "Female", "4", "Jessica");
CreateAnimal("3", Birds, "Swallow", "Female", "3", "Tiffany");

function CreateAnimal(uid, type, species, sex, age, name) {

animalsInWorld[uid, type, species, sex, age, name] = new type(uid, species, sex, age, name);

};

var newArray = animalsInWorld.map( function( el ){ 
    return el.name;

   });

console.log(animalsInWorld);
//animalsInWorld.toString();
//console.log(animalsInWorld);


for (var an in animalsInWorld)
{
    document.getElementsByClassName("box")[0].innerHTML += an;
    console.log(an);
}