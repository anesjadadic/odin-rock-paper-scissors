let playerWins = 0;
let computerWins = 0;

function getComputerChoice() {
    // 0 is rock, 1 is paper, 2 is scissors
    choice = Math.floor(Math.random() * 3);
    return choice;
}

function startRound(playerChoice) {
    player = playerChoice
    computer = getComputerChoice()
    if(computer == 0 && player == 1 || computer == 1 && player == 2
        || computer == 2 && player == 0) {
        playerVictory()
    } 
    else if(computer == 0 && player == 2 || computer == 1 && player == 0
        || computer == 2 && player == 1) {
        computerVictory()
    }
    else {
        tie()
    }
}

function playerVictory() {
    console.log("You won!")
    playerWins++;
    console.log("Your wins: " + playerWins + " | Computer wins: " + 
    computerWins)
}

function computerVictory() {
    console.log("You lost!")
    computerWins++;
    console.log("Your wins: " + playerWins + " | Computer wins: " + 
                computerWins)
}

function tie(){
    console.log("Tie!")
    console.log("Your wins: " + playerWins + " | Computer wins: " + 
    computerWins)
}