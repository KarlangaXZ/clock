const WEEK_DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function updateClock() {
    let now = new Date();

    document.getElementById("time").innerText = 
        zeroPadding(now.getHours(), 2) + ":" +
        zeroPadding(now.getMinutes(), 2) + ":" +
        zeroPadding(now.getSeconds(), 2);

    document.getElementById("date").innerText = 
        now.getFullYear() + "-" +
        zeroPadding(now.getMonth() + 1, 2) + "-" +
        zeroPadding(now.getDate(), 2) + " " +
        WEEK_DAYS[now.getDay()];
}

updateClock();
setInterval(updateClock, 1000);

function zeroPadding(num, length) {
    return num.toString().padStart(length, '0');
}