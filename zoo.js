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
        console.log("My naam is " + this.naam + " and im a " + this.sex + " " + this.species);
    }
};


class Bird extends ZooAnimal { 

    constructor(id, type, species, sex, age, naam)  {
        super();
        this.id = id;
        this.type = Bird;
        this.species = species
        this.sex = sex;
        this.age = age;
        this.naam = naam;
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
        console.log("My naam is " + this.naam + " and im a " + this.sex + " " + this.species);
    }
};

class ZooPersonel { 

    constructor(type) {
        this.type = type;
    }
    
    describe() {
        console.log("My naam is " + this.naam + " and im a " + this.sex + " " + this.species);
    }
};

////////////////////////////////// ANIMAL BREEDER \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

function CreateAnimal(id, type, species, sex, age, naam) {

    animalsInWorld[id] = new type(id, type, species, sex, age, naam);
        
};

////////////////////////////////// CODE EXECUTION \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
CreateAnimal(0, Bird, "Gull", "Male", 2, "Bob");
CreateAnimal(1, Bird, "Gull", "Female", 4, "Jessica");
CreateAnimal(2, Bird, "Swallow", "Female", 3, "Tiffany");



for (var an in animalsInWorld)
{
    document.getElementsByClassName("box")[0].innerHTML += an;

};

console.log(animalsInWorld);
console.log(animalsInWorld[0]);


