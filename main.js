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
        
        // const image = document.createElement("img");
        // image.className = "image";
        
        image.setAttribute("src", "./images/rock.jpg");
        image.setAttribute("alt", "Rock");

        computerPick.appendChild(image);
    } else if (computerChoice === "paper") {
        

        // const image = document.createElement("img");
        // image.className = "image";
        image.setAttribute("src", "./images/paper.jpg");
        image.setAttribute("alt", "Paper");

        computerPick.appendChild(image);
    } else {
        

        // const image = document.createElement("img");
        // image.className = "image";
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
    const winner = document.querySelector(".winner");

    if (humanScore === 5) {
        
        winner.textContent = "You Won!"
        humanScore = 0
        computerScore = 0
    } else if (computerScore === 5) {
        winner.textContent = "You Lost!"
        humanScore = 0
        computerScore = 0
    }
    // console.log(winner.textContent)
}

function newGame() {

}

// playGame();
