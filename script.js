const button = document.querySelector(".button-submit");

const form = document.querySelector(".formulary");

form.addEventListener("submit", (e) => { 
    e.preventDefault();
    const email = document.querySelector("#email-to-newsletters");
    const verifyEmail = document.querySelector("#has-error");
    if (!email.value)
    {
        verifyEmail.style.display = "flex";
        email.classList.add("has-error")
     }
})