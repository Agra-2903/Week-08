
const prompt = require('prompt-sync')(); // Import prompt-sync for user input

// Prompt user for input
const n = parseInt(prompt("Enter a non-negative integer (n):"));

// Function to print powers of 2 up to 2^n
function printPowersOfTwo(n) {
  if (isNaN(n) || n < 0) {
    console.log("Please enter a valid non-negative integer.");
    return;
  }

  console.log(`Powers of 2 up to 2^${n}:`);
  for (let i = 0; i <= n; i++) {
    console.log(`2^${i} = ${Math.pow(2, i)}`);
  }
}

// Call function with user input
printPowersOfTwo(n);
