let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {
    let num = Math.floor(Math.random() * 3) + 1;
    let toReturn;

    switch (num){
        case 1:
            toReturn = "Rock";
            break;
        case 2:
            toReturn = "Paper";
            break;
        case 3:
            toReturn = "Scissors";
            break;
        default:
            toReturn = "Error";
    }

    return toReturn;
}

function playRound(computerChoice, humanChoice) {
    
    computerChoice = computerChoice.toUpperCase();
    if (humanChoice != null) {
        humanChoice = humanChoice.toUpperCase();
    }

    if (computerChoice === humanChoice) {
        return "Tie";
    }

    if (computerChoice === "ROCK" && humanChoice === "SCISSORS") {
        computerScore++;
        return "You lose! Rock beats Scissors!";
    }
    else if (computerChoice === "SCISSORS" && humanChoice === "ROCK") {
        humanScore++;
        return "You win! Rock beats Scissors!";
    }
    else if (computerChoice === "PAPER" && humanChoice === "ROCK") {
        computerScore++;
        return "You lose! Paper beats Rock!";
    }
    else if (computerChoice === "ROCK" && humanChoice === "PAPER") {
        humanScore++;
        return "You win! Paper beats Rock!"
    }
    else if (computerChoice === "SCISSORS" && humanChoice === "PAPER") {
        computerScore++;
        return "You lose! Scissors beats Paper!";
    }
    else if (computerChoice === "PAPER" && humanChoice === "SCISSORS") {
        humanScore++;
        return "You win! Scissors beats Paper!";
    }

    return "Error";
}

function checkGame(humanResponse) {
    console.log("Round: " + (i));

    let computerResponse = getComputerChoice();

    eventDisplay.textContent = playRound(computerResponse, humanResponse);
    computerDisplay.textContent = "Computer Score: " + computerScore;
    humanDisplay.textContent = "Your Score: " + humanScore;

    if (computerScore === 5) {
        winnerText = "Computer Wins, Try again!";
        computerScore = 0;
        humanScore = 0;
        return true;
    }

    if (humanScore === 5) {
        winnerText = "You Won the Game!";
        computerScore = 0;
        humanScore = 0;
        return true;
    }

    i++;

    return false;
}

let i = 1;
let winnerText = "Error";
console.log("=====================================");

const buttons = document.querySelectorAll("button");
const computerDisplay = document.querySelector(".score-computer");
const humanDisplay = document.querySelector(".score-human");
const eventDisplay = document.querySelector(".event-text");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        console.log(button.textContent + " was pressed!");
        if (checkGame(button.textContent) === true) {
            eventDisplay.textContent = winnerText;
            i = 1;
            toReturn = "Error";
        }
        console.log("=====================================");
    })
})