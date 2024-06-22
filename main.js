console.log("Hello world")

const choices = ["rock", "paper", "scissors"];

function getComputerChoice(items) {
    let item = items[Math.floor(Math.random() * items.length)]
    console.log(item)
}

getComputerChoice(choices)