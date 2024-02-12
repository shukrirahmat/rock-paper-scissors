// returns a randomized choice for the computer
function getComputerChoice() {
    randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return "rock";
    } else if (randomNumber === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

// Plays a single round of Rock Paper Scissor
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    // Determines winner
    let winner;
    if (playerSelection === computerSelection) {
        let choice = playerSelection.charAt(0).toUpperCase() + playerSelection.substring(1);
        console.log("Draw! Both chooses " + choice);
        winner = "draw";
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        console.log("You Lose! Paper beats Rock");
        winner = "computer";
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        console.log("You Win! Rock beats Scissors");
        winner = "player";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        console.log("You Win! Paper beats Rock");
        winner = "player";
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        console.log("You Lose! Scissors beats Papers");
        winner = "computer";
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        console.log("You Lose! Rock beats Scissors");
        winner = "computer";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        console.log("You Win! Scissors beats Papers");
        winner = "player";
    }
    return winner;
}

// Plays a five round game
function playGame() {
    let round = 0;
    let playerScore = 0;
    let computerScore = 0;
    while (round < 5) {
        
        let playerSelection = prompt("Enter rock, paper or scissors");
        let computerSelection = getComputerChoice();
        let winner = playRound(playerSelection, computerSelection);
        
        // Tally up and display wins and loses
        if (winner == "player") {
            playerScore++;
        }
        if (winner == "computer") {
            computerScore++;
        }
        console.log("Player: " + playerScore + " | " + "Computer: " + computerScore);
        round++;
    }
    // Determines winner
    if (playerScore > computerScore) {
        console.log("You win!");
    } else if (playerScore < computerScore) {
        console.log("You lose!");
    } else {
        console.log("It's a draw!");
    }
}
