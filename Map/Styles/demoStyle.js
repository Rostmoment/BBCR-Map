class DemoStyle extends BaseStyle {
    initialize() {
        super.initialize();

        addCells2DArray(createRectangularArea(8, 27, 3, 3), FloorType.NonCannon, Rooms.NonCannon);
        addCells2DArray(createRectangularArea(16, 19, 3, 1), FloorType.DarkHall, Rooms.Basement);

        this.#initializePortalPosterWalls();
    }

    #initializePortalPosterWalls() {
        // Bladder room
        addTopBorder(getCell(25, 19), portalPosterColor);
        addTopBorder(getCell(24, 19), portalPosterColor);
        addBottomBorder(getCell(25, 18), portalPosterColor);
        addBottomBorder(getCell(24, 18), portalPosterColor);

        addTopBorder(getCell(25, 21), portalPosterColor);
        addTopBorder(getCell(24, 21), portalPosterColor);
        addBottomBorder(getCell(25, 20), portalPosterColor);
        addBottomBorder(getCell(24, 20), portalPosterColor);


        // Non canon room
        addTopBorder(getCell(10, 27), portalPosterColor);
        addBottomBorder(getCell(10, 26), portalPosterColor);


        // Basement room
        addRightBorder(getCell(15, 19), portalPosterColor);
        addLeftBorder(getCell(16, 19), portalPosterColor);
    }
}