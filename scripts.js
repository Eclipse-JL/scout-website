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


function showDetails(item) {
    document.getElementById("details-title").textContent = item.getAttribute("data-title");
    document.getElementById("details-text").innerHTML = item.querySelector('.financement-details').innerHTML;
    document.getElementById("details-image").src = item.getAttribute("data-image");
    document.getElementById("details-container").style.display = "flex";
}

function hideDetails() {
    document.getElementById("details-container").style.display = "none";
}

document.querySelectorAll('.implication-item').forEach(item => {
    // Ouvre au survol
    item.addEventListener('mouseenter', function() {
        this.classList.add('open');
    });
    // Ferme au sortir de la souris, seulement si pas "verrouillé" par clic
    item.addEventListener('mouseleave', function() {
        if (!this.classList.contains('locked')) {
            this.classList.remove('open');
        }
    });
    // Ouvre/ferme au clic et "verrouille" l'ouverture
    item.querySelector('.implication-header').addEventListener('click', function(e) {
        // Enlève le verrouillage sur tous les autres
        document.querySelectorAll('.implication-item').forEach(i => {
            if (i !== item) {
                i.classList.remove('locked');
                i.classList.remove('open');
            }
        });
        // Verrouille ou déverrouille ce bloc
        item.classList.toggle('locked');
        if (item.classList.contains('locked')) {
            item.classList.add('open');
        } else {
            item.classList.remove('open');
        }
    });
});
