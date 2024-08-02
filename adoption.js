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
document.addEventListener('DOMContentLoaded', () => {
    const pawContainer = document.querySelector('.paw-animations');

    for (let i = 0; i < 50; i++) {
        const paw = document.createElement('div');
        paw.className = 'paw';
        paw.textContent = '🐾';
        paw.style.top = `${Math.random() * 100}vh`;
        paw.style.left = `${Math.random() * 100}vw`;
        paw.style.fontSize = `${Math.random() * 30 + 20}px`; // Randomize font size
        paw.style.animationDuration = `${Math.random() * 10 + 5}s`; // Randomize animation duration
        pawContainer.appendChild(paw);
    }
});
