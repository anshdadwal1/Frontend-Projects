let b1 = document.querySelector(".box1");
let b2 = document.querySelector(".box2");
let txt = document.querySelector("#txt");

b2.addEventListener("click", function () {
    let value = b1.value;

    if (value === "") {
        alert("Please Add a Task..");
    } else {
        let li = document.createElement("li");
        li.textContent = value;

    
        let del = document.createElement("span");
        del.innerHTML = " 🗑";
        del.style.cursor = "pointer";
        del.style.marginLeft = "15px";

        del.addEventListener("click", function () {
            li.remove();
        });

        li.appendChild(del);
        txt.appendChild(li);

        b1.value = ""; 
    }
});
