const cards = document.querySelectorAll(".card");

window.addEventListener("load", () => {

    cards.forEach((card, index) => {

        setTimeout(() => {
            card.classList.add("show");
        }, index * 300);

    });

});

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        button.innerText = "Welcome!";
        button.style.background = "#00c853";

        setTimeout(() => {
            button.innerText = "Join Now";
            button.style.background = "#ff4d00";
        }, 2000);

    });

});