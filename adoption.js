// adoption.js

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('adoption-form');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the default form submission

        // Collect form data
        const animal = document.getElementById('animal').value;
        const name = document.getElementById('adopter-name').value;
        const contact = document.getElementById('adopter-contact').value;

        // Basic validation
        if (animal && name && contact) {
            // Display a success message
            alert('Thank you for your application! We will review your submission and contact you soon.');
            
            // Optionally, you could send the form data to a server here
            // For example:
            // fetch('your-server-endpoint', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify({ animal, name, contact })
            // })
            // .then(response => response.json())
            // .then(data => console.log(data))
            // .catch(error => console.error('Error:', error));
            
            // Reset the form
            form.reset();
        } else {
            // Display an error message
            alert('Please fill in all fields.');
        }
    });
});
