class NullStyle extends BaseStyle {
    _initializeSkybox() {
        document.body.style.backgroundImage = "url('Skyboxes/Null.png')";
    }

    initialize() {
        super.initialize();

        this._initializeBladderRoom();
    }

    _initializeItems() {
        // Outside eraser
        MapItems.addItem(17, 42, Items.Eraser, ItemName.ChalkEraser, 20, 75);

        // Closet WD
        MapItems.addItem(25, 36, Items.NoSquee, ItemName.NoSquee, 45, 30)

        // Faculty 1 zesty
        MapItems.addItem(8, 35, Items.Zesty, ItemName.Zesty, 40, 0);

        // Faculty 2 tape
        MapItems.addItem(16, 31, Items.Tape, ItemName.Tape, -45, -45);

        // Faculty 3 lock
        MapItems.addItem(24, 30, Items.DoorLock, ItemName.DoorLock, 5, 40);

        // Faculty 4 WD and whistle
        MapItems.addItem(24, 16, Items.Whistle, ItemName.PrincipalWhistle, 85, -45);
        MapItems.addItem(24, 16, Items.NoSquee, ItemName.NoSquee, 85, 85);

        // Faculty 5 quarter and clock
        MapItems.addItem(9, 24, Items.Quarter, ItemName.Quarter, 85, 85);
        MapItems.addItem(13, 22, Items.AlarmClock, ItemName.AlarmClock, 17, 30);

        // Classroom 3 eraser 
        MapItems.addItem(20, 29, Items.Eraser, ItemName.ChalkEraser, 5, 85);

        // Classroom 4 eraser
        MapItems.addItem(14, 19, Items.Eraser, ItemName.ChalkEraser, 45, 5);

        // Classroom 5 quarter
        MapItems.addItem(4, 13, Items.Quarter, ItemName.Quarter, -10, 17.5);

        // Classroom 7 eraser
        MapItems.addItem(22, 22, Items.Eraser, ItemName.ChalkEraser, 42, -45);

        // Cafeteria zesty and bsoda
        MapItems.addItem(11, 14, Items.Zesty, ItemName.Zesty, 50, 0);
        MapItems.addItem(14, 10, Items.BSODA, ItemName.BSODA, 20, 20);
    }

    // No shiny quarter!
    _initializeShinyQuarter() {

    }
}