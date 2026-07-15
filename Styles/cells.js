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

function initializeClassrooms() {
    addCells2DArray(createRectangularArea(12, 35, 5, 4), FloorType.BlueCarpet, Rooms.Classroom1);
    addCells2DArray(createRectangularArea(18, 35, 5, 4), FloorType.BlueCarpet, Rooms.Classroom2);
    addCells2DArray(createRectangularArea(18, 27, 5, 5), FloorType.BlueCarpet, Rooms.Classroom3);
    addCells2DArray(createRectangularArea(11, 16, 5, 4), FloorType.BlueCarpet, Rooms.Classroom4);
    addCells2DArray(createRectangularArea(1, 10, 5, 5), FloorType.BlueCarpet, Rooms.Classroom5);
    addCells2DArray(createRectangularArea(21, 7, 7, 5), FloorType.BlueCarpet, Rooms.Classroom6);
    addCells2DArray(createRectangularArea(21, 21, 7, 5), FloorType.BlueCarpet, Rooms.Classroom7);
}
function initializeFaculties() {
    addCells2DArray(createRectangularArea(7, 32, 5, 7), FloorType.RedCarpet, Rooms.Faculty1);
    addCells2DArray(createRectangularArea(12, 27, 5, 7), FloorType.RedCarpet, Rooms.Faculty2);
    addCells2DArray(createRectangularArea(24, 28, 4, 6), FloorType.RedCarpet, Rooms.Faculty3);
    addCells2DArray(createRectangularArea(21, 14, 7, 5), FloorType.RedCarpet, Rooms.Faculty4);
    addCells2DArray(createRectangularArea(7, 21, 7, 5), FloorType.RedCarpet, Rooms.Faculty5);
}
function initializeMinorRooms() {
    addCells2DArray(createRectangularArea(24, 36, 2, 1), FloorType.BlueCarpet, Rooms.Closet);
    addCells2DArray(createRectangularArea(24, 19, 2, 2), FloorType.DarkHall, Rooms.BladderRoom);
    addCells2DArray(createRectangularArea(16, 21, 4, 5), FloorType.BlueCarpet, Rooms.Office);
    addCells2DArray(createRectangularArea(7, 6, 13, 9), FloorType.Hall, Rooms.Cafeteria);
}
function initializeExits() {
    // Outsides
    addCells2DArray(createRectangularArea(11, 0, 5, 5), FloorType.Grass, Rooms.Outside); // North
    addCells2DArray(createRectangularArea(0, 18, 5, 5), FloorType.Grass, Rooms.Outside); // West
    addCells2DArray(createRectangularArea(30, 19, 4, 5), FloorType.Grass, Rooms.Outside); // East
    addCells2DArray(createRectangularArea(15, 41, 5, 2), FloorType.Grass, Rooms.Outside); // South

    // 3 exits tiles
    addCells2DArray(createRectangularArea(12, 5, 3, 1), FloorType.Hall, Rooms.Exit); // North
    addCells2DArray(createRectangularArea(5, 19, 1, 3), FloorType.Hall, Rooms.Exit); // West
    addCells2DArray(createRectangularArea(29, 20, 1, 3), FloorType.Hall, Rooms.Exit); // East
    addCells2DArray(createRectangularArea(16, 40, 3, 1), FloorType.Hall, Rooms.Exit); // South
}
function initializeHallway() {
    let cells = [];

    for (let i = 4; i < 39; i++)
        cells.push([6, i]); // West hallway

    for (let i = 6; i < 29; i++)
    {
        if (i != 17) // Spawn cell
            cells.push([i, 39]); // South hallway
    }

    for (let i = 38; i > 5;  i--)
        cells.push([28, i]); // East hallway


    for (let i = 38; i > 25; i--)
        cells.push([17, i]);

    for (let i = 7; i < 17; i++)
        cells.push([i, 26]); // Faculty 2 vending hall

    for (let i = 18; i < 23; i++)
        cells.push([i, 26]); // Class 3 hallway

    for (let i = 26; i < 39; i++)
        cells.push([23, i]); // Closet hallway

    // Two turns hallway
    for (let i = 25; i > 19; i--)
        cells.push([15, i]);

    for (let i = 14; i > 9; i--)
        cells.push([i, 20]);

    for (let i = 19; i > 15; i--)
        cells.push([10, i]);

    for (let i = 7; i < 20; i++)
        cells.push([i, 15]) // Classroom 4 hallway

    for (let i = 25; i > 5; i--)
        cells.push([20, i]); // Office hallway

    for (let i = 21; i < 28; i++)
        cells.push([i, 6]); // Connect west and office hallways

    addCells2DArray(cells, FloorType.Hall, Rooms.Hall);

    const cell = getOrAddCell(17, 39, FloorType.GreenCarpet, Rooms.Hall); // Spawn point

}

function initializeOnlyDemo() {
    addCells2DArray(createRectangularArea(8, 27, 3, 3), FloorType.NonCannon, Rooms.NonCannon);
    addCells2DArray(createRectangularArea(16, 19, 3, 1), FloorType.DarkHall, Rooms.Basement);
}

function addDoors() {

    // Front locked swing door
    addTopBorder(getCell(17, 35), swingDoorColor);
    addBottomBorder(getCell(17, 34), swingDoorColor);

    // Left locked swing door
    addLeftBorder(getCell(13, 39), swingDoorColor);
    addRightBorder(getCell(12, 39), swingDoorColor);

    // Right locked swing door
    addLeftBorder(getCell(22, 39), swingDoorColor);
    addRightBorder(getCell(21, 39), swingDoorColor);

    // Principal swing door
    addTopBorder(getCell(20, 20), swingDoorColor);
    addBottomBorder(getCell(20, 19), swingDoorColor);

    // Two turns hallway swing door
    addLeftBorder(getCell(15, 20), swingDoorColor);
    addRightBorder(getCell(14, 20), swingDoorColor);

    // Long hallway swing door
    addLeftBorder(getCell(24, 6), swingDoorColor);
    addRightBorder(getCell(23, 6), swingDoorColor);

    // Long hall cafeteria swing door
    addLeftBorder(getCell(20, 10), swingDoorColor);
    addRightBorder(getCell(19, 10), swingDoorColor);

    // Classroom 5 cafeteria swing door
    addLeftBorder(getCell(7, 10), swingDoorColor);
    addRightBorder(getCell(6, 10), swingDoorColor);

    // Classroom 1 door
    addLeftBorder(getCell(17, 37), doorColor);
    addRightBorder(getCell(16, 37), doorColor);

    // Classroom 2 door
    addLeftBorder(getCell(18, 36), doorColor);
    addRightBorder(getCell(17, 36), doorColor);

    // Classroom 3 door
    addTopBorder(getCell(19, 27), doorColor);
    addBottomBorder(getCell(19, 26), doorColor);

    // Classroom 4 door
    addTopBorder(getCell(14, 16), doorColor);
    addBottomBorder(getCell(14, 15), doorColor);

    // Classroom 5 door
    addLeftBorder(getCell(6, 12), doorColor);
    addRightBorder(getCell(5, 12), doorColor);

    // Classroom 6 door
    addLeftBorder(getCell(28, 9), doorColor);
    addRightBorder(getCell(27, 9), doorColor);

    // Classroom 7 door
    addLeftBorder(getCell(28, 23), doorColor);
    addRightBorder(getCell(27, 23), doorColor);
}