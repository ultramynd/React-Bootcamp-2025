// Time Greeting Function
function timeGreeting(userTime) { 
    let greetingMessage; 

    if (userTime >= 6 && userTime < 12) {
        greetingMessage = "Rise and shine! Good morning! ☀️";
    } 
    else if (userTime >= 12 && userTime < 18) {
        greetingMessage = "Afternoon vibes! 🌤️";
    } 
    else if (userTime >= 18 && userTime < 24) {
        greetingMessage = "Evening relaxation time! 🌙";
    } 
    else {
        greetingMessage = "It's late! Get some rest! 😴";
    }
    return greetingMessage;
}

// Number Check Function
function checkNumber(num) {
    if (num > 0) {
        return "Positive";
    } else if (num < 0) {
        return "Negative";
    } else {
        return "Zero";
    }
}

// Test Cases (Console logs)
console.log("Time Greeting Tests:");
console.log("Test 1 (6 AM):", timeGreeting(6)); 
console.log("Test 2 (15:00):", timeGreeting(15)); 
console.log("Test 3 (23:30):", timeGreeting(23)); 
console.log("Test 4 (3 AM):", timeGreeting(3));

console.log("\nNumber Check Tests:");
console.log(checkNumber(5));   
console.log(checkNumber(-3)); 
console.log(checkNumber(0));