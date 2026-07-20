const itemsElement = document.getElementById("items");

class MapItems {
    static #enterCounter = 0;

    static addItem(x, y, imageUrl, itemName, xOffset = 0, yOffset = 0) {
        const item = document.createElement("img");
        item.src = imageUrl;
        item.dataset.itemName = itemName;
        item.classList.add("map-item");

        item.style.gridColumn = x + 1;
        item.style.gridRow = y + 1;
        if (xOffset !== 0 || yOffset !== 0) {
            item.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
        }

        itemsElement.appendChild(item);

        GeneralHelpers.addHoverDetect(
            item,
            (el) => MapItems.onItemEnter(el),
            (el) => MapItems.onItemExit(el),
            () => GeneralHelpers.divIsHidden(itemsElement) 
        );

        return item;
    }

    static onItemEnter(item) {
        MapItems.#enterCounter++;
        CursorTooltip.showTooltipText(item.dataset.itemName);
        item.classList.add("hovered");
    }

    static onItemExit(item) {
        MapItems.#enterCounter--;
        if (MapItems.#enterCounter <= 0) {
            MapItems.#enterCounter = 0;
            CursorTooltip.hideTooltip();
        }
        item.classList.remove("hovered");
    }
}

const checkbox = document.getElementById("show-items-checkbox");
checkbox.addEventListener("change", (e) => {
    GeneralHelpers.setHiddenDiv(itemsElement, !e.target.checked);
});