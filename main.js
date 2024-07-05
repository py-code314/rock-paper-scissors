// Global variables.
let humanScore = 0;
let computerScore = 0;

// Function to get computer choice.
function getComputerChoice() {
    choiceArray = ["rock", "paper", "scissors"];
    const choice = choiceArray[Math.floor(Math.random() * choiceArray.length)];
    return choice;
}

// Function to get human choice.
function getHumanChoice(event) {
    let response = "";
    // Get the button image user clicked by using bubbling event.
    let target = event.target;

    switch (target.id) {
        case "rock":
            response = "rock";
            break;
        case "paper":
            response = "paper";
            break;
        case "scissors":
            response = "scissors";
            break;
    }
    return response;
}

const buttons = document.querySelector(".buttons");
buttons.addEventListener("click", displayComputerChoice);
buttons.addEventListener("click", displayHumanChoice);

// Function to display computer pick after user makes choice.
function displayComputerChoice() {
    const computerChoice = getComputerChoice();

    if (computerChoice === "rock") {
        const computerPick = document.querySelector(".computer-pick");
        // Create image element and append it to the div.
        const image = document.createElement("img");
        image.className = "image";
        image.setAttribute("src", "./images/rock.jpg");
        image.setAttribute("alt", "Rock");

        computerPick.appendChild(image);
    } else if (computerChoice === "paper") {
        const computerPick = document.querySelector(".computer-pick");

        const image = document.createElement("img");
        image.className = "image";
        image.setAttribute("src", "./images/paper.jpg");
        image.setAttribute("alt", "Paper");

        computerPick.appendChild(image);
    } else {
        const computerPick = document.querySelector(".computer-pick");

        const image = document.createElement("img");
        image.className = "image";
        image.setAttribute("src", "./images/scissors.jpg");
        image.setAttribute("alt", "Scissors");

        computerPick.appendChild(image);
    }
}

// Function to display human pick after user makes choice.
function displayHumanChoice(event) {
    const humanChoice = getHumanChoice(event);

    if (humanChoice === "rock") {
        const humanPick = document.querySelector(".player-pick");

        const image = document.createElement("img");
        image.className = "image";
        image.setAttribute("src", "./images/rock.jpg");
        image.setAttribute("alt", "Rock");

        humanPick.appendChild(image);
    } else if (humanChoice === "paper") {
        const humanPick = document.querySelector(".player-pick");

        const image = document.createElement("img");
        image.className = "image";
        image.setAttribute("src", "./images/paper.jpg");
        image.setAttribute("alt", "Paper");

        humanPick.appendChild(image);
    } else {
        const humanPick = document.querySelector(".player-pick");

        const image = document.createElement("img");
        image.className = "image";
        image.setAttribute("src", "./images/scissors.jpg");
        image.setAttribute("alt", "Scissors");

        humanPick.appendChild(image);
    }
}

// Function to play one round of rock-paper-scissors.
function playRound(humanChoice, computerChoice) {
    if (
        (humanChoice === "rock" && computerChoice === "rock") ||
        (humanChoice === "paper" && computerChoice === "paper") ||
        (humanChoice === "scissors" && computerChoice === "scissors")
    ) {
        alert("It's a tie! You both chose same.");
    } else if (
        (humanChoice === "rock" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "rock")
    ) {
        alert(`You lose! ${computerChoice} beats ${humanChoice}.`);
        computerScore++;
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        alert(`You win! ${humanChoice} beats ${computerChoice}.`);
        humanScore++;
    }
}

// Function to play five rounds of rock-paper-scissors.
/*function playGame() {
    let i = 0;
    let maxRounds = 5;
    while (i < maxRounds) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        // Increment counter only if response is valid.
        if (
            humanSelection === "rock" ||
            humanSelection === "paper" ||
            humanSelection === "scissors"
        ) {
            i++;
            playRound(humanSelection, computerSelection);
        } else {
            i = i; // Counter value doesn't change if response is invalid.
            playRound(humanSelection, computerSelection);
        }
    }

    // Announce the winner.
    if (humanScore === computerScore) {
        alert(`Final Score: You ${humanScore} - ${computerScore} Computer. It's a draw.`);
    } else if (humanScore > computerScore) {
        alert(
            `Final Score: You ${humanScore} - ${computerScore} Computer. You beat the Computer.`
        );
    } else {
        alert(
            `Final Score: You ${humanScore} - ${computerScore} Computer. You lost to the Computer.`
        );
    }
}

playGame();*/
