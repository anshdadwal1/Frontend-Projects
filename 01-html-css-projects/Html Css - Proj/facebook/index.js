function login() {
    const inputs = document.querySelectorAll('.input-box');
    const username = inputs[0].value;
    const password = inputs[1].value;

    if (username === "rian" && password === "14102023") {
        window.location.href = "home.html";
    } else {
        alert("Wrong Credentials");
    }
}

// Attach the function to the login button
document.querySelector('.login').addEventListener('click', login);
