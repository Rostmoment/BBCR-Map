const mapElement = document.getElementById("map");

function addCell(x, y, type, room) {
    const cell = document.createElement("div");

    cell.classList.add("cell");
    cell.classList.add(type || "unknown-cell");

    cell.style.gridColumn = x + 1;
    cell.style.gridRow = y + 1;

    cell.dataset.x = x;
    cell.dataset.y = y;
    cell.dataset.room = room;

    mapElement.appendChild(cell);
}


function addCells2DArray(cells, type, room) {
    cells.forEach(([x, y]) => addCell(x, y, type, room));
}

function initializeAllClassrooms() {

    let cells = [
        [12, 35], [13, 35], [14, 35], [15, 35], [16, 35],
        [12, 36], [13, 36], [14, 36], [15, 36], [16, 36],
        [12, 37], [13, 37], [14, 37], [15, 37], [16, 37],
        [12, 38], [13, 38], [14, 38], [15, 38], [16, 38]
    ];
    addCells2DArray(cells, FloorTypes.BlueCarpet, Classroom.Classroom1);

    cells = [
        [18, 35], [19, 35], [20, 35], [21, 35], [22, 35],
        [18, 36], [19, 36], [20, 36], [21, 36], [22, 36],
        [18, 37], [19, 37], [20, 37], [21, 37], [22, 37],
        [18, 38], [19, 38], [20, 38], [21, 38], [22, 38]
    ];
    addCells2DArray(cells, FloorTypes.BlueCarpet, Classroom.Classroom2);

    cells = [
        [18, 27], [19, 27], [20, 27], [21, 27], [22, 27],
        [18, 28], [19, 28], [20, 28], [21, 28], [22, 28],
        [18, 29], [19, 29], [20, 29], [21, 29], [22, 29],
        [18, 30], [19, 30], [20, 30], [21, 30], [22, 30],
        [18, 31], [19, 31], [20, 31], [21, 31], [22, 31]
    ];
    addCells2DArray(cells, FloorTypes.BlueCarpet, Classroom.Classroom3);

    cells = [
        [11, 17], [12, 17], [13, 17], [14, 17], [15, 17],
        [11, 18], [12, 18], [13, 18], [14, 18], [15, 18],
        [11, 19], [12, 19], [13, 19], [14, 19], [15, 19],
        [11, 20], [12, 20], [13, 20], [14, 20], [15, 20]
    ];
    addCells2DArray(cells, FloorTypes.BlueCarpet, Classroom.Classroom4);

    cells = [
        [1, 10], [2, 10], [3, 10], [4, 10], [5, 10],
        [1, 11], [2, 11], [3, 11], [4, 11], [5, 11],
        [1, 12], [2, 12], [3, 12], [4, 12], [5, 12],
        [1, 13], [2, 13], [3, 13], [4, 13], [5, 13],
        [1, 14], [2, 14], [3, 14], [4, 14], [5, 14]
    ];
    addCells2DArray(cells, FloorTypes.BlueCarpet, Classroom.Classroom5);

    cells = [
        [21, 7], [22, 7], [23, 7], [24, 7], [25, 7], [26, 7], [27, 7],
        [21, 8], [22, 8], [23, 8], [24, 8], [25, 8], [26, 8], [27, 8],
        [21, 9], [22, 9], [23, 9], [24, 9], [25, 9], [26, 9], [27, 9],
        [21, 10], [22, 10], [23, 10], [24, 10], [25, 10], [26, 10], [27, 10],
        [21, 11], [22, 11], [23, 11], [24, 11], [25, 11], [26, 11], [27, 11]
    ];
    addCells2DArray(cells, FloorTypes.BlueCarpet, Classroom.Classroom6);

    cells = [
        [21, 21], [22, 21], [23, 21], [24, 21], [25, 21], [26, 21], [27, 21],
        [21, 22], [22, 22], [23, 22], [24, 22], [25, 22], [26, 22], [27, 22],
        [21, 23], [22, 23], [23, 23], [24, 23], [25, 23], [26, 23], [27, 23],
        [21, 24], [22, 24], [23, 24], [24, 24], [25, 24], [26, 24], [27, 24],
        [21, 25], [22, 25], [23, 25], [24, 25], [25, 25], [26, 25], [27, 25]
    ];
    addCells2DArray(cells, FloorTypes.BlueCarpet, Classroom.Classroom7);
}