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

function getHumanChoice() {
    return prompt("Choose Rock | Paper | Scissors: ");
}

function playGame() {
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

    let toReturn = "Error";
    let i = 1;
    while (toReturn === "Error") {
        console.log("Round: " + (i));

        let computerResponse = getComputerChoice();
        let humanResponse = getHumanChoice();

        console.log(playRound(computerResponse, humanResponse));

        if (computerScore === 3) {
            toReturn = "Computer Wins, Try again!";
            computerScore = 0;
            humanScore = 0;
            break;
        }

        if (humanScore === 3) {
            toReturn = "You Won the Game!";
            computerScore = 0;
            humanScore = 0;
            break;
        }

        i++;
    }

    return toReturn;
}

console.log(playGame());