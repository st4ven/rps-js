// keeps track of scores
var humanScore = 0;
var computerScore = 0;


/// This function uses Math.random to randomize the computer choice of rock, paper, or scissors
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);

    if (choice == 0) {
        return "rock";
    } else if (choice == 1) {
        return "paper";
    } else if (choice == 2) {
        return "scissors";
    }
}


/// This function plays through one round of rock, paper, scissors
function playRound(humanChoice, computerChoice) {

    if (humanChoice == "rock" && computerChoice == "paper") {
        computerScore += 1;
        return "The computer chose " + computerChoice + ". You lose! Paper beats rock.";
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
        computerScore += 1;
        return "The computer chose " + computerChoice + ". You lose! Scissors beats paper.";
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
        computerScore += 1;
        return "The computer chose " + computerChoice + ". You lose! Rock beats scissors.";
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        humanScore += 1;
        return "The computer chose " + computerChoice + ". You win! Paper beats rock.";
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        humanScore += 1;
        return "The computer chose " + computerChoice + ". You win! Scissors beats paper.";
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
        humanScore += 1;
        return "The computer chose " + computerChoice + ". You win! Rock beats scissors.";
    } else {
        return "The computer chose " + computerChoice + ". Tie!";
    }
}


const buttons = document.querySelectorAll("button");            // contains all buttons
const score = document.querySelector("#yourScore");             // human score
const score2 = document.querySelector("#compScore");            // computer score

const content = document.querySelector(".content");             // text content listed below the scores

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", (event) => {
    let target = event.target;

    // switch either rock, paper, or scissors
    switch (target.id) {
      case "rock":
        content.textContent = playRound("rock", getComputerChoice());
        break;
      case "paper":
        content.textContent = playRound("paper", getComputerChoice());
        break;
      case "scissors":
        content.textContent = playRound("scissors", getComputerChoice());
        break;
    }

    // output the scores
    score.textContent = "Your Score: " + humanScore;
    score2.textContent = "Computer Score: " + computerScore;

    // check if 5 points has been reached by either the computer or the player
    if (computerScore == 5) {
        content.textContent = "Game over! You lost with a final score of " + humanScore + "-" + computerScore;
        humanScore = 0;
        computerScore = 0;
    } else if (humanScore == 5) {
        content.textContent = "Game over! You won with a final score of " + humanScore + "-" + computerScore;
        humanScore = 0;
        computerScore = 0;
    }
  });
});