
const prompt = require('prompt-sync')(); // Import prompt-sync for user input

// Function to perform arithmetic operations and find max & min
function findMaxMin(a, b, c) {
    // Performing the given operations
    let result1 = a + b * c;
    let result2 = a % b + c;
    let result3 = c + a / b;
    let result4 = a * b + c;
  
    // Storing results in an array
    let results = [result1, result2, result3, result4];
  
    // Finding max and min values
    let maxValue = Math.max(...results);
    let minValue = Math.min(...results);
  
    // Displaying results
    console.log(`Results:`);
    console.log(`1. a + b * c  = ${result1}`);
    console.log(`2. a % b + c  = ${result2}`);
    console.log(`3. c + a / b  = ${result3}`);
    console.log(`4. a * b + c  = ${result4}`);
    console.log(`Maximum Value: ${maxValue}`);
    console.log(`Minimum Value: ${minValue}`);
  }
  
  // Read input from the user
  let a = parseFloat(prompt("Enter first number (a):"));
  let b = parseFloat(prompt("Enter second number (b):"));
  let c = parseFloat(prompt("Enter third number (c):"));
  
  // Call the function to perform operations and find max & min
  findMaxMin(a, b, c);
  