
const prompt = require('prompt-sync')(); // Import prompt-sync for user input

// Function to display the place value
function getPlaceValue(num) {
    switch (num) {
      case 1:
        console.log("Unit");
        break;
      case 10:
        console.log("Ten");
        break;
      case 100:
        console.log("Hundred");
        break;
      case 1000:
        console.log("Thousand");
        break;
      case 10000:
        console.log("Ten Thousand");
        break;
      case 100000:
        console.log("Lakh");
        break;
      case 1000000:
        console.log("Ten Lakh");
        break;
      default:
        console.log("Please enter a valid number (1, 10, 100, 1000, etc.).");
    }
  }
  
  // Read a number from the user
  const num = parseInt(prompt("Enter a number (1, 10, 100, 1000, etc.):"));
  
  // Call the function if the input is valid
  if (!isNaN(num)) {
    getPlaceValue(num);
  } else {
    console.log("Invalid input! Please enter a valid number.");
  }
  