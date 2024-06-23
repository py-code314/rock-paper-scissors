let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    choiceArray = ["rock", "paper", "scissors"];
    const choice = choiceArray[Math.floor(Math.random() * choiceArray.length)];
    // console.log(choice)
    return choice;
}

function getHumanChoice() {
    let response = prompt(
        "Pick one from following options: rock, paper, scissors"
    );
    if (response === null) {
        alert("You canceled the game.")
        
    }
    //TODO Line below printing Type Error to console.
    response = response.toLowerCase();

    if (response === "") {
        alert("Field can not be left blank.");
    } else if (
        response === "rock" ||
        response === "paper" ||
        response === "scissors"
    ) {
        return response;
    } else {
        alert("Enter a valid response");
    }
}

function playRound(humanChoice, computerChoice) {
    if (
        (humanChoice === "rock" && computerChoice === "rock") ||
        (humanChoice === "paper" && computerChoice === "paper") ||
        (humanChoice === "scissors" && computerChoice === "scissors")
    ) {
        alert("It's a tie! You both chose same.");
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        alert("You lose! Paper beats Rock.");
        computerScore++;
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        alert("You win! Rock beats Scissors.");
        humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        alert("You win! Paper beats Rock.");
        humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        alert("You lose! Scissors beats Paper.");
        computerScore++;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        alert("You lose! Rock beats Scissors.");
        computerScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        alert("You win! Scissors beats Paper.");
        humanScore++;
    }
}

function playGame() {
    //TODO i is getting incremented even if response is "" or some other value.
    for (i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }

    if (humanScore === computerScore) {
        alert("The game is a tie! Scores are equal")
    } else if (humanScore > computerScore) {
        alert("You won! You beat the Computer")
    } else {
        alert("You lost! Computer won the game")
    }
}

// playGame();
