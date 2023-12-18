class Animal {
    constructor(name){
        this.name = name;
    }

    run() {
        console.log(`${this.name} is running...`)
    }
}

class Dog extends Animal {
    bark() {
        console.log(`${this.name}: Woof.. woof..`)
    }
}

class Cat extends Animal {
    constructor(name, color) {
        super(name);
        this.color = color;
    }

    meow() {
        console.log(`${this.name}: Mewo... meow...`)
    }
}

let cat_1 = new Cat("Shwe War", "Yellow")
new Promise( finish => {finish(cat_1.meow())});


const a = 4;
const b = 2;

// Traditional anonymous function
(function (a, b) {
    return a + b + 100;
  });
  
  // Arrow function
  (a, b) => a + b + 100;
  
  
  // Traditional anonymous function (no parameters)
  (function () {
    return a + b + 100;
  });
  
  // Arrow function (no parameters)
  () => a + b + 100;
  

console.log((() => 100)())