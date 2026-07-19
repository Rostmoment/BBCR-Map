const itemsElement = document.getElementById("items");

class MapItems {
    static items = [];

    static addItem(x, y, imageUrl, itemName, xOffset = 0, yOffset = 0) {
        const item = document.createElement("img");
        item.src = imageUrl;
        item.dataset.itemName = itemName;
        item.classList.add("map-item");

        item.style.gridColumn = x + 1;
        item.style.gridRow = y + 1;
        if (xOffset != 0 || yOffset != 0)
            item.style.transform = `translate(${xOffset}px, ${yOffset}px)`;

        itemsElement.appendChild(item);

        const entry = {
            el: item,
            isHovered: false
        };
        MapItems.items.push(entry);

        return item;
    }

    static handleMouseMove(e) {
        for (const entry of MapItems.items) {
            const rect = entry.el.getBoundingClientRect();
            const isOver = e.clientX >= rect.left && e.clientX <= rect.right &&
                e.clientY >= rect.top && e.clientY <= rect.bottom;

            if (isOver && !entry.isHovered) {
                entry.isHovered = true;
                MapItems.onItemEnter(entry.el);
            } else if (!isOver && entry.isHovered) {
                entry.isHovered = false;
                MapItems.onItemExit(entry.el);
            }
        }
    }

    static onItemEnter(item) {
        console.log("enter:", item.dataset.itemName);
        item.classList.add("hovered");
    }

    static onItemExit(item) {
        console.log("exit:", item.dataset.itemName);
        item.classList.remove("hovered");
    }
}

document.addEventListener('mousemove', MapItems.handleMouseMove);

const checkbox = document.getElementById("show-items-checkbox");
checkbox.addEventListener("change", (e) => {
    GeneralHelpers.setHiddenDiv(itemsElement, !e.target.checked);
});