function getComputerChoice() {
  const computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice === 0) return "rock";
  if (computerChoice === 1) return "paper";
  if (computerChoice === 2) return "scissors";
}
function getHumanChoice() {
  return prompt("Enter your choice");
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === computerChoice) {
      console.log("It's a tie round!");
      return;
    }
    if (humanChoice === "rock") {
      if (computerChoice === "paper") {
        console.log("You lose the round! Paper beats Rock");
        computerScore++;
      } else {
        console.log("You win the round! Rock beats Scissors");
        humanScore++;
      }
    }
    if (humanChoice === "paper") {
      if (computerChoice === "scissors") {
        console.log("You lose the round! Scissors beats Paper");
        computerScore++;
      } else {
        console.log("You win the round! Paper beats Rock");
        humanScore++;
      }
    }
    if (humanChoice === "scissors") {
      if (computerChoice === "rock") {
        console.log("You lose the round! Rock beats Scissors");
        computerScore++;
      } else {
        console.log("You win the round! Scissors beats Paper");
        humanScore++;
      }
    }
  }
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  if (checkWinner()) return;
  playRound(getHumanChoice(), getComputerChoice());
  if (checkWinner()) return;
  playRound(getHumanChoice(), getComputerChoice());

  if (computerScore > humanScore) console.log("You lose the game!");
  else if (humanScore > computerScore) console.log("You win the game!");
  else console.log("It's a tie game");
}

function checkWinner(computerScore, humanScore) {
  if (computerScore === 3 || humanScore === 3) {
    if (computerScore > humanScore) console.log("You lose the game!");
    else console.log("You win the game!");
    return true;
  }
  return false;
}

playGame();
