
const prompt = require('prompt-sync')(); // Import prompt-sync for user input

// Function to find the magic number
function findMagicNumber() {
    let lowerBound = 1;
    let upperBound = 100;
    let guess;
    
    console.log("Think of a number between 1 and 100.");
    
    // Repeat until magic number is found
    while (lowerBound <= upperBound) {
      guess = Math.floor((lowerBound + upperBound) / 2); // Mid-point guess
      let response = prompt(`Is your number greater than ${guess}? (yes/no)`);
  
      if (response.toLowerCase() === "yes") {
        lowerBound = guess + 1; // Narrow down the guess to the upper half
      } else if (response.toLowerCase() === "no") {
        upperBound = guess - 1; // Narrow down the guess to the lower half
      } else {
        console.log("Please answer with 'yes' or 'no'.");
      }
  
      if (lowerBound === upperBound) {
        console.log(`Your magic number is: ${lowerBound}`);
        break;
      }
    }
  }
  
  // Call the function to start
  findMagicNumber();
  