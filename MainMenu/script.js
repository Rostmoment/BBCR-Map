function addHoverStyleText(element, text) {
    const styleText = document.getElementById("style-info");
    element.addEventListener('mouseenter', () => {
        styleText.innerHTML = text;
    });
}


function initializeCredits() {
    const credits = document.getElementById("credits-button");
    addHoverStyleText(credits, "Credits of this site");
    credits.addEventListener("click", () => {
        window.location.href = "../Credits/index.html";
    });
}

function initializeGithub() {
    const github = document.getElementById("github-button");
    addHoverStyleText(github, "Source code of this site on GitHub");
    github.addEventListener("click", () => {
        window.location.href = "https://github.com/Rostmoment/BBCR-Map";
    });
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

initializeCredits();
initializeGithub();
initializeStyles();