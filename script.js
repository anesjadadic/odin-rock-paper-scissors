let playerPoints = 0;
let computerPoints = 0;

function startRound(playerChoice) {
    let player = playerChoice
    let computer = getComputerChoice()
    document.getElementById("choiceInfo").textContent="You chose " + player + ", the computer chose " + computer + "."
    
    if(computer == 'rock' && player == 'paper' || computer == 'paper' && player == 'scissors'
        || computer == 'scissors' && player == 'rock') {
        playerVictory()
    } 
    else if(computer == 'rock' && player == 'scissors' || computer == 'paper' && player == 'rock'
        || computer == 'scissors' && player == 'paper') {
        computerVictory()
    }
    else {
        tie()
    }
}

function getComputerChoice() {
    choice = Math.floor(Math.random() * 3);
    if(choice == 0) {
        choice = 'rock'
    }
    else if(choice == 1) {
        choice = 'paper'
    }
    else if(choice == 2) {
        choice = 'scissors'
    }
    return choice;
}

function playerVictory() {
    document.getElementById("declareRound").textContent="You won this round!"
    playerPoints++;
    document.getElementById("playerPoints").textContent="You: " + playerPoints
    if(playerPoints == 5) {
        endGame('player')
    }
}

function computerVictory() {
    document.getElementById("declareRound").textContent="The computer won this round."
    computerPoints++;
    document.getElementById("computerPoints").textContent="Computer: " + computerPoints
    if(computerPoints == 5) {
        endGame('computer')
    }
}

function tie(){
    document.getElementById("declareRound").textContent="Tied round!"
}

function endGame(winner) {
    document.getElementById("declareMatch").style.backgroundColor = 'rgb(170, 170, 170)';
    pointDifference = Math.abs(playerPoints - computerPoints)
    if(winner == 'player' && (pointDifference <= 5)) {
        document.getElementById("declareMatch").textContent="You wiped the floor with them!"
    } 
    if(winner == 'player' && (pointDifference < 4)) {
        document.getElementById("declareMatch").textContent="You win the match!"
    }
    if(winner == 'player' && (pointDifference < 2)) {
        document.getElementById("declareMatch").textContent="You win! That was close..."
    }
    if(winner == 'computer' && (pointDifference <= 5)) {
        document.getElementById("declareMatch").textContent="A massive defeat! Bow down to the machine."
    } 
    if(winner == 'computer' && (pointDifference < 4)) {
        document.getElementById("declareMatch").textContent="You lose the match."
    }
    if(winner == 'computer' && (pointDifference < 2)) {
        document.getElementById("declareMatch").textContent="A devastating close loss..."
    }
    document.getElementById('choice1').setAttribute('disabled',true)
    document.getElementById('choice2').setAttribute('disabled',true)
    document.getElementById('choice3').setAttribute('disabled',true)
    document.getElementById('playAgain').removeAttribute("hidden")
}
