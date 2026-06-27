const container = document.querySelector(".container");

document.querySelector(".register-btn")
    .addEventListener("click", () => {
        container.classList.add("active");
    });

document.querySelector(".login-btn")
    .addEventListener("click", () => {
        container.classList.remove("active");
    });

const forms = document.querySelectorAll("form");

forms.forEach(form => {
    form.addEventListener("submit", (e) => {

        e.preventDefault();

        const btn = form.querySelector(".btn");

        btn.innerText = "Success ✓";
        btn.style.background = "#00c853";

        setTimeout(() => {
            btn.innerText = form.classList.contains("register")
                ? "Create Account"
                : "Login";
            btn.style.background = "#ff4d00";
        }, 2000);
    });
});