
function initializeThemeChanges() {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
    }
    themeToggleBtn.addEventListener('click', () => {
        let currentTheme = document.documentElement.getAttribute('data-theme');

        if (currentTheme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
    });
    addHoverStyleText(themeToggleBtn, "Change theme to dark or light whenever you want")
}
function addHoverStyleText(element, text) {
    const styleText = document.getElementById("style-info");
    element.addEventListener('mouseenter', () => {
        styleText.innerHTML = text;
    });
}

initializeThemeChanges();
addHoverStyleText(document.getElementById("baldi"), "NULL STYLE<br>WIP")