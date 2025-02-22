/********************************************
 * Group 3 – Functions & Conditional Statements
 ********************************************/

/* 
Subjective Answers:

1. Function Declaration vs. Function Expression:
   - Function Declaration: Uses the `function` keyword; hoisted.
   - Function Expression: Assigned to a variable; not hoisted.

2. Arrow Functions & "this":
   - Arrow functions do not have their own "this" and inherit it from the surrounding context.

3. Switch Statement:
   - A control structure that evaluates an expression and executes code based on matching cases.
*/

// Coding Solutions:

// 1. Function isEven() that returns "Even" or "Odd".
const isEven = (num) => {
    return num % 2 === 0 ? "Even" : "Odd";
  };
  console.log(`4 is ${isEven(4)}`);
  console.log(`7 is ${isEven(7)}`);
  
  // 2. Function gradeCalculator() that returns a grade based on score.
  const gradeCalculator = (score) => {
    if (score >= 90) return "A";
    else if (score >= 80) return "B";
    else if (score >= 70) return "C";
    else return "F";
  };
  console.log(`Score 95: Grade ${gradeCalculator(95)}`);
  console.log(`Score 85: Grade ${gradeCalculator(85)}`);
  console.log(`Score 75: Grade ${gradeCalculator(75)}`);
  console.log(`Score 65: Grade ${gradeCalculator(65)}`);
  
  // 3. Function dayOfWeek() using a switch statement.
  const dayOfWeek = (num) => {
    switch (num) {
      case 1:
        return "Monday";
      case 2:
        return "Tuesday";
      case 3:
        return "Wednesday";
      case 4:
        return "Thursday";
      case 5:
        return "Friday";
      case 6:
        return "Saturday";
      case 7:
        return "Sunday";
      default:
        return "Invalid day";
    }
  };
  console.log(`Day 3: ${dayOfWeek(3)}`);
  console.log(`Day 8: ${dayOfWeek(8)}`);
  