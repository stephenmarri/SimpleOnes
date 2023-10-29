window.addEventListener('DOMContentLoaded', () => {
    console.log('Script Start');
    let elClocktext = document.querySelector('#clock_text');
    let options = {        
        timeStyle: 'medium',
        timeZone: 'Asia/Kolkata',
        hourCycle: "h12"
    }
    

    setInterval(()=>{
        elClocktext.innerText = new Intl.DateTimeFormat('en', options).format(new Date())
    }, 1000)
})