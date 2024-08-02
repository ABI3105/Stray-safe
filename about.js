// about.js

// Function to perform search and navigate to the appropriate page
function performSearch(event) {
    event.preventDefault();
    const query = document.getElementById('search-query').value.toLowerCase();
    const pages = {
        'home': 'home.html',
        'about': 'about.html',
        'contact': 'contact.html',
        'animals': 'animals.html',
        'donate': 'donate.html'
    };

    for (const [key, url] of Object.entries(pages)) {
        if (query.includes(key)) {
            window.location.href = url;
            return;
        }
    }

    // Optionally show an alert or message if no matches found
    alert('No results found. Please try again.');
}

// Add event listener to the search form
document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.getElementById('search-form');
    if (searchForm) {
        searchForm.addEventListener('submit', performSearch);
    }
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
