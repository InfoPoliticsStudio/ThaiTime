function updateTime() {
    const timeElement = document.getElementById('time');
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    const currentTime = `${hours}:${minutes}:${seconds}`;

    // Update the time displayed on the page
    timeElement.textContent = currentTime;

    // Update the title tag with the current time
    document.title = currentTime;
}

setInterval(updateTime, 1000);
updateTime(); // Initial call to display the time immediately
