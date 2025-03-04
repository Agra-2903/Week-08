
const prompt = require('prompt-sync')(); // Import prompt-sync for user input

// Function to perform unit conversion
function unitConversion(option, value) {
    switch (option) {
      case 1: // Feet to Inch
        console.log(`${value} Feet = ${value * 12} Inches`);
        break;
      case 2: // Feet to Meter
        console.log(`${value} Feet = ${value * 0.3048} Meters`);
        break;
      case 3: // Inch to Feet
        console.log(`${value} Inches = ${(value / 12).toFixed(4)} Feet`);
        break;
      case 4: // Meter to Feet
        console.log(`${value} Meters = ${(value / 0.3048).toFixed(4)} Feet`);
        break;
      default:
        console.log("Invalid option! Please select a valid conversion.");
    }
  }
  
  // Prompt user for choice and value
  const option = parseInt(
    prompt("Select a conversion option:\n1. Feet to Inch\n2. Feet to Meter\n3. Inch to Feet\n4. Meter to Feet\n")
  );
  const value = parseFloat(prompt("Enter the value to convert:"));
  
  // Validate inputs and perform conversion
  if (!isNaN(option) && !isNaN(value) && option >= 1 && option <= 4) {
    unitConversion(option, value);
  } else {
    console.log("Invalid input! Please enter valid numbers.");
  }
  