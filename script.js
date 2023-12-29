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
function game() {
    let compChoice = getComputerChoice();
    let playerChoice = playerSelection();
    let decision;
    if (playerChoice == "scissors" && compChoice == "rock") {
        decision = playerChoice + " vs " + compChoice + " You Lost! ";
    }
    else if (playerChoice == "scissors" && compChoice == "paper") {
        decision = playerChoice + " vs " + compChoice + " You Win!";
    }
    else if (playerChoice == "rock" && compChoice == "paper") {
        decision = playerChoice + " vs " + compChoice + " You lost!";
    }
    else if (playerChoice == "rock" && compChoice == "scissors") {
        decision = playerChoice + " vs " + compChoice + " You win!";
    }
    else if (playerChoice == "paper" && compChoice == "rock") {
        decision = playerChoice + " vs " + compChoice + " You win!";
    }
    else if (playerChoice == "paper" && compChoice == "scissors") {
        decision = playerChoice + " vs " + compChoice + " You lost!";
    }
    else {
        decision = playerChoice + " vs " + compChoice + " Its a Tie! " + "Lets Play again";
        alert(decision)
        return game();
    }
    return alert(decision);
}
game();