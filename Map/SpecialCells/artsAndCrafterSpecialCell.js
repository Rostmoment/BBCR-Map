class ArtsAndCraftersSpecialCell extends BaseSpecialCell {
    constructor(x, y) {
        super();
        this.x = x;
        this.y = y;
    }

    getString() {
        return `<br>A&C spawn trigger<br>Connected A&C spawn cell: (${this.x}; ${this.y})`;
    }
}