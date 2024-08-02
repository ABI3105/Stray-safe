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
document.addEventListener('DOMContentLoaded', () => {
    const pawContainer = document.querySelector('.paw-animations');

    for (let i = 0; i < 50; i++) {
        const paw = document.createElement('div');
        paw.className = 'paw';
        paw.textContent = '🐾';
        
        // Random position
        paw.style.top = `${Math.random() * 100}vh`;
        paw.style.left = `${Math.random() * 100}vw`;

        // Random animation duration
        paw.style.animationDuration = `${Math.random() * 10 + 5}s`;
        
        // Random size
        paw.style.fontSize = `${Math.random() * 30 + 20}px`;

        // Append to container
        pawContainer.appendChild(paw);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.getElementById('search-form');
    searchForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the default form submission
        const searchQuery = document.getElementById('search-query').value;
        if (searchQuery.trim() !== "") {
            // Redirect to search results page with query parameter
            window.location.href = `search.html?query=${encodeURIComponent(searchQuery)}`;
        }
    });
});
