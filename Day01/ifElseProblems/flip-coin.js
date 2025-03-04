// Function to simulate a coin flip
function coinFlip() {
    // Generate a random number, either 0 (Heads) or 1 (Tails)
    const flip = Math.floor(Math.random() * 2);
  
    // Check the result of the flip and print accordingly
    if (flip === 0) {
      console.log("Heads");
    } else {
      console.log("Tails");
    }
  }
  
  // Call the function to simulate the coin flip
  coinFlip();
  