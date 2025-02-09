//get computer choice
function getComputerChoice() {
    choice = (Math.floor(Math.random() * 100));

        if (choice <= 30) {
            return "rock";
        } else if (choice <= 60) {
            return "paper";
        } else (choice <= 100)
            return "scissors";
}

//get human choice
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

//play game
function playGame() {

    //scores
    let humanScore = 0;
    let computerScore = 0;

    //playone round 
    function playRound() {

    //convert input
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();

        //game logic
        if (humanChoice == "scissors" 
            && computerChoice == "paper") {
            console.log("you win! scissors beats rock!");
            return humanScore++;

        } else if (humanChoice == "rock" 
            && computerChoice == "scissors") {
            console.log("you win! rock beats scissors"); 
            return humanScore++;       

        } else if (humanChoice == "paper" 
            && computerChoice == "rock") {
            console.log("you win! paper beats rock ");
            return humanScore++;

        } else if (humanChoice == "scissors" 
            && computerChoice == "rock") {
            console.log("you lose! rock beats scissors");
            return computerScore++;

        } else if (humanChoice == "rock" 
            && computerChoice == "paper") {
            console.log("you lose! paper beats rock");
            return computerScore++;

        } else if (humanChoice == "paper" 
            && computerChoice == "scissors") {
            console.log("you lose! scissors beats paper");
            return computerScore++;

        } else if (humanChoice === computerChoice) {
            console.log("it's a tie");

        } else if (humanChoice !== "rock" || "paper"||"scissors") {
            console.log("that's not an option");
    }
}
    //number of rounds to play
    playRound();
    console.log("score " + humanScore + ":" + computerScore);

    playRound();
    console.log("score " + humanScore + ":" + computerScore);

    playRound();
    console.log("score " + humanScore + ":" + computerScore);

    playRound();
    console.log("score " + humanScore + ":" + computerScore);

    playRound();
    console.log("score " + humanScore + ":" + computerScore);

    //scores
    if (humanScore > computerScore) {
        console.log("you won the game :)");
    } else if (humanScore < computerScore) {
        console.log ("Computer wins :)");
    } else console.log ("play again");
}

playGame();
