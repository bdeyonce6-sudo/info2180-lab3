document.addEventListener("DOMContentLoaded", function () {
    const sqaures = document.querySelectorAll("#board div");

    let currentPlayer = "X";
    let gameBoard = ["", "", "", "", "", "", "", "", ""];

    sqaures.forEach(function (square, index) {
        square.classList.add("square");

        square.addEventListener("click", function () {
            if (gameBoard[index] === "") {
                square.textContent = currentPlayer;
                square.classList.add(currentPlayer);

                gameBoard[index] = currentPlayer;

                if (currentPlayer === "X") {
                    currentPlayer = "0";
                } else {
                    currentPlayer = "X";
                }
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