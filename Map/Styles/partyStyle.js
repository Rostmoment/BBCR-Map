class PartyStyle extends BaseStyle {
    initialize() {
        super.initialize();

        this._initializeBasementRoom();
    }

    _initializeShinyQuarter() {
        MapItems.addItem(17, 38, Items.Present, ItemName.Present, 13, 38);
    }

    _initializeItems() {
        // Classroom 3
        MapItems.addItem(20, 30, Items.Present, ItemName.Present, -13, -64);
        MapItems.addItem(18, 30, Items.Present, ItemName.Present, 38, 13);

        // Classroom 4
        MapItems.addItem(14, 19, Items.Present, ItemName.Present, 38, -13);

        // Classroom 5
        MapItems.addItem(3, 11, Items.Present, ItemName.Present, -64, 0);
        MapItems.addItem(4, 13, Items.Present, ItemName.Present, -38, 0);

        // Classroom 6
        MapItems.addItem(21, 11, Items.Present, ItemName.Present, 0, 0);

        // Classroom 7
        MapItems.addItem(22, 22, Items.Present, ItemName.Present, 38, -64);

        // Faculty 1
        MapItems.addItem(8, 35, Items.Present, ItemName.Present, 38, -13);

        // Faculty 2
        MapItems.addItem(16, 31, Items.Present, ItemName.Present, -64, -64);

        // Faculty 3
        MapItems.addItem(24, 30, Items.Present, ItemName.Present, -26, 26);

        // Faculty 4
        MapItems.addItem(25, 17, Items.Present, ItemName.Present, -64, -64);
        MapItems.addItem(25, 16, Items.Present, ItemName.Present, -64, -64);

        // Faculty 5
        MapItems.addItem(10, 25, Items.Present, ItemName.Present, -64, -64);
        MapItems.addItem(13, 22, Items.Present, ItemName.Present, 0, 13);

        // Closet
        MapItems.addItem(25, 36, Items.Present, ItemName.Present, 32, 32);

        // Cafeteria
        MapItems.addItem(18, 7, Items.Present, ItemName.Present, 0, 0);
        MapItems.addItem(11, 14, Items.Present, ItemName.Present, 38, -26);
        
    }
}