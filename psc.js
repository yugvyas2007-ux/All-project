const inputfield = document.getElementById("password");
const outputfield = document.getElementById("output");

inputfield.addEventListener('input', function () {
    const password = inputfield.value;

    if (password.length < 8) {
        outputfield.innerText = "Password is too short";
        outputfield.style.color = "red";
    }
    else if (password.search(/[a-z]/) === -1) {
        outputfield.innerText = "Missing lowercase letter";
        outputfield.style.color = "orange";
    }
    else if (password.search(/[A-Z]/) === -1) {
        outputfield.innerText = "Missing uppercase letter";
        outputfield.style.color = "blue";
    }
    else if (password.search(/[0-9]/) === -1) {
        outputfield.innerText = "Missing number";
        outputfield.style.color = "purple";
    }
    else if (password.search(/[@$!%*?&]/) === -1) {
        outputfield.innerText = "Missing special character";
        outputfield.style.color = "pink";
    }
    else {
        outputfield.innerText = "Password is strong 💪";
        outputfield.style.color = "green";
    }
});