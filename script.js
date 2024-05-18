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

let computer = getComputerChoice();
console.log(computer);
let human = getHumanChoice();
console.log(human);