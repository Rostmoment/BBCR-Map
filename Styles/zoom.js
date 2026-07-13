const mapWrapper = document.querySelector(".map-wrapper");

let currentScale = 1;

const MIN_SCALE = 0.75;
const MAX_SCALE = 3;
const ZOOM_STEP = 0.05;

function updateZoom() {
    mapWrapper.style.transform = `scale(${currentScale})`;
}

function initZoom() {
    document.addEventListener("wheel", (e) => {
        if (e.ctrlKey) {
            e.preventDefault();

            const delta = e.deltaY > 0 ? -ZOOM_STEP : ZOOM_STEP;
            currentScale = Math.min(
                Math.max(currentScale + delta, MIN_SCALE),
                MAX_SCALE
            );

            updateZoom();
        }
    }, { passive: false });

    updateZoom();
    document.body.style.zoom = "25%";
}