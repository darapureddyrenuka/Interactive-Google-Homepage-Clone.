// Search functionality
function performSearch() {
    const query = document.getElementById('search-input').value;
    if (query) {
        window.open(`https://www.google.com/search?q=${query}`, '_blank');
    }
}

// I'm Feeling Lucky functionality
function feelingLucky() {
    window.open('https://en.wikipedia.org/wiki/Special:Random', '_blank');
}

// Dark mode toggle
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

// Sample search suggestions
const suggestionsList = ["Google", "Gmail", "Google Maps", "YouTube", "Google Translate", "Google Photos", "Google Docs"];
const suggestionsContainer = document.getElementById('suggestions');
const searchInput = document.getElementById('search-input');

// Display suggestions dynamically based on input
searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    suggestionsContainer.innerHTML = '';
    if (query) {
        const filteredSuggestions = suggestionsList.filter(suggestion => suggestion.toLowerCase().includes(query));
        filteredSuggestions.forEach(suggestion => {
            const suggestionElement = document.createElement('div');
            suggestionElement.textContent = suggestion;
            suggestionElement.onclick = () => {
                searchInput.value = suggestion;
                suggestionsContainer.innerHTML = '';
            };
            suggestionsContainer.appendChild(suggestionElement);
        });
        suggestionsContainer.style.display = 'block';
    } else {
        suggestionsContainer.style.display = 'none';
    }
});

// Hide suggestions when clicking outside
document.addEventListener('click', (e) => {
    if (!suggestionsContainer.contains(e.target) && e.target !== searchInput) {
        suggestionsContainer.style.display = 'none';
    }
});
