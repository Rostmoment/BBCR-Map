function addHoverStyleText(element, text) {
    const styleText = document.getElementById("style-info");
    element.addEventListener('mouseenter', () => {
        styleText.innerHTML = text;
    });
}

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
function initializeCredits() {
    const credit = document.getElementById("credits-button");
    addHoverStyleText(credit, "Credits of this site");
}

function initializeStyle(elementId, name) {
    const element = document.getElementById(elementId);
    addHoverStyleText(element, `${name} Style`);
    element.addEventListener("click", () => {
        window.location.href = `../Styles/index.html?style=${name}`;
    });
}
function initializeStyles() {
    initializeStyle("null-style", "Null");
    initializeStyle("classic-style-door", "Classic");
    initializeStyle("party-style-door", "Party");
    initializeStyle("demo-style-door", "Demo");
}

initializeThemeChanges();
initializeCredits();
initializeStyles();