let score = 0;
let computerScore = 0;

function randomInt() {
  return Math.floor(Math.random() * 3);
}

function getComputerChoice() {
  let randomChoice = randomInt();

  if (randomChoice == 0) {
    return "Rock";
  } else if (randomChoice == 1) {
    return "Paper";
  } else if (randomChoice == 2) {
    return "Scissors";
  }
}

function playerSelection() {
  let choice = prompt("Type one of the following: rock, paper or scissors");
  let choiceCapitalised = choice.toUpperCase();

  if (
    choiceCapitalised == "ROCK" ||
    choiceCapitalised == "PAPER" ||
    choiceCapitalised == "SCISSORS"
  ) {
    return choiceCapitalised;
  } else {
    playerSelection();
  }
}

function playRound(playerSelection, computerSelection) {
  console.log(playerSelection);
  if (playerSelection == "ROCK" && computerSelection == "Scissors") {
    score = score + 1;
    return "You Win! Rock beats scissors.";
  } else if (playerSelection == "PAPER" && computerSelection == "Rock") {
    score = score + 1;
    return "You Win! Paper beats rock.";
  } else if (playerSelection == "SCISSORS" && computerSelection == "Paper") {
    score = score + 1;
    return "You Win! Scissors beats paper.";
  } else if (playerSelection == "ROCK" && computerSelection == "Paper") {
    computerScore = computerScore + 1;
    return "You Lost! Paper beats rock.";
  } else if (playerSelection == "PAPER" && computerSelection == "Scissors") {
    computerScore = computerScore + 1;
    return "You Lost! Scissors beats paper.";
  } else if (playerSelection == "SCISSORS" && computerSelection == "Rock") {
    computerScore = computerScore + 1;
    return "You Lost! Rock beats scissors.";
  } else {
    return "Draw!";
  }
}

const container = document.querySelector("#button-container");
const rpsResults = document.querySelector("#score-display");

const buttons = document.querySelectorAll("button");

function displayScore() {
  if (score < 5 && computerScore < 5) {
    rpsResults.textContent = `${score} - ${computerScore}`;
  } else if (score >= 5) {
    rpsResults.textContent = `${score} - ${computerScore} You Win! `;
  } else if (computerScore >= 5) {
    rpsResults.textContent = `${score} - ${computerScore} You Lose! `;
  }
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (document.querySelector("#rock") !== null) {
      console.log("worked");
      console.log(playRound("ROCK", getComputerChoice()));
      displayScore();
    } else if (document.querySelector("#paper") != null) {
      console.log(playRound("PAPER", getComputerChoice()));
    } else if (document.querySelector("#scissors") != null) {
      console.log(playRound("SCISSORS", getComputerChoice()));
    }
  });
});

//console.log(game());
//console.log(game()
