const style = new URLSearchParams(window.location.search).get("style");
document.title = `${style} Style`;

const newFavicon = document.createElement("link");
newFavicon.rel = "icon";
newFavicon.type = "image/png";
newFavicon.href = `../Icons/${style}.png`;
document.head.appendChild(newFavicon);


const mapWrapper = document.querySelector(".map-wrapper");
const mapElement = document.getElementById("map");

function addCell(x, y, type) {
    const cell = document.createElement("div");

    cell.classList.add("cell");
    if (type)
        cell.classList.add(type);
    else
        cell.classList.add("unknown-cell");


    cell.style.gridColumn = `${x + 1}`;
    cell.style.gridRow = `${y + 1}`;

    cell.dataset.x = x;
    cell.dataset.y = y;

    mapElement.appendChild(cell);
}




addCell(0, 0);
addCell(0, 1);
addCell(0, 2);
addCell(0, 3);
addCell(0, 4);

addCell(1, 2);

addCell(2, 0);
addCell(2, 1);
addCell(2, 2);
addCell(2, 3);
addCell(2, 4);

addCell(4, 0);
addCell(4, 1);
addCell(4, 2);
addCell(4, 3);
addCell(4, 4);

addCell(6, 0);
addCell(6, 1);
addCell(6, 2);
addCell(6, 4);
addCell(8, 0);
addCell(8, 1);
addCell(8, 2);
addCell(8, 4);
