// event.js

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registration-form');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission

        // Basic form validation
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if (email && password) {
            // Redirect to event.html after successful registration
            window.location.href = 'event.html';
        } else {
            alert('Please fill in both fields.');
        }
    });
});
