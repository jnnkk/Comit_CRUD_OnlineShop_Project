var timeLeft = 3;
var countdownElement = document.getElementById('countdown');

var timerId = setInterval(function() {
    if (timeLeft == -1) {
        clearTimeout(timerId);
    } else {
        countdownElement.innerHTML = timeLeft;
        timeLeft--;
    }
}, 1000);