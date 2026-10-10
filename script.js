
const projectModal = document.getElementById("projectModal");

const modalVideoGrid = document.getElementById("modalVideoGrid");

document.querySelectorAll(".view-project").forEach(button => {

    button.addEventListener("click", function () {

        const title = this.dataset.title;
        const description = this.dataset.description;

        const videoIds = this.dataset.videos
            .split(",")
            .map(id => id.trim())
            .filter(id => id !== "");

        modalTitle.textContent = title;
        modalDescription.textContent = description;

        modalVideoGrid.innerHTML = "";

        videoIds.forEach((videoId, index) => {

            const video = document.createElement("div");

            video.className = "modal-video";

           video.innerHTML = `
    <div class="modal-video-frame">
        <iframe
            src="https://drive.google.com/file/d/${videoId}/preview"
            allow="autoplay"
            allowfullscreen>
        </iframe>
    </div>

    <h3>Rigging Video ${index + 1}</h3>
`;

            modalVideoGrid.appendChild(video);

        });

        projectModal.classList.add("active");

        document.body.style.overflow = "hidden";

    });

});




/* =========================================
   MOBILE MENU
========================================= */

const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

menuButton.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


/* Close mobile menu when clicking a link */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


/* =========================================
   PROJECT MODAL
========================================= */

const modal = document.getElementById("projectModal");

const modalTitle = document.getElementById("modalTitle");

const modalDescription =
    document.getElementById("modalDescription");

const modalClose =
    document.getElementById("modalClose");


document.querySelectorAll(".view-project").forEach(button => {

    button.addEventListener("click", (event) => {

        event.stopPropagation();

        const title =
            button.getAttribute("data-title");

        const description =
            button.getAttribute("data-description");

        modalTitle.textContent = title;

        modalDescription.textContent = description;

        modal.classList.add("active");

    });

});


/* Close modal */

modalClose.addEventListener("click", () => {

    modal.classList.remove("active");

});


/* Close modal when clicking outside */

modal.addEventListener("click", (event) => {

    if (event.target === modal) {

        modal.classList.remove("active");

    }

});


/* Close modal with ESC */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        modal.classList.remove("active");

    }

});


/* =========================================
   CURRENT YEAR
========================================= */

document.getElementById("year").textContent =
    new Date().getFullYear();


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements =
    document.querySelectorAll(
        ".project-card, .skill, .reel-card, .about-grid"
    );


const observer =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                }

            });

        },
        {
            threshold: 0.1
        }
    );


revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform = "translateY(30px)";

    element.style.transition =
        "opacity 0.7s ease, transform 0.7s ease";

    observer.observe(element);

});

document.querySelectorAll('.reel-video-container').forEach(container => {
    container.addEventListener('contextmenu', function (e) {
        e.preventDefault();
    });
});

document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && projectModal.classList.contains("active")) {
        closeProjectModal();
    }
});