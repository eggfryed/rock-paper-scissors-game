console.log("hello world!");
//computer choice
function getComputerChoice() {
    let choice = (Math.floor(Math.random()*100));

    if (choice <= 30) {
        return ("The computer played Rock!");

    } else if (choice >= 31 && choice <= 60) {
        return ("The computer played Paper!");

    } else if (choice >= 61 && choice <= 100) {
        return ("The computer played Scissors!");
    }
}
//computer choice output
console.log(getComputerChoice());

//human choice
function getHumanChoice() {

switch (prompt()) {
    case "rock":
        return "rock";
        break;
    case "paper":
        return "paper";
        break;
    case "scissors":
        return "scissors";
        break;
    default:
        return "not an option";
    }
}

//numan choice output
console.log(getHumanChoice());