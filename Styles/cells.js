const mapElement = document.getElementById("map");
const addedCells = [];

function addCell(x, y, type, room) {
    if (addedCells.some(([cx, cy]) => cx === x && cy === y)) {
        console.log(`Cell ${x};${y} has already been added! Skipping it...`)
        return;
    }

    addedCells.push([x, y]);
    const cell = document.createElement("div");

    cell.classList.add("cell");
    cell.classList.add(type || "unknown-cell");

    cell.style.gridColumn = x + 1;
    cell.style.gridRow = y + 1;

    cell.dataset.x = x;
    cell.dataset.y = y;
    cell.dataset.room = room;

    mapElement.appendChild(cell);

    return cell;
}


function addCells2DArray(cells, type, room) {
    cells.forEach(([x, y]) => addCell(x, y, type, room));
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

function initializeAllClassrooms() {
    addCells2DArray(createRectangularArea(12, 35, 5, 4), FloorType.BlueCarpet, Rooms.Classroom1);
    addCells2DArray(createRectangularArea(18, 35, 5, 4), FloorType.BlueCarpet, Rooms.Classroom2);
    addCells2DArray(createRectangularArea(18, 27, 5, 5), FloorType.BlueCarpet, Rooms.Classroom3);
    addCells2DArray(createRectangularArea(11, 16, 5, 4), FloorType.BlueCarpet, Rooms.Classroom4);
    addCells2DArray(createRectangularArea(1, 10, 5, 5), FloorType.BlueCarpet, Rooms.Classroom5);
    addCells2DArray(createRectangularArea(21, 7, 7, 5), FloorType.BlueCarpet, Rooms.Classroom6);
    addCells2DArray(createRectangularArea(21, 21, 7, 5), FloorType.BlueCarpet, Rooms.Classroom7);
}

function initializeAllFaculties() {
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
    addCells2DArray(createRectangularArea(7, 6, 13, 9), FloorType.BlueCarpet, Rooms.Cafeteria);
}

function initializeHallway() {
    let cells = [];

    for (let i = 4; i < 39; i++)
        cells.push([6, i]); // East hallway

    for (let i = 6; i < 29; i++)
    {
        if (i != 17) // Spawn cell
            cells.push([i, 39]); // North hallway
    }

    for (let i = 38; i > 5;  i--)
        cells.push([28, i]); // West hallway


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

    const cell = addCell(17, 39, FloorType.GreenCarpet, Rooms.Hall); // Spawn point

}