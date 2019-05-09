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

function Birds(species, sex) { 

    this.species = species
    this.sex = sex;
    this.numLegs = 2;
    this.canFly = true;
          
};

Birds.prototype = Object.create(ZooAnimals.prototype);
Birds.prototype.constructor = Birds;


let Gull1 = new Birds("gull", "male");
let Gull2 = new Birds("gull", "female");

let Swallow1 = new Birds("swallow", "female");



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
        console.log("My name is " + this.name + " and im a " + this.prototype);
    }
};

function ZooPersonel() { }

ZooPersonel.prototype = {
    constructor: ZooPersonel,

    describe: function() {
        console.log("My name is " + this.name + " and im a " + this.prototype);
    }
};



Gull1.eat();
Gull1.describe();


let ownProps = [];

for (let property in Gull1) {
  if(Gull1.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}

console.log(ownProps); // prints [ "name", "numLegs" ]


