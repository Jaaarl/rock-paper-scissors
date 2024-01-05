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
}
function game(playerChoice) {


    const winner = document.querySelector('#winner');
    if (compScore == 0 && humanScore == 0) {
        winner.textContent = "";
    }
    let compChoice = getComputerChoice();

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

    result.textContent = decision;
    let div = document.querySelector('div');
    const score = document.querySelector('#score');
    score.textContent = "Human - " + humanScore + " AI - " + compScore;
    console.log(score);
    // div.appendChild(score);
    if (compScore == 5 || humanScore == 5) {
        let msg = document.querySelector('#winner');
        if (compScore == 5) msg.textContent = "AI won! Try again";
        else msg.textContent = "Human won! Try again";
        compScore = 0;
        humanScore = 0;
    }

}


const btnRock = document.querySelector('#rock');
let humanScore = 0;
let compScore = 0;
let ctr = false
btnRock.addEventListener('click', () => {
    game('rock');
})
const btnPaper = document.querySelector('#paper');
btnPaper.addEventListener('click', () => {
    game('paper');
})
const btnScissors = document.querySelector('#scissors');
btnScissors.addEventListener('click', () => {
    game('scissors');
})