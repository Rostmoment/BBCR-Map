class DemoStyle extends BaseStyle {
    initialize() {
        super.initialize();

        this._initializeBasementRoom()
        this._initializeBladderRoom();
        this._initializeNonCanonRoom();

        this.#initializePortalPosterWalls();
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