// adoption.js

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('adoption-form');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the default form submission

        // Basic form validation
        const animal = document.getElementById('animal').value;
        const name = document.getElementById('adopter-name').value;
        const contact = document.getElementById('adopter-contact').value;

        if (animal && name && contact) {
            alert('Thank you for your application! We will get in touch with you soon.');
            // Optionally, you could send the form data to a server here
        } else {
            alert('Please fill in all fields.');
        }
    });
});
