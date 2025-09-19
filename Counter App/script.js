
let inc = document.querySelector("#inc");
let countDis = document.querySelector("#count");
let dec = document.querySelector("#dec");
let reset = document.querySelector("#reset");

let count = 0

inc.addEventListener("click",function(){
    count++;
    countDis.textContent = count;
});

dec.addEventListener("click",function(){
    count--;
    countDis.textContent = count;
});

reset.addEventListener("click",function(){
    count = 0;
    countDis.textContent = count;
});



