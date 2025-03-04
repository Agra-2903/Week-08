
const prompt = require('prompt-sync')(); // Import prompt-sync for user input

// Function to convert digit to word
function numberToWord(num) {
    // Object to map digits to words
    const numberWords = {
      0: "Zero",
      1: "One",
      2: "Two",
      3: "Three",
      4: "Four",
      5: "Five",
      6: "Six",
      7: "Seven",
      8: "Eight",
      9: "Nine"
    };
  
    // Print the corresponding word for the number
    console.log(numberWords[num]);
  }
  
  // Read a single-digit number from the user (prompt)
  const num = parseInt(prompt("Enter a single digit number:"));
  
  // Check if the input is a valid single-digit number
  if (num >= 0 && num <= 9) {
    numberToWord(num);
  } else {
    console.log("Please enter a valid single-digit number.");
  }
  