var closeIcon=document.getElementById("header-close");
var hamburger=document.getElementById("header-hamburger");
var menu=document.getElementById("header-menu-2");

function displayMenu(){
    closeIcon.style.display="flex";
    hamburger.style.display="none";
    menu.style.display="flex";
}
function closeMenu(){
    closeIcon.style.display="none";
    hamburger.style.display="flex";
    menu.style.display="none";
}