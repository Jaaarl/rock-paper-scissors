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
    let humanScore = 0;
    let compScore = 0;
    while (true) {
        let compChoice = getComputerChoice();
        let playerChoice = playerSelection();
        let decision;
        if (playerChoice == "scissors" && compChoice == "rock") {
            decision = playerChoice + " vs " + compChoice + " You Lost! ";
            compScore++;
        }
        else if (playerChoice == "scissors" && compChoice == "paper") {
            decision = playerChoice + " vs " + compChoice + " You Win!";
            humanScore++;
        }
        else if (playerChoice == "rock" && compChoice == "paper") {
            decision = playerChoice + " vs " + compChoice + " You lost!";
            compScore++;
        }
        else if (playerChoice == "rock" && compChoice == "scissors") {
            decision = playerChoice + " vs " + compChoice + " You win!";
            humanScore++;
        }
        else if (playerChoice == "paper" && compChoice == "rock") {
            decision = playerChoice + " vs " + compChoice + " You win!";
            humanScore++;
        }
        else if (playerChoice == "paper" && compChoice == "scissors") {
            decision = playerChoice + " vs " + compChoice + " You lost!";
            compScore++;
        }
        else {
            decision = playerChoice + " vs " + compChoice + " Its a Tie! ";
        }
        alert(decision)
        if (humanScore == 3) break;
        else if (compScore == 3) break;
    }
    if (humanScore == 3)
        alert("You won with a score of (Human) " + humanScore + " - (Comp) " + compScore);
    else
        alert("You lost with a score of (Human) " + humanScore + " - (Comp) " + compScore);
}
game();