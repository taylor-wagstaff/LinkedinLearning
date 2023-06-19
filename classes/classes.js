// JavaScript: Classes
// JavaScript classes explored

// introduced in ES6
// Syntactic sugar over prototypes
// class changes get passed down
// can inheret new properties.


var Car = class {
  constructor(doors, engine, color) {
    this.doors = doors
    this.engine = engine
    this.color = color
  }
}

const cx5 = new Car(4, 'v6', 'grey')

// classes new to be declared first, 
// try to declar varibles first 
// More often than not, we use a class declaration apporach

// you can add methods, attributes, properties.