/*
  Explanation of var, let, and const using my style of writing:

  -----------------------
  var:
  -----------------------
  - "var" declarations are function-scoped.
  - If a variable is declared with "var" outside any function, it becomes globally scoped and is available throughout the window.
  - When declared within a function, "var" can only be accessed inside that function.
  
  Example:
*/

// Global scope with var
var a = 10;
console.log("a:", a); // Output: 10

function exampleVar() {
  // Although declared inside an if-block, var is not block-scoped.
  if (true) {
    var b = 20;
  }
  console.log("b:", b); // Output: 20 (accessible anywhere within the function)
}
exampleVar();

/*
  -----------------------
  let:
  -----------------------
  - "let" allows you to declare variables that are block-scoped.
  - A block is any chunk of code enclosed by curly braces {}.
  - Variables declared with "let" are only available within the block where they are defined.
  
  Example:
*/

// Global scope with let (in a block)
{
  let x = 30;
  console.log("x:", x); // Output: 30
}

function exampleLet() {
  if (true) {
    let y = 40; // y is declared inside this block
    console.log("y:", y); // Output: 40
  }
  // Uncommenting the next line will cause an error because y is not accessible outside the block:
  // console.log(y);
}
exampleLet();

/*
  -----------------------
  const:
  -----------------------
  - "const" also creates block-scoped variables.
  - A variable declared with "const" must be assigned a value immediately, and that value cannot be changed later.
  - Like "let", it is only available within the block where it is defined.
  
  Example:
*/

// Global scope with const
const PI = 3.14;
console.log("PI:", PI); // Output: 3.14

function exampleConst() {
  if (true) {
    const Z = 100; // Z is declared inside this block
    console.log("Z:", Z); // Output: 100
  }
  // Uncommenting the next line will cause an error because Z is not accessible outside the block:
  // console.log(Z);
}
exampleConst();

// Uncommenting the following line would result in an error because you cannot reassign a const variable:
// PI = 3.14159; // Error: Assignment to constant variable.


/*====================================*/


//2. Primitive Data Types in JavaScript:
   //- string (e.g., "hello")
   //- number (e.g., 42)
   //- boolean (e.g., true)
   //- undefined (e.g., let a;)
   //- null (e.g., let b = null)
   //- symbol (e.g., Symbol("id"))
   //- bigint (e.g., 9007199254740991n)


/*====================================*/


//3. .map() vs. .forEach():
   //- `.map()` creates and returns a new array by applying a function to each element.
  // - `.forEach()` iterates over the array for side effects and does not return a new array.

/*====================================*/

//Solutions:
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
