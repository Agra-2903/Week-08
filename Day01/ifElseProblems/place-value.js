
const prompt = require('prompt-sync')(); // Import prompt-sync for user input

// Function to convert number to place value
function getPlaceValue(num) {
    // Array to map place values
    const placeValues = [
      "Unit", "Ten", "Hundred", "Thousand", "Ten Thousand", "Lakh", "Ten Lakh"
    ];
  
    // Find the index of the place value by counting the number of zeros
    const numString = num.toString();
    const placeIndex = numString.length - 1;
  
    // Check if the input is a valid power of 10
    if (placeIndex >= 0 && placeIndex < placeValues.length) {
      console.log(placeValues[placeIndex]);
    } else {
      console.log("Please enter a valid number (1, 10, 100, 1000, etc.).");
    }
  }
  
  // Read a number from the user (prompt)
  const num = parseInt(prompt("Enter a number (1, 10, 100, 1000, etc.):"));
  
  // Call the function to display the place value
  getPlaceValue(num);
  