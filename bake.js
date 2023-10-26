const validUsername = "user123";
const validPassword = "password123";

const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");

    const enteredUsername = usernameInput.value;
    const enteredPassword = passwordInput.value;

    if (enteredUsername === validUsername && enteredPassword === validPassword) {
        // Redirect to the secured page upon successful login
        window.location.href = "home.html";
    } else {
        alert("Invalid username or password. Please try again.");
    }
});