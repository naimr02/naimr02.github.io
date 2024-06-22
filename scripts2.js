document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM fully loaded and parsed");

    // Light/Dark mode switch
    const modeSwitch = document.getElementById('mode-switch');
    modeSwitch.addEventListener('change', toggleMode);
    loadModeFromStorage();

    const savedFontClass = localStorage.getItem('selectedFont') || 'font-jakarta';
    const fontSelect = document.getElementById('font-select');
    document.body.classList.add(savedFontClass);

    // Set the font-select value based on the class name
    const savedFont = savedFontClass.replace('font-', '').replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    fontSelect.value = savedFont;
});

function toggleMenu() {
    var menu = document.querySelector('.menu-links');
    menu.classList.toggle('show');
    document.body.classList.toggle('menu-open'); // Toggle class to darken the background

    // Add event listener to the document
    document.addEventListener('click', function(event) {
        var isClickInsideMenu = menu.contains(event.target);
        var isClickOnMenuIcon = document.querySelector('.menu-icon').contains(event.target);

        if (!isClickInsideMenu && !isClickOnMenuIcon && menu.classList.contains('show')) {
            menu.classList.remove('show');
            document.body.classList.remove('menu-open');
        }
    });
}

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

document.getElementById('font-select').addEventListener('change', function () {
    const selectedFont = this.value;
    const fontClass = 'font-' + selectedFont.toLowerCase().replace(/\s+/g, '-');
    document.body.classList.remove(...document.body.classList);
    document.body.classList.add(fontClass);
    localStorage.setItem('selectedFont', fontClass);
});