// class Car {
//   // attributes:
//   constructor(doors, engine, color) {
//     this.doors = doors
//     this.engine = engine
//     this.color = color
//   }

//   // method
//   carStats() {
//     return `this car has ${this.doors} doors, a ${this.engine} and ${this.color}`
//   }
// }

// // creating an instance of the car
// const cx5 = new Car(4, 'v6', 'grey')
// // shows entire object
// console.log('cx5', cx5)
// // access the method inside the class
// console.log(cx5.carStats())

// classes are function themselves,
//  functions || classes
// Hoisted    || Not hosited
// Can be overwritten || cant be overwritten

// use classes when you want a blueprint
// in react, stateless or a stateful component like a fucntion or a class

// Hoisting
// function will work anywhere, hoisted to the top
// classes must be declared first.
// classes are auto in strict mode

let mixin = {
  madeIn() {
    console.log('this car was made this year')
  },
}

let carMixin = {
  __proto__: mixin,

  madeIn() {
    super.madeIn()
  },
}

class Car {
  // attributes:
  constructor(doors, engine, color) {
    this.doors = doors
    this.engine = engine
    this.color = color
  }

  // method
  carStats() {
    return `this car has ${this.doors} doors, a ${this.engine} and ${this.color}`
  }
  // can only access this throught the class car
  static totalDoors(car1, car2) {
    const doors1 = car1.doors
    const doors2 = car2.doors

    return doors1 + doors2
  }
}

// creating an instance of the car
const civic = new Car(3, 'v4', 'blue')

// shows entire object

// console.log('civic', civic)

// access the method inside the class via the new instance
// console.log(cx5.carStats())
// utiliy functions that pass to the class, but not to the actual instance to thst fclass
// tools outside of the inside of that class.
// console.log(Car.totalDoors(cx5, civic))

// classes has inbuilt method already offers

// one will generated for you, one constructor per class,
//

// extends extends the class car
class SUV extends Car {
  constructor(doors, engine, color, brand, carStats) {
    super(doors, engine, color, carStats)
    this.brand = 'No brand yet'

    // not have to a pass to it
    this.wheels = 4
    this.ac = true
  }

  // getters and setters were introduced to allow us
  // to set and get properties without accessing them directly
  // allows flexibiity, can manipulate properties before returning
  // how we can make them private or protected.
  get getBrand() {
    return this.brand
  }

  //sets this to private
  set setBrand(newBrand) {
    this._brand = newBrand
  }

  myBrand() {
    return console.log(`this SUV is a ${this.brand}`)
  }
}

const cx5 = new SUV(4, 'v6', 'Grey')

console.log(cx5.getBrand)
cx5.setBrand = 'Mazda'

// console.log(cx5);
// console.log(cx5.myBrand())

// favor composition over inheriance in this instance,
// Mix-ins, frowned upon and can add complexity.
