class BaseStyle {
    constructor (name) {
        this.name = name;
    }

    _initializeClassrooms() {
        addCells2DArray(createRectangularArea(12, 35, 5, 4), FloorType.BlueCarpet, Rooms.Classroom1);
        addCells2DArray(createRectangularArea(18, 35, 5, 4), FloorType.BlueCarpet, Rooms.Classroom2);
        addCells2DArray(createRectangularArea(18, 27, 5, 5), FloorType.BlueCarpet, Rooms.Classroom3);
        addCells2DArray(createRectangularArea(11, 16, 5, 4), FloorType.BlueCarpet, Rooms.Classroom4);
        addCells2DArray(createRectangularArea(1, 10, 5, 5), FloorType.BlueCarpet, Rooms.Classroom5);
        addCells2DArray(createRectangularArea(21, 7, 7, 5), FloorType.BlueCarpet, Rooms.Classroom6);
        addCells2DArray(createRectangularArea(21, 21, 7, 5), FloorType.BlueCarpet, Rooms.Classroom7);
    }

    _initializeFaculties() {
        addCells2DArray(createRectangularArea(7, 32, 5, 7), FloorType.RedCarpet, Rooms.Faculty1);
        addCells2DArray(createRectangularArea(12, 27, 5, 7), FloorType.RedCarpet, Rooms.Faculty2);
        addCells2DArray(createRectangularArea(24, 28, 4, 6), FloorType.RedCarpet, Rooms.Faculty3);
        addCells2DArray(createRectangularArea(21, 14, 7, 5), FloorType.RedCarpet, Rooms.Faculty4);
        addCells2DArray(createRectangularArea(7, 21, 7, 5), FloorType.RedCarpet, Rooms.Faculty5);
    }

    _initializeMinorRooms() {
        addCells2DArray(createRectangularArea(24, 36, 2, 1), FloorType.BlueCarpet, Rooms.Closet);
        addCells2DArray(createRectangularArea(16, 21, 4, 5), FloorType.BlueCarpet, Rooms.Office);
        addCells2DArray(createRectangularArea(7, 6, 13, 9), FloorType.Hall, Rooms.Cafeteria);
    }

    _initializeExits() {
        // Outsides
        addCells2DArray(createRectangularArea(11, 0, 5, 5), FloorType.Grass, Rooms.OutsideNorth); // North
        addCells2DArray(createRectangularArea(0, 18, 5, 5), FloorType.Grass, Rooms.OutsideWest); // West
        addCells2DArray(createRectangularArea(30, 19, 4, 5), FloorType.Grass, Rooms.OutsideEast); // East
        addCells2DArray(createRectangularArea(15, 41, 5, 2), FloorType.Grass, Rooms.OutsideSouth); // South

        // 3 exits tiles
        addCells2DArray(createRectangularArea(12, 5, 3, 1), FloorType.Hall, Rooms.ExitNorth); // North
        addCells2DArray(createRectangularArea(5, 19, 1, 3), FloorType.Hall, Rooms.ExitWest); // West
        addCells2DArray(createRectangularArea(29, 20, 1, 3), FloorType.Hall, Rooms.ExitEast); // East

        getOrAddCell(16, 40, FloorType.Hall, Rooms.ExitSouth);
        getOrAddCell(17, 40, FloorType.GreenCarpet, Rooms.ExitSouth);
        getOrAddCell(18, 40, FloorType.Hall, Rooms.ExitSouth);
    }

    _initializeHallway() {
        let cells = [];

        for (let i = 4; i < 39; i++)
            cells.push([6, i]); // West hallway

        for (let i = 6; i < 29; i++)
            cells.push([i, 39]); // South hallway

        for (let i = 38; i > 5; i--)
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
    }

    _initializeDoors() {
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

        // Faculty 1 door
        addTopBorder(getCell(9, 39), doorColor);
        addBottomBorder(getCell(9, 38), doorColor);

        // Door in faculties 1 and 2
        addLeftBorder(getCell(12, 33), doorColor);
        addRightBorder(getCell(11, 33), doorColor);

        // Faculty 2 door
        addTopBorder(getCell(14, 27), doorColor);
        addBottomBorder(getCell(14, 26), doorColor);

        // Faculty 3 door
        addLeftBorder(getCell(28, 30), doorColor);
        addRightBorder(getCell(27, 30), doorColor);

        // Faculty 4 door
        addLeftBorder(getCell(21, 16), doorColor);
        addRightBorder(getCell(20, 16), doorColor);

        // Faculty 5 door
        addLeftBorder(getCell(7, 23), doorColor);
        addRightBorder(getCell(6, 23), doorColor);

        // Office door
        addLeftBorder(getCell(20, 23), doorColor);
        addRightBorder(getCell(19, 23), doorColor);

        // Closet door
        addLeftBorder(getCell(24, 36), doorColor);
        addRightBorder(getCell(23, 36), doorColor);

        // North exit
        addTopBorder(getCell(13, 5), swingDoorColor);
        addBottomBorder(getCell(13, 4), swingDoorColor);

        // West exit
        addLeftBorder(getCell(5, 20), swingDoorColor);
        addRightBorder(getCell(4, 20), swingDoorColor);

        // South exit
        addTopBorder(getCell(17, 41), swingDoorColor);
        addBottomBorder(getCell(17, 40), swingDoorColor);

        // East exit
        addLeftBorder(getCell(30, 21), swingDoorColor);
        addRightBorder(getCell(29, 21), swingDoorColor);
    }

    _initializeWindows() {
        // South exit
        addBottomBorder(getCell(16, 40), windowColor);
        addBottomBorder(getCell(18, 40), windowColor);
        addTopBorder(getCell(16, 41), windowColor);
        addTopBorder(getCell(18, 41), windowColor);

        // North exit
        addBottomBorder(getCell(12, 4), windowColor);
        addBottomBorder(getCell(14, 4), windowColor);
        addTopBorder(getCell(12, 5), windowColor);
        addTopBorder(getCell(14, 5), windowColor);

        // West exit
        addLeftBorder(getCell(5, 19), windowColor);
        addLeftBorder(getCell(5, 21), windowColor);
        addRightBorder(getCell(4, 19), windowColor);
        addRightBorder(getCell(4, 21), windowColor);

        // East exit
        addLeftBorder(getCell(30, 20), windowColor);
        addLeftBorder(getCell(30, 22), windowColor);
        addRightBorder(getCell(29, 20), windowColor);
        addRightBorder(getCell(29, 22), windowColor);

        // Cafeteria 
        addBottomBorder(getCell(13, 14), windowColor);
        addTopBorder(getCell(13, 15), windowColor);

        // Classroom 4 
        addBottomBorder(getCell(13, 19), windowColor);
        addTopBorder(getCell(13, 20), windowColor);

        // Classroom 7
        addBottomBorder(getCell(23, 25), windowColor);
        addTopBorder(getCell(23, 26), windowColor);

        // Faculty 3 
        addRightBorder(getCell(23, 30), windowColor);
        addLeftBorder(getCell(24, 30), windowColor);

        // Faculty 4
        addRightBorder(getCell(27, 18), windowColor);
        addLeftBorder(getCell(28, 18), windowColor);

        // Faculty 5
        addBottomBorder(getCell(12, 20), windowColor);
        addTopBorder(getCell(12, 21), windowColor);

        // Principal office
        addBottomBorder(getCell(17, 25), windowColor);
        addTopBorder(getCell(17, 26), windowColor);

        addRightBorder(getCell(15, 21), windowColor);
        addLeftBorder(getCell(16, 21), windowColor);

        addRightBorder(getCell(19, 25), windowColor);
        addLeftBorder(getCell(20, 25), windowColor);

        addRightBorder(getCell(19, 22), windowColor);
        addLeftBorder(getCell(20, 22), windowColor);
    }

    _removeNotNeededBorders() {
        // Spawn point
        const spawnCell = getCell(17, 39); 
        removeTopBorder(spawnCell);
        removeBottomBorder(spawnCell);
        removeRightBorder(spawnCell);
        removeLeftBorder(spawnCell);

        removeBottomBorder(getCell(17, 38));
        removeLeftBorder(getCell(18, 39));
        removeRightBorder(getCell(16, 39));

        // South exit tiles
        removeBottomBorder(getCell(18, 39));
        removeBottomBorder(getCell(16, 39));
        removeTopBorder(getCell(16, 40));
        removeTopBorder(getCell(17, 40));
        removeTopBorder(getCell(18, 40))

        // East exit tiles
        removeLeftBorder(getCell(29, 20));
        removeLeftBorder(getCell(29, 21));
        removeLeftBorder(getCell(29, 22));
        removeRightBorder(getCell(28, 20));
        removeRightBorder(getCell(28, 21));
        removeRightBorder(getCell(28, 22));

        // West exit tiles
        removeLeftBorder(getCell(6, 19));
        removeLeftBorder(getCell(6, 20));
        removeLeftBorder(getCell(6, 21));
        removeRightBorder(getCell(5, 19));
        removeRightBorder(getCell(5, 20));
        removeRightBorder(getCell(5, 21));

        // North exit tiles
        removeBottomBorder(getCell(12, 5));
        removeBottomBorder(getCell(13, 5));
        removeBottomBorder(getCell(14, 5));
        removeTopBorder(getCell(12, 6));
        removeTopBorder(getCell(13, 6));
        removeTopBorder(getCell(14, 6));
    }

    _initializeSkybox() {
        document.body.style.backgroundImage = "url('Skyboxes/Classic.png')";
    }

    _initializeBladderRoom() {
        addCells2DArray(createRectangularArea(24, 19, 2, 2), FloorType.DarkHall, Rooms.BladderRoom);
    }
    _initializeBasementRoom() {
        addCells2DArray(createRectangularArea(16, 19, 3, 1), FloorType.DarkHall, Rooms.Basement);
    }
    _initializeNonCanonRoom() {
        addCells2DArray(createRectangularArea(8, 27, 3, 3), FloorType.NonCannon, Rooms.NonCannon);
    }

    initialize() {
        this._initializeHallway();

        this._initializeClassrooms();
        this._initializeFaculties();

        this._initializeMinorRooms();
        this._initializeExits();

        this._initializeDoors();
        this._initializeWindows();

        this._removeNotNeededBorders();

        this._initializeSkybox();
    }
}