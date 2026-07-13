const mapElement = document.getElementById("map");

function addCell(x, y, type) {
    const cell = document.createElement("div");

    cell.classList.add("cell");
    cell.classList.add(type || "unknown-cell");

    cell.style.gridColumn = x + 1;
    cell.style.gridRow = y + 1;

    cell.dataset.x = x;
    cell.dataset.y = y;

    mapElement.appendChild(cell);
}