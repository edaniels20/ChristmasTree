var lights = document.getElementsByTagName("span");
var timer;
var landing = document.getElementById("landingWrapper");
var tree = document.getElementById("treeWrapper");

window.onload = startTimer();
document.addEventListener('click', playButton)

function playButton() {
    var newAudio = new Audio("Song.mp3");
        newAudio.volume = .16;
        newAudio.currentTime = 32;
        newAudio.play();
        changeLight();
        document.removeEventListener("click", playButton)
        landing.style.display = "none";
        tree.style.display = "block";
}

function startTimer() {
    timer = setInterval(changeLight, 1000);
}

function changeLight() {
    for (i in lights) {
        if (lights[i].className === "redLight") {
            lights[i].className = "blueLight";
        } else if (lights[i].className === "blueLight") {
            lights[i].className = "yellowLight";
        } else if (lights[i].className === "yellowLight") {
            lights[i].className = "redLight";
        } else if (lights[i].className === "snow") {
            lights[i].className = "noSnow";
        } else if (lights[i].className === "noSnow") {
            lights[i].className = "snow"
        }
    }
}