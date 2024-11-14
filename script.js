let h1 = document.querySelector("h1");

let minutes = "00";
let hours = "00";
let seconds = "00";
let milliSecond = "00";

setInterval(()=>{
    
    let watch = `${hours}:${minutes}:${seconds++}`;
    if(seconds >= 60){
        seconds = 0;
        minutes++
    }
    if(minutes >= 60){
        minutes = 0;
        hours++
    }
    h1.innerText = watch;
  
},1000)