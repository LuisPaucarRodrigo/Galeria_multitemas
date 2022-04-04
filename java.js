document.addEventListener('DOMContentLoaded', () => {
	const imgLightBox = document.querySelectorAll('#imagen');
	M.Materialbox.init(imgLightBox, {
		inDuration: 500,
		outDuration: 500,
	});
});
const navtoggle = document.querySelector(".nav_toggle");
const navmenu = document.querySelector(".nav_menu");

navtoggle.addEventListener("click", () => {
    navmenu.classList.toggle("nav_menu_visible")
});
const claro = document.querySelector(".modo_claro");
const body = document.querySelector(".body");

claro.addEventListener("click", () => {
    body.classList.toggle("modo_oscuro")
});

