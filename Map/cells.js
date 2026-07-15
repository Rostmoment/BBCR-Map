const borderStyle = "6px solid";
const wallColor = "black";
const windowColor = "white";
const doorColor = "blue";
const swingDoorColor = "yellow";

const mapElement = document.getElementById("map");
const addedCells = new Map();

function isValidCellPosition(x, y) {
    const rootStyles = getComputedStyle(document.documentElement);
    const countX = parseInt(rootStyles.getPropertyValue('--cells-count-x'), 10);
    const countY = parseInt(rootStyles.getPropertyValue('--cells-count-y'), 10);

    return x >= 0 && x < countX && y >= 0 && y < countY;
}

function getCell(x, y) {
    const key = `${x};${y}`;

    if (addedCells.has(key)) {
        return addedCells.get(key);
    }
    return null;
}

function getOrAddCell(x, y, type, room) {
    const key = `${x};${y}`;

    if (addedCells.has(key)) {
        console.log(`Cell ${x};${y} has already been added! Returning it...`)
        return addedCells.get(key);
    }

    const cell = document.createElement("div");

    cell.classList.add("cell");
    cell.classList.add(type || "unknown-cell");

    cell.style.gridColumn = x + 1;
    cell.style.gridRow = y + 1;

    cell.dataset.x = x;
    cell.dataset.y = y;
    cell.dataset.room = room;

    mapElement.appendChild(cell);

    addedCells.set(key, cell);
    return cell;
}

function tryAddWalls(cells) {
    const cellSet = new Set(cells.map(([x, y]) => `${x};${y}`));

    for (const [x, y] of cells) {
        const currentCell = getCell(x, y);

        if (!currentCell)
            continue;

        // Left
        if (!cellSet.has(`${x - 1};${y}`)) {
            addLeftBorder(currentCell, wallColor);

            const neighbor = getCell(x - 1, y);
            if (neighbor)
                addRightBorder(neighbor, wallColor);
        }

        // Right
        if (!cellSet.has(`${x + 1};${y}`)) {
            addRightBorder(currentCell, wallColor);

            const neighbor = getCell(x + 1, y);
            if (neighbor)
                addLeftBorder(neighbor, wallColor);
        }

        // Top
        if (!cellSet.has(`${x};${y - 1}`)) {
            addTopBorder(currentCell, wallColor);

            const neighbor = getCell(x, y - 1);
            if (neighbor)
                addBottomBorder(neighbor, wallColor);
        }

        // Bottom
        if (!cellSet.has(`${x};${y + 1}`)) {
            addBottomBorder(currentCell, wallColor);

            const neighbor = getCell(x, y + 1);
            if (neighbor)
                addTopBorder(neighbor, wallColor);
        }
    }
}
function addCells2DArray(cells, type, room) {
    cells.forEach(([x, y]) => getOrAddCell(x, y, type, room));
    tryAddWalls(cells);
}

function createRectangularArea(startX, startY, width, height) {
    const cells = [];
    for (let x = startX; x < startX + width; x++) {
        for (let y = startY; y < startY + height; y++) {
            cells.push([x, y]);
        }
    }
    return cells;
}

function addTopBorder(cell, color) {
    if (cell)
        cell.style.borderTop = `${borderStyle} ${color}`;
}
function addBottomBorder(cell, color) {
    if (cell)
        cell.style.borderBottom = `${borderStyle} ${color}`;
}
function addLeftBorder(cell, color) {
    if (cell)
        cell.style.borderLeft = `${borderStyle} ${color}`;
}
function addRightBorder(cell, color) {
    if (cell)
        cell.style.borderRight = `${borderStyle} ${color}`;
}