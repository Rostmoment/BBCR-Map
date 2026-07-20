class DemoStyle extends BaseStyle {
    initialize() {
        super.initialize();

        this._initializeBasementRoom()
        this._initializeBladderRoom();
        this._initializeNonCanonRoom();

        this.#initializePortalPosterWalls();
    }

    _initializeItems() {

        // Classroom 3
        MapItems.addItem(19, 28, Items.Unknown, ItemName.PotentialSpot, 26, -26);
        MapItems.addItem(19, 29, Items.Unknown, ItemName.PotentialSpot, 26, -38);
        MapItems.addItem(19, 30, Items.Unknown, ItemName.PotentialSpot, 26, -51);
        MapItems.addItem(19, 31, Items.Unknown, ItemName.PotentialSpot, 26, -51);
        MapItems.addItem(20, 31, Items.Unknown, ItemName.PotentialSpot, -13, -51);
        MapItems.addItem(20, 29, Items.Unknown, ItemName.PotentialSpot, -13, 64);
        MapItems.addItem(20, 29, Items.Unknown, ItemName.PotentialSpot, -13, -38);
        MapItems.addItem(20, 28, Items.Unknown, ItemName.PotentialSpot, -13, 0);
        MapItems.addItem(18, 30, Items.Unknown, ItemName.PotentialSpot, 38, 13);

        // Classroom 4
        MapItems.addItem(15, 19, Items.Unknown, ItemName.PotentialSpot, -90, -13);
        MapItems.addItem(14, 18, Items.Unknown, ItemName.PotentialSpot, 26, -13);
        MapItems.addItem(13, 19, Items.Unknown, ItemName.PotentialSpot, 26, 26);
        MapItems.addItem(13, 18, Items.Unknown, ItemName.PotentialSpot, 26, 38);
        MapItems.addItem(13, 17, Items.Unknown, ItemName.PotentialSpot, 26, 51);
        MapItems.addItem(13, 16, Items.Unknown, ItemName.PotentialSpot, 26, 51);
        MapItems.addItem(12, 16, Items.Unknown, ItemName.PotentialSpot, 64, 51);
        MapItems.addItem(12, 18, Items.Unknown, ItemName.PotentialSpot, 64, -64);
        MapItems.addItem(12, 18, Items.Unknown, ItemName.PotentialSpot, 64, 38);
        MapItems.addItem(12, 19, Items.Unknown, ItemName.PotentialSpot, 64, 0);
        MapItems.addItem(14, 17, Items.Unknown, ItemName.PotentialSpot, 13, -13);

        // Classroom 5
        MapItems.addItem(2, 14, Items.Unknown, ItemName.PotentialSpot, 51, -64);
        MapItems.addItem(2, 13, Items.Unknown, ItemName.PotentialSpot, 51, 13);
        MapItems.addItem(2, 13, Items.Unknown, ItemName.PotentialSpot, 51, -38);
        MapItems.addItem(2, 11, Items.Unknown, ItemName.PotentialSpot, 51, 38);
        MapItems.addItem(2, 11, Items.Unknown, ItemName.PotentialSpot, 51, -13);
        MapItems.addItem(2, 10, Items.Unknown, ItemName.PotentialSpot, 51, 64);
        MapItems.addItem(4, 14, Items.Unknown, ItemName.PotentialSpot, -38, -64);
        MapItems.addItem(4, 13, Items.Unknown, ItemName.PotentialSpot, -38, 13);
        MapItems.addItem(4, 13, Items.Unknown, ItemName.PotentialSpot, -38, -38);
        MapItems.addItem(4, 11, Items.Unknown, ItemName.PotentialSpot, -38, 38);
        MapItems.addItem(4, 11, Items.Unknown, ItemName.PotentialSpot, -38, -13);
        MapItems.addItem(4, 10, Items.Unknown, ItemName.PotentialSpot, -38, 64);

        // Classroom 7 
        MapItems.addItem(23, 24, Items.Unknown, ItemName.PotentialSpot, 0, 38);
        MapItems.addItem(23, 23, Items.Unknown, ItemName.PotentialSpot, 0, 51);
        MapItems.addItem(23, 22, Items.Unknown, ItemName.PotentialSpot, 0, 64);
        MapItems.addItem(23, 21, Items.Unknown, ItemName.PotentialSpot, 0, 64);
        MapItems.addItem(22, 23, Items.Unknown, ItemName.PotentialSpot, 38, -51);
        MapItems.addItem(22, 23, Items.Unknown, ItemName.PotentialSpot, 38, 51);
        MapItems.addItem(22, 24, Items.Unknown, ItemName.PotentialSpot, 38, 13);
        MapItems.addItem(25, 23, Items.Unknown, ItemName.PotentialSpot, -51, 51);
        MapItems.addItem(25, 21, Items.Unknown, ItemName.PotentialSpot, -51, 64);
        MapItems.addItem(24, 23, Items.Unknown, ItemName.PotentialSpot, -13, -51);
        MapItems.addItem(24, 24, Items.Unknown, ItemName.PotentialSpot, -13, 13);
        MapItems.addItem(25, 24, Items.Unknown, ItemName.PotentialSpot, -51, 38);
        MapItems.addItem(25, 22, Items.Unknown, ItemName.PotentialSpot, -51, 64);
        MapItems.addItem(24, 21, Items.Unknown, ItemName.PotentialSpot, -13, 64);
        MapItems.addItem(24, 23, Items.Unknown, ItemName.PotentialSpot, -13, 51);
        MapItems.addItem(26, 23, Items.Unknown, ItemName.PotentialSpot, 13, 51);
        MapItems.addItem(26, 21, Items.Unknown, ItemName.PotentialSpot, 13, 64);
        MapItems.addItem(25, 23, Items.Unknown, ItemName.PotentialSpot, 51, -51);
        MapItems.addItem(25, 24, Items.Unknown, ItemName.PotentialSpot, 51, 13);
        MapItems.addItem(26, 24, Items.Unknown, ItemName.PotentialSpot, 13, 38);
        MapItems.addItem(26, 22, Items.Unknown, ItemName.PotentialSpot, 13, 64);
        MapItems.addItem(25, 21, Items.Unknown, ItemName.PotentialSpot, 51, 64);
        MapItems.addItem(25, 23, Items.Unknown, ItemName.PotentialSpot, 51, 51);

        MapItems.addItem(22, 21, Items.SafetyScissors, `${ItemName.Scissors} + ${ItemName.PotentialSpot}`, 38, 64);

        // Faculty 1
        MapItems.addItem(9, 37, Items.Unknown, ItemName.PotentialSpot, -51, -38);
        MapItems.addItem(8, 37, Items.Unknown, ItemName.PotentialSpot, 26, -38);
        MapItems.addItem(8, 37, Items.Unknown, ItemName.PotentialSpot, -26, -38);
        MapItems.addItem(9, 33, Items.Unknown, ItemName.PotentialSpot, -51, 64);
        MapItems.addItem(8, 33, Items.Unknown, ItemName.PotentialSpot, 26, 64);
        MapItems.addItem(8, 33, Items.Unknown, ItemName.PotentialSpot, -26, 64);
        MapItems.addItem(8, 35, Items.Unknown, ItemName.PotentialSpot, 38, 51);
        MapItems.addItem(8, 35, Items.Unknown, ItemName.PotentialSpot, 38, 0);
        MapItems.addItem(8, 35, Items.Unknown, ItemName.PotentialSpot, 38, -51);
        MapItems.addItem(10, 37, Items.Unknown, ItemName.PotentialSpot, 0, -13);
        MapItems.addItem(10, 37, Items.Unknown, ItemName.PotentialSpot, 0, -64);
        MapItems.addItem(10, 36, Items.Unknown, ItemName.PotentialSpot, 0, 13);
        MapItems.addItem(11, 35, Items.Unknown, ItemName.PotentialSpot, -64, 0);
        MapItems.addItem(11, 35, Items.Unknown, ItemName.PotentialSpot, -64, -51);
        MapItems.addItem(11, 34, Items.Unknown, ItemName.PotentialSpot, -64, 26);
        MapItems.addItem(10, 33, Items.Unknown, ItemName.PotentialSpot, -38, -40);
        MapItems.addItem(10, 32, Items.Unknown, ItemName.PotentialSpot, -51, 38);
        MapItems.addItem(10, 32, Items.Unknown, ItemName.PotentialSpot, -64, -12);

        // Faculty 2
        MapItems.addItem(14, 33, Items.Unknown, ItemName.PotentialSpot, -51, -51);
        MapItems.addItem(13, 33, Items.Unknown, ItemName.PotentialSpot, 26, -51);
        MapItems.addItem(13, 33, Items.Unknown, ItemName.PotentialSpot, -26, -51);
        MapItems.addItem(14, 29, Items.Unknown, ItemName.PotentialSpot, -51, 51);
        MapItems.addItem(13, 29, Items.Unknown, ItemName.PotentialSpot, 26, 51);
        MapItems.addItem(13, 29, Items.Unknown, ItemName.PotentialSpot, -26, 51);
        MapItems.addItem(13, 31, Items.Unknown, ItemName.PotentialSpot, 38, 38);
        MapItems.addItem(13, 31, Items.Unknown, ItemName.PotentialSpot, 38, -13);
        MapItems.addItem(13, 31, Items.Unknown, ItemName.PotentialSpot, 38, -64);
        MapItems.addItem(15, 33, Items.Unknown, ItemName.PotentialSpot, 0, -26);
        MapItems.addItem(15, 32, Items.Unknown, ItemName.PotentialSpot, 0, 51);
        MapItems.addItem(15, 32, Items.Unknown, ItemName.PotentialSpot, 0, 0);
        MapItems.addItem(16, 31, Items.Unknown, ItemName.PotentialSpot, -64, -13);
        MapItems.addItem(16, 31, Items.Unknown, ItemName.PotentialSpot, -64, -64);
        MapItems.addItem(16, 30, Items.Unknown, ItemName.PotentialSpot, -64, 13);
        MapItems.addItem(15, 29, Items.Unknown, ItemName.PotentialSpot, -38, -52);
        MapItems.addItem(15, 28, Items.Unknown, ItemName.PotentialSpot, -51, 26);
        MapItems.addItem(15, 28, Items.Unknown, ItemName.PotentialSpot, -64, -24);

        // Faculty 3
        MapItems.addItem(24, 31, Items.Unknown, ItemName.PotentialSpot, -26, -51);
        MapItems.addItem(24, 30, Items.Unknown, ItemName.PotentialSpot, -26, 26);
        MapItems.addItem(24, 30, Items.Unknown, ItemName.PotentialSpot, -26, -26);

        // Faculty 4
        MapItems.addItem(24, 16, Items.Unknown, ItemName.PotentialSpot, 64, 0);
        MapItems.addItem(24, 15, Items.Unknown, ItemName.PotentialSpot, 64, 0);
        MapItems.addItem(24, 17, Items.Unknown, ItemName.PotentialSpot, 64, 0);

        // Faculty 5
        MapItems.addItem(10, 25, Items.Unknown, ItemName.PotentialSpot, -64, -13);
        MapItems.addItem(10, 25, Items.Unknown, ItemName.PotentialSpot, -64, -64);
        MapItems.addItem(10, 24, Items.Unknown, ItemName.PotentialSpot, -64, 13);
        MapItems.addItem(11, 24, Items.Unknown, ItemName.PotentialSpot, -26, 0);
        MapItems.addItem(11, 24, Items.Unknown, ItemName.PotentialSpot, -26, -51);
        MapItems.addItem(11, 23, Items.Unknown, ItemName.PotentialSpot, -26, 26);
        MapItems.addItem(12, 24, Items.Unknown, ItemName.PotentialSpot, -64, 0);
        MapItems.addItem(12, 24, Items.Unknown, ItemName.PotentialSpot, -64, -51);
        MapItems.addItem(12, 23, Items.Unknown, ItemName.PotentialSpot, -64, 26);
        MapItems.addItem(12, 24, Items.Unknown, ItemName.PotentialSpot, 13, 0);
        MapItems.addItem(12, 24, Items.Unknown, ItemName.PotentialSpot, 13, -51);
        MapItems.addItem(12, 23, Items.Unknown, ItemName.PotentialSpot, 13, 26);
        MapItems.addItem(12, 23, Items.Unknown, ItemName.PotentialSpot, -13, -38);
        MapItems.addItem(12, 22, Items.Unknown, ItemName.PotentialSpot, -13, 38);
        MapItems.addItem(12, 22, Items.Unknown, ItemName.PotentialSpot, -13, -13);
        MapItems.addItem(12, 21, Items.Unknown, ItemName.PotentialSpot, 23, 49);
        MapItems.addItem(12, 21, Items.Unknown, ItemName.PotentialSpot, -13, 13);
        MapItems.addItem(12, 21, Items.Unknown, ItemName.PotentialSpot, -49, -23);
        MapItems.addItem(13, 22, Items.Unknown, ItemName.PotentialSpot, 26, 13);
        MapItems.addItem(13, 22, Items.Unknown, ItemName.PotentialSpot, -26, 13);
        MapItems.addItem(12, 22, Items.Unknown, ItemName.PotentialSpot, 51, 13);

        // Cafeteria
        MapItems.addItem(9, 13, Items.Unknown, ItemName.PotentialSpot, 51, -38);
        MapItems.addItem(8, 13, Items.Unknown, ItemName.PotentialSpot, 51, -38);
        MapItems.addItem(10, 13, Items.Unknown, ItemName.PotentialSpot, 51, -38);
        MapItems.addItem(10, 14, Items.Unknown, ItemName.PotentialSpot, 0, -26);
        MapItems.addItem(9, 14, Items.Unknown, ItemName.PotentialSpot, 0, -26);
        MapItems.addItem(11, 14, Items.Unknown, ItemName.PotentialSpot, 0, -26);
        MapItems.addItem(13, 13, Items.Unknown, ItemName.PotentialSpot, -51, -38);
        MapItems.addItem(12, 13, Items.Unknown, ItemName.PotentialSpot, -51, -38);
        MapItems.addItem(14, 13, Items.Unknown, ItemName.PotentialSpot, -51, -38);
        MapItems.addItem(17, 13, Items.Unknown, ItemName.PotentialSpot, 13, -38);
        MapItems.addItem(16, 13, Items.Unknown, ItemName.PotentialSpot, 13, -38);
        MapItems.addItem(18, 13, Items.Unknown, ItemName.PotentialSpot, 13, -38);
        MapItems.addItem(14, 9, Items.Unknown, ItemName.PotentialSpot, -13, 38);
        MapItems.addItem(14, 8, Items.Unknown, ItemName.PotentialSpot, -13, 38);
        MapItems.addItem(14, 10, Items.Unknown, ItemName.PotentialSpot, -13, 38);
        MapItems.addItem(11, 9, Items.Unknown, ItemName.PotentialSpot, -38, 38);
        MapItems.addItem(11, 8, Items.Unknown, ItemName.PotentialSpot, -38, 38);
        MapItems.addItem(11, 10, Items.Unknown, ItemName.PotentialSpot, -38, 38);
        MapItems.addItem(9, 7, Items.Unknown, ItemName.PotentialSpot, -64, -51);
        MapItems.addItem(7, 7, Items.Unknown, ItemName.PotentialSpot, 64, -51);
        MapItems.addItem(10, 7, Items.Unknown, ItemName.PotentialSpot, -64, -51);
        MapItems.addItem(16, 7, Items.Unknown, ItemName.PotentialSpot, -13, 0);
        MapItems.addItem(15, 7, Items.Unknown, ItemName.PotentialSpot, -13, 0);
        MapItems.addItem(17, 7, Items.Unknown, ItemName.PotentialSpot, -13, 0);
    }

    #initializePortalPosterWalls() {
        // Bladder room
        MapCells.addTopBorder(MapCells.getCell(25, 19), portalPosterColor);
        MapCells.addTopBorder(MapCells.getCell(24, 19), portalPosterColor);
        MapCells.addBottomBorder(MapCells.getCell(25, 18), portalPosterColor);
        MapCells.addBottomBorder(MapCells.getCell(24, 18), portalPosterColor);

        MapCells.addTopBorder(MapCells.getCell(25, 21), portalPosterColor);
        MapCells.addTopBorder(MapCells.getCell(24, 21), portalPosterColor);
        MapCells.addBottomBorder(MapCells.getCell(25, 20), portalPosterColor);
        MapCells.addBottomBorder(MapCells.getCell(24, 20), portalPosterColor);


        // Non canon room
        MapCells.addTopBorder(MapCells.getCell(10, 27), portalPosterColor);
        MapCells.addBottomBorder(MapCells.getCell(10, 26), portalPosterColor);


        // Basement room
        MapCells.addRightBorder(MapCells.getCell(15, 19), portalPosterColor);
        MapCells.addLeftBorder(MapCells.getCell(16, 19), portalPosterColor);
    }
}