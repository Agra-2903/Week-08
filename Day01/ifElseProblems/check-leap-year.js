// Simple program to check if a given year is a Leap Year

const prompt = require('prompt-sync')(); // Import prompt-sync for user input

// Function to check if the year is a leap year
function isLeapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0 && year % 400 !== 0) {
            return false; // Not a leap year if divisible by 100 but not 400
        }
        return true; // Leap year if divisible by 4 and not 100, or divisible by 400
    }
    return false; // Not a leap year if not divisible by 4
}

// Get input from the user
const year = parseInt(prompt("Enter a 4-digit year: "), 10);

// Check if the input is a valid 4-digit year
if (isNaN(year) || year < 1000 || year > 9999) {
    console.log("Invalid input. Please enter a valid 4-digit year (e.g., 2024).");
    process.exit(1);
}

// Print the result
if(isLeapYear(year)){
    console.log(year, "is a leap year");
}
else{
    console.log(year, "is not a leap year");
}
