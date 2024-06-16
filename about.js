document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM fully loaded and parsed");

    // Light/Dark mode switch
    const modeSwitch = document.getElementById('mode-switch');
    modeSwitch.addEventListener('change', toggleMode);
    loadModeFromStorage();
});

function toggleMode() {
    document.body.classList.toggle('dark-mode');
    saveModeToStorage();
}

function saveModeToStorage() {
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
}

function loadModeFromStorage() {
    const isDarkMode = JSON.parse(localStorage.getItem('darkMode'));
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        document.getElementById('mode-switch').checked = true;
    }
}
