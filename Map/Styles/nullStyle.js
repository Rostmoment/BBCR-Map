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
        addItem(17, 42, Items.Eraser, 20, 75);

        // Closet WD
        addItem(25, 36, Items.NoSquee, 45, 30)

        // Faculty 1 zesty
        addItem(8, 35, Items.Zesty, 40, 0);

        // Faculty 2 tape
        addItem(16, 31, Items.Tape, -45, -45);

        // Faculty 3 lock
        addItem(24, 30, Items.DoorLock, 5, 40);

        // Faculty 4 WD and whistle
        addItem(24, 16, Items.Whistle, 85, -45);
        addItem(24, 16, Items.NoSquee, 85, 85);

        // Faculty 5 quarter and clock
        addItem(9, 24, Items.Quarter, 85, 85);
        addItem(13, 22, Items.AlarmClock, 17, 30);

        // Classroom 3 eraser 
        addItem(20, 29, Items.Eraser, 5, 85);

        // Classroom 4 eraser
        addItem(14, 19, Items.Eraser, 45, 5);

        // Classroom 5 quarter
        addItem(4, 13, Items.Quarter, -10, 17.5);

        // Classroom 7 eraser
        addItem(22, 22, Items.Eraser, 42, -45);

        // Cafeteria zesty and bsoda
        addItem(11, 14, Items.Zesty, 50, 0);
        addItem(14, 10, Items.BSODA, 20, 20);
    }
}