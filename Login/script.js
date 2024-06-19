const button = document.getElementById("button");

button.addEventListener('click', submit);

function submit() {
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const result = document.getElementById("result");

    let email = emailInput.value.trim();
    let password = passwordInput.value.trim();
    result.textContent = "";

    if (email === "" && password === "") {
        result.textContent = "Both input fields are empty";
        emailInput.style.borderColor = 'red';
        passwordInput.style.borderColor = 'red';

        setTimeout(() => {
            result.textContent = "";
            emailInput.style.borderColor = '';
            passwordInput.style.borderColor = '';
        }, 3000);
        return;
    }

    if (email === "") {
        result.textContent = "Please provide the email";
        emailInput.style.borderColor = 'red';

        setTimeout(() => {
            result.textContent = "";
            emailInput.style.borderColor = '';
        }, 3000);
        return;
    } else {
        emailInput.style.borderColor = '';
    }

    if (password === "") {
        result.textContent = "Please provide the password";
        passwordInput.style.borderColor = 'red';

        setTimeout(() => {
            result.textContent = "";
            passwordInput.style.borderColor = '';
        }, 3000);
        return;
    } else {
        passwordInput.style.borderColor = '';
    }

    let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let matches = regex.test(email);

    if (!matches) {
        result.textContent = "Please provide a valid email";
        setTimeout(() => {
            result.textContent = "";
        }, 3000);
        return;
    }

    if (password.length < 8) {
        result.textContent = "Password length must be at least 8 characters";
        setTimeout(() => {
            result.textContent = "";
        }, 3000);
        return;
    }

    result.textContent = "Successfully submitted";
}
