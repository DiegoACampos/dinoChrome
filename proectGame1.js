const player = document.getElementById("player");
let score = 0;
let scoreInterval;

document.addEventListener("click", function() {
    player.classList.add("playerJump")
});

document.addEventListener("animationend", () => {
    player.classList.remove("playerJump")
})

scoreInterval = setInterval(() => {
    score++;
    document.getElementById("score").innerText = score;
}, 100);