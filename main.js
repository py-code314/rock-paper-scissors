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
function getHumanChoice() {
    // let response = prompt(
    //     "Pick one from following options: rock, paper, scissors"
    // );
    // if (response === null) {
    //     alert("You canceled the game.");
    // }
    
    // response = response.toLowerCase();

    // if (response === "") {
    //     alert("Field can not be left blank.");
    // } else if (
    //     response === "rock" ||
    //     response === "paper" ||
    //     response === "scissors"
    // ) {
    //     return response;
    // } else {
    //     alert("Enter a valid response");
    // }
    let response;
    const buttons = document.querySelector(".buttons")
    // console.log(btn)
    buttons.addEventListener('click', (event) => {
        // e.preventDefault()
        // const value = btn.value
        // console.log(e)
        let target = event.target
        console.log(target.id)

        switch (target.id) {
            case "rock":
                response = "rock";
                break;
            case "paper":
                response = "paper";
                break;
            case "scissors":
                response = "scissors"
                break;
        }
    })
    console.log(response)
    return response
}

getHumanChoice()

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
