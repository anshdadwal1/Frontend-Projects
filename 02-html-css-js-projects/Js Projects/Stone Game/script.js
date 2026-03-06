let choices = ["stone","paper","scissor"]

let yscoreEl = document.querySelector("#yscore");
let cscoreEl = document.querySelector("#cscore");

let yscore = 0;
let cscore = 0;

function checkWinner(userChoice, compChoice){
if(userChoice === "stone" && compChoice === "paper"){
    cscore++;
    alert("Computer win")
}
else if(userChoice === "stone" && compChoice === "scissor"){
    yscore++;

   alert(`${compChoice}, User Wins`)
}
else if(userChoice === "stone" && compChoice === "stone"){
    alert(compChoice, "It' a draw")
}
else if(userChoice === "paper" && compChoice === "paper"){
    alert(compChoice, "It' a draw")
}
else if(userChoice === "scissor" && compChoice === "scissor"){
    alert(compChoice, "It' a draw")
}
else if(userChoice === "paper" && compChoice === "stone"){
    yscore++;
    alert(compChoice, "You win")
}
else if(userChoice === "paper" && compChoice === "scissor"){
    cscore++;
    alert(compChoice, "Computer win")
}
else if(userChoice === "scissor" && compChoice === "paper"){
    yscore++;
    alert(compChoice, "You win")
}
else if(userChoice === "scissor" && compChoice === "stone"){
    cscore++;
    alert(compChoice, "Computer win")
}
    yscoreEl.textContent = yscore;
    cscoreEl.textContent = cscore;
}



let stone = document.querySelector("#stone")
let paper = document.querySelector("#paper")
let scissor = document.querySelector("#scissor")

stone.addEventListener("click",(dets)=>{
    let userChoice = dets.target.alt;
    let compChoice = choices[Math.floor(Math.random() * choices.length)];
    checkWinner(userChoice, compChoice);
})

paper.addEventListener("click",(dets)=>{
     let userChoice = dets.target.alt;
    let compChoice = choices[Math.floor(Math.random() * choices.length)];
    checkWinner(userChoice, compChoice);
})

scissor.addEventListener("click",(dets)=>{
     let userChoice = dets.target.alt;
     let compChoice = choices[Math.floor(Math.random() * choices.length)];
     checkWinner(userChoice, compChoice);
})

let reset = document.querySelector("#reset")

reset.addEventListener("click",()=>{
    yscore = 0;  
    cscore = 0;
    yscoreEl.textContent = yscore;
    cscoreEl.textContent = cscore;
})