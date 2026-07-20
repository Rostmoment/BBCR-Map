class GeneralHelpers {
    static #trackedItems = [];
    static #isListening = false;

    static setHiddenDiv(div, hidden) {
        div.style.opacity = hidden ? "0" : "1";
    }

    static divIsHidden(div) {
        return div.style.opacity === "0";
    }

    static addHoverDetect(el, onEnter, onExit, checkHidden = () => false) {
        this.#trackedItems.push({ el, onEnter, onExit, checkHidden, isHovered: false });

        if (!this.#isListening) {
            document.addEventListener('mousemove', this.#handleGlobalMouseMove.bind(this));
            this.#isListening = true;
        }
    }

    static #handleGlobalMouseMove(e) {
        for (const entry of this.#trackedItems) {
            if (entry.checkHidden && entry.checkHidden()) {
                if (entry.isHovered) {
                    entry.isHovered = false;
                    entry.onExit(entry.el);
                }
                continue;
            }

            const rect = entry.el.getBoundingClientRect();
            const isOver = e.clientX >= rect.left && e.clientX <= rect.right &&
                e.clientY >= rect.top && e.clientY <= rect.bottom;

            if (isOver && !entry.isHovered) {
                entry.isHovered = true;
                entry.onEnter(entry.el);
            } else if (!isOver && entry.isHovered) {
                entry.isHovered = false;
                entry.onExit(entry.el);
            }
        }
    }

    static forceResetHiddenItems() {
        for (const entry of this.#trackedItems) {
            if (entry.isHovered && entry.checkHidden && entry.checkHidden()) {
                entry.isHovered = false;
                entry.onExit(entry.el);
            }
        }
    }
}