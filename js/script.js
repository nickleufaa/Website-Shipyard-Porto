
// SHIPYARD WEBSITE

console.log("Shipyard Website Loaded!");

/* =================================
   ELEGANT SCROLL REVEAL
================================= */
document.addEventListener("DOMContentLoaded", () => {
    const revealElements = document.querySelectorAll(`
        .about > *,
        .comparison-header,
        .comparison-card,
        .profile-header,
        .stat-item,
        .location-header,
        .location-card,
        .swot-header,
        .swot-card,
        .masterplan-header,
        .masterplan-placeholder,
        .dimension-info > div,
        .engineering-header,
        .engineering-card,
        .technology-header,
        .technology-card,
        .roadmap-header,
        .investment-priority,
        .roadmap-heading,
        .roadmap-card
    `);
    revealElements.forEach((element, index) => {
        element.classList.add("reveal");

        const position = index % 4;

        if (position !== 0) {
            element.classList.add(`reveal-delay-${position}`);
        }
    });

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("active");

                observer.unobserve(entry.target);
            }

        });

    }, {
        threshold: 0.12
    });

    revealElements.forEach(element => {
        observer.observe(element);
    });

});

// FLOATING NAVIGATION
document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("floatingButton");
    const menu = document.getElementById("floatingMenu");

    button.addEventListener("click", () => {
        menu.classList.toggle("active");

        const isOpen = menu.classList.contains("active");

        button.innerHTML = isOpen ? "&times;" : "☰";
        button.setAttribute("aria-expanded", isOpen);
    });

    menu.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            menu.classList.remove("active");
            button.innerHTML = "☰";
            button.setAttribute("aria-expanded", "false");
        });
    });
});


/* =================================
   NAVBAR DROPDOWN
================================= */

document.addEventListener("DOMContentLoaded", () => {
    const dropdown = document.querySelector(".nav-dropdown");
    const toggle = document.querySelector(".dropdown-toggle");

    if (!dropdown || !toggle) return;

    // Buka dan tutup dropdown
    toggle.addEventListener("click", () => {
        const isOpen = dropdown.classList.toggle("open");
        toggle.setAttribute("aria-expanded", isOpen);
    });

    // Tutup jika klik di luar dropdown
    document.addEventListener("click", (event) => {
        if (!dropdown.contains(event.target)) {
            dropdown.classList.remove("open");
            toggle.setAttribute("aria-expanded", "false");
        }
    });

    // Tutup dengan tombol Escape
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            dropdown.classList.remove("open");
            toggle.setAttribute("aria-expanded", "false");
        }
    });

    // Tutup setelah memilih menu
    dropdown.querySelectorAll(".dropdown-menu a").forEach(link => {
        link.addEventListener("click", () => {
            dropdown.classList.remove("open");
            toggle.setAttribute("aria-expanded", "false");
        });
    });
});

// IMAGE LIGHTBOX
const lightbox = document.getElementById("imageLightbox");
const lightboxImage = document.getElementById("lightboxImage");
const closeLightbox = document.getElementById("lightboxClose");

document.querySelectorAll(".zoomable-image").forEach(image => {
    image.addEventListener("click", function () {
        lightboxImage.src = this.src;
        lightboxImage.alt = this.alt;
        lightbox.classList.add("active");
    });
});

closeLightbox.addEventListener("click", function () {
    lightbox.classList.remove("active");
});

lightbox.addEventListener("click", function (event) {
    if (event.target === lightbox) {
        lightbox.classList.remove("active");
    }
});

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        lightbox.classList.remove("active");
    }
});
