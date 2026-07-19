class BaseStyle {
    constructor (name) {
        this.name = name;
    }

    _initializeClassrooms() {
        MapCells.addCells2DArray(MapCells.createRectangularArea(12, 35, 5, 4), FloorType.BlueCarpet, Rooms.Classroom1);
        MapCells.addCells2DArray(MapCells.createRectangularArea(18, 35, 5, 4), FloorType.BlueCarpet, Rooms.Classroom2);
        MapCells.addCells2DArray(MapCells.createRectangularArea(18, 27, 5, 5), FloorType.BlueCarpet, Rooms.Classroom3);
        MapCells.addCells2DArray(MapCells.createRectangularArea(11, 16, 5, 4), FloorType.BlueCarpet, Rooms.Classroom4);
        MapCells.addCells2DArray(MapCells.createRectangularArea(1, 10, 5, 5), FloorType.BlueCarpet, Rooms.Classroom5);
        MapCells.addCells2DArray(MapCells.createRectangularArea(21, 7, 7, 5), FloorType.BlueCarpet, Rooms.Classroom6);
        MapCells.addCells2DArray(MapCells.createRectangularArea(21, 21, 7, 5), FloorType.BlueCarpet, Rooms.Classroom7);
    }

    _initializeFaculties() {
        MapCells.addCells2DArray(MapCells.createRectangularArea(7, 32, 5, 7), FloorType.RedCarpet, Rooms.Faculty1);
        MapCells.addCells2DArray(MapCells.createRectangularArea(12, 27, 5, 7), FloorType.RedCarpet, Rooms.Faculty2);
        MapCells.addCells2DArray(MapCells.createRectangularArea(24, 28, 4, 6), FloorType.RedCarpet, Rooms.Faculty3);
        MapCells.addCells2DArray(MapCells.createRectangularArea(21, 14, 7, 5), FloorType.RedCarpet, Rooms.Faculty4);
        MapCells.addCells2DArray(MapCells.createRectangularArea(7, 21, 7, 5), FloorType.RedCarpet, Rooms.Faculty5);
    }

    _initializeMinorRooms() {
        MapCells.addCells2DArray(MapCells.createRectangularArea(24, 36, 2, 1), FloorType.BlueCarpet, Rooms.Closet);
        MapCells.addCells2DArray(MapCells.createRectangularArea(16, 21, 4, 5), FloorType.BlueCarpet, Rooms.Office);
        MapCells.addCells2DArray(MapCells.createRectangularArea(7, 6, 13, 9), FloorType.Hall, Rooms.Cafeteria);
    }

    _initializeExits() {
        // Outsides
        MapCells.addCells2DArray(MapCells.createRectangularArea(11, 0, 5, 5), FloorType.Grass, Rooms.OutsideNorth); // North
        MapCells.addCells2DArray(MapCells.createRectangularArea(0, 18, 5, 5), FloorType.Grass, Rooms.OutsideWest); // West
        MapCells.addCells2DArray(MapCells.createRectangularArea(30, 19, 4, 5), FloorType.Grass, Rooms.OutsideEast); // East
        MapCells.addCells2DArray(MapCells.createRectangularArea(15, 41, 5, 2), FloorType.Grass, Rooms.OutsideSouth); // South

        // 3 exits tiles
        MapCells.addCells2DArray(MapCells.createRectangularArea(12, 5, 3, 1), FloorType.Hall, Rooms.ExitNorth); // North
        MapCells.addCells2DArray(MapCells.createRectangularArea(5, 19, 1, 3), FloorType.Hall, Rooms.ExitWest); // West
        MapCells.addCells2DArray(MapCells.createRectangularArea(29, 20, 1, 3), FloorType.Hall, Rooms.ExitEast); // East

        MapCells.getOrAddCell(16, 40, FloorType.Hall, Rooms.ExitSouth);
        MapCells.getOrAddCell(17, 40, FloorType.GreenCarpet, Rooms.ExitSouth);
        MapCells.getOrAddCell(18, 40, FloorType.Hall, Rooms.ExitSouth);
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

        MapCells.addCells2DArray(cells, FloorType.Hall, Rooms.Hall);
    }

    _initializeDoors() {
        // Front locked swing door
        MapCells.addTopBorder(MapCells.getCell(17, 35), swingDoorColor);
        MapCells.addBottomBorder(MapCells.getCell(17, 34), swingDoorColor);

        // Left locked swing door
        MapCells.addLeftBorder(MapCells.getCell(13, 39), swingDoorColor);
        MapCells.addRightBorder(MapCells.getCell(12, 39), swingDoorColor);

        // Right locked swing door
        MapCells.addLeftBorder(MapCells.getCell(22, 39), swingDoorColor);
        MapCells.addRightBorder(MapCells.getCell(21, 39), swingDoorColor);

        // Principal swing door
        MapCells.addTopBorder(MapCells.getCell(20, 20), swingDoorColor);
        MapCells.addBottomBorder(MapCells.getCell(20, 19), swingDoorColor);

        // Two turns hallway swing door
        MapCells.addLeftBorder(MapCells.getCell(15, 20), swingDoorColor);
        MapCells.addRightBorder(MapCells.getCell(14, 20), swingDoorColor);

        // Long hallway swing door
        MapCells.addLeftBorder(MapCells.getCell(24, 6), swingDoorColor);
        MapCells.addRightBorder(MapCells.getCell(23, 6), swingDoorColor);

        // Long hall cafeteria swing door
        MapCells.addLeftBorder(MapCells.getCell(20, 10), swingDoorColor);
        MapCells.addRightBorder(MapCells.getCell(19, 10), swingDoorColor);

        // Classroom 5 cafeteria swing door
        MapCells.addLeftBorder(MapCells.getCell(7, 10), swingDoorColor);
        MapCells.addRightBorder(MapCells.getCell(6, 10), swingDoorColor);

        // Classroom 1 door
        MapCells.addLeftBorder(MapCells.getCell(17, 37), doorColor);
        MapCells.addRightBorder(MapCells.getCell(16, 37), doorColor);

        // Classroom 2 door
        MapCells.addLeftBorder(MapCells.getCell(18, 36), doorColor);
        MapCells.addRightBorder(MapCells.getCell(17, 36), doorColor);

        // Classroom 3 door
        MapCells.addTopBorder(MapCells.getCell(19, 27), doorColor);
        MapCells.addBottomBorder(MapCells.getCell(19, 26), doorColor);

        // Classroom 4 door
        MapCells.addTopBorder(MapCells.getCell(14, 16), doorColor);
        MapCells.addBottomBorder(MapCells.getCell(14, 15), doorColor);

        // Classroom 5 door
        MapCells.addLeftBorder(MapCells.getCell(6, 12), doorColor);
        MapCells.addRightBorder(MapCells.getCell(5, 12), doorColor);

        // Classroom 6 door
        MapCells.addLeftBorder(MapCells.getCell(28, 9), doorColor);
        MapCells.addRightBorder(MapCells.getCell(27, 9), doorColor);

        // Classroom 7 door
        MapCells.addLeftBorder(MapCells.getCell(28, 23), doorColor);
        MapCells.addRightBorder(MapCells.getCell(27, 23), doorColor);

        // Faculty 1 door
        MapCells.addTopBorder(MapCells.getCell(9, 39), doorColor);
        MapCells.addBottomBorder(MapCells.getCell(9, 38), doorColor);

        // Door in faculties 1 and 2
        MapCells.addLeftBorder(MapCells.getCell(12, 33), doorColor);
        MapCells.addRightBorder(MapCells.getCell(11, 33), doorColor);

        // Faculty 2 door
        MapCells.addTopBorder(MapCells.getCell(14, 27), doorColor);
        MapCells.addBottomBorder(MapCells.getCell(14, 26), doorColor);

        // Faculty 3 door
        MapCells.addLeftBorder(MapCells.getCell(28, 30), doorColor);
        MapCells.addRightBorder(MapCells.getCell(27, 30), doorColor);

        // Faculty 4 door
        MapCells.addLeftBorder(MapCells.getCell(21, 16), doorColor);
        MapCells.addRightBorder(MapCells.getCell(20, 16), doorColor);

        // Faculty 5 door
        MapCells.addLeftBorder(MapCells.getCell(7, 23), doorColor);
        MapCells.addRightBorder(MapCells.getCell(6, 23), doorColor);

        // Office door
        MapCells.addLeftBorder(MapCells.getCell(20, 23), doorColor);
        MapCells.addRightBorder(MapCells.getCell(19, 23), doorColor);

        // Closet door
        MapCells.addLeftBorder(MapCells.getCell(24, 36), doorColor);
        MapCells.addRightBorder(MapCells.getCell(23, 36), doorColor);

        // North exit
        MapCells.addTopBorder(MapCells.getCell(13, 5), swingDoorColor);
        MapCells.addBottomBorder(MapCells.getCell(13, 4), swingDoorColor);

        // West exit
        MapCells.addLeftBorder(MapCells.getCell(5, 20), swingDoorColor);
        MapCells.addRightBorder(MapCells.getCell(4, 20), swingDoorColor);

        // South exit
        MapCells.addTopBorder(MapCells.getCell(17, 41), swingDoorColor);
        MapCells.addBottomBorder(MapCells.getCell(17, 40), swingDoorColor);

        // East exit
        MapCells.addLeftBorder(MapCells.getCell(30, 21), swingDoorColor);
        MapCells.addRightBorder(MapCells.getCell(29, 21), swingDoorColor);
    }

    _initializeWindows() {
        // South exit
        MapCells.addBottomBorder(MapCells.getCell(16, 40), windowColor);
        MapCells.addBottomBorder(MapCells.getCell(18, 40), windowColor);
        MapCells.addTopBorder(MapCells.getCell(16, 41), windowColor);
        MapCells.addTopBorder(MapCells.getCell(18, 41), windowColor);

        // North exit
        MapCells.addBottomBorder(MapCells.getCell(12, 4), windowColor);
        MapCells.addBottomBorder(MapCells.getCell(14, 4), windowColor);
        MapCells.addTopBorder(MapCells.getCell(12, 5), windowColor);
        MapCells.addTopBorder(MapCells.getCell(14, 5), windowColor);

        // West exit
        MapCells.addLeftBorder(MapCells.getCell(5, 19), windowColor);
        MapCells.addLeftBorder(MapCells.getCell(5, 21), windowColor);
        MapCells.addRightBorder(MapCells.getCell(4, 19), windowColor);
        MapCells.addRightBorder(MapCells.getCell(4, 21), windowColor);

        // East exit
        MapCells.addLeftBorder(MapCells.getCell(30, 20), windowColor);
        MapCells.addLeftBorder(MapCells.getCell(30, 22), windowColor);
        MapCells.addRightBorder(MapCells.getCell(29, 20), windowColor);
        MapCells.addRightBorder(MapCells.getCell(29, 22), windowColor);

        // Cafeteria 
        MapCells.addBottomBorder(MapCells.getCell(13, 14), windowColor);
        MapCells.addTopBorder(MapCells.getCell(13, 15), windowColor);

        // Classroom 4 
        MapCells.addBottomBorder(MapCells.getCell(13, 19), windowColor);
        MapCells.addTopBorder(MapCells.getCell(13, 20), windowColor);

        // Classroom 7
        MapCells.addBottomBorder(MapCells.getCell(23, 25), windowColor);
        MapCells.addTopBorder(MapCells.getCell(23, 26), windowColor);

        // Faculty 3 
        MapCells.addRightBorder(MapCells.getCell(23, 30), windowColor);
        MapCells.addLeftBorder(MapCells.getCell(24, 30), windowColor);

        // Faculty 4
        MapCells.addRightBorder(MapCells.getCell(27, 18), windowColor);
        MapCells.addLeftBorder(MapCells.getCell(28, 18), windowColor);

        // Faculty 5
        MapCells.addBottomBorder(MapCells.getCell(12, 20), windowColor);
        MapCells.addTopBorder(MapCells.getCell(12, 21), windowColor);

        // Principal office
        MapCells.addBottomBorder(MapCells.getCell(17, 25), windowColor);
        MapCells.addTopBorder(MapCells.getCell(17, 26), windowColor);

        MapCells.addRightBorder(MapCells.getCell(15, 21), windowColor);
        MapCells.addLeftBorder(MapCells.getCell(16, 21), windowColor);

        MapCells.addRightBorder(MapCells.getCell(19, 25), windowColor);
        MapCells.addLeftBorder(MapCells.getCell(20, 25), windowColor);

        MapCells.addRightBorder(MapCells.getCell(19, 22), windowColor);
        MapCells.addLeftBorder(MapCells.getCell(20, 22), windowColor);
    }

    removeNotNeededBorders() {
        // Spawn point
        const spawnCell = MapCells.getCell(17, 39); 
        MapCells.removeTopBorder(spawnCell);
        MapCells.removeBottomBorder(spawnCell);
        MapCells.removeRightBorder(spawnCell);
        MapCells.removeLeftBorder(spawnCell);

        MapCells.removeBottomBorder(MapCells.getCell(17, 38));
        MapCells.removeLeftBorder(MapCells.getCell(18, 39));
        MapCells.removeRightBorder(MapCells.getCell(16, 39));

        // South exit tiles
        MapCells.removeBottomBorder(MapCells.getCell(18, 39));
        MapCells.removeBottomBorder(MapCells.getCell(16, 39));
        MapCells.removeTopBorder(MapCells.getCell(16, 40));
        MapCells.removeTopBorder(MapCells.getCell(17, 40));
        MapCells.removeTopBorder(MapCells.getCell(18, 40))

        // East exit tiles
        MapCells.removeLeftBorder(MapCells.getCell(29, 20));
        MapCells.removeLeftBorder(MapCells.getCell(29, 21));
        MapCells.removeLeftBorder(MapCells.getCell(29, 22));
        MapCells.removeRightBorder(MapCells.getCell(28, 20));
        MapCells.removeRightBorder(MapCells.getCell(28, 21));
        MapCells.removeRightBorder(MapCells.getCell(28, 22));

        // West exit tiles
        MapCells.removeLeftBorder(MapCells.getCell(6, 19));
        MapCells.removeLeftBorder(MapCells.getCell(6, 20));
        MapCells.removeLeftBorder(MapCells.getCell(6, 21));
        MapCells.removeRightBorder(MapCells.getCell(5, 19));
        MapCells.removeRightBorder(MapCells.getCell(5, 20));
        MapCells.removeRightBorder(MapCells.getCell(5, 21));

        // North exit tiles
        MapCells.removeBottomBorder(MapCells.getCell(12, 5));
        MapCells.removeBottomBorder(MapCells.getCell(13, 5));
        MapCells.removeBottomBorder(MapCells.getCell(14, 5));
        MapCells.removeTopBorder(MapCells.getCell(12, 6));
        MapCells.removeTopBorder(MapCells.getCell(13, 6));
        MapCells.removeTopBorder(MapCells.getCell(14, 6));
    }

    _initializeSkybox() {
        document.body.style.backgroundImage = "url('Skyboxes/Classic.png')";
    }

    _initializeBladderRoom() {
        MapCells.addCells2DArray(MapCells.createRectangularArea(24, 19, 2, 2), FloorType.DarkHall, Rooms.BladderRoom);
    }
    _initializeBasementRoom() {
        MapCells.addCells2DArray(MapCells.createRectangularArea(16, 19, 3, 1), FloorType.DarkHall, Rooms.Basement);
    }
    _initializeNonCanonRoom() {
        MapCells.addCells2DArray(MapCells.createRectangularArea(8, 27, 3, 3), FloorType.NonCannon, Rooms.NonCannon);
    }

    _initializeItems() {

    }

    _initializeShinyQuarter() {
        MapItems.addItem(17, 38, Items.ShinyQuarter, ItemName.ShinyQuarter, 35, 46);
    }

    initialize() {
        this._initializeHallway();

        this._initializeClassrooms();
        this._initializeFaculties();

        this._initializeMinorRooms();
        this._initializeExits();

        this._initializeDoors();
        this._initializeWindows();

        this.removeNotNeededBorders();

        this._initializeSkybox();
        this._initializeItems();
        this._initializeShinyQuarter();
    }
}