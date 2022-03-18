const player = document.getElementById("player");
const cactus1 = document.getElementById("cactus1");
const fondo = document.getElementById("fondo");
const buttonPlayStop = document.getElementById("buttonPlayStop");
let score = 0;
let scoreInterval;

document.addEventListener("click", function() {
    player.classList.add("playerJump")
});

document.addEventListener('animationend', () => {
    player.classList.remove("playerJump")
})

function stopAnimation() {
    cactus1.style.animationPlayState = 'paused';
    player.style.animationPlayState = 'paused';
    fondo.style.animationPlayState = 'paused';
}

function resumeGame() {
    cactus1.style.animationPlayState = 'running';
    player.style.animationPlayState = 'running';
    fondo.style.animationPlayState = 'running';
}

buttonPlayStop.addEventListener('click', () => {
    if (buttonPlayStop.classList.toggle("play")) {
        resumeGame();
    } else {
        stopAnimation()
    }

});

scoreInterval = setInterval(() => {
    score++;
    document.getElementById("score").innerText = score;
}, 1000);