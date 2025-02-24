// ==============================================
// Group 2 – Objects & Object Methods
// ==============================================

/*
Subjective Question 1: What is the 'this' keyword in JavaScript?

Answer: 
The 'this' keyword is the execution context where it's used.
  - In object methods, it refers to the object itself
  - In regular functions, it refers to the global object
  - In arrow functions, it inherits from surrounding lexical context
*/

// Example for 'this' keyword and explanations 
const person = {
  name: "John",
  greet: function() {
    // 'this' is the person object
    console.log(`1. Hello, I'm ${this.name}`);
  }
};
person.greet();

/*
Subjective Question 2: Differentiate between dot notation and bracket notation

Answer:
Dot Notation:
- Uses object.property syntax
- Property names must be valid identifiers
Bracket Notation:
- Uses object['property'] syntax
- Can use any string as property name
- Allows dynamic property access
*/

// Let's create an object called 'person' with a few properties.
// Sorry I had to do all these, I'm learning in the process :)
const person = {
  name: "Adamu",              // 'name' is a simple property (valid identifier)
  age: 15,                    // 'age' is another simple property
  "favorite color": "blue"    // 'favorite color' has a space, so it's not a valid identifier for dot notation
};

// === Using Dot Notation ===
// Dot notation is the simplest way to access properties with names that are valid identifiers.
// Valid identifiers are names without spaces or special characters.
console.log("Using dot notation:");
console.log("Name:", person.name); // Access the 'name' property using dot notation.
console.log("Age:", person.age);   // Access the 'age' property using dot notation.

// If you try to use dot notation for a property with a space, it won't work:
// console.log(person.favorite color); // I guess this will cause an error or something, idk

// === Using Bracket Notation ===
// Bracket notation lets you access properties using a string.
// It is especially useful when property names contain spaces or special characters.
console.log("\nUsing bracket notation:");
console.log("Favorite Color:", person["favorite color"]); // Access 'favorite color' using bracket notation.

// === Dynamic Property Access ===
// Bracket notation also allows you to use a variable to specify the property name.
const propertyKey = "name";
console.log("\nAccessing property dynamically with bracket notation:");
console.log("Name:", person[propertyKey]); // This is the same as person.name

/* 
To surmarize my jargon...
- Dot Notation:
  - Simple and clean.
  - Use when property names are simple (e.g., no spaces or special characters).

- Bracket Notation:
  - More flexible.
  - Use when property names have spaces, special characters, or when you need dynamic access.
*/


// Dot vs Bracket notation example
const exampleDemo = {
  "full name": "Alice Smith" // Property with space
};

console.log("\n2. Dot vs Bracket:");
console.log("Bracket:", exampleDemo['full name']); // Works
// console.log(notationDemo.full name); // Would throw error

/*
Subjective Question 3: What is an object method?

Answer:
A function defined as an object property that can perform actions
using the object's data. Methods are called using object.method() syntax.
*/

// Object method example
const calculator = {
  add: function(a, b) {
    return a + b;
  }
};
console.log("\n3. ObjectMethod:");
console.log("2 + 3 =", calculator.add(2, 3));

// ==============================================
// Coding Questions
// ==============================================

// Coding Question 1: Create person object with greet method
const person = {
  name: "Pablo Wire Wire",
  age: 30,
  gender: "👨🏿‍🚒 male",
  greet: function() {
    console.log(`\n4. Greet Method:`);
    console.log(`Hello! My name is ${this.name}, I'm ${this.age} years old, and ${this.gender} :)`);
  }
};
person.greet();

// Coding Question 2: Create car object with getCarInfo method
const car = {
  brand: "Honda",
  model: "Civic",
  year: 2021,
  getCarInfo: function() {
    return `\n5. Car info: This is a ${this.year} made by ${this.brand}, Year ${this.model} model`;
  }
};

// Coding Question 3: Add color property with bracket notation
car['color'] = "blue";

// Test the car object
console.log(car.getCarInfo());
console.log("\n6. Added color property:");
console.log("Car color:", car.color);

