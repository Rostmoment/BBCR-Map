const style = new URLSearchParams(window.location.search).get("style");

document.title = `${style} Style`;

const newFavicon = document.createElement("link");
newFavicon.rel = "icon";
newFavicon.type = "image/png";
newFavicon.href = `../Icons/${style}.png`;

document.head.appendChild(newFavicon);

initZoom();

initializeAllClassrooms();
initializeAllFaculties();
initializeMinorRooms();