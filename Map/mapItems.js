const itemsElement = document.getElementById("items"); 

class MapItems {

    static addItem(x, y, imageUrl, xOffset = 0, yOffset = 0) {
        const item = document.createElement("img");
        item.src = imageUrl;
        item.classList.add("map-item");

        item.style.gridColumn = x + 1;
        item.style.gridRow = y + 1;
        if (xOffset != 0 || yOffset != 0)
            item.style.transform = `translate(${xOffset}px, ${yOffset}px)`;

        itemsElement.appendChild(item);

        return item;
    }
}

const checkbox = document.getElementById("show-items-checkbox");
checkbox.addEventListener("change", (e) => {
    GeneralHelpers.setHiddenDiv(itemsElement, !e.target.checked);
});