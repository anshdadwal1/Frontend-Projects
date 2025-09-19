let start = document.querySelector("#start");
let timer = document.querySelector("#timer");
let time = document.querySelector("#time");

let timech = 10;

start.addEventListener("click",()=>{
    let interval = setInterval (function(){
        timech--;
        timer.innerHTML = timech;

    if(timech<=0){
        clearInterval(interval);
       time.style.display = "inline";
    }
}, 1000);
    });
