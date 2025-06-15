let userScore =0;
let compScore =0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");


const compChoice = () =>{
    const options = ["rock","paper","scissor"];
    const randIdx = Math.floor(Math.random() *3);

    return options[randIdx];
};

choices.forEach((choice) =>{
    choice.addEventListener("click", () =>{
        console.log("choice was clicked");
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

const drawGame = () =>{
    console.log("Game is draw");
      msg.innerText = "Game Draw";
      msg.style.backgroundColor = "Gray";
}

const showWinner = (userWin) =>{
    if(userWin)
    {
        userScore++;
        userScorepara.innerText = userScore;
        console.log("You Won");
        msg.innerText = "You Won!!!";
        msg.style.backgroundColor = "Green";
    }
    else{
         compScore++;
        compScorepara.innerText = compScore;
        console.log("You Loss");
         msg.innerText = "You Loss!!!"
         msg.style.backgroundColor = "Red";
    }
}

const playGame = (userChoice) => {
    console.log("user choice: ", userChoice);
    
    //Computer Choice
    const getcompChoice = compChoice();
    console.log("computer choice: ", getcompChoice);

    if(userChoice === getcompChoice){
        //draw game 
        drawGame();
    }
    else{
        let userWin = true;  //let user consider to win

        if(userChoice === "rock"){
            userWin = getcompChoice === "paper" ? false : true;
        }
        else if( userChoice === "paper"){
            userWin = getcompChoice ==="rock" ? true : false;
        }
        else{
            //user === "secssior"
            userWin = getcompChoice ==="paper" ? true : false;
        }
        showWinner(userWin);
    }
};

