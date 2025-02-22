/********************************************
 * Group 1 – JavaScript Basics & Arrays
 ********************************************/

/* 
Subjective Answers:

1. let, const, and var:
   - `var` is function scoped, can be re-declared, and is hoisted.
   - `let` is block scoped and cannot be re-declared in the same block.
   - `const` is block scoped, cannot be re-assigned, and must be initialized.

2. Primitive Data Types in JavaScript:
   - string (e.g., "hello")
   - number (e.g., 42)
   - boolean (e.g., true)
   - undefined (e.g., let a;)
   - null (e.g., let b = null)
   - symbol (e.g., Symbol("id"))
   - bigint (e.g., 9007199254740991n)

3. .map() vs. .forEach():
   - `.map()` creates and returns a new array by applying a function to each element.
   - `.forEach()` iterates over the array for side effects and does not return a new array.
*/

// Coding Solutions:

// 1. Create an array of 10 fruits and use .map() to return an array of their lengths.
const fruits = [
    "apple",
    "banana",
    "orange",
    "kiwi",
    "mango",
    "grape",
    "pineapple",
    "strawberry",
    "blueberry",
    "pear"
  ];
  const fruitLengths = fruits.map(fruit => fruit.length);
  console.log(`Fruit lengths: ${fruitLengths}`);
  
  // 2. Use a for...of loop to print all numbers from 1 to 20.
  const numbersArray = Array.from({ length: 20 }, (_, i) => i + 1);
  for (const num of numbersArray) {
    console.log(`Number: ${num}`);
  }
  
  // 3. Create an array of numbers and use .filter() to return only the even numbers.
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const evenNumbers = numbers.filter(num => num % 2 === 0);
  console.log(`Even numbers: ${evenNumbers}`);
  