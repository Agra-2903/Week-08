// Simple program to check if a given day and month are between March 20 and June 20

const prompt = require('prompt-sync')(); // Import prompt-sync for user input

// Function to check the date range
function isWithinDateRange(day, month) {
    if (month < 3 || month > 6) {
        return false; // Months before March or after June are not in range
    }
    if (month === 3 && day < 20) {
        return false; // Before March 20 is not in range
    }
    if (month === 6 && day > 20) {
        return false; // After June 20 is not in range
    }
    return true; // Otherwise, it's in range
}

// Get input from the user
const day = parseInt(prompt("Enter the day (1-31): "), 10);
const month = parseInt(prompt("Enter the month (1-12): "), 10);

// Check if inputs are valid
if (isNaN(day) || isNaN(month) || day < 1 || day > 31 || month < 1 || month > 12) {
    console.log("Invalid input. Enter a valid day (1-31) and month (1-12). Example: 25 5 (for May 25)");
    process.exit(1);
}

// Print the result (true or false)
console.log("Is the date in range?", isWithinDateRange(day, month));
