const prompt = require('prompt-sync')();

// Function to roll a die (random number between 1 and 6)
function rollDie() {
    return Math.floor(Math.random() * 6) + 1;
}

// Function to simulate die rolls and track occurrences using Map
function simulateDieRolls() {
    let dieCount = new Map([
        [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0]
    ]);
    let maxRolls = 10;
    let reachedMax = false;

    while (!reachedMax) {
        let roll = rollDie();
        dieCount.set(roll, dieCount.get(roll) + 1);

        // Check if any number reached 10 times
        if (dieCount.get(roll) === maxRolls) {
            reachedMax = true;
        }
    }

    return dieCount;
}

// Function to find the number rolled maximum and minimum times
function findMaxMin(dieCount) {
    let maxNumber = null, minNumber = null;
    let maxCount = -Infinity, minCount = Infinity;

    for (let [num, count] of dieCount.entries()) {
        if (count > maxCount) {
            maxCount = count;
            maxNumber = num;
        }
        if (count < minCount) {
            minCount = count;
            minNumber = num;
        }
    }

    return { maxNumber, maxCount, minNumber, minCount };
}

// Run the simulation
let dieResults = simulateDieRolls();
console.log("Die Roll Counts:", Object.fromEntries(dieResults)); // Convert Map to Object for better display

// Find max and min occurrences
let { maxNumber, maxCount, minNumber, minCount } = findMaxMin(dieResults);
console.log(`Number that appeared most: ${maxNumber} (${maxCount} times)`);
console.log(`Number that appeared least: ${minNumber} (${minCount} times)`);
