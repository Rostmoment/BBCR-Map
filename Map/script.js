const style = new URLSearchParams(window.location.search).get("style");

document.title = `${style} Style Map`;

const newFavicon = document.createElement("link");
newFavicon.rel = "icon";
newFavicon.type = "image/png";
newFavicon.href = `../Icons/${style}.png`;

document.head.appendChild(newFavicon);

initZoom();

const styles = new Map();
styles.set("classic", ClassicStyle);
styles.set("party", PartyStyle);
styles.set("demo", DemoStyle);
styles.set("null", NullStyle);

const styleClass = styles.get(style.toLowerCase());;
const instance = new styleClass(style);
instance.initialize();

const button = document.getElementById("back-button");
button.addEventListener("click", () => {
	window.location.href = "../index.html";
});