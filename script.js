let stopkyInterval;
let casovacInterval;
let stopkyTime = 0;
let casovacTime = 0;

function startStopky() {
    if (!stopkyInterval) {
        stopkyInterval = setInterval(() => {
            stopkyTime++;
            document.getElementById('stopky-display').textContent = formatTime(stopkyTime);
        }, 1000);
    }
}

function stopStopky() {
    clearInterval(stopkyInterval);
    stopkyInterval = null;
}

function resetStopky() {
    stopStopky();
    stopkyTime = 0;
    document.getElementById('stopky-display').textContent = "00:00:00";
}

function startCasovac() {
    let hodiny = parseInt(document.getElementById('cas-hodiny').value) || 0;
    let minuty = parseInt(document.getElementById('cas-minuty').value) || 0;
    let sekundy = parseInt(document.getElementById('cas-sekundy').value) || 0;
    casovacTime = (hodiny * 3600) + (minuty * 60) + sekundy;

    if (casovacTime > 0 && !casovacInterval) {
        casovacInterval = setInterval(() => {
            casovacTime--;
            document.getElementById('casovac-display').textContent = formatTime(casovacTime);
            if (casovacTime <= 0) {
                clearInterval(casovacInterval);
                casovacInterval = null;
            }
        }, 1000);
    }
}

function stopCasovac() {
    clearInterval(casovacInterval);
    casovacInterval = null;
}

function resetCasovac() {
    stopCasovac();
    casovacTime = 0;
    document.getElementById('casovac-display').textContent = "00:00:00";
}

function formatTime(seconds) {
    let h = Math.floor(seconds / 3600);
    let m = Math.floor((seconds % 3600) / 60);
    let s = seconds % 60;
    return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}
