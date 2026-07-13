const style = new URLSearchParams(window.location.search).get("style");

document.title = `${style} Style`;

const newFavicon = document.createElement("link");
newFavicon.rel = "icon";
newFavicon.type = "image/png";
newFavicon.href = `../Icons/${style}.png`;

document.head.appendChild(newFavicon);

initZoom();

const cells = [
    [0, 0], [0, 1], [0, 2], [0, 3], [0, 4],
    [1, 2],
    [2, 0], [2, 1], [2, 2], [2, 3], [2, 4],
    [4, 0], [4, 1], [4, 2], [4, 3], [4, 4],
    [6, 0], [6, 1], [6, 2], [6, 4],
    [8, 0], [8, 1], [8, 2], [8, 4]
];

cells.forEach(([x, y]) => addCell(x, y));