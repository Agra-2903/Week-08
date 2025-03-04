const prompt = require('prompt-sync')();

// Function to find prime factors and store them in an array
function primeFactorization(n) {
    let factors = [];
    
    // Check for divisibility by 2
    while (n % 2 === 0) {
        factors.push(2);
        n = n / 2;
    }

    // Check for odd factors from 3 to sqrt(n)
    for (let i = 3; i * i <= n; i += 2) {
        while (n % i === 0) {
            factors.push(i);
            n = n / i;
        }
    }

    // If n is still greater than 2, it's a prime number
    if (n > 2) {
        factors.push(n);
    }

    return factors;
}

// Take user input
let n = parseInt(prompt("Enter a number: "));

// Validate input
if (isNaN(n) || n < 2) {
    console.log("Please enter a valid integer greater than 1.");
} else {
    let primeFactors = primeFactorization(n);
    console.log(`Prime Factors of ${n}:`, primeFactors);
}
