const borderStyle = "6px solid";

const wallColor = "black";
const windowColor = "white";
const doorColor = "blue";
const swingDoorColor = "yellow";
const portalPosterColor = "deeppink";

const mapElement = document.getElementById("map");
const addedCells = new Map();

class MapCells {

    static currentlyClickedCell;

    static getStringKey(x, y) {
        return `${x};${y}`;
    }

    static isValidCellPosition(x, y) {
        const rootStyles = getComputedStyle(document.documentElement);
        const countX = parseInt(rootStyles.getPropertyValue('--cells-count-x'), 10);
        const countY = parseInt(rootStyles.getPropertyValue('--cells-count-y'), 10);

        return x >= 0 && x < countX && y >= 0 && y < countY;
    }

    static getCell(x, y) {
        const key = MapCells.getStringKey(x, y);

        if (addedCells.has(key)) {
            return addedCells.get(key);
        }
        return null;
    }

    static getAllCells() {
        const res = [];
        for (const [key, value] of addedCells) {
            res.push(value);
        }
        return res;
    }

    static getOrAddCell(x, y, type, room) {
        const key = MapCells.getStringKey(x, y);

        if (addedCells.has(key)) {
            console.log(`Cell ${x};${y} has already been added! Returning it...`)
            return addedCells.get(key);
        }

        const cell = document.createElement("div");

        cell.classList.add("cell");
        cell.classList.add(type || "unknown-cell");

        cell.style.gridColumn = x + 1;
        cell.style.gridRow = y + 1;

        cell.dataset.x = x;
        cell.dataset.y = y;
        cell.dataset.room = room;

        mapElement.appendChild(cell);

        cell.addEventListener("click", () => {
            PanoramaViewer.setPanoramaButtonHidden(!PanoramaViewer.hasPanorama(x, y));
            MapCells.currentlyClickedCell = cell;
            MapCells.showInfo(cell);
        });

        addedCells.set(key, cell);
        return cell;
    }

    static tryAddWalls(cells) {
        const cellSet = new Set(cells.map(([x, y]) => MapCells.getStringKey(x, y)));

        for (const [x, y] of cells) {
            const currentCell = MapCells.getCell(x, y);

            if (!currentCell)
                continue;

            // Left
            if (!cellSet.has(MapCells.getStringKey(x - 1, y))) {
                MapCells.addLeftBorder(currentCell, wallColor);

                const neighbor = MapCells.getCell(x - 1, y);
                if (neighbor)
                    MapCells.addRightBorder(neighbor, wallColor);
            }

            // Right
            if (!cellSet.has(MapCells.getStringKey(x + 1, y))) {
                MapCells.addRightBorder(currentCell, wallColor);

                const neighbor = MapCells.getCell(x + 1, y);
                if (neighbor)
                    MapCells.addLeftBorder(neighbor, wallColor);
            }

            // Top
            if (!cellSet.has(MapCells.getStringKey(x, y - 1))) {
                MapCells.addTopBorder(currentCell, wallColor);

                const neighbor = MapCells.getCell(x, y - 1);
                if (neighbor)
                    MapCells.addBottomBorder(neighbor, wallColor);
            }

            // Bottom
            if (!cellSet.has(MapCells.getStringKey(x, y + 1))) {
                MapCells.addBottomBorder(currentCell, wallColor);

                const neighbor = MapCells.getCell(x, y + 1);
                if (neighbor)
                    MapCells.addTopBorder(neighbor, wallColor);
            }
        }
    }
    static addCells2DArray(cells, type, room) {
        cells.forEach(([x, y]) => MapCells.getOrAddCell(x, y, type, room));
        MapCells.tryAddWalls(cells);
    }

    static createRectangularArea(startX, startY, width, height) {
        const cells = [];
        for (let x = startX; x < startX + width; x++) {
            for (let y = startY; y < startY + height; y++) {
                cells.push([x, y]);
            }
        }
        return cells;
    }

    static addTopBorder(cell, color) {
        cell.style.borderTop = `${borderStyle} ${color}`;
    }
    static addBottomBorder(cell, color) {
        cell.style.borderBottom = `${borderStyle} ${color}`;
    }
    static addLeftBorder(cell, color) {
        cell.style.borderLeft = `${borderStyle} ${color}`;
    }
    static addRightBorder(cell, color) {
        cell.style.borderRight = `${borderStyle} ${color}`;
    }

    static removeTopBorder(cell) {
        cell.style.borderTop = "none";
    }
    static removeBottomBorder(cell) {
        cell.style.borderBottom = "none";
    }
    static removeRightBorder(cell) {
        cell.style.borderRight = "none";
    }
    static removeLeftBorder(cell) {
        cell.style.borderLeft = "none";
    }

    static mapToGameCoordinates(x, y) {
        return {
            x: 5 + x * 10,
            y: 425 - y * 10
        }
    }

    static showInfo(cell) {
        const title = document.getElementById("cell-info-title");
        const info = document.getElementById("cell-info-info");
        const x = cell.dataset.x;
        const y = cell.dataset.y;

        title.innerHTML = cell.dataset.room;

        const game = MapCells.mapToGameCoordinates(x, y);
        info.innerHTML = `In game coordinates: (${game.x}; y; ${game.y})
                          <br>
                          In site map coordinates: (${x}; ${y})`;
    }
}