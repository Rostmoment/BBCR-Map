class DemoStyle extends BaseStyle {
    initialize() {
        super.initialize();

        addCells2DArray(createRectangularArea(8, 27, 3, 3), FloorType.NonCannon, Rooms.NonCannon);
        addCells2DArray(createRectangularArea(16, 19, 3, 1), FloorType.DarkHall, Rooms.Basement);
    }
}