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

// Function to find 2nd largest and 2nd smallest using sorting
function findSecondLargestAndSmallestSorted(arr) {
    let sortedArr = [...arr].sort((a, b) => a - b);
    return {
        secondSmallest: sortedArr[1],
        secondLargest: sortedArr[sortedArr.length - 2]
    };
}

// Generate and store random numbers in an array
let randomNumbers = generateRandomNumbers();
console.log("Generated Random Numbers:", randomNumbers);

// Find the 2nd largest and 2nd smallest without sorting
let resultWithoutSorting = findSecondLargestAndSmallest(randomNumbers);
console.log("Without Sorting - Second Largest:", resultWithoutSorting.secondLargest);
console.log("Without Sorting - Second Smallest:", resultWithoutSorting.secondSmallest);

// Find the 2nd largest and 2nd smallest using sorting
let resultWithSorting = findSecondLargestAndSmallestSorted(randomNumbers);
console.log("With Sorting - Second Largest:", resultWithSorting.secondLargest);
console.log("With Sorting - Second Smallest:", resultWithSorting.secondSmallest);
