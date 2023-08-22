const hamburgerIcon = document.getElementById("icon-menu");
const iconClose = document.getElementById("close-menu");
const navMenu = document.getElementById("navMenu");

hamburgerIcon.addEventListener("click", ()=>{
    navMenu.className = "nav-active";
    hamburgerIcon.style.display = "none";
    iconClose.style.display = "flex";
});


iconClose.addEventListener("click", ()=>{
    navMenu.className = "nav-menu";
    hamburgerIcon.style.display = "flex";
    iconClose.style.display = "none";
});