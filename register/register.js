document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    var message = document.getElementById('message');

    // Clear previous messages
    message.textContent = '';
    message.style.color = 'red';

    if (password !== confirmPassword) {
        message.textContent = 'Passwords do not match.';
        return;
    }

    if (password.length < 6) {
        message.textContent = 'Password must be at least 6 characters long.';
        return;
    }

    // Example of simple validation
    if (!username || !email || !password || !confirmPassword) {
        message.textContent = 'All fields are required.';
        return;
    }

    message.textContent = 'Registration successful!';
    message.style.color = 'green';

    // Here you can add your code to send the data to your server

    // Reset form
    document.getElementById('registerForm').reset();
});
