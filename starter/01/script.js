// const getStart = document.querySelector(".start");
// const getStop = document.querySelector(".stop");
// const square = document.querySelector(".square");

// let rotateInterval;
// let deg = 0;
// With two buttons Examlple 1

// getStart.addEventListener("click", () => {
//     getStart.setAttribute("disabled", true);
//     rotateInterval = setInterval(() => {
//         console.log("interval called")
//         deg += 30;
//         square.style.transform = `rotate(${deg}deg)`
//     }, 1000);

// });

// getStop.addEventListener("click", () => {
//     getStart.removeAttribute("disabled");
//     clearInterval(rotateInterval)
// });

// With one button Example 2

const startStop = document.querySelector(".start-stop");
const square = document.querySelector(".square");

let rotateInterval;
let deg = 0;
// Flag
let mode = "start";

startStop.addEventListener("click", () => {
    if (mode === "start") {
        startStop.innerText = "Stop";
        mode = "stop";
        rotateInterval = setInterval(() => {
            console.log("interval called")
            deg += 30;
            square.style.transform = `rotate(${deg}deg)`;
        }, 1000);
    }
    else {
        startStop.innerText = "start"
        mode = "start";
        clearInterval(rotateInterval);
    }

});