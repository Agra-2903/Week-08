const prompt = require('prompt-sync')();

// Function to generate random birth months for 50 individuals
function generateBirthMonths() {
    let birthMonthMap = new Map();

    // Initialize the map with empty arrays for each month (1 to 12)
    for (let i = 1; i <= 12; i++) {
        birthMonthMap.set(i, []);
    }

    // Generate 50 individuals with a random birth month and year (92 or 93)
    for (let i = 1; i <= 50; i++) {
        let randomMonth = Math.floor(Math.random() * 12) + 1; // 1 to 12
        let randomYear = Math.random() < 0.5 ? 92 : 93; // Randomly choose between 1992 & 1993

        // Store individual (e.g., "Person 1 - Year 92") in the corresponding month
        birthMonthMap.get(randomMonth).push(`Person ${i} - Year ${randomYear}`);
    }

    return birthMonthMap;
}

// Function to display individuals grouped by birth month
function displayBirthMonthGroups(birthMonthMap) {
    console.log("\nIndividuals grouped by birth month:");
    for (let [month, individuals] of birthMonthMap.entries()) {
        if (individuals.length > 0) {
            console.log(`Month ${month}: ${individuals.join(", ")}`);
        }
    }
}

// Generate birth month data
let birthMonthData = generateBirthMonths();

// Display results
displayBirthMonthGroups(birthMonthData);
