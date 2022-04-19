function computerPlay() {
    let computerPlay = Math.floor(Math.random() * 3) + 1;
    if (computerPlay == 1) {
        computerPlay = "rock";
    } else if (computerPlay == 2) {
        computerPlay = "paper"; 
    } else {
        computerPlay = "scissors";
    }
    return computerPlay;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        playRound = "Its a tie! Go again!"
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        playRound = "Paper beats Rock, you suck."
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playRound = "Rock beats Scissors. You Win!"
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playRound = "Paper beats Rock, you win!"
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        playRound = "Scissors beats Paper. cya noob."
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playRound = "Scissors beats Paper, you did it."
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        playRound = "Rock beats Scissors. Done messed up!"
    } else {
        playRound = "Something Broke Sorry."
    }
    return playRound
}


function game() {
    for (var i = 0; i < 5; i++) {
        playRound(playerSelection, computerSelection)
            
        }
}

const playerSelection = prompt("Rock, Paper or Scissors?")
const computerSelection = computerPlay();
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));


//const playerSelection = "Rock";
//const computerSelection = computerPlay();
//console.log(playRound(playerSelection, computerSelection));