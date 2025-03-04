
const prompt = require('prompt-sync')(); // Import prompt-sync for user input

// Function to convert digit to word using switch case
function numberToWord(num) {
    switch (num) {
      case 0:
        console.log("Zero");
        break;
      case 1:
        console.log("One");
        break;
      case 2:
        console.log("Two");
        break;
      case 3:
        console.log("Three");
        break;
      case 4:
        console.log("Four");
        break;
      case 5:
        console.log("Five");
        break;
      case 6:
        console.log("Six");
        break;
      case 7:
        console.log("Seven");
        break;
      case 8:
        console.log("Eight");
        break;
      case 9:
        console.log("Nine");
        break;
      default:
        console.log("Please enter a valid single-digit number (0-9).");
    }
  }
  
  // Read a single-digit number from the user
  const num = parseInt(prompt("Enter a single-digit number (0-9):"));
  
  // Call the function if the input is valid
  if (!isNaN(num) && num >= 0 && num <= 9) {
    numberToWord(num);
  } else {
    console.log("Invalid input! Please enter a single-digit number (0-9).");
  }
  