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

function showAlertDialog() {
    const closeButton = document.querySelector(".btn-close");

    alertBox.style.display = "block";
    alertOverlay.style.display = "block";

    closeButton.addEventListener("click", hideAlertDialog);
}

function hideAlertDialog() {
    alertBox.style.display = "none";
    alertOverlay.style.display = "none";
}

document.addEventListener("DOMContentLoaded", showAlertDialog);

// Returns human choice based on the event target's id.
function getHumanChoice(event) {
    const validChoices = ["rock", "paper", "scissors"];
    if (validChoices.includes(event.target.id)) {
        return event.target.id;
    }
}

// Function to display human pick after user makes choice.
function displayHumanChoice(humanChoice) {
    const playerPickDiv = document.querySelector(".player-pick");
    const currentImage = playerPickDiv.querySelector("img");

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

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function displayComputerChoice(computerChoice) {
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

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        playerPoints.textContent = humanScore;
        computerPoints.textContent = computerScore;
    } else if (
        (humanChoice === "rock" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "rock")
    ) {
        computerScore++;
        playerPoints.textContent = humanScore;
        computerPoints.textContent = computerScore;
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        playerPoints.textContent = humanScore;
        computerPoints.textContent = computerScore;
    }
}

// Function to determine the winner of five rounds of rock-paper-scissors.
function playGame() {
    if (humanScore === 5) {
        winner.textContent = "Congrats, you won!";
        imageButtons.forEach((button) => {
            button.disabled = true;
            button.style.cursor = "not-allowed";
        });
    } else if (computerScore === 5) {
        winner.textContent = "Sorry, you lost.";
        imageButtons.forEach((button) => {
            button.disabled = true;
            button.style.cursor = "not-allowed";
        });
    }
}

buttons.addEventListener("click", (event) => {
    const humanChoice = getHumanChoice(event);
    displayHumanChoice(humanChoice);
    const computerChoice = getComputerChoice();
    displayComputerChoice(computerChoice);
    playRound(humanChoice, computerChoice);
    playGame();
});

function newGame() {
    imageButtons.forEach(button => {
        button.disabled = false;
        button.style.cursor = "pointer";
    });

    winner.textContent = "";

    humanScore = 0;
    computerScore = 0;

    playerPoints.textContent = humanScore;
    computerPoints.textContent = computerScore;

    const computerPick = document.getElementById("computer-pick");
    const playerPick = document.getElementById("player-pick");
    
    if (computerPick) {
        computerPick.remove();
    }
    if (playerPick) {
        playerPick.remove();
    }
}

btnNewGame.addEventListener("click", () => {
    showAlertDialog();
    newGame();
});
