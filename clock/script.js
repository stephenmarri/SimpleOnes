let elbody, elClock, animationInterval, options, delayInMS
window.addEventListener('DOMContentLoaded', () => {
    console.log('Script Start');
    elbody = document.querySelector('body')
    elClock = document.querySelector('#clock_text')
    delayInMS = 7000
    let elClocktext = document.querySelector('#clock_text');

    options = {        
        timeStyle: 'medium',
        timeZone: 'Asia/Kolkata',
        hourCycle: "h12"
    }

    const timeInterval = setInterval(()=>{
        elClocktext.innerText = new Intl.DateTimeFormat('en', options).format(new Date())
    }, 1000)

    animationInterval = setInterval(performAnimation, delayInMS);        

    //easter eggs
    elbody.addEventListener("dblclick",()=>{ resetColors()})
    elClock.addEventListener('click',()=>{options.hourCycle = options.hourCycle =='h24' ?'h12': 'h24'})


})

function performAnimation(){
    let ind = getRandomInt(colors.length)
       
    console.log('original color', elbody.style.backgroundColor);
    console.log('Inverted color', invertColor(colors[ind]['hex']));
    
    console.log('index is',ind);       
    elbody.style.background= colors[ind]['rgb']
    elClock.style.color = invertColor(colors[ind]['hex'])
}

function resetColors(){
    console.log('togglig colors');

    elbody.style.background = '#FFFEF7'
    elClock.style.color = '#020F4C'
    let dot = document.querySelector('#dot')
    dot.classList.toggle('d-none');
    console.log(animationInterval);
    
    if(animationInterval == 'undefined' || animationInterval == null) {
        animationInterval = setInterval(performAnimation, delayInMS);   
    }else{
        clearInterval(animationInterval);
        animationInterval = null
    }
}


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function invertColor(hex) {
    if (hex.indexOf('#') === 0) {
        hex = hex.slice(1);
    }
    // convert 3-digit hex to 6-digits.
    if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    if (hex.length !== 6) {
        throw new Error('Invalid HEX color.');
    }
    // invert color components
    var r = (255 - parseInt(hex.slice(0, 2), 16)).toString(16),
        g = (255 - parseInt(hex.slice(2, 4), 16)).toString(16),
        b = (255 - parseInt(hex.slice(4, 6), 16)).toString(16);
    // pad each with zeros and return
    return '#' + padZero(r) + padZero(g) + padZero(b);
}

function padZero(str, len) {
    len = len || 2;
    var zeros = new Array(len).join('0');
    return (zeros + str).slice(-len);
}