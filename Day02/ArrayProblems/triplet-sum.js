const prompt = require('prompt-sync')();

// Function to find triplets that sum to zero
function findTriplets(arr) {
    let triplets = [];
    let n = arr.length;

    // Check all triplets
    for (let i = 0; i < n - 2; i++) {
        for (let j = i + 1; j < n - 1; j++) {
            for (let k = j + 1; k < n; k++) {
                if (arr[i] + arr[j] + arr[k] === 0) {
                    triplets.push([arr[i], arr[j], arr[k]]);
                }
            }
        }
    }

    return triplets;
}

// Take user input as an array
let input = prompt("Enter space-separated integers: ").split(" ").map(Number);

// Find triplets
let result = findTriplets(input);

// Display results
if (result.length > 0) {
    console.log("Triplets that sum to zero:", result);
} else {
    console.log("No triplets found that sum to zero.");
}
