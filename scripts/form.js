// Event listener for password confirmation input
document.getElementById('password2').addEventListener('input', function () {
    const passwordField = document.getElementById('password');
    const password = passwordField.value;
    const confirmPassword = this.value;
    const errorMsg = document.getElementById('password-error');

    // Check if passwords match
    if (password !== confirmPassword) {
        errorMsg.textContent = "Passwords do not match!";
        this.setCustomValidity("Passwords do not match!");
        passwordField.style.borderColor = 'red';
        this.style.borderColor = 'red';
    } else {
        errorMsg.textContent = "";
        this.setCustomValidity("");
        passwordField.style.borderColor = '';
        this.style.borderColor = '';
    }
});

// Event listener for email input validation
document.getElementById('email').addEventListener('input', function () {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@byui\.edu$/;
    const emailField = this;
    const errorMsg = document.getElementById('email-error');

    // Check if email matches the pattern
    if (!emailPattern.test(emailField.value)) {
        errorMsg.textContent = "Please enter a valid email address";
        emailField.setCustomValidity("Please enter a valid email address");
    } else {
        errorMsg.textContent = "";
        emailField.setCustomValidity("");
    }
});

// Event listener for rating input
document.getElementById('rating').addEventListener('input', function () {
    this.value = Math.max(1, Math.min(10, Math.round(this.value)));
    const ratingValue = document.getElementById('ratingValue');
    ratingValue.textContent = `Current Value: ${this.value}`;
});

// Event listener for hamburger menu toggle
document.getElementById('hamburger').addEventListener('click', function () {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('hidden');
});

// Event listener for form submission
document.getElementById('registration-form').addEventListener('submit', function (event) {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('password2').value;
    const errorMsg = document.getElementById('password-error');

    // Check if passwords match before submitting the form
    if (password !== confirmPassword) {
        event.preventDefault();
        errorMsg.textContent = 'Passwords do not match. Please try again.';
        document.getElementById('password').style.borderColor = 'red';
        document.getElementById('password2').style.borderColor = 'red';
    } else {
        errorMsg.textContent = '';
        document.getElementById('password').style.borderColor = '';
        document.getElementById('password2').style.borderColor = '';
    }
});