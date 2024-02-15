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
    if (playerSelection === computerSelection) {
        let choice = playerSelection.charAt(0).toUpperCase() + playerSelection.substring(1);
        let drawtext = "Draw! Both chooses " + choice;
        result.textContent = drawtext;
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        result.textContent = "You Lose! Paper beats Rock";
        computerScore++;
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        result.textContent = "You Win! Rock beats Scissors";
        playerScore++;
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        result.textContent = "You Win! Paper beats Rock";
        playerScore++;
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        result.textContent = "You Lose! Scissors beats Papers";
        computerScore++;
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        result.textContent = "You Lose! Rock beats Scissors";
        computerScore++;
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        result.textContent = "You Win! Scissors beats Papers";
        playerScore++;
    }
    updateScore();
}

function updateScore() {
    score.textContent = `PLAYER: ${playerScore} || COMPUTER: ${computerScore}`;
    if (playerScore >= 5) {
        score.textContent += " - PLAYER WINS"
    }
    if (computerScore >= 5) {
        score.textContent += " - COMPUTER WINS"
    }
}

const buttons = document.querySelectorAll('button');
const board = document.querySelector('#board');
const result = document.createElement('p');
const score = document.createElement('p');
let playerScore = 0;
let computerScore = 0;
updateScore();
board.appendChild(score);
board.appendChild(result);



buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (playerScore < 5 && computerScore < 5) {
            playRound(button.id,getComputerChoice())
        };
    });
  });