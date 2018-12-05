var lights = document.getElementsByTagName("span");
var timer;
changeLight();

window.onload = startTimer();

function startTimer() {
    timer = setInterval(changeLight, 1000);
}

function changeLight() {
    console.log("dab")
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