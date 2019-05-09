function ZooAnimals() { }

ZooAnimals.prototype = {
    constructor: ZooAnimals,

    eat: function() {
        console.log("nom nom nom");
      },

    die: function() {
        console.log("I died?!?");
    },

    describe: function() {
        console.log("My name is " + this.name + " and im a " + this.prototype);
    }
};
  
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

let Birds = Object.create(ZooAnimals.prototype);
let Mamals = Object.create(ZooAnimals.prototype);
let Fish = Object.create(ZooAnimals.prototype);
let Reptiles = Object.create(ZooAnimals.prototype);

Birds.prototype = Object.create(ZooAnimals.prototype);

Birds.eat();