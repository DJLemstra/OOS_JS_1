////////////////////////// DEFINING GLOBAL VARIABLES  \\\\\\\\\\\\\\\\\\\\\\\\\\\\

let animalsInWorld = [];


///////////////////////////// DEFINING ANIMALS  \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

class ZooAnimal { 

    constructor(type)  {
        this.type = type;
    
    }

    eat() {
        console.log("nom nom nom");
    }

    die() {
        console.log("I died?!?");
    }

    describe() {
        console.log("My name is " + this.name + " and im a " + this.sex + " " + this.species);
    }
};


class Bird extends ZooAnimal { 

    constructor(id, type, species, sex, age, name)  {
        super();
        this.id = id;
        this.type = Bird;
        this.species = species
        this.sex = sex;
        this.age = age;
        this.name = name;
        this.numLegs = 2;
        this.canFly = true;
    }


          
};

class Mamals { };

class Fish { };

class Reptiles { };

class ZooObjects { 

    constructor(type) {
        this.type = type;
    };
    
    describe() {
        console.log("My name is " + this.name + " and im a " + this.sex + " " + this.species);
    }
};

class ZooPersonel { 

    constructor(type) {
        this.type = type;
    }
    
    describe() {
        console.log("My name is " + this.name + " and im a " + this.sex + " " + this.species);
    }
};

function CreateAnimal(id, type, species, sex, age, name) {

    animalsInWorld[id, type, species, sex, age, name] = new type(id, type, species, sex, age, name);
    
    
    };

////////////////////////////////// CODE EXECUTION \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
CreateAnimal(1, Bird, "Gull", "Male", 2, "Bob");
CreateAnimal(2, Bird, "Gull", "Female", 4, "Jessica");
CreateAnimal(33, Bird, "Swallow", "Female", 3, "Tiffany");



for (var an in animalsInWorld)
{
    document.getElementsByClassName("box")[0].innerHTML += an;
 //   console.log(an);
var nameList = ("animalsInWorld." + an + ".id"); /////waarom werkt dit niet?
  console.log(nameList);
};

console.log(animalsInWorld);
//console.log(animalsInWorld.Bird.sex);


