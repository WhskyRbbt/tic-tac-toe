let playerTurn = false;
const board = [null, null, null, null, null, null, null, null, null];
const matchWin = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [2, 4, 6], [0, 4, 8]
];

function init() {
    let squares = document.querySelectorAll('.box')
    console.log(squares);
    squares.forEach(square => {
        square.addEventListener('click', playerChoice)
    })
}


function winCheck() {
    for (let i = 0; i < matchWin.length; i++) {
        if (board[matchWin[i][0]] === "X" && board[matchWin[i][1]] === "X" && board[matchWin[i][2]] === "X") {
            document.getElementById('player').innerText = "X Wins!"
        } else if (board[matchWin[i][0]] === "O" && board[matchWin[i][1]] === "O" && board[matchWin[i][2]] === "O") {
            document.getElementById('player').innerText = "O Wins!"
        } else if 
            (!board.includes(null)) {
                document.getElementById('player').innerText = "No Winner..."
        }
    }
} 


function playerChoice() {
    let box = document.getElementById(event.target.id) 
    if (box.innerText === "X" || box.innerText === "O") {
        console.log("hi")
    } else {
        if (playerTurn) {
            board[event.target.id] = "X";
            box.innerText = "X";
            // playerChange();
        } else {
            board[event.target.id] = "O";
            box.innerText = "O";
            // playerChange();
        }
        playerChange();
    } 
   winCheck();
};


function playerChange() { 
    if (playerTurn) {
        document.getElementById('player').innerHTML = 'It is now time to play O';
        playerTurn = false;
     } else {
            document.getElementById('player').innerHTML = 'It is now time to play X';
            playerTurn = true;
        } 
};


init();


