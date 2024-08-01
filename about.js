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
