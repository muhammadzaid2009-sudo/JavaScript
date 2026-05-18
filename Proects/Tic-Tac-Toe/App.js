let boxes = document.querySelectorAll(".box");
let reset_btn = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#new-btn");
let resetScoresBtn = document.querySelector("#reset-scores-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnIndicator = document.querySelector("#turn-indicator");
let scoreO = document.querySelector("#score-o");
let scoreX = document.querySelector("#score-x");

let turnO = true;
let playerOScore = 0;
let playerXScore = 0;

const winPatterns = [
  [0, 1, 2], // top row
  [0, 3, 6], // left column
  [0, 4, 8], // diagonal
  [1, 4, 7], // middle column
  [2, 5, 8], // right column
  [2, 4, 6], // diagonal
  [3, 4, 5], // middle row
  [6, 7, 8], // bottom row
];
const resetGame = () => {
    turnO = true;
    enableBtn();
    msgContainer.classList.add("hide");
    turnIndicator.innerText = "Player O's turn";
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box was clicked");

    if (turnO) {
      box.innerText = "O";
      turnO = false;
      turnIndicator.innerText = "Player X's turn";
    } else {
      box.innerText = "X";
      turnO = true;
      turnIndicator.innerText = "Player O's turn";
    }
    box.disabled = true;

    checkWinner();
  });
});

const disableBtn =  () => {
    for(let box of boxes){
        box.disabled = true;
    }
};

const enableBtn =  () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations the winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBtn();
    
    if (winner === "O") {
        playerOScore++;
        scoreO.innerText = playerOScore;
    } else {
        playerXScore++;
        scoreX.innerText = playerXScore;
    }
};

const showDraw = () => {
    msg.innerText = "It's a Draw! Try again.";
    msgContainer.classList.remove("hide");
    disableBtn();
};

const checkWinner = () => {
  for (let patterns of winPatterns) {
    
    let pos1val = boxes[patterns[0]].innerText;
    let pos2val = boxes[patterns[1]].innerText;
    let pos3val = boxes[patterns[2]].innerText;

    if (pos1val != "" && pos2val != "" && pos3val != ""){
        if (pos1val === pos2val && pos2val === pos3val){
            console.log("Winner",pos1val);
            showWinner(pos1val);
            return; // Exit early if there's a winner
        }

    }

  }
  
  // Check for draw
  let isDraw = true;
  for (let box of boxes) {
    if (box.innerText === "") {
      isDraw = false;
      break;
    }
  }
  
  if (isDraw) {
    showDraw();
  }
};

const resetScores = () => {
    playerOScore = 0;
    playerXScore = 0;
    scoreO.innerText = playerOScore;
    scoreX.innerText = playerXScore;
};

newBtn.addEventListener("click", resetGame);
reset_btn.addEventListener("click", resetGame);
resetScoresBtn.addEventListener("click", resetScores);


