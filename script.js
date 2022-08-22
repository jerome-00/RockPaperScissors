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
    score = 0;
    computerScore = 0;
  } else if (computerScore >= 5) {
    rpsResults.textContent = `${score} - ${computerScore} You Lose! `;
    score = 0;
    computerScore = 0;
  }
}

const rockImage =
  "https://lh3.googleusercontent.com/H6mctavhUlIX4bCOwJ2ot8cvd2P1qEwZ8zL72sRcYWUgcFiRdydvSM_hER8sPJrrytUzs9L57KKLHmHWVGe9Pm-n8qZdRFsDN_h23hR5Kych9XJrT_H6QCUzBelI3QzZYcuDvvRZIQ=w2400";
const paperImage =
  "https://lh3.googleusercontent.com/4vIyD029YQNVVLz6KZOuysim6np8CIyP_wKZrF0XvXKBAmdI-wpsxFBEBIs_IA7e92vj_TrGxDJgDOku_pe5jLAEFWskPPddLfXkToK-HKXMdJyhmMMQem4awO6q1DO6QdL1d7qMFA=w2400";
const scissorsImage =
  "https://lh3.googleusercontent.com/bqcrl9ZHm2ypZFo_eIzNvKbQPviJ5QY7q6RJBjv7xSW-Aov9YElgXNjS5yKtnUiQ4I_parAyZJ0nq0M8CRIKCTLiXwR0nkDmoUSfv33vz3HOMHTrmXyZMZ8n6OhXoN_224Wskielug=w2400";
const reverseRockImage =
  "https://lh3.googleusercontent.com/ZSAKP-r3qlFv2fo2rdGldP2o56ZQuvt1-a9O7_OwYiUredTBkSJMSDDvlW9Id-M81tkcdAHzmv2DWals4UpQyRm64jLqEohMuvTShZvrrtrUSq6iFXJjZxIOSa3NSbuuXWGYhOU2UA=w2400";
const reversePaperImage =
  "https://lh3.googleusercontent.com/AGQhPHzWyfZoGRfq9v86b_6N0DJmZ9pLzDz1Uw-lBPLU-nAb2822mMe5TUd1A040pBpD1Plqn38lNdJ763gjHHx1AyInINSVlRS8gKoMtFdwAFjAe0CpOpY-V86ziG2_V5RyHYlPIg=w2400";
const reverseScissorsImage =
  "https://lh3.googleusercontent.com/sRyPUTUfcsnvyGIq2gT2XaPfklTxYCgil3dl1Lylm-lRwGNVhSqk8VCQGtbrnSUDZMSU6v1oyr3OqFNsTt9B2WsUGlWl5cdUvdjGZd0zofrC8DwcGYhLHw08e-0Z_XDFbMDGcdvq5A=w2400";
const playerChoiceEmoji = document.querySelector("#playerChoice");

function getPlayerChoiceEmoji(playerChoice) {
  if (playerChoice == "ROCK") {
    playerChoiceEmoji.src = rockImage;
  } else if (playerChoice == "PAPER") {
    playerChoiceEmoji.src = paperImage;
  } else if (playerChoice == "SCISSORS") {
    playerChoiceEmoji.src = scissorsImage;
  }
}

const computerChoiceEmoji = document.querySelector("#computerChoice");

function getComputerChoiceEmoji(computerChoice) {
  if (computerChoice == "Rock") {
    computerChoiceEmoji.src = reverseRockImage;
  } else if (computerChoice == "Paper") {
    computerChoiceEmoji.src = reversePaperImage;
  } else if (computerChoice == "Scissors") {
    computerChoiceEmoji.src = reverseScissorsImage;
  }
}

document.getElementById("rock").addEventListener("click", function () {
  let computerChoice = getComputerChoice();
  console.log(playRound("ROCK", computerChoice));
  getPlayerChoiceEmoji("ROCK");
  getComputerChoiceEmoji(computerChoice);
  console.log("worked roCK");
  displayScore();
});

document.getElementById("paper").addEventListener("click", function () {
  let computerChoice = getComputerChoice();
  console.log(playRound("PAPER", getComputerChoice()));
  getPlayerChoiceEmoji("PAPER");
  getComputerChoiceEmoji(computerChoice);
  console.log("worked papER");
  displayScore();
});

document.getElementById("scissors").addEventListener("click", function () {
  let computerChoice = getComputerChoice();
  console.log(playRound("SCISSORS", getComputerChoice()));
  getPlayerChoiceEmoji("SCISSORS");
  getComputerChoiceEmoji(computerChoice);
  console.log("worked scissORS");
  displayScore();
});

//console.log(game());
//console.log(game()
