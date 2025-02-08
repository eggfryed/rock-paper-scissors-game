//computer choice
function getComputerChoice() {
choice = (Math.floor(Math.random() * 100));

if (choice <= 30) {
    return "rock";
} else if (choice <= 60) {
    return "paper";
} else (choice <= 100)
    return "scissors";
}

//human choice
function getHumanChoice() {
choice = prompt("rock, paper or scissors?").toLowerCase();

switch (choice) {
    case "rock" :
    return "rock";
    break;
    case "paper":
    return "paper";
    break;
    case "scissors":
    return "scissors";
    break;
    default:
    return "thats not an option :(";
}
}

//score variables
let humanScore = 0;
let computerScore = 0;


//one round 
function playRound(humanChoice, computerChoice) {

console.log("computer choice " + computerChoice);
console.log ("human chose " + humanChoice);


    if (humanChoice == "scissors" && computerChoice == "paper") {
        return "you win! paper beats rock!";
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
        return "you win! rock beats scissors";
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        return "you win! paper beats rock ";
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
        return "you lose! rock beats scissors"
    } else if (humanChoice == "rock" && computerChoice == "paper") {
        return "you lose! paper beats rock"
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
        return "you lose! scissors beats paper";
    } else (humanChoice == computerChoice)
    return "it's a tie";
}

//take input
const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

console.log(playRound(humanChoice, computerChoice));