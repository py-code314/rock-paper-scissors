// Global variables.
let humanScore = 0;
let computerScore = 0;

const btnNewGame = document.querySelector(".btn-newgame");
const alertOverlay = document.querySelector(".overlay");
const alertBox = document.querySelector(".alert-box");

const buttons = document.querySelector(".btns-player");
const imageButtons = document.querySelectorAll(".btn-player");
const btnRock = document.querySelector("#btn-rock");
const btnPaper = document.querySelector("#btn-paper");
const btnScissors = document.querySelector("#btn-scissors");

const playerPoints = document.querySelector(".player-points");
const computerPoints = document.querySelector(".computer-points");
const winner = document.querySelector(".winner");

// Function to show an alert dialog with rules.
function showAlertDialog() {
    const closeButton = document.querySelector(".btn-close");

    alertBox.style.display = "block";
    alertOverlay.style.display = "block";

    closeButton.addEventListener("click", hideAlertDialog);
}

// Function to hide the alert dialog.
function hideAlertDialog() {
    alertBox.style.display = "none";
    alertOverlay.style.display = "none";
}

// Show the alert dialog on page load.
document.addEventListener("DOMContentLoaded", showAlertDialog);


//Returns the human choice based on the event target's id.
function getHumanChoice(event) {
    const validChoices = ["rock", "paper", "scissors"];
    if (validChoices.includes(event.target.id)) {
        return event.target.id;
    }
}

// Displays the human choice.
function displayHumanChoice(humanChoice) {
    const playerPickDiv = document.querySelector(".player-pick");
    const currentImage = playerPickDiv.querySelector("img");
    // Remove previous image if it exists
    if (currentImage) {
        currentImage.remove();
    }

    const image = document.createElement("img");
    image.className = "image";
    image.id = "player-pick";

    const choices = {
        rock: { src: "./images/rock.jpg", alt: "Rock" },
        paper: { src: "./images/paper.jpg", alt: "Paper" },
        scissors: { src: "./images/scissors.jpg", alt: "Scissors" },
    };

    image.setAttribute("src", choices[humanChoice].src);
    image.setAttribute("alt", choices[humanChoice].alt);

    playerPickDiv.appendChild(image);
}

// Generates a random choice of rock, paper, or scissors.
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

// Displays the computer choice.
function displayComputerChoice(computerChoice) {
    // Remove previous image if it exists
    const currentImage = document.getElementById("computer-pick");
    if (currentImage) {
        currentImage.remove();
    }

    const computerPick = document.querySelector(".computer-pick");
    const image = document.createElement("img");
    image.className = "image";
    image.id = "computer-pick";

    const choices = {
        rock: { src: "./images/rock.jpg", alt: "Rock" },
        paper: { src: "./images/paper.jpg", alt: "Paper" },
        scissors: { src: "./images/scissors.jpg", alt: "Scissors" },
    };

    image.setAttribute("src", choices[computerChoice].src);
    image.setAttribute("alt", choices[computerChoice].alt);

    computerPick.appendChild(image);
}

// Function to play a round of rock-paper-scissors.
function playRound(humanChoice, computerChoice) {
    // Human and computer choose same shape.
    if (humanChoice === computerChoice) {
        playerPoints.textContent = humanScore;
        computerPoints.textContent = computerScore;
    } else if (
        // Computer beats human.
        (humanChoice === "rock" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "rock")
    ) {
        computerScore++;
        playerPoints.textContent = humanScore;
        computerPoints.textContent = computerScore;
    } else if (
        // Human beats computer.
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        playerPoints.textContent = humanScore;
        computerPoints.textContent = computerScore;
    }
}

// Function to play a game of rock-paper-scissors.
function playGame() {
    if (humanScore === 5) {
        winner.textContent = "Congrats, you won!";
        // Disable all buttons so the player can't play anymore.
        imageButtons.forEach((button) => {
            button.disabled = true;
            button.style.cursor = "not-allowed";
        });
    } else if (computerScore === 5) {
        winner.textContent = "Sorry, you lost.";
        // Disable all buttons so the player can't play anymore.
        imageButtons.forEach((button) => {
            button.disabled = true;
            button.style.cursor = "not-allowed";
        });
    }
}

// Click event listener to play the game.
buttons.addEventListener("click", (event) => {
    const humanChoice = getHumanChoice(event);
    displayHumanChoice(humanChoice);
    const computerChoice = getComputerChoice();
    displayComputerChoice(computerChoice);
    playRound(humanChoice, computerChoice);
    playGame();
});

// Function to start a new game.
function newGame() {
    // Enable all buttons so the player can play again.
    imageButtons.forEach((button) => {
        button.disabled = false;
        button.style.cursor = "pointer";
    });

    winner.textContent = "";
    // Reset scores.
    humanScore = 0;
    computerScore = 0;

    playerPoints.textContent = humanScore;
    computerPoints.textContent = computerScore;
    // Remove previous image if it exists
    const computerPick = document.getElementById("computer-pick");
    const playerPick = document.getElementById("player-pick");

    if (computerPick) {
        computerPick.remove();
    }
    if (playerPick) {
        playerPick.remove();
    }
}

// Event listener to start a new game.
btnNewGame.addEventListener("click", () => {
    showAlertDialog();
    newGame();
});
