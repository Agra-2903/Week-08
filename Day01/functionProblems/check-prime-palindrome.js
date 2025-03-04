const prompt = require('prompt-sync')(); // Import prompt-sync for user input

// Function to check if a number is prime
function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

// Function to get the palindrome of a number
function getPalindrome(number) {
    let numStr = number.toString();
    let reversedStr = numStr.split('').reverse().join('');
    return parseInt(reversedStr);
}

// Main program logic
let number = parseInt(prompt("Enter a number: "));

if (isPrime(number)) {
    console.log(`${number} is a prime number.`);
    
    let palindrome = getPalindrome(number);
    console.log(`The palindrome of ${number} is ${palindrome}.`);
    
    if (isPrime(palindrome)) {
        console.log(`The palindrome number ${palindrome} is also a prime number.`);
    } else {
        console.log(`The palindrome number ${palindrome} is not a prime number.`);
    }
} else {
    console.log(`${number} is not a prime number.`);
}
