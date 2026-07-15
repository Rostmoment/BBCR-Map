const mapElement = document.getElementById("map");
const addedCells = new Map();

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


function addCells2DArray(cells, type, room) {
    cells.forEach(([x, y]) => getOrAddCell(x, y, type, room));
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
    addCells2DArray(createRectangularArea(24, 19, 2, 2), FloorType.Secret, Rooms.BladderRoom);
    addCells2DArray(createRectangularArea(16, 21, 4, 5), FloorType.BlueCarpet, Rooms.Office);
    addCells2DArray(createRectangularArea(7, 6, 13, 9), FloorType.Cafeteria, Rooms.Cafeteria);
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
    addCells2DArray(createRectangularArea(16, 19, 3, 1), FloorType.Secret, Rooms.Basement);
}