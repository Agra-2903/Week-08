
const prompt = require('prompt-sync')(); // Import prompt-sync for user input

// Prompt user for input
const n = parseInt(prompt("Enter a non-negative integer (n):"));

// Function to print powers of 2 using while loop
function printPowersOfTwo(n) {
  if (isNaN(n) || n < 0) {
    console.log("Please enter a valid non-negative integer.");
    return;
  }

  console.log(`Powers of 2 up to 2^${n}, stopping at 256:`);

  let i = 0;
  let power = 1; // 2^0 = 1

  while (i <= n && power <= 256) {
    console.log(`2^${i} = ${power}`);
    power *= 2; // Next power of 2
    i++;
  }
}

// Call function with user input
printPowersOfTwo(n);
