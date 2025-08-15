function getComputerChoice() {
  const computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice === 0) return "rock";
  if (computerChoice === 1) return "paper";
  if (computerChoice === 2) return "scissors";
}
function getHumanChoice() {
  return prompt("Enter your choice");
}
let humanScore = 0;
let computerScore = 0;
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  if (humanChoice === computerChoice) {
    console.log("It's a tie!");
    return;
  }
  if (humanChoice === "rock") {
    if (computerChoice === "paper") {
      console.log("You lose! Paper beats Rock");
      computerScore++;
    } else {
      console.log("You win! Rock beats Scissors");
      humanScore++;
    }
  }
  if (humanChoice === "paper") {
    if (computerChoice === "scissors") {
      console.log("You lose! Scissors beats Paper");
      computerScore++;
    } else {
      console.log("You win! Paper beats Rock");
      humanScore++;
    }
  }
  if (humanChoice === "scissors") {
    if (computerChoice === "rock") {
      console.log("You lose! Rock beats Scissors");
      computerScore++;
    } else {
      console.log("You win! Scissors beats Paper");
      humanScore++;
    }
  }
}
playRound(humanSelection, computerSelection);
