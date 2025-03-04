
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
  
  // Function to print prime numbers in a given range
  function printPrimeInRange(start, end) {
    if (start > end) {
      console.log("Invalid range! Start should be less than or equal to End.");
      return;
    }
  
    console.log(`Prime numbers between ${start} and ${end}:`);
    let foundPrime = false;
  
    for (let i = start; i <= end; i++) {
      if (isPrime(i)) {
        console.log(i);
        foundPrime = true;
      }
    }
  
    if (!foundPrime) {
      console.log("No prime numbers found in this range.");
    }
  }
  
  // Prompt user for range input
  const start = parseInt(prompt("Enter the start of the range:"));
  const end = parseInt(prompt("Enter the end of the range:"));
  
  // Validate input and print primes
  if (!isNaN(start) && !isNaN(end) && start >= 0 && end >= 0) {
    printPrimeInRange(start, end);
  } else {
    console.log("Invalid input! Please enter valid positive numbers.");
  }
  