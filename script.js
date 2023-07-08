const button = document.querySelector(".button-submit");
const form = document.querySelector(".formulary");
const validRegex = /^[\w-_.]+@[\w-_.]+\.[\w]{2,}/gi;
const email = document.querySelector("#email-to-newsletters");
const verifyEmail = document.querySelector("#has-error");


const title = `Thanks for Subscribing`
const message = `A confirmation email has sent to ${email.value}. Please open it an click the button inside to confirm your subscription`;
const  icon = `<svg class="icon-success" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><defs><linearGradient id="a" x1="100%" x2="0%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FF6A3A"/><stop offset="100%" stop-color="#FF527B"/></linearGradient></defs><g fill="none"><circle cx="32" cy="32" r="32" fill="url(#a)"/><path stroke="#FFF" stroke-width="4" d="m18.286 34.686 8.334 7.98 19.094-18.285"/></g></svg>`;


class SuccessWindow
{
    constructor(title,message, icon){
        this.icon = icon;
        this.title = title;
        this.message = message;
}
}

const successMessage = document.querySelector(".advise-message");
const subscriptionSection = document.querySelector(".news-subscribtion-container");
const divRefill = new SuccessWindow(title, message, icon);

successMessage.innerHTML = `
<div class="svg-container">${divRefill.icon}</div>
<h2 class ="window-title">${divRefill.title}</h2>
<p class = "confirmation-message">${divRefill.message}</p>
<button class="button-dismiss">Dismiss Message</button>`;




// Listener do Submit para preventDefault() e validar

    form.addEventListener("submit", (e) => {
        e.preventDefault();
    })

button.addEventListener("click", () => { 
    
    if (!email.value || validRegex.test(email.value) === false) {
        verifyEmail.style.display = "flex";
        email.classList.add("has-error");
        console.log("Testando")
    }
    else {
    
        alert("Email Validated with succes");
        verifyEmail.style.display = "none";
        email.classList.remove("has-error");
        subscriptionSection.style.display = "none";
        subscriptionSection.style.userSelect = "none";
        successMessage.style.display = "flex";
    }
})
email.addEventListener("input", ()=>{

    verifyEmail.style.display = "none";
    email.classList.remove("has-error");

})
const buttonDismiss = document.querySelector(".button-dismiss");

buttonDismiss.addEventListener("click", () => { 

    subscriptionSection.style.display = "flex";
    subscriptionSection.style.pointerEvents = "all";
    subscriptionSection.style.userSelect = "none";
    successMessage.style.display = "none";
})