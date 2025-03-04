
const prompt = require('prompt-sync')(); // Import prompt-sync for user input

// Function to simulate the coin flip game until either Heads or Tails wins 11 times
function flipCoinGame() {
    let headsCount = 0;
    let tailsCount = 0;
    
    console.log("Coin flip game started! First to 11 wins.");
    
    // Repeat until either Heads or Tails wins 11 times
    while (headsCount < 11 && tailsCount < 11) {
      let flip = Math.random() < 0.5 ? 'Heads' : 'Tails';  // Randomly choose Heads or Tails
      console.log(`Coin Flip: ${flip}`);
      
      if (flip === 'Heads') {
        headsCount++;
      } else {
        tailsCount++;
      }
  
      // Display the current score
      console.log(`Heads: ${headsCount}, Tails: ${tailsCount}`);
    }
  
    // Determine the winner
    if (headsCount === 11) {
      console.log("Heads wins the game!");
    } else {
      console.log("Tails wins the game!");
    }
  }
  
  // Start the game
  flipCoinGame();
  