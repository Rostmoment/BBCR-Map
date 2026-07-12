function addHoverStyleText(element, text) {
    const styleText = document.getElementById("style-info");
    element.addEventListener('mouseenter', () => {
        styleText.innerHTML = text;
    });
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

initializeCredits();
initializeStyles();