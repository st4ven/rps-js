var humanScore = 0;
var computerScore = 0;

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


function playRound(humanChoice, computerChoice) {

    console.log("The computer chose " + computerChoice);

    if (humanChoice == "rock" && computerChoice == "paper") {
        computerScore += 1;
        console.log("You lose! Paper beats rock.");
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
        computerScore += 1;
        console.log("You lose! Scissors beats paper.");
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
        computerScore += 1;
        console.log("You lose! Rock beats scissors.");
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        humanScore += 1;
        console.log("You win! Paper beats rock.");
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        humanScore += 1;
        console.log("You win! Scissors beats paper.");
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
        humanScore += 1;
        console.log("You win! Rock beats scissors.");
    } else {
        console.log("Tie!");
    }

    console.log("Your Score: " + humanScore);
    console.log("Computer Score: " + computerScore);
}

const btn1 = document.querySelector("#rock");
const btn2 = document.querySelector("#paper");
const btn3 = document.querySelector("#scissors");

btn1.addEventListener("click", () => {
  playRound("rock", getComputerChoice());
});

btn2.addEventListener("click", () => {
  playRound("paper", getComputerChoice());
});

btn3.addEventListener("click", () => {
  playRound("scissors", getComputerChoice());
});