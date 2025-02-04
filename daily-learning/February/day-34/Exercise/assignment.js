//1
// Time Greeting 
function timeGreeting(userTime) { 
    let greetingMessage; 

    if (userTime >= 6 && userTime < 12) {
        greetingMessage = "Good morning! ☀️";
    } 
    else if (userTime >= 12 && userTime < 18) {
        greetingMessage = "Good afternoon! 🌤️";
    } 
    else if (userTime >= 18 && userTime < 24) {
        greetingMessage = "Good Evening! 🌙";
    } 
    else {
        greetingMessage = "It's nighttime! 😴";
    }
    return greetingMessage;
}


//2
// Check Number Function
function checkNumber(num) {
    if (num > 0) {
        return "Positive";
    } else if (num < 0) {
        return "Negative";
    } else {
        return "Zero";
    }
}





console.log("Time Greeting Tests:");
console.log("Test 1 (6 AM):", timeGreeting(6)); 
console.log("Test 2 (15:00):", timeGreeting(15)); 
console.log("Test 3 (23:30):", timeGreeting(23)); 
console.log("Test 4 (3 AM):", timeGreeting(3));
