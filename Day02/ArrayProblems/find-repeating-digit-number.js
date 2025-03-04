const prompt = require('prompt-sync')();

// Function to find numbers with repeated digits (like 11, 22, etc.)
function findRepeatedDigitNumbers() {
    let repeatedNumbers = [];

    for (let i = 10; i < 100; i++) {
        let tens = Math.floor(i / 10); // Get first digit
        let ones = i % 10; // Get second digit

        if (tens === ones) {
            repeatedNumbers.push(i);
        }
    }

    return repeatedNumbers;
}

// Get the numbers and display them
let result = findRepeatedDigitNumbers();
console.log("Numbers with repeated digits:", result);
