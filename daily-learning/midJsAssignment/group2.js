/********************************************
 * Group 2 – Objects & Object Methods
 ********************************************/

/* 
Subjective Answers:

1. The "this" keyword:
   - Refers to the current context. In an object method, it refers to the object itself.

2. Dot notation vs. Bracket notation:
   - Dot notation is used when the property name is a valid identifier (e.g., obj.name).
   - Bracket notation is used for dynamic property names or property names with spaces (e.g., obj["first name"]).

3. Object Method:
   - A function defined as a property of an object.
*/

// Coding Solutions:

// 1. Create an object "person" with properties and a greet() method.
const person = {
    name: "Alice",
    age: 28,
    gender: "Female",
    greet() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  };
  person.greet();
  
  // 2. Create an object "car" with properties and a getCarInfo() method.
  const car = {
    brand: "Toyota",
    model: "Camry",
    year: 2020,
    getCarInfo() {
      return `This car is a ${this.year} ${this.brand} ${this.model}.`;
    }
  };
  console.log(car.getCarInfo());
  
  // 3. Add a new property "color" to the car object using bracket notation.
  car["color"] = "red";
  console.log(`Car color: ${car.color}`);
  