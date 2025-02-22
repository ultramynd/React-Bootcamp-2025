/********************************************
 * Group 4 – Loops & Error Handling
 ********************************************/

/* 
Subjective Answers:

1. For Loop vs. While Loop:
   - For loop: Best when the number of iterations is known.
   - While loop: Best when you iterate until a condition is false.

2. try...catch Block:
   - Used to catch and handle errors that occur during execution.

3. finally Block:
   - Executes code after try and catch, regardless of the outcome.
*/

// Coding Solutions:

// 1. For loop printing numbers from 100 to 90 in descending order.
for (let i = 100; i >= 90; i--) {
    console.log(`Number: ${i}`);
  }
  
  // 2. Function findSquare() that returns the square or catches errors.
  const findSquare = (num) => {
    try {
      if (typeof num !== "number") {
        throw new Error("Input must be a number");
      }
      return num * num;
    } catch (error) {
      console.error(`Error: ${error.message}`);
    }
  };
  console.log(`Square of 5: ${findSquare(5)}`);
  console.log(`Square of "five": ${findSquare("five")}`);
  
  // 3. While loop printing numbers from 1 to 10.
  let i = 1;
  while (i <= 10) {
    console.log(`Count: ${i}`);
    i++;
  }
  