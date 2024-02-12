// GET computer choice
function getComputerChoice() {
    // GET random number
    randomNumber = Math.floor(Math.random() * 3);
    // RETURN choice depending on the number
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
    // SET player selection to lower case
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

    // Return the string
    return winner;
}

// Plays a five round game
function playGame() {
    // Create number of games variable
    let round = 0;
    // Create number of wins variable
    let playerScore = 0;
    // Create number of loses variable
    let computerScore = 0;
    // While number of games less than 5
    while (round < 5) {
        // Prompt for player selection
        let playerSelection = prompt("Enter rock, paper or scissors");
        // Set computer choice
        let computerSelection = getComputerChoice();
        // Call play round function
        let winner = playRound(playerSelection, computerSelection);
        // Tally up wins and loses
        if (winner == "player") {
            playerScore++;
        }
        if (winner == "computer") {
            computerScore++;
        }
        console.log("Player: " + playerScore + " | " + "Computer: " + computerScore);
        // increment number of games
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
