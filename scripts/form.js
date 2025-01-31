document.getElementById('password2').addEventListener('input', function () {
    const passwordField = document.getElementById('password');
    const password = passwordField.value;
    const confirmPassword = this.value;
    const errorMsg = document.getElementById('password-error');
    if (password !== confirmPassword) {
        errorMsg.textContent = "Passwords do not match!";
        this.setCustomValidity("Passwords do not match!");
        passwordField.focus();
        passwordField.value = '';
        this.value = '';
    } else {
        errorMsg.textContent = "";
        this.setCustomValidity("");
    }
});

document.getElementById('email').addEventListener('input', function () {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@byui\.edu$/;
    const emailField = this;
    const errorMsg = document.getElementById('email-error');
    if (!emailPattern.test(emailField.value)) {
        errorMsg.textContent = "Please enter a valid email address";
        emailField.setCustomValidity("Please enter a valid email address");
    } else {
        errorMsg.textContent = "";
        emailField.setCustomValidity("");
    }
});

document.getElementById('rating').addEventListener('input', function () {
    const ratingValue = document.getElementById('ratingValue');
    ratingValue.textContent = `Current Value: ${this.value}`;
});

document.getElementById('hamburger').addEventListener('click', function () {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('hidden');
});