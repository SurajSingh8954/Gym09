const form = document.getElementById("gymForm");
const popup = document.getElementById("popup");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    popup.style.display = "flex";

    setTimeout(() => {
        popup.style.display = "none";
        form.reset();
    }, 3000);

});