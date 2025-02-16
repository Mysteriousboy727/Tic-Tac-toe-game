let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelectorAll("#reset");

let turnO = true; //playerX , player0

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const msgContainer = document.getElementById("msgContainer");
const msg = document.getElementById("msg");

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if(turnO){
            box.innerText = "0";
            turnO = false;
        }else{
            box.innerText="X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const showWinner= (winner) => {
    msg.innerText = 'Congratulations, Winner is $(winner)';
    msgContainer.classList.remove("hide");
};

const checkWinner = () => {
    for (let pattern of winPatterns) {
  
            let pos1Val = boxes[pattern[0]].innerText;
            let pos2Val = boxes[pattern[0]].innerText;
            let pos3Val = boxes[pattern[0]].innerText;

            if(pos1Val !="" && pos2Val !=""&& pos3Val !=""){
            {
                if(pos1Val ==pos2Val && pos2Val==pos3Val){
                console.log("Winner",pos1Val);
                showWinner();

            }
            }
        }
        
    }
}

