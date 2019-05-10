////////////////////////// DEFINING GLOBAL VARIABLES  \\\\\\\\\\\\\\\\\\\\\\\\\\\\

let animalsInWorld = Object.create(null);

///////////////////////////// DEFINING ANIMALS  \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

class ZooAnimals { 

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

class Birds { 

    constructor(uid, type, species, sex, age, name)  {
        this.uid = uid;
        this.type = type;
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

function CreateAnimal(uid,  type, species, sex, age, name) {

    animalsInWorld[uid, type, species, sex, age, name] = new type(uid, type, species, sex, age, name);
    
    
    };

////////////////////////////////// CODE EXECUTION \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
CreateAnimal(1, Birds, "Gull", "Male", 2, "Bob");
CreateAnimal(2, Birds, "Gull", "Female", 4, "Jessica");
CreateAnimal(33, Birds, "Swallow", "Female", 3, "Tiffany");



for (var an in animalsInWorld)
{
    document.getElementsByClassName("box")[0].innerHTML += an;
 //   console.log(an);
 var nameList = ("animalsInWorld." + an + ".uid");
    console.log(nameList);
};

console.log(animalsInWorld);
console.log(animalsInWorld.Bob.sex);

