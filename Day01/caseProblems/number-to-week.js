
const prompt = require('prompt-sync')(); // Import prompt-sync for user input

// Function to get the weekday name based on number
function getWeekday(day) {
    switch (day) {
      case 1:
        console.log("Sunday");
        break;
      case 2:
        console.log("Monday");
        break;
      case 3:
        console.log("Tuesday");
        break;
      case 4:
        console.log("Wednesday");
        break;
      case 5:
        console.log("Thursday");
        break;
      case 6:
        console.log("Friday");
        break;
      case 7:
        console.log("Saturday");
        break;
      default:
        console.log("Please enter a valid number between 1 and 7.");
    }
  }
  
  // Read a number from the user
  const day = parseInt(prompt("Enter a number (1-7) to get the weekday:"));
  
  // Call the function if the input is valid
  if (!isNaN(day) && day >= 1 && day <= 7) {
    getWeekday(day);
  } else {
    console.log("Invalid input! Please enter a number between 1 and 7.");
  }
  