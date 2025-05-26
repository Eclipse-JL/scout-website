function toggleNav() {
    const sidenav = document.getElementById("mySidenav");
    const overlay = document.getElementById("overlay");

    if (sidenav.style.width === "250px") {
        
        closeNav();
    } else {
        
        openNav();
    }
}

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    document.getElementById("overlay").style.display = "block"; 
    document.body.classList.add("darken");
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
    document.getElementById("overlay").style.display = "none"; 
    document.body.classList.remove("darken");
}

const detailsData = {
    calendrier: {
        title: "Calendrier",
        text: "Le calendrier est une campagne annuelle où nous vendons des calendriers personnalisés pour financer nos activités.",
        image: "images/calendrier.png"
    },
    chocolat: {
        title: "Chocolat",
        text: "La vente de chocolat est une tradition qui aide à financer nos projets tout en offrant de délicieuses friandises.",
        image: "images/chocolat.png"
    },
    lave: {
        title: "Lave-O-Thon",
        text: "Le Lave-O-Thon est une activité où nous lavons des voitures pour collecter des fonds tout en interagissant avec la communauté.",
        image: "images/lave-o-thon.png"
    },
    canette: {
        title: "Canette",
        text: "La collecte de canettes est une initiative écologique et financière pour soutenir nos activités.",
        image: "images/canette.png"
    },
    linge: {
        title: "Linge",
        text: "Nous collectons des vêtements usagés pour les revendre ou les recycler afin de financer nos projets.",
        image: "images/linge.png"
    },
    dons: {
        title: "Dons",
        text: "Les dons sont essentiels pour nous permettre de continuer à offrir des activités enrichissantes à nos membres.",
        image: "images/dons.png"
    }
};

function showDetails(campaign) {
    const details = detailsData[campaign];
    if (details) {
        document.getElementById("details-title").textContent = details.title;
        document.getElementById("details-text").textContent = details.text;
        document.getElementById("details-image").src = details.image;
        document.getElementById("details-container").style.display = "flex";
    }
}

function hideDetails() {
    document.getElementById("details-container").style.display = "none";
}
