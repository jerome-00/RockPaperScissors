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
    return "You Win! Rock beats scissors.";
  } else if (playerSelection == "PAPER" && computerSelection == "Rock") {
    return "You Win! Paper beats rock.";
  } else if (playerSelection == "SCISSORS" && computerSelection == "Paper") {
    return "You Win! Scissors beats paper.";
  } else if (playerSelection == "ROCK" && computerSelection == "Paper") {
    return "You Lost! Paper beats rock.";
  } else if (playerSelection == "PAPER" && computerSelection == "Scissors") {
    return "You Lost! Scissors beats paper.";
  } else if (playerSelection == "SCISSORS" && computerSelection == "Rock") {
    return "You Lost! Rock beats scissors.";
  } else {
    return "Draw!";
  }
}

function game() {
  var score = 0;
  var computerScore = 0;
  for (let i = 0; i < 5; i++) {
    let outcome = playRound(playerSelection(), getComputerChoice());
    if (outcome.includes("Win!") == true) {
      var score = score + 1;
      console.log(score);
      console.log(computerScore);
    } else if (outcome.includes("Lost!") == true) {
      var computerScore = computerScore + 1;
      console.log(score);

      console.log(computerScore);
    } else if (outcome.includes("Draw!") == true) {
      var score = score + 1;
      var computerScore = computerScore + 1;
      console.log(score);
      console.log(computerScore);
    }
  }
  if (score > computerScore) {
    return `${score} - ${computerScore} You Win!`;
  } else if (score < computerScore) {
    return `${score} - ${computerScore} You Lose!`;
  } else {
    return `${score} - ${computerScore} You Drawed!`;
  }
}

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (document.querySelector("#rock") !== null) {
      console.log("worked");
      console.log(playRound("ROCK", getComputerChoice()));
    } else if (document.querySelector("#paper") != null) {
      console.log(playRound("PAPER", getComputerChoice()));
    } else if (document.querySelector("#scissors") != null) {
      console.log(playRound("SCISSORS", getComputerChoice()));
    }
  });
});

//console.log(game());
//console.log(game())
