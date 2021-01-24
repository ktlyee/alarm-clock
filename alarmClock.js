var timer = document.getElementById("timer");
var hours = document.getElementById("hours");
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");
var am_pm = document.getElementById("am-pm");
var start_stop = document.getElementById("start-stop");

var currentTime;
var alarmElement;
var activeAlarm = false;
var sound = new Audio("sound/iphone_alarm.mp3");
sound.loop = true;

function showTime() {
    let now = new Date();
    currentTime = now.toLocaleTimeString();
    if(currentTime === alarmElement) {
        sound.play();
    }
    timer.textContent = currentTime;
    setTimeout(showTime, 1000);
}
showTime();

function addMinSec(id) {
    var select = id;
    var mins = 59;
    for(i = 0; i <= mins; i++) {
        select.options[select.options.length] = new Option(i < 10 ? "0"+i : i);
    }
}
addMinSec(seconds);
addMinSec(minutes);

function addHour(id) {
    var select = id;
    var mins = 12;
    for(i = 0; i <= mins; i++) {
        select.options[select.options.length] = new Option(i);
    }
}
addHour(hours);

start_stop.onclick = function() {
    if(activeAlarm == false) {
        hours.disabled = true;
        minutes.disabled = true;
        seconds.disabled = true;
        am_pm.disabled = true;
        alarmElement = hours.value + ":" + minutes.value + ":" + seconds.value + " " + am_pm.value;
        this.textContent = "Clear Alarm";
        activeAlarm = true;
    } else {
        hours.disabled = false;
        minutes.disabled = false;
        seconds.disabled = false;
        am_pm.disabled = false;
        sound.pause();
        this.textContent = "Set Alarm";
        activeAlarm = false;
    }
}