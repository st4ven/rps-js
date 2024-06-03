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

function getHumanChoice() {
    let humanChoice = prompt("Rock, paper, or scissors?");

    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

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

function playGame() {
    var humanSelection;
    var computerSelection;

    for (let i = 1; i <= 5; i++) {
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
        console.log("Round " + i);
        playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore) {
        console.log("Congratulations! You won against the computer.")
    } else if (computerScore > humanScore) {
        console.log("Too bad! You lost to the computer.");
    } else {
        console.log("Tie against the computer. It could have been worse.");
    }

    console.log("Final Score: " + humanScore + "-" + computerScore);
}

playGame();