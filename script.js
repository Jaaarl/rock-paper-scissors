function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function getComputerChoice() {
    let ctr = getRandomInt(3);
    if (ctr == 0) {
        return "rock";
    }
    else if (ctr == 1) {
        return "paper";
    }
    else return "scissors";
}
function playerSelection() {
    let choice = null;
    choice = prompt("Choose your weapon! Rock Paper Scissors?");
    while (true) {
        if (choice == "rock" || choice == "paper" || choice == "scissors") {
            return choice;
            break;
        }
        else {
            choice = prompt("Wrong answer Try again! Choose your weapon! Rock Paper Scissors?");
            choice = choice.toLowerCase();
        }
    }
}
getComputerChoice();
playerSelection();