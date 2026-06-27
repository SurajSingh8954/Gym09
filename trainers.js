const cards = document.querySelectorAll(".trainer-card");

window.addEventListener("load", () => {

    cards.forEach((card, index) => {

        setTimeout(() => {

            card.classList.add("show");

        }, index * 300);

    });

});

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transition = "0.4s";

    });

});