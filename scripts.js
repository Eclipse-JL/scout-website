function toggleNav() {
    const sidenav = document.getElementById("mySidenav");
    const overlay = document.getElementById("overlay");

    if (sidenav.style.width === "250px") {
        // Si le sidenav est ouvert, on le ferme
        closeNav();
    } else {
        // Sinon, on l'ouvre
        openNav();
    }
}

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    document.getElementById("overlay").style.display = "block"; // Affiche l'overlay
    document.body.classList.add("darken");
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
    document.getElementById("overlay").style.display = "none"; // Masque l'overlay
    document.body.classList.remove("darken");
}
