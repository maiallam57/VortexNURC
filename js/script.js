var darkIcon = document.getElementById("darkIcon");
var lightIcon = document.getElementById("lightIcon");
var body = document.getElementById("body");

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