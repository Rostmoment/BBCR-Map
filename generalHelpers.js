class GeneralHelpers {
    static setHiddenDiv(div, hidden) {
        if (hidden)
            div.style.opacity = "0";
        else
            div.style.opacity = "1";
    }
}