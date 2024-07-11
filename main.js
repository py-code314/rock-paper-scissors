// Global variables.
let humanScore = 0;
let computerScore = 0;

const btnRock = document.querySelector("#btn-rock");
const btnPaper = document.querySelector("#btn-paper");
const btnScissors = document.querySelector("#btn-scissors");

const winner = document.querySelector(".winner");

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

const buttons = document.querySelector(".btns-player");
// buttons.addEventListener("click", displayComputerChoice);
buttons.addEventListener("click", displayHumanChoice);
buttons.addEventListener("click", playGame);

// Function to display computer pick after user makes choice.
function displayComputerChoice() {
    
    const currentImage = document.getElementById("computer-pick");
    if (currentImage !== null) {
        currentImage.remove()
    }
    
    const computerPick = document.querySelector(".computer-pick");
    const image = document.createElement("img");
    image.className = "image";
    image.id = "computer-pick"
    
    const computerChoice = getComputerChoice();
    
    if (computerChoice === "rock") {
        image.setAttribute("src", "./images/rock.jpg");
        image.setAttribute("alt", "Rock");

        computerPick.appendChild(image);
    } else if (computerChoice === "paper") {
        image.setAttribute("src", "./images/paper.jpg");
        image.setAttribute("alt", "Paper");

        computerPick.appendChild(image);
    } else {
        image.setAttribute("src", "./images/scissors.jpg");
        image.setAttribute("alt", "Scissors");

        computerPick.appendChild(image);
    }
    // computerPick.removeChild(image);
    return computerChoice;
}

// Function to display human pick after user makes choice.
function displayHumanChoice(event) {
    const currentImage = document.getElementById("player-pick");
    if (currentImage !== null) {
        currentImage.remove();
    }

    const humanPick = document.querySelector(".player-pick");
    const image = document.createElement("img");
    image.className = "image";
    image.id = "player-pick"

    const humanChoice = getHumanChoice(event);

    if (humanChoice === "rock") {
    
        image.setAttribute("src", "./images/rock.jpg");
        image.setAttribute("alt", "Rock");
        

        humanPick.appendChild(image);
    } else if (humanChoice === "paper") {
        
        image.setAttribute("src", "./images/paper.jpg");
        image.setAttribute("alt", "Paper");

        humanPick.appendChild(image);
    } else {
        
        image.setAttribute("src", "./images/scissors.jpg");
        image.setAttribute("alt", "Scissors");

        humanPick.appendChild(image);
    }
}

// Function to play one round of rock-paper-scissors.
function playRound(event) {
    const humanChoice = getHumanChoice(event);
    const computerChoice = displayComputerChoice();
    console.log(humanChoice)
    console.log(computerChoice)

    // let humanScore = 0;
    // let computerScore = 0;

    const playerPoints = document.querySelector(".player-points");
    const computerPoints = document.querySelector(".computer-points");

    if (
        (humanChoice === "rock" && computerChoice === "rock") ||
        (humanChoice === "paper" && computerChoice === "paper") ||
        (humanChoice === "scissors" && computerChoice === "scissors")
    ) {
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

// Function to play five rounds of rock-paper-scissors.
function playGame(event) {
    
    playRound(event)
    // const winner = document.querySelector(".winner");

    

    if (humanScore === 5) {        
        winner.textContent = "You Won!"

        btnRock.disabled = true
        btnRock.style.cursor = "not-allowed"
        btnPaper.disabled = true
        btnPaper.style.cursor = "not-allowed";
        btnScissors.disabled = true
        btnScissors.style.cursor = "not-allowed";
        
    } else if (computerScore === 5) {
        winner.textContent = "You Lost!"

        btnRock.disabled = true;
        btnRock.style.cursor = "not-allowed";
        btnPaper.disabled = true;
        btnPaper.style.cursor = "not-allowed";
        btnScissors.disabled = true;
        btnScissors.style.cursor = "not-allowed";
    }
    // console.log(winner.textContent)
}

const btnNewGame = document.querySelector(".btn-newgame");
btnNewGame.addEventListener("click", newGame);

function newGame() {
    showAlert();

    btnRock.disabled = false;
    btnRock.style.cursor = "pointer";
    btnPaper.disabled = false;
    btnPaper.style.cursor = "pointer";
    btnScissors.disabled = false;
    btnScissors.style.cursor = "pointer";

    winner.textContent = "";

    const playerPoints = document.querySelector(".player-points");
    const computerPoints = document.querySelector(".computer-points");

    

    humanScore = 0;
    computerScore = 0;

    playerPoints.textContent = humanScore
    computerPoints.textContent = computerScore

    const currentImage = document.getElementById("computer-pick");
    const currentImg = document.getElementById("player-pick");
    if (currentImage !== null) {
        currentImage.remove();
    }
    if (currentImg !== null) {
        currentImg.remove()
    }
   
}

document.addEventListener("DOMContentLoaded", showAlert)
function showAlert() {
    const overlay = document.querySelector(".overlay");
    const alertBox = document.querySelector(".alert-box");
    const closeButton = document.querySelector(".btn-close");
    const alertMessage = document.querySelector(".alert-message")

    // alertMessage.textContent = "Let's play!"
    alertBox.style.display = "block"
    overlay.style.display = "block"

    closeButton.addEventListener('click', () => {
        alertBox.style.display = "none"
        overlay.style.display = "none";
    })
}



// playGame();
