/* HAMBURGER MENU */
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector(".hamburger");
    if (hamburger) {
        const navMenu = document.querySelector(".nav-menu");

        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");

            if (navMenu.classList.contains("active")){
                document.getElementById("menuButton").classList.add("hidden");
            }
            else {
                document.getElementById("menuButton").classList.remove("hidden");
            }
        });
    }
});		

function toggleMenu() {
	const menu = document.querySelector(".menu-links");
	const icon = document.querySelector(".hamburger-icon");
	menu.classList.toggle("open");
	icon.classList.toggle("open");

}