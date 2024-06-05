var myNav = document.getElementById("nav");
var myLogo = document.getElementById("logo");

var darkIcon = document.getElementById("darkIcon");
var lightIcon = document.getElementById("lightIcon");
var body = document.getElementById("body");

var toggleButton = document.getElementById('toggleButton');
var collapseElement = document.getElementById('collapseExample');

function onScroll() {

    if ((document.body.scrollTop>= 0)  || (document.documentElement.scrollTop >= 0)) {
        myNav.classList.add("navbar-light");
        myNav.classList.remove("navbar-dark");
        myLogo.classList.remove("logo-light");
        myLogo.classList.add("logo-dark");
    } else {
        myNav.classList.add("navbar-dark");
        myNav.classList.remove("navbar-light");
        myLogo.classList.add("logo-light");
        myLogo.classList.remove("logo-dark");
    }
}
onScroll();
window.onscroll = onScroll;


function lightMode(){
    lightIcon.classList.add("d-none");
    darkIcon.classList.remove("d-none");
    body.classList.remove("dark");
    body.classList.add("light");
}

function darkMode(){
    darkIcon.classList.add("d-none");
    lightIcon.classList.remove("d-none");
    body.classList.add("dark");
}

document.addEventListener('DOMContentLoaded', function () {
    toggleButton.addEventListener('click', function () {
        if (collapseElement.classList.contains('show')) {
            toggleButton.textContent = 'SEE MORE';
        } else {
            toggleButton.textContent = 'SEE LESS';
        }
    });

    // Also handle the collapse event to update text correctly
    collapseElement.addEventListener('shown.bs.collapse', function () {
        toggleButton.textContent = 'SEE LESS';
    });

    collapseElement.addEventListener('hidden.bs.collapse', function () {
        toggleButton.textContent = 'SEE MORE';
    });
});



