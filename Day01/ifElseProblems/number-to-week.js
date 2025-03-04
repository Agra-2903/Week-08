
const prompt = require('prompt-sync')(); // Import prompt-sync for user input

// Function to convert number to weekday
function getWeekday(day) {
    // Array to map numbers to days of the week
    const weekdays = [
      "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ];
  
    // Check if the number is between 1 and 7
    if (day >= 1 && day <= 7) {
      console.log(weekdays[day - 1]);
    } else {
      console.log("Please enter a number between 1 and 7.");
    }
  }
  
  // Read a number from the user (prompt)
  const day = parseInt(prompt("Enter a number (1-7) to get the weekday:"));
  
  // Call the function to display the corresponding weekday
  getWeekday(day);
  