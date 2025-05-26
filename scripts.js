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


function showDetails(item) {
    document.getElementById("details-title").textContent = item.getAttribute("data-title");
    document.getElementById("details-text").innerHTML = item.querySelector('.financement-details').innerHTML;
    let imgDiv = document.getElementById("details-image");
    imgDiv.innerHTML = `<img src="${item.getAttribute("data-image")}" alt="${item.getAttribute("data-title")}" style="max-width:100%;height:auto;">`;
    document.getElementById("details-container").style.display = "flex";
}

function hideDetails() {
    document.getElementById("details-container").style.display = "none";
}

document.getElementById("details-container").addEventListener("click", function(e) {
    if (e.target === this) {
        hideDetails();
    }
});


// Alterne la disposition de la galerie (ligne/colonne)
//function toggleGalleryLayout(header) {
//    const group = header.closest('.gallery-group');
//    group.classList.toggle('vertical');
//}

// Scroll horizontal dans la galerie
//function scrollGallery(btn, direction) {
//    const wrapper = btn.parentElement;
//    const row = wrapper.querySelector('.gallery-row');
//    const scrollAmount = row.offsetWidth * 0.7; // scroll de 70% de la largeur visible
//    row.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
//}

// Lightbox pour agrandir l'image
//function openLightbox(img) {
//    const overlay = document.getElementById('lightbox-overlay');
//    const lightboxImg = document.getElementById('lightbox-img');
//    lightboxImg.src = img.src;
//    lightboxImg.alt = img.alt;
//    overlay.classList.add('active');
//}
//function closeLightbox(event) {
//    if (event.target.id === 'lightbox-overlay' || event.target.classList.contains('close-lightbox')) {
//        document.getElementById('lightbox-overlay').classList.remove('active');
//    }
//}
