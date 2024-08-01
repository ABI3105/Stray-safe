document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var message = document.getElementById('message');

    // Clear previous messages
    message.textContent = '';
    message.style.color = 'red';

    // Always treat any username and password as valid
    if (username && password) {
        message.textContent = 'Login successful!';
        message.style.color = 'green';

        // Redirect to a different page or perform other actions
        setTimeout(function() {
            window.location.href = 'home.html';
        }, 1000); // Delay for 1 second to show the success message
    } else {
        message.textContent = 'Please enter both username and password.';
    }
});
