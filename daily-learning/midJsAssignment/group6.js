/********************************************
 * Group 6 – Advanced Objects, Functions, and Loops
 ********************************************/

/* 
Subjective Answers:

1. Method vs. Regular Function:
   - A method is a function that is a property of an object and can use "this".
   - A regular function is standalone.

2. for...in vs. for...of:
   - for...in loops over an object's keys.
   - for...of loops over the values of an iterable (like arrays).

3. Closures:
   - A closure is when a function retains access to variables from its outer scope even after that outer function has finished.
*/

// Coding Solutions:

// 1. Create a student object with an averageScore() method.
const student = {
    name: "John",
    age: 21,
    scores: [80, 90, 70, 85],
    averageScore() {
      const total = this.scores.reduce((sum, score) => sum + score, 0);
      return total / this.scores.length;
    }
  };
  console.log(`Average score of ${student.name}: ${student.averageScore()}`);
  
  // 2. Write the fizzBuzz() function.
  const fizzBuzz = () => {
    for (let i = 1; i <= 20; i++) {
      let output = "";
      if (i % 3 === 0) output += "Fizz";
      if (i % 5 === 0) output += "Buzz";
      console.log(output || i);
    }
  };
  fizzBuzz();
  
  // 3. Create a calculator object with basic arithmetic methods.
  const calculator = {
    add(a, b) {
      return a + b;
    },
    subtract(a, b) {
      return a - b;
    },
    multiply(a, b) {
      return a * b;
    },
    divide(a, b) {
      if (b === 0) {
        console.error("Division by zero error");
        return null;
      }
      return a / b;
    }
  };
  console.log(`Add (5 + 3): ${calculator.add(5, 3)}`);
  console.log(`Subtract (5 - 3): ${calculator.subtract(5, 3)}`);
  console.log(`Multiply (5 * 3): ${calculator.multiply(5, 3)}`);
  console.log(`Divide (5 / 3): ${calculator.divide(5, 3)}`);
  