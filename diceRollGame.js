// Dice Roll Challenge

console.log("Welcome to the Dice Roll Challenge!");
console.log("You and the computer will each roll a dice.");
console.log("The higher number wins!");

// Function to roll a dice (1 to 6)
function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

// Function to play the game
function playGame() {
  const playerRoll = rollDice();
  const computerRoll = rollDice();

  console.log(`You rolled: ${playerRoll}`);
  console.log(`Computer rolled: ${computerRoll}`);

  if (playerRoll > computerRoll) {
    console.log("🎉 You win!");
  } else if (playerRoll < computerRoll) {
    console.log("❌ Computer wins!");
  } else {
    console.log("🤝 It's a tie!");
  }
}

// Example Usage
playGame();
