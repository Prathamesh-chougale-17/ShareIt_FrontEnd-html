const form = document.getElementById('myForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const passwordInput = document.getElementById('password');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    if (validateForm()) {
        alert('Form submitted successfully!');
        form.reset(); // Reset the form
    }
});

function validateForm() {
    let isValid = true;

    if (nameInput.value.trim() === '') {
        showError(nameInput, 'Name is required');
        isValid = false;
    } else {
        removeError(nameInput);
    }

    if (emailInput.value.trim() === '') {
        showError(emailInput, 'Email is required');
        isValid = false;
    } else if (!isValidEmail(emailInput.value.trim())) {
        showError(emailInput, 'Invalid email address');
        isValid = false;
    } else {
        removeError(emailInput);
    }

    if (phoneInput.value.trim() === '') {
        showError(phoneInput, 'Phone number is required');
        isValid = false;
    } else if (!isValidPhone(phoneInput.value.trim())) {
        showError(phoneInput, 'Invalid phone number');
        isValid = false;
    } else {
        removeError(phoneInput);
    }

    if (passwordInput.value.trim() === '') {
        showError(passwordInput, 'Password is required');
        isValid = false;
    } else if (passwordInput.value.trim().length < 6) {
        showError(passwordInput, 'Password must be at least 6 characters long');
        isValid = false;
    } else {
        removeError(passwordInput);
    }

    return isValid;
}

function showError(input, message) {
    const errorElement = input.nextElementSibling;
    errorElement.innerText = message;
    errorElement.style.display = 'block';
}

function removeError(input) {
    const errorElement = input.nextElementSibling;
    errorElement.innerText = '';
    errorElement.style.display = 'none';
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhone(phone) {
    const phoneRegex = /^[0-9]{10}$/; // Assuming a 10-digit phone number
    return phoneRegex.test(phone);
}
