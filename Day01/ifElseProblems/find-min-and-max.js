// Function to generate a random 3-digit number (100 to 999)
function getRandomThreeDigitNumber() {
    return Math.floor(Math.random() * 900) + 100;
}

// Create an empty array
let numbers = [];

// Generate 5 random numbers and store them in the array
for (let i = 0; i < 5; i++) {
    numbers.push(getRandomThreeDigitNumber());
}

// Find the smallest and largest numbers
let min = Math.min(...numbers);
let max = Math.max(...numbers);

// Print results
console.log("Generated numbers:", numbers);
console.log("Minimum value:", min);
console.log("Maximum value:", max);
