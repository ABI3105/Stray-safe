// This script will handle the search functionality (basic example)
document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.getElementById('search-form');
    searchForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const searchQuery = document.getElementById('search-query').value;
        alert(`You searched for: ${searchQuery}`);
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const pawContainer = document.querySelector('.paw-animations');
    
    for (let i = 0; i < 50; i++) {
        const paw = document.createElement('div');
        paw.className = 'paw';
        paw.textContent = '🐾';
        paw.style.top = `${
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
