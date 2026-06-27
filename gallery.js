const galleryItems = document.querySelectorAll(".gallery-item");

window.addEventListener("load", () => {

    galleryItems.forEach((item, index) => {

        setTimeout(() => {

            item.classList.add("show");

        }, index * 200);

    });

});

const images = document.querySelectorAll(".gallery-item img");
const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const closeBtn = document.querySelector(".close");

images.forEach(img => {

    img.addEventListener("click", () => {

        lightbox.style.display = "flex";
        lightboxImg.src = img.src;

    });

});

closeBtn.addEventListener("click", () => {

    lightbox.style.display = "none";

});

lightbox.addEventListener("click", (e) => {

    if (e.target === lightbox) {

        lightbox.style.display = "none";

    }

});