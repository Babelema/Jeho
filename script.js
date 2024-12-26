// This script file adds interactivity to your blog website

document.addEventListener('DOMContentLoaded', () => {
    // Example functionality: Alert when clicking on 'Read More' links
    const readMoreLinks = document.querySelectorAll('.read-more');

    readMoreLinks.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault(); // Prevent the default link behavior
            alert('Read more functionality coming soon!');
        });
    });

    // Example: Search functionality (placeholder for future expansion)
    const searchInput = document.querySelector('.search-input');
    const searchButton = document.querySelector('.search-button');

    searchButton.addEventListener('click', () => {
        const query = searchInput.value.trim();
        if (query) {
            alert(`Search for: ${query}`);
        } else {
            alert('Please enter a search term.');
        }
    });
});
