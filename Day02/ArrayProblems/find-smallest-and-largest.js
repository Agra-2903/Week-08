const prompt = require('prompt-sync')();

// Function to generate 10 random 3-digit numbers
function generateRandomNumbers() {
    let numbers = [];
    for (let i = 0; i < 10; i++) {
        numbers.push(Math.floor(Math.random() * 900) + 100); // 100 to 999
    }
    return numbers;
}

// Function to find the 2nd largest and 2nd smallest elements without sorting
function findSecondLargestAndSmallest(arr) {
    let firstLargest = -Infinity, secondLargest = -Infinity;
    let firstSmallest = Infinity, secondSmallest = Infinity;

    for (let num of arr) {
        if (num > firstLargest) {
            secondLargest = firstLargest;
            firstLargest = num;
        } else if (num > secondLargest && num !== firstLargest) {
            secondLargest = num;
        }

        if (num < firstSmallest) {
            secondSmallest = firstSmallest;
            firstSmallest = num;
        } else if (num < secondSmallest && num !== firstSmallest) {
            secondSmallest = num;
        }
    }

    return { secondLargest, secondSmallest };
}

// Generate and store random numbers in an array
let randomNumbers = generateRandomNumbers();
console.log("Generated Random Numbers:", randomNumbers);

// Find the 2nd largest and 2nd smallest
let result = findSecondLargestAndSmallest(randomNumbers);
console.log("Second Largest Number:", result.secondLargest);
console.log("Second Smallest Number:", result.secondSmallest);
