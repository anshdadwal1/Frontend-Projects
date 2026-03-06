let b1 = document.querySelector(".box1");
let b2 = document.querySelector(".box2");
let output = document.querySelector("#output");
let txt = document.querySelector("#txt");

b2.addEventListener("click", function () {
    let value = b1.value;

    if (value === "") {
        alert("Please Add a Task..");
    } else {
        let li = document.createElement("li");
        li.textContent = value;
        txt.appendChild(li);
    }
});






