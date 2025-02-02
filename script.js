function updateTime() {
    const utcTime = new Date().toUTCString();
    document.getElementById("utc-time").textContent = `UTC Time: ${utcTime}`;
}

// Update time on page load
updateTime();

// Refresh time every second
setInterval(updateTime, 1000);
