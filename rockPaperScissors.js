// Simplified Rock, Paper, Scissors Game with Random User Choice

// Function to play a round of the game
function playGame() {
    // List of possible choices
    const choices = ["rock", "paper", "scissors"];
    
    // Randomly pick the user's choice (instead of manually inputting it)
    const userChoice = choices[Math.floor(Math.random() * 3)];
    
    // Randomly pick the computer's choice
    const computerChoice = choices[Math.floor(Math.random() * 3)];
  
    // Log choices to the console
    console.log(`You chose: ${userChoice}`);
    console.log(`Computer chose: ${computerChoice}`);
  
    // Determine the winner
    if (userChoice === computerChoice) {
      console.log("It's a tie!");
    } else if (
      (userChoice === "rock" && computerChoice === "scissors") ||
      (userChoice === "paper" && computerChoice === "rock") ||
      (userChoice === "scissors" && computerChoice === "paper")
    ) {
      console.log("You win!");
    } else {
      console.log("You lose!");
    }
  }
  
  // Example Usage - Call playGame without any arguments and it chooses randomly
  playGame();  // The game will pick both the user's and computer's choices randomly
  