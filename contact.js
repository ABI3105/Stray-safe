document.addEventListener('DOMContentLoaded', () => {
    const pawContainer = document.querySelector('.paw-animations');

    for (let i = 0; i < 50; i++) {
        const paw = document.createElement('div');
        paw.className = 'paw';
        paw.textContent = '🐾'; // You can also use an image here if preferred
        
        // Randomize position
        paw.style.top = `${Math.random() * 100}vh`;  // Random top position
        paw.style.left = `${Math.random() * 100}vw`; // Random left position
        paw.style.opacity = Math.random() * 0.5 + 0.5; // Random opacity between 0.5 and 1

        // Append paw to container
        pawContainer.appendChild(paw);
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Thank you for your message!');
    });
});
