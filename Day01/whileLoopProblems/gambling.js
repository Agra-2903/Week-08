const prompt = require('prompt-sync')(); // Import prompt-sync for user input

let money = 100;    // Starting amount
let goal = 200;     // Goal amount
let betAmount = 1;  // Bet amount per round
let wins = 0;       // Number of wins
let betsMade = 0;   // Number of bets made

console.log("Gambling game started with Rs 100.");

// Repeat until gambler goes broke or reaches the goal
while (money > 0 && money < goal) {
  // Simulate the result of the bet (50% chance to win or lose)
  let betResult = Math.random() < 0.5 ? 'win' : 'lose';
  
  if (betResult === 'win') {
    money += betAmount;
    wins++;
  } else {
    money -= betAmount;
  }

  betsMade++;

  console.log(`Bet ${betsMade}: ${betResult}. Current Money: Rs ${money}`);

  // Ask user if they want to continue (optional)
  let userChoice = prompt("Do you want to continue? (yes/no): ").toLowerCase();
  if (userChoice === "no") {
    console.log("You chose to stop early.");
    break;
  }

  // Check if goal or broke is reached
  if (money === goal) {
    console.log("Congratulations! You have reached your goal of Rs 200.");
    break;
  } else if (money === 0) {
    console.log("Sorry, you went broke. Game Over.");
    break;
  }
}

console.log(`Total Bets Made: ${betsMade}`);
console.log(`Total Wins: ${wins}`);
console.log(`Final Money: Rs ${money}`);
