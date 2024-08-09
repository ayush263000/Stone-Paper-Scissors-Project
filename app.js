let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#message");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genComputerChoice = () => {
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};

const drawGame = () => {
    msg.innerText =  "Game Draw,Play Again";
    msg.style.backgroundColor = "yellow";
};

const showWinner = (userWin, choiceId, compChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText =  `You Win! ${choiceId} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        computerScore++;
        compScorePara.innerText = computerScore;
        msg.innerText =  `You lost ${compChoice} beats ${choiceId}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (choiceId) => {
    const compChoice = genComputerChoice();

    if(choiceId === compChoice) {
        //Draw Game
        drawGame();
    } else {
        let userWin = true;
        if(choiceId === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if(choiceId === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, choiceId, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const choiceId = choice.getAttribute("id");
        playGame(choiceId);
    });
});