const panoramaButton = document.getElementById("panorama-viewer");

class PanoramaViewer {
    static #cellMap = new Map();

    static addPanoramaForSingleCell(x, y, style, file) {
        const key = MapCells.getStringKey(x, y);

        if (PanoramaViewer.#cellMap.has(key)) {
            console.log(`Cell ${key} already has panorama ${PanoramaViewer.#cellMap.get(key)}`);
            return;
        }

        PanoramaViewer.#cellMap.set(key, `Rooms/${style}/${file}`);
    }

    static addPanoramaForCells(cells, style, file) {
        for (const [x, y] of cells) {
            PanoramaViewer.addPanoramaForSingleCell(x, y, style, file);
        }
    }

    static getPanorama(x, y) {
        const key = MapCells.getStringKey(x, y);
        if (!PanoramaViewer.#cellMap.has(key)) {
            console.log(`Cell ${key} doesn't have panorama to see`);
            return null;
        }
        return PanoramaViewer.#cellMap.get(key);
    }

    static hasPanorama(x, y) {
        const key = MapCells.getStringKey(x, y);
        return PanoramaViewer.#cellMap.has(key);
    }

    static openPanorama(x, y) {
        const panorama = PanoramaViewer.getPanorama(x, y);
        if (!panorama) {
            console.log(`Cell ${MapCells.getStringKey(x, y)} does not have panorama`);
            return;
        }

        const url = `../Panorama/index.html?url=${panorama}`;
        window.open(url, "_blank");
    }

    static setPanoramaButtonHidden(hidden) {
        GeneralHelpers.setHiddenDiv(panoramaButton, hidden);
    }
}

panoramaButton.addEventListener("click", () => {
    PanoramaViewer.openPanorama(MapCells.currentlyClickedCell.dataset.x, MapCells.currentlyClickedCell.dataset.y);
});