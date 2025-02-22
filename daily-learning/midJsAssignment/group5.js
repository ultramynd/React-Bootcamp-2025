/********************************************
 * Group 5 – Math Methods & Import/Export
 ********************************************/

/* 
Subjective Answers:

1. Math.random():
   - Generates a random decimal between 0 (inclusive) and 1 (exclusive).

2. Exporting & Importing Functions:
   - Use `export` to share functions from one file and `import` to bring them into another.

3. Named Exports vs. Default Exports:
   - Named exports export multiple items with names; default export exports a single item.
*/

// Coding Solutions:

// 1. Generate a random number between 1 and 100.
const randomNum = Math.floor(Math.random() * 100) + 1;
console.log(`Random number: ${randomNum}`);

// 2. Module Creation: mathUtils.js and import example.
// --- mathUtils.js ---
// export const addNumbers = (a, b) => a + b;

// For this example, we simulate the import in the same file.
const addNumbers = (a, b) => a + b; // Simulated import from mathUtils.js
console.log(`Sum of 3 and 7: ${addNumbers(3, 7)}`);

// 3. Use Math.max() to find the largest number in the array.
const numbersArr = [23, 45, 67, 89, 12];
const maxNumber = Math.max(...numbersArr);
console.log(`Largest number: ${maxNumber}`);
