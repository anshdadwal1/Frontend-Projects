let inpbox = document.querySelector("#inpbox");
let count = document.querySelector("#Count");

inpbox.addEventListener("input",function(dets){
    if(dets.data === null){
       return;}
       else{
       console.log(dets.data);
       
     }
});


inpbox.addEventListener("input",function(dets){
   count.textContent = dets.target.textLength;
});

