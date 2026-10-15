document.addEventListener("DOMContentLoaded", function () {
    const sqaures = document.querySelectorAll("#board div");
    sqaures.forEach(function (square) {
        square.classList.add("square");
    });
});