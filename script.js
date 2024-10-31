let startTime = 0;
let elapsedTime = 0;
let timerInterval;
let running = false;

function start() {
    if (!running) {
        running = true;
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(updateTime, 100);
    }
}

function pause() {
    if (running) {
        running = false;
        clearInterval(timerInterval);
        elapsedTime = Date.now() - startTime;
    }
}

function reset() {
    running = false;
    clearInterval(timerInterval);
    elapsedTime = 0;
    document.getElementById("time").innerHTML = "00:00:00";
    document.getElementById("laps").innerHTML = ""; // Clear all lap times
}

function lap() {
    if (running) {
        const currentTime = document.getElementById("time").textContent; // Get current time display
        const lapRecord = document.createElement("div");
        lapRecord.textContent = "Lap: " + currentTime;
        document.getElementById("laps").appendChild(lapRecord); // Append lap time to laps section
    }
}

function updateTime() {
    elapsedTime = Date.now() - startTime;

    let seconds = Math.floor((elapsedTime / 1000) % 60);
    let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    let hours = Math.floor((elapsedTime / (1000 * 60 * 60)) % 24);

    seconds = seconds < 10 ? "0" + seconds : seconds;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    hours = hours < 10 ? "0" + hours : hours;

    document.getElementById("time").innerHTML = hours + ":" + minutes + ":" + seconds;
}