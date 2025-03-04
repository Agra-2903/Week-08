
const prompt = require('prompt-sync')(); // Import prompt-sync for user input

// Function to find prime factors of a number
function primeFactorization(N) {
    if (N <= 1) {
      console.log("Enter a number greater than 1.");
      return;
    }
  
    console.log(`Prime factors of ${N}:`);
  
    // Step 1: Divide N by 2 until it becomes odd
    while (N % 2 === 0) {
      console.log(2);
      N = N / 2;
    }
  
    // Step 2: Check for odd factors from 3 to sqrt(N)
    for (let i = 3; i * i <= N; i += 2) {
      while (N % i === 0) {
        console.log(i);
        N = N / i;
      }
    }
  
    // Step 3: If N is still greater than 2, it's a prime number
    if (N > 2) {
      console.log(N);
    }
  }
  
  // Prompt user for input
  const N = parseInt(prompt("Enter a number to find its prime factors:"));
  
  // Validate input and compute prime factors
  if (!isNaN(N) && N > 1) {
    primeFactorization(N);
  } else {
    console.log("Invalid input! Please enter a number greater than 1.");
  }
  