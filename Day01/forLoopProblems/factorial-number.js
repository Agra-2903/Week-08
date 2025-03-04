
const prompt = require('prompt-sync')(); // Import prompt-sync for user input

// Function to calculate factorial
function factorial(n) {
    if (n < 0) {
      return "Factorial is not defined for negative numbers.";
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }
  
  // Prompt user for input
  const num = parseInt(prompt("Enter a non-negative integer:"));
  
  // Validate input and compute factorial
  if (!isNaN(num) && num >= 0) {
    console.log(`${num}! = ${factorial(num)}`);
  } else {
    console.log("Invalid input! Please enter a non-negative integer.");
  }
  