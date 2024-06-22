console.log("Hello world")

let humanScore = 0
let computerScore = 0



function getComputerChoice(choiceArray) {
    let choice = choiceArray[Math.floor(Math.random() * choiceArray.length)]
    return choice
}

// getComputerChoice(choices)

function getHumanChoice() {
    let response = prompt("Pick one from following options: rock, paper, scissors")
    response = response.toLowerCase()
    
    if (response === "") {
        alert("Field can not be left blank.") 
    } else if (response === "rock" || response === "paper" || response === "scissors") {
        return response
    } else {
        alert("Enter a valid response")
    }
}

// getHumanChoice()

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "rock" ||
        humanChoice === "paper" && computerChoice === "paper" ||
        humanChoice === "scissors" && computerChoice === "scissors") {
        alert("It's a tie! You both chose same.")
    } else if (humanChoice === "rock" && computerChoice === "paper") {
    alert("You lose! Paper beats Rock.")
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
    alert("You win! Rock beats Scissors.")
    } else if (humanChoice === "paper" && computerChoice === "rock") {
    alert("You win! Paper beats Rock.")
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
    alert("You lose! Scissors beats Paper.")
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
    alert("You lose! Rock beats Scissors.")
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
    alert("You win! Scissors beats Paper.")
    } 
}

const humanSelection = getHumanChoice()
// console.log(humanSelection)
const choices = ["rock", "paper", "scissors"];
const computerSelection = getComputerChoice(choices)
// console.log(computerSelection)

playRound(humanSelection, computerSelection)