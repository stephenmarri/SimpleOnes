console.log("Script Started")
var delayInMilliSeconds, startTime, eleTimeText, sTimer

window.addEventListener('DOMContentLoaded',()=>{
    delayInMilliSeconds = 100
    startTime = new Date("JAN, 1, 1990");
    eleTimeText = document.querySelector('#time_text')
    eleTimeMS = document.querySelector('#ms_text')
    
})
 

function updateTime() {        
    var newTime = new Date(startTime.setMilliseconds(startTime.getMilliseconds() +  delayInMilliSeconds))
    showTime(newTime)
}

function showTime(timeToShow){    
    const ts = timeToShow.toLocaleTimeString('it-IT')
    eleTimeText.innerText = ts 
    eleTimeMS.innerText = "." + String(timeToShow.getMilliseconds()).padStart(3, '0').slice(0, -2)
}

function startTimer() {
    console.log("Timer Started")
    sTimer = setInterval(updateTime, delayInMilliSeconds);
}

function stopTimer() {
    clearInterval(sTimer)
    console.log("Timer Stopped")
}

function resetTimer(){
    console.log("Timer Reset")
    showTime(new Date("JAN, 1, 1990"))
}

function toggleMS(){
    eleTimeMS.classList.toggle('v-none')
}