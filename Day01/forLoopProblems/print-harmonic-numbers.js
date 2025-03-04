
const prompt = require('prompt-sync')(); // Import prompt-sync for user input

// Prompt user for input
const n = parseInt(prompt("Enter a positive integer (n):"));

// Function to calculate the nth harmonic number
function harmonicNumber(n) {
  if (isNaN(n) || n <= 0) {
    console.log("Please enter a valid positive integer.");
    return;
  }

  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += 1 / i;
  }

  console.log(`Harmonic Number H(${n}) = ${sum.toFixed(6)}`);
}

// Call function with user input
harmonicNumber(n);
