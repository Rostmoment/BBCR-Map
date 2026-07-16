const viewportElement = document.getElementById("viewport");
const mapWrapper = document.getElementById("mapWrapper");

const MIN_SCALE = 0.08;
const MAX_SCALE = 4;
const WHEEL_ZOOM_FACTOR = 0.00015;
const DRAG_THRESHOLD = 8; 

const state = { x: 0, y: 0, scale: 1 };

const activePointers = new Map();
let panPointerId = null;
let lastPanX = 0;
let lastPanY = 0;
let dragStartX = 0;
let dragStartY = 0;
let didDrag = false;

let pinchStartDistance = 0;
let pinchStartScale = 1;

function applyTransform() {
    mapWrapper.style.transform = `translate(${state.x}px, ${state.y}px) scale(${state.scale})`;
}

function clampScale(scale) {
    return Math.min(Math.max(scale, MIN_SCALE), MAX_SCALE);
}

function zoomAt(clientX, clientY, targetScale) {
    const newScale = clampScale(targetScale);
    if (newScale === state.scale) return;

    const rect = viewportElement.getBoundingClientRect();
    const offsetX = clientX - rect.left;
    const offsetY = clientY - rect.top;

    const contentX = (offsetX - state.x) / state.scale;
    const contentY = (offsetY - state.y) / state.scale;

    state.scale = newScale;
    state.x = offsetX - contentX * state.scale;
    state.y = offsetY - contentY * state.scale;

    applyTransform();
}

function centerAndFit() {
    const viewportRect = viewportElement.getBoundingClientRect();
    const naturalWidth = mapWrapper.scrollWidth;
    const naturalHeight = mapWrapper.scrollHeight;

    const padding = 0.9;
    const fitScale = Math.min(
        (viewportRect.width * padding) / naturalWidth,
        (viewportRect.height * padding) / naturalHeight
    );

    state.scale = clampScale(fitScale);
    state.x = (viewportRect.width - naturalWidth * state.scale) / 2;
    state.y = (viewportRect.height - naturalHeight * state.scale) / 2;

    applyTransform();
}

function distanceBetween(p1, p2) {
    return Math.hypot(p1.x - p2.x, p1.y - p2.y);
}

function midpointBetween(p1, p2) {
    return { x: (p1.x + p2.x) / 2, y: (p1.y + p2.y) / 2 };
}

function initZoom() {
    viewportElement.addEventListener("wheel", (e) => {
        e.preventDefault();

        if (e.ctrlKey || e.metaKey) {
            const targetScale = state.scale * Math.exp(-e.deltaY * WHEEL_ZOOM_FACTOR * 10);
            zoomAt(e.clientX, e.clientY, targetScale);
        } else {
            state.x -= e.deltaX;
            state.y -= e.deltaY;
            applyTransform();
        }
    }, { passive: false });

    viewportElement.addEventListener("pointerdown", (e) => {

       /*  
           IMPORTANT: setPointerCapture is intentionally NOT used here.
           It retargets derived mouse events (including click) to
           the element that has captured the pointer—because of this, a click on a cell
           would effectively be sent with `target = viewportElement`, rather than
           target = cell, and the click handlers on the cells themselves would never
           be triggered. Instead of capture, we listen for move/up events on the window
           (see below) so that dragging continues to work outside
           the viewport, but clicks still hit the actual element.
        */

        activePointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
        didDrag = false;

        if (activePointers.size === 1) {
            panPointerId = e.pointerId;
            lastPanX = e.clientX;
            lastPanY = e.clientY;
            dragStartX = e.clientX;
            dragStartY = e.clientY;
            viewportElement.classList.add("dragging");
        } else if (activePointers.size === 2) {
            panPointerId = null;
            const [p1, p2] = Array.from(activePointers.values());
            pinchStartDistance = distanceBetween(p1, p2);
            pinchStartScale = state.scale;
        }
    });

    window.addEventListener("pointermove", (e) => {
        if (!activePointers.has(e.pointerId)) return;
        activePointers.set(e.pointerId, { x: e.clientX, y: e.clientY });

        if (activePointers.size === 2) {
            const [p1, p2] = Array.from(activePointers.values());
            const distance = distanceBetween(p1, p2);
            const mid = midpointBetween(p1, p2);
            if (pinchStartDistance > 0) {
                zoomAt(mid.x, mid.y, pinchStartScale * (distance / pinchStartDistance));
            }
            didDrag = true;
            return;
        }

        if (panPointerId === e.pointerId) {
            const dx = e.clientX - lastPanX;
            const dy = e.clientY - lastPanY;

            const totalDx = e.clientX - dragStartX;
            const totalDy = e.clientY - dragStartY;
            if (Math.abs(totalDx) > DRAG_THRESHOLD || Math.abs(totalDy) > DRAG_THRESHOLD) {
                didDrag = true;
            }

            state.x += dx;
            state.y += dy;
            lastPanX = e.clientX;
            lastPanY = e.clientY;
            applyTransform();
        }
    });

    const releasePointer = (e) => {
        activePointers.delete(e.pointerId);
        viewportElement.classList.remove("dragging");

        if (activePointers.size === 1) {
            const [remainingId, pos] = Array.from(activePointers.entries())[0];
            panPointerId = remainingId;
            lastPanX = pos.x;
            lastPanY = pos.y;
            dragStartX = pos.x;
            dragStartY = pos.y;
        } else {
            panPointerId = null;
        }
    };

    window.addEventListener("pointerup", releasePointer);
    window.addEventListener("pointercancel", releasePointer);

    viewportElement.addEventListener("click", (e) => {
        if (didDrag) {
            e.preventDefault();
            e.stopPropagation();
        }
    }, true);

    document.querySelectorAll("[data-zoom-in]").forEach((btn) => btn.addEventListener("click", () => {
        const rect = viewportElement.getBoundingClientRect();
        zoomAt(rect.left + rect.width / 2, rect.top + rect.height / 2, state.scale * 1.25);
    }));
    document.querySelectorAll("[data-zoom-out]").forEach((btn) => btn.addEventListener("click", () => {
        const rect = viewportElement.getBoundingClientRect();
        zoomAt(rect.left + rect.width / 2, rect.top + rect.height / 2, state.scale / 1.25);
    }));
    document.querySelectorAll("[data-zoom-reset]").forEach((btn) => btn.addEventListener("click", centerAndFit));

    window.addEventListener("resize", centerAndFit);

    centerAndFit();
}