
const prompt = require('prompt-sync')(); // Import prompt-sync for user input

// Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  // Prompt user for input
  const num = parseInt(prompt("Enter a number:"));
  
  // Check if input is valid and determine if it's prime
  if (!isNaN(num)) {
    if (isPrime(num)) {
      console.log(`${num} is a prime number.`);
    } else {
      console.log(`${num} is not a prime number.`);
    }
  } else {
    console.log("Invalid input! Please enter a valid number.");
  }
  