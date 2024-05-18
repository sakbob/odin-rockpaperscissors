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

function playRound(computerChoice, humanChoice) {
    computerChoice = computerChoice.toUpperCase();
    humanChoice = humanChoice.toUpperCase();

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
        return "You lose! Paper beats Rock!";
    }
    else if (computerChoice === "ROCK" && humanChoice === "PAPER") {
        humanScore++;
        return "You win! Paper beats Rock!"
    }
    else if (computerChoice === "SCISSORS" && humanChoice === "PAPER") {
        computerChoice++;
        return "You lose! Scissors beats Paper!";
    }
    else if (computerChoice === "PAPER" && humanChoice === "SCISSORS") {
        return "You win! Scissors beats Paper!";
    }

    return "Error";
}

let computerResponse = getComputerChoice();
console.log(computerResponse);
let humanResponse = getHumanChoice();
console.log(humanResponse);

let computerScore = 0;
let humanScore = 0;

console.log(playRound(computerResponse, humanResponse));