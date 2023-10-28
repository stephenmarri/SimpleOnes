console.log("Script Started")
var delayInMilliSeconds, startTime, eleTimeText, sTimer, dummy

window.addEventListener('DOMContentLoaded',()=>{
    delayInMilliSeconds = 100
    startTime = new Date("JAN, 1, 1990");
    eleTimeText = document.querySelector('#time_text')
    eleTimeMS = document.querySelector('#ms_text')
    startButton = document.querySelector('#btn_start')

    eleTimeText.parentElement.parentElement.addEventListener('click', function (evt) {
        if (evt.detail === 3) {
            toggleMS()
            
        }else{
            if (evt.detail === 1) {
                if(sTimer == null) {
                    startTimer()
                }else{
                    stopTimer()
                }
    
            }
        }
        
    });
    
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
    startButton.disabled = true
    sTimer = setInterval(updateTime, delayInMilliSeconds);
    eleTimeText.parentElement.classList.toggle('running')
}

function stopTimer() {
    clearInterval(sTimer)
    sTimer = null
    startButton.disabled = false
    eleTimeText.parentElement.classList.toggle('running')
    console.log("Timer Stopped")
}

function resetTimer(){
    console.log("Timer Reset")
    showTime(new Date("JAN, 1, 1990"))
}

function toggleMS(){
    eleTimeMS.classList.toggle('v-none')
}