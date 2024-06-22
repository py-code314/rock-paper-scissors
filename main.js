console.log("Hello world")

const choices = ["rock", "paper", "scissors"];

function getComputerChoice(items) {
    let item = items[Math.floor(Math.random() * items.length)]
    return item
}

// getComputerChoice(choices)

function getHumanChoice() {
    let response = prompt("Pick one from following options: rock, paper, scissors")
    response = response.toLowerCase()
    
    if (response === " ") {
        return "Field can not be left blank."
    } else if (response === "rock" || response === "paper" || response === "scissors") {
        return response
    } else {
        return "Enter a valid response"
    }
}

// getHumanChoice()