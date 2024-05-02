function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}
function isDarkModeEnabled() {
    return document.body.classList.contains('dark-mode');
}
function applyDarkModeStyles() {
    if (isDarkModeEnabled()) {
        document.body.style.backgroundColor = '#333';
        document.body.style.color = '#fff';
    } else {
        document.body.style.backgroundColor = '#ffffff';
        document.body.style.color = '#000000';
    }
}
document.addEventListener('DOMContentLoaded', function() {
    applyDarkModeStyles();
    const toggleButton = document.createElement('button');
    toggleButton.textContent = 'Toggle Dark Mode';
    toggleButton.style.position = 'fixed';
    toggleButton.style.top = '20px';
    toggleButton.style.right = '20px';
    toggleButton.style.padding = '10px 20px';
    toggleButton.style.backgroundColor = 'goldenrod';
    toggleButton.style.color = '#333';
    toggleButton.style.border = 'none';
    toggleButton.style.borderRadius = '5px';
    toggleButton.style.cursor = 'pointer';

    toggleButton.addEventListener('click', function() {
        toggleDarkMode();
        applyDarkModeStyles();
    });
    document.body.appendChild(toggleButton);
});
