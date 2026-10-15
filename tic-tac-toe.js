document.addEventListener("DOMContentLoaded", function () {
    const sqaures = document.querySelectorAll("#board div");

    function checkWinner() {
        for (let combination of winningCombinations) {
            let a = combination[0];
            let b = combination[1];
            let c = combination[2];

            if (
                gameBoard[a] !== "" &&
                gameBoard[a] === gameBoard[b] &&
                gameBoard[b] === gameBoard[c]
            ){
                status.textContent = "Congratulations! " + gameBoard[a] + " is the Winner!";

                status.classList.add("you-won");
                gameOver = true;
                return;
            }
        }
    }

    let currentPlayer = "X";
    let gameBoard = ["", "", "", "", "", "", "", "", ""];

    const status = document.getElementById("status");
    let gameOver = false;

    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    const newGameButton = document.querySelector(".btn");
    const originalStatus = status.textContent;

    newGameButton.addEventListener("click", function () {
        gameBoard = ["", "", "", "", "", "", "", "", ""];

        currentPlayer = "X";
        gameOver = false;

        sqaures.forEach(function (square) {
            square.textContent = "";
            square.classList.remove("X", "O", "hover");
        });

        status.textContent = originalStatus;
        status.classList.remove("you-won");
    });

    sqaures.forEach(function (square, index) {
        square.classList.add("square");

        square.addEventListener("click", function () {
            // Do not allow moves after game has ended
            if (gameOver) {
                return;
            }

            //Do not allow an occupied square to be changed
            if (gameBoard[index] !== "") {
                return;
            }
            
            square.textContent = currentPlayer;
            square.classList.add(currentPlayer);

            gameBoard[index] = currentPlayer;

            checkWinner();

            if (currentPlayer === "X") {
                currentPlayer = "0";
            } else {
                currentPlayer = "X";
            }
        });

        square.addEventListener("mouseover", function () {
            square.classList.add("hover");
        });

        square.addEventListener("mouseout", function () {
            square.classList.remove("hover");
        });
    });
});